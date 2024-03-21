import {pool} from '../config/config.js'

const addToCart = async(userID,flightID, quantity)=>{
    try{
        const[existingCartItem] = await pool.query(`
        SELECT * FROM  Cart WHERE userID = ? AND flightID = ?
        `,[userID,flightID]);

        if(existingCartItem.lenght > 0){
            await pool.query(`
                UPDATE Cart SET quantity = ? WHERE userID = ? AND flightID = ?
            `,[existingCartItem[0].quantity + quantity, userID, flightID]);
        }else{
            await pool.query(`
                INSERT INTO Cart (userID, flightID, quantity) VALUES (?,?,?)
            `[userID, flightID, quantity])
        }
    const [result] = await pool.query(`
        SELECT * FROM Cart WHERE userID = ?
    `,[userID]);
        return result
    }catch(error){
        throw error
    }
};

const getUserCart = async (userID)=>{
    try{
        const [result] = await pool.query(`
            SELECT c.*, f.flightName, f.flightPrice
            FROM Cart c
            INNER JOIN Flights f ON c.flightID = f.flightID
            WHERE c.userID = ?
        `,[userID])
            return result
    }catch(error){
        throw error
    }
};

const updateCartQuantity = async (userID, flightID, newQuantity)=>{
    try{
        await pool.query(`
            UPDATE Cart SET quantity = ?
            WHERE userID = ?
            AND flightID =?
        `,[newQuantity, userID, flightID])

        const [result] = await pool.query(`
            SELECT * FROM Cart WHERE userID = ?
        `,[userID])
            return result
    }catch(error){
        throw error
    }
};

const deleteFromCart = async (userID, flightID) =>{
    try{
        const [existingCartItem] = await pool.query(`
            SELECT * FROM Cart WHERE  userID = ? AND flightID = ?
        `, [userID, flightID])

        if(existingCartItem.length>0){
            if (existingCartItem[0].quantity > 1){
                await pool.query(`
                UPDATE CART SET quantity = quantity - 1 WHERE userID = ? AND flightID = ?
                `, [userID, flightID])
            }else{
                await pool.query(`
                DELETE FROM Cart WHERE userID =? AND flightID = ?
                `, [userID, flightID])
            }
        }
        const [result] = await pool.query(`
            SELECT * FROM Cart WHERE userID = ?
        `, [userID])
            return result
    }catch(error){
        throw error
    }
};

const clearUserCart = async(userID)=>{
    try{
        await pool.query(`
            DELETE FROM Cart WHERE userID = ?
        `, userID)
            return []
    }catch(error){
        throw error
    }
}

export{addToCart, getUserCart, updateCartQuantity, deleteFromCart,clearUserCart}