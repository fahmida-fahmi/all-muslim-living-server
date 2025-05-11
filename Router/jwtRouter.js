const express = require('express');
const {  generateJwt } = require('../Controller/jwtController');
const jwtRouter = express.Router()

jwtRouter.post('/', generateJwt)

module.exports = jwtRouter