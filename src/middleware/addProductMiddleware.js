import productModel from "../model/productModel.js";
const proModel=new productModel();
const products=proModel.getProducts();

function adding(req,res,next){
    // console.log(req.body);
    const error=[];
    const {name,img,price} =req.body;
    if(!name || name.trim()==='' || name.length<4){
        error.push('Name should be more tha 4 letters.')
    }
    if(parseFloat(price)<0 || price===''){
        error.push('Price should be a positive value.');
    }
    try {
        const validUrl=new URL(img);
    } catch (err) {
        error.push(err);
    }
    if(error.length>0){
        return res.render('addNewProduct',{id:products.length+1,error:error});
    }
    next();
}

function updating(req,res,next){
    console.log(req.body);
    next();
}

export {adding,updating};