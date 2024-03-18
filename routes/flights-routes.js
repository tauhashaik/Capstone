import express from 'express'
import controller from '../controller/flights.js'

const router = express.Router();

router
    .route('/')
        .get(controller.getFlights)
        .post(controller.addFlight)

router
    .route('/:id')
        .get(controller.getFlight)
        .patch(controller.updateFlight)
        .delete(controller.deleteFlight)

export default router