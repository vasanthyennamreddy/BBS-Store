const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Product = require('../models/product');

router.get('',(req,res)=>{

        if(req.session.isLoggedIn){

        const user_id = req.session.userid;
        Cart.fetchCart(user_id)
        .then(result => {
                const Carts = result[0];
                res.render('cart',{
                        title:"Cart",
                        sess : req.session,
                        carts : Carts
                });
        })
        }
        else{
                res.redirect('login');
        }
        

});

router.post('',(req,res)=>{
        const user_id = req.session.userid;
        const p_id = req.body.productId*1;
        var quantity = req.body.quantity*1;
        const Buy = 'n';
        var price;
        Cart.checkExisting(user_id, p_id)
        .then(result => {
                if(result[0].length == 0){
                        Product.getPrice(p_id)
                        .then(result => {

                                Product.getQuantity(p_id)
                                .then(result => {
                                        if(result[0][0].quant< quantity){
                                                return res.redirect('/'+p_id)
                                        }
                                        else{
                                                price = result[0][0].price;
                                                const total = price*quantity;
                                                const cart = new Cart(user_id,p_id,quantity,total,Buy);
                                                        return cart.save()
                                                        .then(result => {
                                                                res.redirect('cart');
                                                        }); 
                                        }
                                })
                               
                               
                                  
                              })
                }
                else{
                        quantity = quantity + result[0][0].quantity;
                        console.log(quantity);
                        console.log(price);
                      
                        Product.getPrice(p_id)
                        .then(result => {
                               
                               price = result[0][0].price;
                               const total = price*quantity;
                               console.log(price);
                               console.log(total);
                               Cart.cartUpdate(user_id, p_id, quantity, total)
                               .then(result => {
                                       res.redirect('cart');
                               });
                                  
                              })
                        

                       
                }
        })
       

        
})

module.exports = router;