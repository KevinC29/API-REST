import express from "express";
import { routerD } from "./routes/docenteRoutes.js";
import { routerE } from "./routes/estudianteRoutes.js";

import { PORT } from "./database/config.js";
const app = express();

app.use(express.json());

app.use("/api/v1", routerD);
app.use("/api/v1", routerE);

app.listen(PORT);
console.log(`Server running on port '${PORT}'`);
