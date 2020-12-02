const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const user_model = require('../models/userManager');
const jwt = require('jsonwebtoken');
const jwtConfig = require('config').jwt;
const authHelper = require('../helpers/authHelper');

const updateToken = (userId) => {
    let access = authHelper.generateAccessToken();
    let refresh = authHelper.generateRefreshToken();
    return authHelper.replaceRefreshToken(refresh.id,userId)
}

const hashcompare = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

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
        try {
            let conts = await user_model.getContinents();
            res.json({body : conts});
            res.send(conts);    
        } catch (error) {
            res.status(400);
        }
        
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
            let [candidate] = await user_model.getUserByEmail(data.email);
                if(candidate){
                   return res.status(400).json({message : 'Email is already exists'});
                }

            const hashpass = await bcrypt.hash(data.password,12);
  
            let user = {
                name : data.name,
                surname : data.surname,
                email : data.email,
                password : hashpass
            }
           let [user_id] = await user_model.setRegisterData(user);
           await user_model.setIds({
               user_id : user_id,
               continent_id : data.continent
           });

            res.status(200).json({message : "data has been received"});    
        } catch (error) {
            console.log('err:',error);
            res.status(500).json({message : 'Server error'});
        }
},
    loginHandler : async (req,res) => {
        const errors = validationResult(req);
            if(!errors.isEmpty()){
                res.status(422).json({
                    errors : errors.array(),
                })
                return ;
            }
        let {email,password} = req.body;

            try {
                let [candidate] = await user_model.getUserByEmail(email);
                let access = await hashcompare(password,candidate.password);
                if(access){
                    const token = jwt.sign(candidate.id.toString(),jwtConfig.SECRET);
                    res.json({token});

                }else{
                    return res.status(401).json({message : 'All went wrong with credentials'});
                }
            } catch (error) {
                console.log('err:',error);
                res.status(500).json({message : 'Server error'});
            }
    }
}