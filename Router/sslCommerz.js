const express = require('express');
const paymentRouter = express.Router();


const { addPayment, createSSL, failedPayment } = require('../Controller/sslCommerzController');


// paymentRouter.post('/payment', addPayment); 

paymentRouter.post('/', createSSL); // Endpoint to create SSLCommerz payment
paymentRouter.post('/success/:trans_id', addPayment); // Endpoint to create SSLCommerz payment
paymentRouter.post('/failed/:trans_id', failedPayment); // Endpoint to create SSLCommerz payment


module.exports = paymentRouter;