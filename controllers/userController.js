const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const user_model = require('../models/userManager');

module.exports = {
    
    getAllUsers : async (req,res) => {
        let users = await user_model.getUsers();
        res.send(users);
    },
    getUserById : async (req,res) => {
        let id = req.params.id;
        let user = await user_model.getUserById(id);
        res.send(user);
    },
    getAllContinents : async (req,res) => {
        let conts = await user_model.getContinents();
        res.send(conts);
    },

    registerHandler : async (req,res) =>{
     try {
        const errors = validationResult(req);
            if(!errors.isEmpty()){
                res.status(422).json({
                    errors : errors.array(),
                })
                return ;
            }
            let data = req.body;
                console.log(data);
            //const hashedPass = await bcrypt.hash(data.password,42);
  
            let user = {
                name : data.name,
                surname : data.surname,
                email : data.email,
                password : data.password
            }
           let [user_id] = await user_model.setLoginData(user);
           await user_model.setIds({
               user_id : user_id,
               continent_id : data.continent
           });

            res.status(200).json({message : "data has been received"});    
            console.log(data);
        } catch (error) {
            console.log('err:',error);
            res.status(500);
        }
    }
}