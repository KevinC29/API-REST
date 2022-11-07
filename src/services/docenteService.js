//import {pool} from '../db/db.js'
//const docente = require("../database/Docente");
import { obtenerMDocentes, obtenerMDocente, crearMDocente, modificarMDocente, eliminarMDocente } from '../database/DocenteBD.js';
import { v4 as uuidv4 } from 'uuid';



export const obtenerSDocentes = (todosDocentes) => {
  try {
    const todoslosDocentes = obtenerMDocentes(todosDocentes);
    return todoslosDocentes;
  } catch (error) {
    throw error;
  }
};

export const obtenerSDocente = (datos_docente, id_docente) => {
  try {
    const docente = obtenerMDocente(datos_docente, id_docente);
    return docente;
  } catch (error) {
    throw error;
  }
};

export const crearSDocente = (nuevoDocente, docentes) => {

  try {
    const crearDocente = crearMDocente(nuevoDocente, docentes);
    return crearDocente;
  } catch (error) {
    throw error;
  }
};

export const modificarSDocente = (id_docente, cambios) => {
};

export const eliminarSDocente = (docente) => {
  try {
    eliminarMDocente(docente);
  } catch (error) {
    throw error;
  }
};

