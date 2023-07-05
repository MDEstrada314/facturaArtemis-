import app from "./app.js";

const main = () =>{
  app.listen(app.get("port"))
  console.log(`el servidor de la compañia ajecuntadose ${app.get('port')}`);
}

main();