const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const userRouter = require('./routers/usersRouter');
const cardsRouter = require('./routers/cardsRouter');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(function(req,res,next){
   res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Methods", "*");
   res.header("Access-Control-Allow-Headers","*");
    next();
});
app.use(express.json({extended : true})); 
app.get('/',(req,res)  => {
    res.send('<p>Server side of FS site</p>');
})
//routes
app.use('/api',userRouter);
app.use('/games', cardsRouter);

app.listen(PORT,() => {
    console.log(`Server has been started on ${PORT}`);
});