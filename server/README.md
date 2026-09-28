# Server

The backend API for the apparel shop. Express + TypeScript, SQLite database, no raw SQL (Sequelize ORM instead).

## Stack

- **Express 5** — the web server / routing
- **Sequelize** — talks to the SQLite database (`config/database.db`)
- **Zod** — validates every request body and query string
- **JWT + bcrypt** — admin login and route protection
- **express-rate-limit** — basic abuse protection

## Folder structure

```
src/
  config/      env vars, dummy seed data, the seed script
  models/      one file per DB table (Product, Brand, Category, ProductImage, AdminUser)
  types/       every zod schema (validation rules + the TS types they produce)
  services/    business rules, e.g. how product filters turn into a DB query
  utilities/   generic helpers, not tied to this project's domain (validate, paginate, parseId)
  middleware/  the admin-auth check, and a catch-all error handler
  routes/      one file per resource - wires URLs to handler functions
  server.ts    starts the whole thing
```

## How a request flows

Example: `GET /api/products?gender=Men's&limit=10`

1. **Global middleware runs first** (set up in `server.ts`): parses the JSON body, checks the rate limit.
2. **Express matches the route** — `/api/products` → the handler in `routes/products.ts`.
3. **The query gets validated** against a zod schema. Bad input (e.g. `limit=abc`) stops here with a `400` — the handler code never even runs.
4. **The filters get turned into a database query** (`services/productFilters.ts`) — `gender=Men's` becomes "gender is Men's or Unisex", price ranges, brand/category ids, etc.
5. **The query runs, paginated** (`utilities/pagination.ts`) — turns `page`/`limit` into SQL's `LIMIT`/`OFFSET`, returns `{ data, total, page, limit }`.
6. **Response goes out as JSON.**

Admin routes (anything under `/api/admin/...` except login) add one extra step before the handler: `middleware/auth.ts` checks for a valid `Authorization: Bearer <token>` header and rejects with `401` if it's missing or invalid.

## Authentication

- `POST /api/admin/auth/login` checks a username/password against the `AdminUser` table (password compared with bcrypt) and, if valid, returns a signed JWT good for 24 hours.
- Every other admin route requires that token in the `Authorization` header.
- There's no server-side session — the server just re-checks the token's signature on every request. Nothing is stored, so there's no way to "log out" a token early; it just expires after 24h.

## Endpoints

**Public**
| Method | Path | Notes |
|---|---|---|
| GET | `/api/products` | paginated, filterable by `brandId`, `categoryId`, `gender`, `minPrice`, `maxPrice`, and free-text `q` — all combinable |
| GET | `/api/products/:id` | one product |
| GET | `/api/products/search?q=` | same as `/api/products`, just a more explicit name |
| GET | `/api/brands` | all brands |
| GET | `/api/categories` | all categories |

**Admin** (needs `Authorization: Bearer <token>`)
| Method | Path |
|---|---|
| POST | `/api/admin/auth/login` |
| POST / PUT / DELETE | `/api/admin/products[/:id]` |
| POST / PUT / DELETE | `/api/admin/brands[/:id]` |
| POST / PUT / DELETE | `/api/admin/categories[/:id]` |

## Running it

```bash
cd server
npm install

cp .env.example .env      # then fill in JWT_SECRET and PORT

npm run seed               # populates the SQLite DB with dummy data (safe to re-run)
npm run dev                 # dev server with auto-reload, http://localhost:8000
```

For a production-style run instead of `npm run dev`:

```bash
npm run build   # compiles to dist/
npm run watch   # runs the compiled server (despite the name, it doesn't watch for changes)
```

## Good to know

- **Pagination** defaults to 48 items per page (`?page=&limit=` to change it).
- **Rate limit** is 300 requests per 15 minutes, per IP, across the whole API.
- The database file lives at `server/config/database.db` and is gitignored — it's local dummy data, not something to commit.
