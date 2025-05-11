const express = require('express');
const { getAllIgnoreList, addIgnoreList, deleteIgnoreList, getSingleIgnoreList } = require('../Controller/ignoreBioDataController');

const ignoreBioDataRouter = express.Router()

ignoreBioDataRouter.post('/', addIgnoreList)
ignoreBioDataRouter.get('/', getAllIgnoreList)
ignoreBioDataRouter.get('/:id', getSingleIgnoreList)
ignoreBioDataRouter.delete('/:id', deleteIgnoreList)

module.exports = ignoreBioDataRouter