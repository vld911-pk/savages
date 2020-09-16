const express = require('express');
const knex = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',async (req,res) => {
    const data = await knex("users").select()
    console.log("data :" ,data);
});

app.listen(PORT,() => {
    console.log(`server has been started on ${PORT}`);
});