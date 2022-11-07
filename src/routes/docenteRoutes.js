import { Router } from 'express';
import{obtenerCDocentes, obtenerCDocente, crearCDocente, modificarCDocente, eliminarCDocente } from "../controllers/docenteController.js";
//const estudianteController = require("../controllers/estudianteController");
export const router = Router();


router.get("/docentes", obtenerCDocentes);
router.get("/docentes/:id_docente", obtenerCDocente);
router.post("/docentes", crearCDocente);
router.patch("/docentes/:id_docente", modificarCDocente);
router.delete("/docentes/:id_docente", eliminarCDocente);
//   .get("/", estudianteController.obtenerDocentes)
//   .get("/:estudianteId", estudianteController.obtenerDocente)
//   .post("/", estudianteController.crearDocente)
//   .patch("/:estudianteId", estudianteController.modificarDocente)
//   .delete("/:estudianteId", estudianteController.eliminarDocente);

export default router;