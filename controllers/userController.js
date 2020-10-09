const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const user_model = require('../models/userManager');

module.exports = {
    
    getAllUsers : async (req,res) => {
        let users = await user_model.getUsers();
        console.log(users);
        res.send(users);
    },
    getUserById : async (req,res) => {
        let id = req.params.id;
        let user = await user_model.getUserById(id);
        res.send(user);
    },
    getAllHobbies : async (req,res) => {
        let hobbs = await user_model.getAllHobbies();
        res.send(hobbs);
    },

    registerHandler : async (req,res) =>{
     try {
        const errors = validationResult(req);
            if(!errors.isEmpty()){
                res.status(400).json({
                    errors : errors.array(),
                    message: "invalid data for registration"
                })
                return ;
            }
            let data = req.body;
                console.log(typeof data);
            //const hashedPass = await bcrypt.hash(data.password,42);
  
            let user = {
                name : data.name,
                surname : data.surname,
                email : data.email,
                password : data.password
            }
          
            await user_model.setLoginData(user);

            res.status(200).json({message : "data has been received"});    
            console.log(data);
        } catch (error) {
            console.log('err:',error);
            res.status(500);
        }
    }
}