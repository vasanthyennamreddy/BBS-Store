const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('',(req,res)=>{
        res.render('login',{"title":"login"});

});

router.post('',(req,res) => {

        


});

module.exports = router;