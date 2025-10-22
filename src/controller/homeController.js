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
   return res.render('addProduct',{product,error:null});
}

function addProduct(req,res){
   // console.log('in Product adding',req.body);
   return res.render('addNewProduct',{id:products.length+1,error:null});
}
function addNewProduct(req,res){
   proModel.addNewProduct(req.body);
   return res.render('products',{products});
}

function updateProduct(req,res){
   proModel.update(req.body);
   return res.render('products',{products});
}

function deleteProduct(req,res){
   const id=req.params.id;
   const checked=proModel.checkProduct(id);
   // console.log(checked);
   if(checked){
      proModel.delete(id);
   }else{
      return res.status(404).send('Product not eligible.')
   }
   return res.render('products',{products});
}

export {home,getProducts,getAddProducts,addProduct,addNewProduct,updateProduct,deleteProduct};
