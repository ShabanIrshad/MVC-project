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
   let vid=req.params.id;
   let product=products.find(p=>p.id==vid);
   return res.render('addProduct',{product});
}

function addProduct(req,res){
   console.log('in Product adding',req.body);
}

export {home,getProducts,getAddProducts,addProduct};
