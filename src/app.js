import express from 'express'
import cors from 'cors'
import {pool} from './db.js'
import {PORT} from './config.js'

const app=express();
app.use(cors());

app.get('/productos',async(req,res)=>{
    const [filas] = await pool.query('SELECT * FROM productos')
    res.json(filas)                  }
    )


app.listen(PORT)
console.log("Servidor en el puerto " , PORT)
