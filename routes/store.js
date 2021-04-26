const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('',(req,res)=>{
        
        Product.fetchAll()
        .then(result => {
                const products = result[0];
                const extra = result[1];
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

router.get('/:p_id',(req,res)=>{
        const prodId = req.params.p_id;
        Product.findById(prodId)
        .then(result => {
                const products = result[0];
                const extra = result[1];
                res.render('product',{
                        title:"View Product",
                        products : products,
                        sess : req.session
                        });
                })
        .catch(err => {
                        console.log(err);
                })
        
})

module.exports = router;