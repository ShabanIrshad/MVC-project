import productModel from '../model/productModel.js';

const proModel=new productModel();
const products=proModel.getProducts();

function home(req,res){
   return res.render('home');
}

function getProducts(req,res){
   
   return res.render('products',{products});
}

export {home,getProducts};
