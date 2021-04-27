const express = require('express');
const router  = express.Router();
const Product = require('../models/product');
const Order = require('../models/orders');

router.get('', (req,res) => {


    Product.getBySeller(req.session.userid)
    .then( result => {
        addedproducts = result[0];
        return res.render('profile',{title:"Profile", sess: req.session,useraddedproducts : addedproducts});
    })
    .catch( err => {
        console.log(err);
    });

    
});

module.exports = router;