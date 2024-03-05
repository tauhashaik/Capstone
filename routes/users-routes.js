import express from 'express';
import controller from '../controller/users'

const router = express.Router();

// dynamic routing for more convenient and clearer readibility of routes.
router
    .route('/')
        .get(controller.getUsers)
        .post(controller.addUser)

router
    .route('/:id')
        .get(controller.getUser)
        .delete(controller.deleteUser)
        .patch(controller.editUser)


export default router