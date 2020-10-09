const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const userRouter = require('./routers/usersRouter');

const app = express();
app.use(function(req,res,next){
   res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const PORT = 3002;

app.use(express.json({extended : true})); 
app.get('/',(req,res)  => {
    res.send('<p>Hello</p>');
})
//routes
app.use('/api',userRouter);

app.listen(PORT,() => {
    console.log(`Server has been started on ${PORT}`);
});