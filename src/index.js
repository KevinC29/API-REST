import express from "express";
import  apicache  from "apicache";
import { routerD } from "./routes/docenteRoutes.js";
import { routerE } from "./routes/estudianteRoutes.js";
import { PORT } from "./config/config.js";


const app = express();
const cache = apicache.middleware;

app.use(express.json());
app.use(cache("2 minutes"));

app.use("/api/v1", routerD);
app.use("/api/v1", routerE);

app.listen(PORT);
console.log(`Server running on port '${PORT}'`);
