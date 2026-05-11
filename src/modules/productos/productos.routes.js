// modules/productos/producto.routes.js
import express from "express";
import { listarProductos } from "./productos.controller.js";

const router = express.Router();

// GET /productos
router.get("/", listarProductos);

export default router;