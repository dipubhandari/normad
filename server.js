import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connection from './database/connection.js'
dotenv.config()
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import userRoute from './routes/route.js'

const app = express()
const server = http.createServer(app)
app.get('/', () => {
    res.send('The Nomad Server is ready to go.')
})
app.use(cors())
app.use(express.json());
// Increase the maximum allowed request size to 50mb
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// router
app.use('/', userRoute)
// connection
connection(process.env.MONGO_URL)


// listen the app
server.listen(process.env.port, () => { console.log(`The app is running in port`) })
