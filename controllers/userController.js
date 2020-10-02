const knex = require('../db');

module.exports = {
    getAllUsers : async (req,res) => {
        let data = await knex('users').select();
        res.send(data);
    },
    getUserById : async (req,res) => {
        let id = req.params.id;
        let user = await knex('users').select('*').where('id','=', id);
        res.send(user);
    },
    getAllHobbies : async (req,res) => {
        let hobbies = await knex('hobbies').select();
        res.send(hobbies);
    }
}