// const { createPool } = require('mysql2/promise');
import {createPool} from 'mysql2/promise'


// export const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',//I2DIzrjC04yzS9Tk
//     port: 3307,
//     database: 'juegoseriodb'
//  });

// import {
//   DB_DATABASE,
//   DB_HOST,
//   DB_PASSWORD,
//   DB_PORT,
//   DB_USER,
// } from "./config.js";


// export const DB_HOST = process.env.DB_HOST || "containers-us-west-99.railway.app";
// export const DB_USER = process.env.DB_USER || "root";
// export const DB_PASSWORD = process.env.DB_PASSWORD || "ZS8gmKTtD1BCd8sf2Aaw";
// export const DB_DATABASE = process.env.DB_DATABASE || "railway";
// export const DB_PORT = process.env.DB_PORT || 5509;


export const pool = createPool({
  host:  process.env.DB_HOST || "containers-us-west-99.railway.app",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "0Ss1bEEZxNLQOAY4nTnn",
  port: process.env.DB_PORT || 5509,
  database:  process.env.DB_DATABASE || "railway",
});