import express from 'express'
import controller from '../controller/cart.js'

const router = express.Router();

router.route('/cart/:userID/add/:flightID')
    .post(controller.addToCart);

router.route('/cart/:userID')
    .get(controller.getUserCart);

router.route('/cart/:userID/update/:flightID')
    .patch(controller.updateCartQuantity);

router.route('/cart/:userID/delete/:flightID')
    .delete(controller.deleteFromCart);

router.route('/cart/:userID/clear')
    .delete(controller.clearUserCart)


export default router
