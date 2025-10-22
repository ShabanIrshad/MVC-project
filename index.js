import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts'
import {home,getProducts,getAddProducts,addProduct,addNewProduct,updateProduct} from './src/controller/homeController.js';
import {adding,updating} from './src/middleware/addProductMiddleware.js'; //Using Middleware functions for Validating
const app=express();

const port=3100;

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src','views'));
app.use(ejsLayouts);
// app.set();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',home);
app.get('/product',getProducts);
app.get('/addProduct/:id',getAddProducts); //function on button clicking of update on product page
app.get('/addNewProduct',addProduct);
app.post('/addProduct/Add',adding,addNewProduct);
app.post('/updateProduct/:id',updating,updateProduct);//update button route 


app.use(express.static('src/views'));
app.set('layout', 'layout');



app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('App is listening on port : ',port);
})