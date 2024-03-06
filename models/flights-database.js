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

// Query created to get all Flights from the database
const getFlights= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM Flights`)
    return result
}

// Query created to get a single flight from the databse
const getFlight= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM Flight
    WHERE id = ?`,[id])
    return result
}

// Query created to add a new Flight to the database.
const addFlight= async(flightID, flightName, flightDesc, seatsAvail, flightPrice)=>{
    const [user] = await pool.query(`
        INSERT INTO Users((flightID, flightName, flightDesc, seatsAvail, flightPrice) VALUES (?,?,?,?,?)
    `,[flightID, flightName, flightDesc, seatsAvail, flightPrice])
    return getFlights(user.InsertId)
}

// Query created to delete users from the database.
const deleteFlight = async(id)=>{
    const [flight] = await pool.query(`
        DELETE FROM Users
        WHERE id = ?
    `,[id])
    return getFlights(flight.deleteId)
} 

// Query created to edit information of users in the database.
const editFlight = async(flightID, flightName, flightDesc, seatsAvail, flightPrice,id)=>{
    await pool.query(`
        UPDATE Users
        SET flightID = ?, flightName = ?, flightDesc = ?, seatsAvail = ?, flightPrice=?
        WHERE id = ?
    `,[flightID, flightName, flightDesc, seatsAvail, flightPrice, id])
    return getFlights()
}


export {getFlights, getFlight, addFlight,deleteFlight,editFlight}