import { Product, Category, Brand } from "../models/index.js";
import { Op, WhereOptions, col, where as sequelizeWhere } from "sequelize";
import type { Request, Response, Router } from "express";
import { productQuerySchema } from "../types/schemas.js";
import { validate } from "../utilities/validation.js";

async function getProducts(req: Request, res: Response): Promise<void> {
  const query = validate(productQuerySchema, req.query);

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

  // Binder ihop alla filter med and-operatorn för att få en
  // fullständig where-clause.
  const where: WhereOptions = filters.length ? { [Op.and]: filters } : {};

  // Kör findAll mot products-tabellen med where-clausen som argument.
  const products = await Product.findAll({
    where,
    include: [
      { model: Category, as: "category", attributes: ["name"] },
      { model: Brand, as: "brand", attributes: ["name"] },
    ],
    logging: console.log,
  });

  res.json(products);
}

export function registerProductRoutes(app: Router) {
  app.get("/api/products", getProducts);
}
