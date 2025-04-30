import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from './config/Connection.js'
import routerProductos from './routes/ProductoRoute.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/api/productos',routerProductos)

app.listen(process.env.PORT, () => {
    console.log(`Conectados al puerto: ${process.env.PORT}`);
    getConnection;
})
