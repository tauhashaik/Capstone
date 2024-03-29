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
    FROM Flights
    WHERE flightID = ?`,[id])
    return result
}

// Query created to add a new Flight to the database.
const addFlight= async(flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4)=>{
    const [user] = await pool.query(`
        INSERT INTO Flights(flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4) VALUES (?,?,?,?,?,?,?,?)
    `,[flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4])
    return getFlights(user.InsertId)
}

// Query created to delete Flights from the database.
const deleteFlight = async(id)=>{
    const [flight] = await pool.query(`
        DELETE FROM Flights
        WHERE flightID = ?
    `,[id])
    return getFlights(flight.deleteId)
} 

// Query created to edit information of Flights in the database.
const editFlight = async(flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4,flightID)=>{
    await pool.query(`
        UPDATE Flights
        SET flightName = ?, flightDesc = ?, seatsAvail = ?, flightPrice=?, flightUrl=?, flightUrl2=?, flightUrl3=?, flightUrl4=?
        WHERE flightID = ?
    `,[flightName, flightDesc, seatsAvail, flightPrice, flightUrl, flightUrl2, flightUrl3, flightUrl4,flightID])
    return getFlights()
}


export {getFlights, getFlight, addFlight, deleteFlight, editFlight}