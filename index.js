const express = require('express');
const app = express();



// *************** Routes ***************** //

const store = require('./routes/store');
const cart = require('./routes/cart');
const checkout = require('./routes/checkout');

app.use("",store);
app.use("/checkout",checkout);
app.use("/cart",cart);



// *************** End of Routes  ***********//

// *************** Middleware & StaticFiles *********************//

app.use(express.json());
app.use(express.static('static'));
app.set('view engine','ejs');

//********* End of Middleware & StaticFiles  **********************/




const port = process.env.PORT || 3000 ;
app.listen(port);
console.log(`listening on port ${port} `);


