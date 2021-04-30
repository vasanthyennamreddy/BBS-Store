const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Product = require('../models/product');
const Order = require('../models/orders');

router.get('',(req,res)=>{

        if(req.session.isLoggedIn){

                const user_id = req.session.userid;
               
                Cart.fetchCart(user_id)
                .then(result => {
                        const Carts = result[0];
                        res.render('checkout',{
                                title:"Checkout",
                                sess : req.session,
                                carts : Carts
                                
                        });
                })
                }
                else{
                        res.redirect('login');
                }
       

});

router.get('/payment',(req,res)=>{

        if(req.session.isLoggedIn){

                const user_id = req.session.userid;
               
                
                        
                        res.render('payment',{
                                title:"Payment",
                                sess : req.session          
                        });
                }
                else{
                        res.redirect('login');
                }
       

});


router.post('',(req,res)=>{
        if(req.session.isLoggedIn){
                const user_id = req.session.userid;

                const address = req.body.address;
                const city = req.body.city;
                const state = req.body.state;
                const country = req.body.country;
                const zip = req.body.zipcode;

                Cart.fetchCart(user_id)
                .then(result => {
                        const Carts = result[0];
                        var len = Carts.length;
                        var i;
                                for (i = 0; i < len; i++) {
                                         console.log(result[0][i].o_id);
                                         Order.Update(result[0][i].o_id);
                                }
                        res.redirect('/checkout/payment');  
                })

        }
        else{
                res.redirect('login');   
        }
       
         
      })
      

module.exports = router;