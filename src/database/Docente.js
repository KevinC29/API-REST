// const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");
//const pool = require("./db");

export const obtenerMDocentes = (todosDocentes) => {
  try {
      let docentes = todosDocentes;
      console.log("DATABASEEEEEE");
      console.log(docentes);
      return docentes; //jQuery.parseJSON(rows);
  } catch (error) {
      throw { status: 500, message: error };
  }
};

export const obtenerMDocente = (workoutId) => {

};

export const crearMDocente = (newWorkout) => {
  
};

export const modificarMDocente = (workoutId, changes) => {
  
};

export const eliminarMDocente = (workoutId) => {

};
