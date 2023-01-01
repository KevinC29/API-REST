import { obtenerMLogin } from '../config/LoginBD.js';


export const obtenerSLogin = (id_estudiante) => {
  try {
    const estudiante = obtenerMLogin(id_estudiante);
    return estudiante;
  } catch (error) {
    throw error;
  }
};