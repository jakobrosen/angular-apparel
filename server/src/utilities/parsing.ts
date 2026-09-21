import {
  Op,
  Order,
  OrderItem,
  WhereOptions,
  col,
  where as sequelizeWhere,
} from "sequelize";
import z from "zod";
import { productQuerySchema, type Sort } from "../types/schemas.js";
import { Product } from "../models/Product.js";
import type { RawProduct, ParsedProduct } from "../types/Product.js";
import { Request } from "express";
import { HttpError } from "../middleware/errorHandler.js";

/**
 * Parsear eventuella filter från en query-parameter och returnerar
 * en färdig where-clause.
 */
export function parseFilters(query: z.infer<typeof productQuerySchema>) {
  // Skapar en tom array för att lagra query conditions dynamiskt.
  const filters: WhereOptions[] = [];

  // Matchar ett sökord mot antingen produktnamn, märke, eller kategori
  if (query.q) {
    filters.push({
      [Op.or]: [
        { title: { [Op.like]: `%${query.q}%` } },
        { "$category.name$": { [Op.like]: `%${query.q}%` } },
        { "$brand.name$": { [Op.like]: `%${query.q}%` } },
      ],
    });
  }

  // Fortsätter bygga upp filters-arrayen.
  if (query.category) {
    filters.push({ "$category.name$": { [Op.in]: query.category } });
  }
  if (query.brand) {
    filters.push({ "$brand.name$": { [Op.in]: query.brand } });
  }
  if (query.gender) {
    filters.push({ gender: { [Op.in]: query.gender } });
  }
  if (query.minPrice != null) {
    filters.push({ price: { [Op.gte]: query.minPrice } });
  }
  if (query.maxPrice != null) {
    filters.push({ price: { [Op.lte]: query.maxPrice } });
  }
  if (query.discount) {
    filters.push(sequelizeWhere(col("price"), Op.lte, col("prevPrice")));
  }

  // Binder ihop alla filter med and-operatorn och returnerar
  // en färdig where-clause.
  return filters.length ? { [Op.and]: filters } : {};
}

// Sequelize tar order som en array av arrayer, en per sorteringsnivå.
// Att slå upp i en färdig map istället för att bygga order av query-
// strängen gör att användaren aldrig kan skicka in egen SQL.
const ORDER_BY: Record<Sort, OrderItem[]> = {
  newest: [["createdAt", "DESC"]],
  priceAsc: [["price", "ASC"]],
  priceDesc: [["price", "DESC"]],
};

/**
 * Översätter query-parametern "sort" till en order-clause.
 */
export function parseOrder(query: z.infer<typeof productQuerySchema>): Order {
  // Utan sort sorteras produkterna på id, alltså i den ordning de
  // lades in i databasen.
  if (!query.sort) return [["id", "ASC"]];

  // id som sista nivå gör ordningen entydig. Utan den kan samma produkt
  // dyka upp på flera sidor, eftersom alla seedade produkter delar createdAt.
  return [...ORDER_BY[query.sort], ["id", "ASC"]];
}

/**
 * Tar en produkt som hämtats från databasen i GET products,
 * och parsear den till ett mer användbart format för frontenden.
 */
export function parseProduct(product: Product): ParsedProduct {
  const { category, brand, images, ...rest } = product.get({
    plain: true,
  }) as RawProduct;
  return {
    ...rest,
    category: category?.name ?? null,
    brand: brand?.name ?? null,
    images: images?.map((image) => image.url) ?? [],
  };
}

/**
 * Parsear ett ID från req.params.id och kastar ett HttpError
 * med ett beskrivande fel om något inte stämmer.
 */
export function parseId(req: Request): number {
  const id = req.params.id;
  const ID_REGEX = /^[1-9]\d*$/;

  if (typeof id !== "string") {
    throw new HttpError(400, "No ID included");
  }
  if (!ID_REGEX.test(id)) {
    throw new HttpError(400, "ID must be a positive integer");
  }

  const parsedId = Number(id);
  if (!Number.isSafeInteger(parsedId)) {
    throw new HttpError(400, "ID is too large");
  }

  return parsedId;
}
