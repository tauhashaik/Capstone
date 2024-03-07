import {pool} from '../config/config.js'

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
        INSERT INTO Flights((flightID, flightName, flightDesc, seatsAvail, flightPrice) VALUES (?,?,?,?,?)
    `,[flightID, flightName, flightDesc, seatsAvail, flightPrice])
    return getFlights(user.InsertId)
}

// Query created to delete Flights from the database.
const deleteFlight = async(id)=>{
    const [flight] = await pool.query(`
        DELETE FROM Flights
        WHERE id = ?
    `,[id])
    return getFlights(flight.deleteId)
} 

// Query created to edit information of Flights in the database.
const editFlight = async(flightID, flightName, flightDesc, seatsAvail, flightPrice,id)=>{
    await pool.query(`
        UPDATE Flights
        SET flightID = ?, flightName = ?, flightDesc = ?, seatsAvail = ?, flightPrice=?
        WHERE id = ?
    `,[flightID, flightName, flightDesc, seatsAvail, flightPrice, id])
    return getFlights()
}


export {getFlights, getFlight, addFlight, deleteFlight, editFlight}