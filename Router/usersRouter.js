const express = require('express');
const usersRouter = express.Router()
// const { verifyJWT } = require('../Middleware/verificationJWT');
// const { verifyAdmin } = require('../Middleware/verifyAdmin');
const { createUser, getAllUser, deleteUser, getSingleUserEmail } = require('../Controller/usersController');
const { verifyJWT } = require('../Middlewear/verifyToken');


usersRouter.post('/', createUser)

usersRouter.get('/', getAllUser)

usersRouter.delete('/:id', deleteUser)

// usersRouter.post('/', getSingleUser)

// usersRouter.patch('/admin/:id', updateUser)

usersRouter.get('/:email',  getSingleUserEmail)

module.exports = usersRouter
