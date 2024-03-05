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

// Query created to get all users from the database
const getUsers= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM Users`)
    return result
}

// Query created to get a single user from the databse
const getUser= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM Users
    WHERE id = ?`,[id])
    return result
}

// Query created to add a new user to the database.
const addUser= async(userID, firstName, lastname, emailAdd, userPass)=>{
    const [user] = await pool.query(`
        INSERT INTO Users((userID, firstName, lastName, emailAdd, userPass) VALUES (?,?,?,?,?)
    `,[userID, firstName, lastname, emailAdd, userPass])
    return getUsers(user.InsertId)
}

// Query created to delete users from the database.
const deleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM Users
        WHERE id = ?
    `,[id])
    return getUsers(user.deleteId)
} 

// Query created to edit information of users in the database.
const editUser = async(userID, firstName, lastname, emailAdd, userPass,id)=>{
    await pool.query(`
        UPDATE Users
        SET userID = ?, firstName = ?, lastname = ?, emailAdd = ?, userPass=?
        WHERE id = ?
    `,[userID, firstName, lastname, emailAdd, userPass, id])
    return getUsers()
}

// exporting all queries to be imported and used in other files.
export {getUsers, getUser, addUser, editUser, deleteUser}