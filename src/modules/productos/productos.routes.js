import express from "express";
import { getProductos, insertProducto } from "./productos.controller.js";

const router = express.Router();

router.get("/", getProductos);
router.get("/insert", insertProducto);


export default router;