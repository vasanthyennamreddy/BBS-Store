const express = require('express');
const router  = express.Router();
const Product = require('../models/product');
const Order = require('../models/orders');
const { getPreviousOrders } = require('../models/orders');

router.get('', (req,res) => {
    var orders;
    Order.getPreviousOrders(req.session.userid)
    .then (result =>{
        orders = result[0];
        console.log(orders);
    });

    var pending_orders;
    Order.getPendingOrders(req.session.userid)
    .then(result =>{
        pending_orders = result[0];

    });

    Product.getBySeller(req.session.userid)
    .then( result => {
        addedproducts = result[0];
        return res.render('profile',{title:"Profile", sess: req.session,useraddedproducts : addedproducts, orders, pending_orders});
    })
    .catch( err => {
        console.log(err);
    });

    
});

module.exports = router;