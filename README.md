# Angular Apparel

An online clothing store. It is made of two separate projects:

- **`client/`**: the web shop, built with Angular 22 and Tailwind CSS v4.
- **`server/`**: a REST API, built with Express 5, Sequelize and SQLite and written in TypeScript.

Each project has its own `package.json` and `node_modules`, and each is installed and started on its own.

## Features

- A product listing where you can filter by gender, category, brand, price and discount, search, sort and move between pages. Filters are stored in the URL, so a filtered view can be shared as a link.
- A product page with an image gallery and a carousel of related products.
- A shopping cart that is saved in the browser (localStorage), plus a placeholder checkout page.
- A desktop hover menu and a mobile drill-down menu. Both are built from the brands and categories in the database.
- Admin pages for listing, creating and deleting products (`/admin/products`).

## Requirements

- Node.js 22 or newer, with npm

## Getting started

### 1. Start the server

```bash
cd server
npm install
cp .env.example .env    # then set JWT_SECRET to a random string
npm run seed            # creates and fills src/config/database.db
npm run dev             # http://localhost:8000
```

Running `npm run seed` again is safe, because existing rows are skipped. It also creates an admin user with username **`admin`** and password **`admin`**.

### 2. Start the client

In a second terminal:

```bash
cd client
npm install
npm start               # http://localhost:4200
```

Open http://localhost:4200. The dev server forwards every `/api` request to `http://localhost:8000` (see `client/proxy.conf.json`), so the server must be running as well.

## Scripts

| Project  | Command         | What it does                                  |
| -------- | --------------- | --------------------------------------------- |
| `server` | `npm run dev`   | Dev server that reloads on changes (`tsx watch`) |
| `server` | `npm run build` | Compile TypeScript to `dist/`                  |
| `server` | `npm start`     | Run the compiled build                         |
| `server` | `npm run seed`  | Create the tables and add sample data          |
| `client` | `npm start`     | Angular dev server                             |
| `client` | `npm run build` | Production build to `client/dist/`             |
| `client` | `npm run watch` | Development build in watch mode                |

## API overview

All routes start with `/api`. Routes under `/api/admin/...` are for managing data.

| Method | Route                           | Description                                  |
| ------ | ------------------------------- | -------------------------------------------- |
| GET    | `/api/products`                 | List products with filters and pages (see below) |
| GET    | `/api/products/:id`             | A single product                             |
| GET    | `/api/brands`                   | All brands                                   |
| GET    | `/api/categories`               | All categories                               |
| POST   | `/api/admin/auth/login`         | Log in and get a JWT that is valid for 24 hours |
| POST   | `/api/admin/products`           | Create a product                             |
| PUT    | `/api/admin/products/:id`       | Update a product (only the fields sent are changed) |
| DELETE | `/api/admin/products/:id`       | Delete a product                             |
| POST/PUT/DELETE | `/api/admin/brands`    | Manage brands (the id goes in the JSON body)       |
| POST/PUT/DELETE | `/api/admin/categories` | Manage categories (the id goes in the JSON body)  |

The brand and category admin routes require an `Authorization: Bearer <token>` header.

**Query parameters for `GET /api/products`:** `q` (search), `gender`, `category` and `brand` (comma-separated names, e.g. `brand=nike,adidas`), `minPrice`, `maxPrice`, `discount=true`, `sort` (`newest`, `priceAsc` or `priceDesc`), `page` and `limit` (at most 500, default 48).

The response looks like this:

```json
{
  "pagination": { "page": 1, "limit": 48, "total": 120, "totalPages": 3 },
  "data": [{ "id": 1, "title": "...", "brand": "nike", "category": "shoes", "images": ["..."] }]
}
```

`server/testApi.http` has a ready-made request for every endpoint, including the error cases. It works with the VS Code REST Client extension and with JetBrains HTTP Client.

## Project structure

```
client/src/app/
  pages/        route components (home, products, product-details, checkout, admin)
  components/   reusable UI (navbar, menus, product card and grid, cart, ...)
  services/     API access and shared state (products, cart, menu, brands, ...)
  types/        TypeScript interfaces
  utilities/    helpers such as product URL slugs

server/src/
  server.ts     sets up the Express app and middleware and registers the routes
  routes/       route handlers for each resource
  models/       Sequelize models and their associations
  middleware/   JWT auth and the central error handler
  types/        Zod validation schemas and types
  utilities/    validation and parsing helpers
  config/       environment variables, seed script and sample data
```

## Notes

- There are no migrations. The schema is created with `sequelize.sync()`, so after you change a model you need to delete `server/src/config/database.db` and run `npm run seed` again.
- `server/.env` and the database file are not committed to git.
