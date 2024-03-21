import {addToCart, getUserCart, updateCartQuantity, deleteFromCart,clearUserCart} from '../models/cart-database'

export default{
    addToCart: async (req, res)=>{
        try{
            const { userID, flightID, quantity} = req.body;
            const updatedCart = await addToCart(userID, flightID, quantity);
            res.json(updatedCart);
        }catch(error){
            console.error("Error adding  product to cart:",error);
            res.status(500).json({error:"Unable to add product to cart"})
        }
    },

    getUserCart: async (req,res)=>{
        try{
            const{userID}= req.params
            const userCart = await getUserCart(userID)
            res.json(userCart)
        }catch(error){
            console.error("Error getting users cart:", error)
            res.status(500).json({error:"Unable to get users cart"})
        }
    },

    updateCartQuantity: async(req, res)=>{
        try{
            const{userID, flightID} = req.params;
            const{newQuantity} = req.body;
            const updatedCart = await updateCartQuantity(userID, flightID, newQuantity);
            res.json(updatedCart)
        }catch(error){
            console.error("Error updatingthe carts quantity:", error)
            res.status(500).json({error:"Unable to update the carts quantity"})
        }
    },

    
}