import productModel from "../model/productModel.js";
import {body,validationResult} from 'express-validator';
import path from 'path';
import multer from 'multer';
const proModel=new productModel();
const products=proModel.getProducts();


//USING NORMAL MIDDLEWARE FOR CHECKING DATA
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
    // try {
    //     const validUrl=new URL(img);
    // } catch (err) {
    //     error.push(err);
    // }
    if(error.length>0){
        return res.render('addNewProduct',{id:products.length+1,error:error});
    }
    next();
}


//USING EXPRESS-VALIDATOR FOR DATA HANDLING
async function updating(req,res,next){
    // console.log(req.body);
    //Defining Rules here
    const rules=[
        // body('id').isEmpty().withMessage('Product not updated!'),
        body('name').isLength({min:4}).withMessage('Name should be atleast 4 character.'),
        body('price').isFloat({gt:0}).withMessage('Price should be a positive value.'),
        // body('img').isURL().withMessage('Url should be live from web'),
    ]
    //Running Rules
    await Promise.all(rules.map((rule)=>rule.run(req)));
    //Initializing Error variable
    const error=validationResult(req);

    //Checking Error
    if(!error.isEmpty()){
        let vid=req.body.id;   
        let product=products.find(p=>p.id==vid);
        return res.render('addProduct',{product:product,error:error.array()[0].msg,})
    }else{
          next();
    }
  
}
///---------USING MULTER FOR FILE UPLOADING----------//
const storageConfig=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'public/images');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})

export const usingMulter=multer({
    storage:storageConfig,
})
//----------------------------------------------------//

export {adding,updating};