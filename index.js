const express = require('express');
const app = express();



// *************** Routes ***************** //

const store = require('./routes/store');
const cart = require('./routes/cart');
const checkout = require('./routes/checkout');
const register = require('./routes/register');
const login = require('./routes/login');
const addProduct = require('./routes/add-product');

app.use("",store);
app.use("/checkout",checkout);
app.use("/cart",cart);
app.use("/register", register);
app.use("/login", login);
app.use("/addproduct", addProduct);


// *************** Middleware & StaticFiles *********************//

app.use(express.json());
app.use(express.static('static'));
app.set('view engine','ejs');


// ****************** Database ******************//

/*const dbcon = require('./middleware/database');

dbcon.execute('SELECT  * FROM user_details')
.then(result => { console.log(result[0]);})
.catch(err => {console.log(result);});
*/


const port = process.env.PORT || 3000 ;
app.listen(port);
console.log(`listening on port ${port} `);


