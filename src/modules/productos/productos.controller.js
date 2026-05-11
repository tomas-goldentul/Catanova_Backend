// modules/productos/producto.controller.js
import { getAllProductos } from "./productos.model.js";

export const listarProductos = async (req, res) => {
  try {
    const [rows] = await getAllProductos();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
};