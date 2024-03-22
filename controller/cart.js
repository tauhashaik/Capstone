import {addToCart, getUserCart, deleteFromCart,clearUserCart} from '../models/cart-database.js'

export default{
    
    addToCart: async (req, res)=>{
      try{
        const {users}=req.query

        await addToCart(+req.params.id, users)
        return users
      }catch(error){
        console.error('Error adding to the cart:', error)
        res.status(500).send('Error adding item to cart')
      }
    },

    getUserCart: async (req,res)=>{
       res.send(await getUserCart(+req.params.id))
    },

    deleteFromCart: async (req, res) => {

        await deleteFromCart(+req.params.id);
        res.send(await getUserCart())
        // try {
        //     const { userID, flightID } = req.params;
        //     await deleteFromCart(userID, flightID);
        //     res.json({ message: 'flight was deleted from the cart successfully' });
        // } catch (error) {
        //     console.error('Error in deleting the flight from cart:', error);
        //     res.status(500).json({ error: 'Unable to delete the flight from the cart' });
        // }
    },

    // clearUserCart: async (req, res) => {
    //     try {
    //         const {userID} = req.params;
    //         await clearUserCart(userID);
    //         res.json({message: 'Cart cleared successfully'});
    //     } catch (error) {
    //         console.error('Error in clearing the users cart:', error);
    //         res.status(500).json({ error: 'Unable to clear the users cart'});
    //     }
    // }
    clearUserCart: async (req, res) => {
      try {
              const  id = req.params.id
              await clearUserCart(+id);
              res.send(await getUserCart());
      } catch (error) {
          console.error('Error in clearing the users cart:', error);
          res.status(500).json({ error: 'Unable to clear the users cart'});
      }
  }

}