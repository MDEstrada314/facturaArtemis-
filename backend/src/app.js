import express from "express";
import categoraisRouters from "./routers/cateogirias.routers.js"; //cambiamos el nombre de rotuters
import cors from "cors";

const app = express();

app.set("port",4000)

//middlaware funcines en medio
app.use(express.json())
app.use(cors())
//rotas

app.use("/api/categorias",categoraisRouters);



export default app;


