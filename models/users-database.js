import {pool} from '../config/config.js'
import bcrypt from 'bcrypt'

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
    WHERE userID = ?`,[id])
    return result
}

// Query created to add a new user to the database.
const addUser= async(firstName, lastName, userRole, emailAdd, userPass)=>{
    const [user] = await pool.query(`
        INSERT INTO Users(firstName, lastName, userRole, emailAdd, userPass) VALUES (?,?,?,?,?)
    `,[firstName, lastName, userRole, emailAdd, userPass])
    return getUsers(user.InsertId)
}

// Query created to delete users from the database.
const deleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM Users
        WHERE userID= ?
    `,[id])
    return getUsers(user.deleteId)
} 

const editUser = async(firstName, lastName, userRole, emailAdd, userPass, userID,user)=>{
    if (userPass){
        bcrypt.hash(userPass, 10 ,async(err, hash)=>{
            if(err) throw err;
            await pool.query(`
                UPDATE Users
                SET firstName = ?, lastName = ?, userRole = ?, emailAdd = ?, userPass=?
                WHERE userID = ?
            `,[firstName, lastName, userRole, emailAdd, hash, userID])
        })
    }else{
        
        userPass ? userPass= userPass: {userPass}=user
        console.log(firstName);
        await pool.query(`
        UPDATE Users
        SET firstName = ?, lastName = ?, userRole = ?, emailAdd = ?, userPass=?
        WHERE userID = ?
        `,[firstName, lastName, userRole, emailAdd, userPass,userID])
    }
    return getUsers();
}

const verifyPass = async(emailAdd)=>{
    const [[{userPass}]] = await pool.query(`
        SELECT userPass FROM Users WHERE emailAdd = ?`, [emailAdd])
        return userPass
}

// exporting all queries to be imported and used in other files.
export {getUsers, getUser, addUser, editUser, deleteUser, verifyPass}