import { Router } from 'express';
import{obtenerCDocentes, obtenerCDocente, crearCDocente, modificarCDocente, eliminarCDocente } from "../controllers/docenteController.js";
//const docenteController = require("../controllers/docenteController");
//const estudianteController = require("../controllers/estudianteController");
const router = Router();


router.get("/docentes", obtenerCDocentes);
router.get("/docentes/:docenteId", obtenerCDocente);
router.post("/docentes", crearCDocente);
router.patch("/docentes/:docenteId", modificarCDocente);
router.delete("/docentes/:docenteId", eliminarCDocente);
//   .get("/", estudianteController.obtenerDocentes)
//   .get("/:estudianteId", estudianteController.obtenerDocente)
//   .post("/", estudianteController.crearDocente)
//   .patch("/:estudianteId", estudianteController.modificarDocente)
//   .delete("/:estudianteId", estudianteController.eliminarDocente);

export default router;