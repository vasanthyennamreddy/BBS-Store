const express = require('express');
const router = express.Router();
 

router.get('',(req,res)=>{
        res.render('add-product',{title:"Add Product",sess : req.session});

});

module.exports = router;