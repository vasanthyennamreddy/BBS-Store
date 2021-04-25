const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
app.use(bodyParser.urlencoded({ extended: false }));

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
app.use( session({secret:'mysecret',resave:false,saveUninitialized:false}) );

// ****************** Database ******************//


/*const User = require('./models/user'); 

//const new_user = new User('Saaketh I','Saaketh','is15@iitbbs.ac.in','8142713624','sak@123','y');
User.findByUsername('Vasanth')
.then(res => { console.log(res[0][0].username);
                console.log(res[0][0].pass);        
    })
.catch(err => { console.log(err);});  */ 




const port = process.env.PORT || 3000 ;
app.listen(port);
console.log(`listening on port ${port} `);


