const jwt = require('jsonwebtoken');
const {secret,tokens} = require('config').jwt;
const uuid = require('uuid/v4');
const model = require('../models/userManager');

module.exports = {
    generateAccessToken : (userId) => {
        const payload = {
            userId,
            type : tokens.access.type,
        }
        const options = {expiresIn:tokens.access.expiresIn}

        return jwt.sign(payload,secret,options);
    },
    generateRefreshToken : () =>{
        const payload = {
            id : uuid(),
            type : tokens.refresh.type,
        }
        const options = {expiresIn: tokens.refresh.expiresIn}

        return {
            id : payload.id,
            token : jwt.sign(payload,secret,options),
        }
    },
    replaceRefreshToken : async (userId, tokenId) => {
      let exist = await model.findAndDeleteTokenByID(userId);
        if(exist) {
            let data = {
                userId,
                tokenId
            }
       await model.setNewRefreshToken(data);
        }
    }
}