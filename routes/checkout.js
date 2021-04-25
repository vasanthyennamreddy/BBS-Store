const express = require('express');
const router = express.Router();
 

router.get('',(req,res)=>{
        res.render('checkout',{title:"Checkout",sess : req.session});

});

module.exports = router;