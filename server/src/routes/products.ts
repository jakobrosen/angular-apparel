import { Product } from "../models/index.js";
import { Op, WhereOptions } from "sequelize";
import type { Request, Response, Router } from "express";

async function getProducts(req: Request, res: Response): Promise<void> {
  const query = req.query;
  const conditions: WhereOptions[] = [];

  if (query.q) {
    conditions.push({
      [Op.or]: [
        { title: { [Op.like]: `%${query.q}%` } },
        { categoryName: { [Op.like]: `%${query.q}%` } },
        { brandName: { [Op.like]: `%${query.q}%` } },
      ],
    });
  }

  if (query.cat) conditions.push({ categoryName: query.cat });
  if (query.brand) conditions.push({ brandName: query.brand });

  if (query.gender) {
    conditions.push({
      [Op.or]: [{ gender: query.gender }, { gender: "unisex" }],
    });
  }

  const where: WhereOptions = conditions.length ? { [Op.and]: conditions } : {};

  const products = await Product.findAll({ where });

  res.json(products);
}

export function registerProductRoutes(app: Router) {
  app.get("/api/products", getProducts);
}
