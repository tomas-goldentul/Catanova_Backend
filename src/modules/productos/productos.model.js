import db from "../../database/DB";

export const getAllProductos = () => {
  return db.query("SELECT * FROM productos");
};