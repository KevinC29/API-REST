//const { v4: uuid } = require("uuid");
//import { v4 as uuidv4 } from 'uuid';
import{ obtenerSDocentes } from '../services/docenteService.js';
    // obtenerSDocente,
    // crearSDocente,
    // modificarSDocente,
    // eliminarSDocente,
 
//const docenteService = require("../services/docenteService");
import { pool } from "../database/db.js";
//const { pool } = require("../database/db");


export const obtenerCDocentes = async (req, res) => {
    //const { id_docente } = req.query;
    try {
        const [rows] = await pool.query("SELECT * FROM docente");
        console.log(res.json(rows));
        console.log(rows[0]);
        //res.json(rows);
        const todosDocentes =  obtenerSDocentes(res.json(rows));
        
        res.send({ status: "OK", data: todosDocentes });
    } catch (error) {
        res.status(error?.status || 500);
        res.send({ status: "FAILED", data: { error: error?.message || error } });
    }
};


export const obtenerCDocente = (req, res) => {
};

export const crearCDocente = (req, res) => {
};

export const modificarCDocente = (req, res) => {
};

export const eliminarCDocente = (req, res) => {
};