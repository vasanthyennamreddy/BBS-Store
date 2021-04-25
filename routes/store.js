const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('',(req,res)=>{
       
        Product.fetchAll()
        .then(result => {
                const products = result[0];
                const extra = result[1];
                console.log(products);
                res.render('store',{
                        title:"Home",
                        products : products,
                        sess : req.session
                        });
        })
        .catch(err => {
                console.log(err);
        })
        
       
        

});
/*
router.get('/:p_id',(req,res)=>{
        const prodId = req.params.p_id;
        Product.findById(prodId)
        .then(result => {
                const product = result[0];
               const extra = result[1];
                console.log(product);
                res.render('view',{
                        title:"View Product",
                        product : product
                        });
                })
        .catch(err => {
                        console.log(err);
                })
        
})*/

module.exports = router;