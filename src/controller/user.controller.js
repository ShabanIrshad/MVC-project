import UserModel from "../model/user.model.js";



export default class UserController{
    getRegisterPage(req,res){        
        return res.render('register');
    }
    postRegisterUser(req,res){
        const {name,email,password}=req.body;
        UserModel.add(name,email,password);
        console.log('in post register user controller');
    }
}