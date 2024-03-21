import {addToCart, getUserCart, updateCartQuantity, deleteFromCart,clearUserCart} from '../models/cart-database'

export default{
    addToCart: async (req, res)=>{
        try{
            const { userID, flightID, quantity} = req.body;
            const updatedCart = await addToCart(userID, flightID, quantity);
            res.json(updatedCart);
        }catch(error){
            console.error('Error in adding the flight to the cart:',error);
            res.status(500).json({error:'Unable to add flight to the cart'})
        }
    },

    getUserCart: async (req,res)=>{
        try{
            const{userID}= req.params
            const userCart = await getUserCart(userID)
            res.json(userCart)
        }catch(error){
            console.error('Error getting the users cart:', error)
            res.status(500).json({error:'Unable to get the users cart'})
        }
    },

    updateCartQuantity: async(req, res)=>{
        try{
            const{userID, flightID} = req.params;
            const{newQuantity} = req.body;
            const updatedCart = await updateCartQuantity(userID, flightID, newQuantity);
            res.json(updatedCart)
        }catch(error){
            console.error('Error updating the carts quantity:', error)
            res.status(500).json({error:'Unable to update the carts quantity'})
        }
    },

    deleteFromCart: async (req, res) => {
        try {
            const { userID, flightID } = req.params;
            await deleteFromCart(userID, flightID);
            res.json({ message: 'flight was deleted from the cart successfully' });
        } catch (error) {
            console.error('Error in deleting the flight from cart:', error);
            res.status(500).json({ error: 'Unable to delete the flight from the cart' });
        }
    },

    clearUserCart: async (req, res) => {
        try {
            const {userID} = req.params;
            await clearUserCart(userID);
            res.json({message: 'Cart cleared successfully'});
        } catch (error) {
            console.error('Error in clearing the users cart:', error);
            res.status(500).json({ error: 'Unable to clear the users cart'});
        }
    }
}