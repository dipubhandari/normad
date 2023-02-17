import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connection from './database/connection.js'
dotenv.config()
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'


const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json());
// Increase the maximum allowed request size to 50mb
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// router


connection(process.env.MONGO_URL)
// app.use('/',categoryRouter)


// listen the app
server.listen(process.env.port, () => { console.log(`The app is running in port`) })
