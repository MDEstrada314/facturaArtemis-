import { Router } from "express";
import { methodHTPP as categariasControles} from "../controllers/categorias.controller.js";

const rotuters = Router();

rotuters.get("/",categariasControles.getCategorias);
rotuters.post("/",categariasControles.addCategorias);
rotuters.get("/:id",categariasControles.getCategoria);
rotuters.delete("/:id",categariasControles.deleteCategoria);
rotuters.put("/:id",categariasControles.aupdateCategorias);

export default rotuters;
