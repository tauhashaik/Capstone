import mysql from 'mysql2'
import {config} from 'dotenv'
config()

// connecting the database in mysql with the backend.
const pool=mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
}).promise()

export {pool}