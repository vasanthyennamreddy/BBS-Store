const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.get('',(req,res)=>{
        res.render('login',{title:"login",sess : req.session});

});

router.post('',(req,res,next) => {

        const username = req.body.username;
        const password = req.body.password;

        User.findByUsername(username)
        .then(result => {
                if (result[0][0].username == username && result[0][0].pass == password){
                        
                        req.session.isLoggedIn = true;
                        req.session.user  = username;
                        req.session.admin = result[0][0].admin;
                        req.session.userid = result[0][0].user_id
                        
                        return res.redirect('/');
                }
                return res.redirect('/login');
        })
        .catch( err => {
                console.log(err);
                return res.redirect('/login');
        });
});

module.exports = router;