import express from "express";
//const v1docenteRoutes = require("./routes/docenteRoutes");
import { pool } from "./database/db.js";
import { indexRoutes } from "./routes/docenteRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;



// function getData(data){
//     const datos = data;
//     return new Promise ((resolve, reject) =>{
//         if (datos.length === 0) {
//             reject(new Error('Data is empty'));
//         }
//         setTimeout(()=>{
//             resolve(data);
//         }, 2000)
//     })
// }

// async function fetchingData(){
//     const data = await getData();
//     console.log("ESTOY EN EL" + data);
// }

 app.get('/ping', async (req, res) => {
     const [result]= await pool.query('SELECT "Hola mundo" as RESULT');
     console.log(result[0]);
     res.json(result[0]);
  
 });


//app.use("/api/v1", indexRoutes);





app.use(express.json());
app.listen(PORT);
console.log('Server running on port 2000');
