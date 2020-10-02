const express = require('express');
const config = require('config');
const userRouter = require('./routers/usersRouter');

const app = express();
const PORT = 3002;

app.get('/',(req,res)  => {
    res.send('<p>Hello</p>');
})
//routes
app.use('/api',userRouter);

app.listen(PORT,() => {
    console.log(`server has been started on ${PORT}`);
});