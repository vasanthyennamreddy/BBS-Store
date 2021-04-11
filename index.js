const express = require('express');
const app = express();



// *************** Routes ***************** //

app.get("/store",(req,res) =>{ return  res.render('store',{"title" : "Home"})});
app.get("/checkout",(req,res) =>{ return  res.render('checkout',{"title" : "Checkout"})});
app.get("/cart",(req,res) =>{ return  res.render('cart',{"title" : "Cart"})});



// *************** End of Routes  ***********//

// *************** Middleware & StaticFiles *********************//

app.use(express.json());
app.use(express.static('static'));
app.set('view engine','ejs');

//********* End of Middleware & StaticFiles  **********************/




const port = process.env.PORT || 3000 ;
app.listen(port);
console.log(`listening on port ${port} `);


