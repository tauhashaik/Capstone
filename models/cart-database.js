import {pool} from '../config/config.js'

const addToCart = async(userID,flightID)=>{
    try{
        await pool.query(`
            INSERT INTO Cart (userID, flightID)
            VALUES (?,?)
        `,[flightID,userID ])
        console.log('Flight added to the cart successfully')
    }catch(error){
        console.error('Error adding product to the cart')
        throw error;
    }
    // try{
    //     const[existingCartItem] = await pool.query(`
    //     SELECT * FROM  Cart WHERE userID = ? AND flightID = ?
    //     `,[userID,flightID]);

    //     if(existingCartItem.lenght > 0){
    //         await pool.query(`
    //             UPDATE Cart SET quantity = ? WHERE userID = ? AND flightID = ?
    //         `,[existingCartItem[0].quantity + quantity, userID, flightID]);
    //     }else{
    //         await pool.query(`
    //             INSERT INTO Cart (userID, flightID, quantity) VALUES (?,?,?)
    //         `[userID, flightID, quantity])
    //     }
    // const [result] = await pool.query(`
    //     SELECT * FROM Cart WHERE userID = ?
    // `,[userID]);
    //     return result
    // }catch(error){
    //     throw error
    // }

};

const getUserCart = async (userID)=>{
    try{
        const [result] = await pool.query(`
            SELECT cartID, Flights.flightID, Flights.flightName, Flights.flightPrice, Flights.flightDesc,Flights.flightUrl, SUM(Cart.quantity) AS quantity
            FROM Cart
            INNER JOIN Flights ON Cart.flightID = Flights.flightID
            INNER JOIN Users ON Cart.userID = Users.userID
            WHERE Cart.userID = ?
            GROUP BY Flights.flightID
        `,[userID])
            return result
    }catch(error){
        throw error
    }
};

// const updateCartQuantity = async (userID, flightID, newQuantity)=>{
//     try{
//         await pool.query(`
//             UPDATE Cart SET quantity = ?
//             WHERE userID = ?
//             AND flightID =?
//         `,[newQuantity, userID, flightID])

//         const [result] = await pool.query(`
//             SELECT * FROM Cart WHERE userID = ?
//         `,[userID])
//             return result
//     }catch(error){
//         throw error
//     }
// };

const deleteFromCart = async (cartID) =>{
    const [cart] = await pool.query(`
        DELETE FROM Cart WHERE cartID =?
    `,[cartID]
    )
    return cart
    // try{
    //     const [existingCartItem] = await pool.query(`
    //         SELECT * FROM Cart WHERE  userID = ? AND flightID = ?
    //     `, [userID, flightID])

    //     if(existingCartItem.length>0){
    //         if (existingCartItem[0].quantity > 1){
    //             await pool.query(`
    //             UPDATE CART SET quantity = quantity - 1 WHERE userID = ? AND flightID = ?
    //             `, [userID, flightID])
    //         }else{
    //             await pool.query(`
    //             DELETE FROM Cart WHERE userID =? AND flightID = ?
    //             `, [userID, flightID])
    //         }
    //     }
    //     const [result] = await pool.query(`
    //         SELECT * FROM Cart WHERE userID = ?
    //     `, [userID])
    //         return result
    // }catch(error){
    //     throw error
    // }
};

// const clearUserCart = async(userID)=>{
//     try{
//         await pool.query(`
//             DELETE FROM Cart WHERE userID = ?
//         `, userID)
//             return []
//     }catch(error){
//         throw error
//     }
// };

const clearUserCart = async(userID) => {
    const [result] = await pool.query(
        'DELETE FROM Cart where userID = ?'
        ,[userID]);
    return result
}

export{addToCart, getUserCart, deleteFromCart,clearUserCart}