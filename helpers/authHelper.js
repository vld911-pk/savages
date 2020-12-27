const jwt = require('jsonwebtoken');
const {SECRET,tokens} = require('config').jwt;
const { v4: uuid_v4 } = require('uuid');
const model = require('../models/userManager');

module.exports = {
    generateAccessToken : (userId) => {
        const payload = {
            userId,
            type : tokens.access.type,
        }
        const options = {expiresIn:tokens.access.expiresIn}

        return jwt.sign(payload,SECRET,options);
    },
    generateRefreshToken : () =>{
        const payload = {
            id : uuid_v4(),
            type : tokens.refresh.type,
        }
        const options = {expiresIn: tokens.refresh.expiresIn}

        return {
            id : payload.id,
            token : jwt.sign(payload,SECRET,options),
        }
    },
    replaceRefreshToken : async (token_id, user_id) => {
       try {
        const [exists] = await model.findTokenByUserID(user_id);
        if(exists) {
           await model.deleteTokenByUserID(user_id); 
        }
        else console.log('fuck');
             let [id] = await model.setNewRefreshToken({user_id,token_id});   
       } catch (error) {
           console.log(error);
       }
        
    }
}