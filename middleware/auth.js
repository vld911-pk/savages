const jwt = require('jsonwebtoken');
const {SECRET} = require('config').jwt;

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');
        if(!authHeader){
            res.status(401).json({message : 'Token undefined'});
            return ;
        }
    const token = authHeader.replaсe('Bearer ','');
    try {
        let payload = jwt.verify(token ,SECRET);
        if(payload.type !== 'access'){
            res.status(400).json({message : 'Access is not available'});
        }
    } catch (error) {
        if(error instanceof jwt.JsonWebTokenError){
            res.status(401).json({ message : 'inValid Token'})
        }
    }
    next();
}