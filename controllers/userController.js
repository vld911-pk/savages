const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const user_model = require('../models/userManager');
const jwt = require('jsonwebtoken');
const jwtConfig = require('config').jwt;
const authHelper = require('../helpers/authHelper');
const userManager = require('../models/userManager');

const updateToken = async (userId) => {
    let accessToken = authHelper.generateAccessToken();
    let refreshToken = authHelper.generateRefreshToken();
    await authHelper.replaceRefreshToken(refreshToken.id,userId);
        return {
            accessToken,
            refreshToken : refreshToken.token
        };
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
        let [user] = await user_model.getUserById(id);
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
    updateUserData : async (req,res) => {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const { id } = req.param.id;
                const updatedData = req.body;
                console.log(updatedData);
                await Promise.all([
                    userManager.updateUserById(updatedData),
                    userManager.updateIds(id,2),
                ])
                res.status(200).json({message : 'user\'s data has been updated successfully' });
            }else res.status(401).json({errors : isValid});
        } catch (error) {
            res.status(400).json({message : 'failed to update user data'})
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
                if(!candidate){
                    res.status(401).json({message : 'User not found,please check your email'})
                }
                let access = await hashcompare(password,candidate.password);
                if(access){
                  const {accessToken ,refreshToken} = await updateToken(candidate.id);
                  res.status(200).json({accessToken ,refreshToken, user_id : candidate.id});
                }else{
                    return res.status(401).json({message : 'All went wrong with credentials'});
                }
            } catch (error) {
                res.status(500).json({message : 'Server error'});
            }
    },
    refreshTokens : async (req,res) => {
        const { refreshToken } = req.body;
        let payload;
        try {
            payload = jwt.verify(refreshToken,jwtConfig.SECRET);
            if(payload.type !== 'refresh'){
                res.status(400).json({message : 'Invalid token'})
                return;
            }

        } catch (error) {
            if( error instanceof jwt.TokenExpiredError){
                res.status(400).json({message : 'Token expired'});
                return ;
            }
        }
        const [token] = await userManager.findTokenByTokenId(payload.id);
            if(token === null){
                throw new Error('Invalid token');
            }
        
        return updateToken(token.user_id);
   }
}