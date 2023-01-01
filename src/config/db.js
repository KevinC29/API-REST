// const { createPool } = require('mysql2/promise');
import {createPool} from 'mysql2/promise'


// export const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',//I2DIzrjC04yzS9Tk
//     port: 3307,
//     database: 'juegoseriodb'
//  });

import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  connectionLimit : 10,
  queueLimit: 0
});