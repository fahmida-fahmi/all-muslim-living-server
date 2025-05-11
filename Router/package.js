const express = require('express');
const { getAllPackage } = require('../Controller/packageController');

const packageRouter = express.Router()  

packageRouter.get('/', getAllPackage)

module.exports = packageRouter