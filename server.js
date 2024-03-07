import express from 'express';
import {config} from 'dotenv';
import cors from 'cors'
// import bcrypt from 'bcrypt'
import flightsRouter from './routes/flights-routes.js';
import usersRouter from'./routes/users-routes.js';
import loginRouter from './routes/login-routes.js'
import cartRouter from './routes/cart-routes.js'
import cookieParser from 'cookie-parser'
import {auth, authenticate} from './middleware/authentication.js'
// import jwt from 'jsonwebtoken'
config()

const PORT=process.env.PORT || 5000

const app=express()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}))

app.use(express.json())

app.use(express.static('views'))

app.use(cookieParser())

app.use('/flights', flightsRouter)

app.use('/users', usersRouter)

app.use('/login',auth, loginRouter)

app.use('/cart',authenticate, cartRouter)

app.listen (PORT,()=>{
    console.log(`this is listening on http://localhost:${PORT}`)
})