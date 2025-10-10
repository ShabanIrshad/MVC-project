import productModel from '../model/productModel.js';

const proModel=new productModel();
const products=proModel.getProducts();

function home(req,res){
   return res.render('home');
}

function getProducts(req,res){
   
   return res.render('products',{products});
}

function getAddProducts(req,res){
   return res.render('addProduct');
}

function addProduct(req,res){
   console.log(req.body);
}

export {home,getProducts,getAddProducts,addProduct};
