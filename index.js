import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts'
import {home,getProducts,getAddProducts,addProduct} from './src/controller/homeController.js';
const app=express();

const port=3100;

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src','views'));
app.use(ejsLayouts);
// app.set();

app.get('/',home);
app.get('/product',getProducts);
app.get('/addProduct',getAddProducts);
app.post('addProduct/submit',addProduct);


app.use(express.static('src/views'));
app.set('layout', 'layout');


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('App is listening on port : ',port);
})