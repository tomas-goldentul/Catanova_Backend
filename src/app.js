import express from "express"; 
import cors from "cors";
import productoRoutes from "./modules/productos/productos.routes.js";

const app = express();
const port = 3000;          

app.use(cors());                 
app.use(express.json()); 

// prefijo API
app.use("/productos", productoRoutes);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})  