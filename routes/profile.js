const express = require('express');
const router  = express.Router();

const Order = require('../models/orders');

router.get('', (req,res) => {

    


    res.render('profile',{title:"Profile", sess: req.session});
});

module.exports = router;