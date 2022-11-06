//import {pool} from '../db/db.js'
//const docente = require("../database/Docente");
import{ obtenerMDocentes }  from '../database/docente.js';
  // obtenerMDocente,
  // crearMDocente,
  // modificarMDocente,
  // eliminarMDocente,



export const obtenerSDocentes = (todosDocentes) => {
  try {
      const todosDocentes = obtenerMDocentes(todosDocentes);
      return todosDocentes;
    } catch (error) {
      throw error;
    }
};

export const obtenerSDocente = (docenteId) => {
};

export const crearSDocente = (nuevoDocente) => {
};

export const modificarSDocente = (docenteId, cambios) => {
};

export const eliminarSDocente = (docenteId) => {
};

