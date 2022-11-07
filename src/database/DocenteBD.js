// const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");
//const pool = require("./db");

export const obtenerMDocentes = (todosDocentes) => {
  try {
    if (todosDocentes.lenght == 0) {
      return console.log("No existen Docentes Registrados");
    }
    let docentes = todosDocentes;
    return docentes; //jQuery.parseJSON(rows);
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const obtenerMDocente = (datos_docente, id) => {
  try {

    //const validar = datos_docente.find((datos_docente) => datos_docente.id_docente === id);
    const validar = datos_docente[0].id_docente === id;
    //console.log("validacioooooooooon", validar);

    if (!validar) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${id_docente}'`,
      };
    }

    return datos_docente;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }

};

export const crearMDocente = (nuevoDocente, docentes) => {
  try {
    ///ARREGLAR LA CREACION DE USUARIOS
    
    const isAlreadyAdded = docentes.findIndex((docente) => docente.cedula === nuevoDocente) > -1;
    console.log(typeof isAlreadyAdded);

    if (isAlreadyAdded) {
       throw {
        
        status: 400,
        message: `Workout with the name '${nuevoDocente.name}' already exists`,
      };
      return isAlreadyAdded;
    }

    return nuevoDocente;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

export const modificarMDocente = (docente, changes) => {

};

export const eliminarMDocente = (docente) => {

  try {
    const validar = docente.insertId == 0 ? true : false;

    if (!validar) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Existio un error al eliminar" },
      });
      return;
    } else {
      return console.log("Docente eliminado correctamente");
    }

  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
