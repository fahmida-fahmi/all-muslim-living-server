const express = require('express');
const { addFavList, getAllFavList, getSingleFavList, deleteFavList } = require('../Controller/favLIstController');
const { verifyJWT } = require('../Middlewear/verifyToken');

const favListRouter = express.Router()  

favListRouter.post('/', addFavList)

// favListRouter.get('/', getAllFavList)
favListRouter.get('/',verifyJWT, getAllFavList)

// favListRouter.get('/:id', getSingleFavList)

// favListRouter.get('/:email', getSingleFavList)

favListRouter.delete('/:id', deleteFavList)


module.exports = favListRouter