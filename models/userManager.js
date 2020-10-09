const knex = require('../db');

module.exports = {
    getUsers : async () => await knex('users').select('id','name','surname','email'),
    getUserById : async id =>  await knex('users').select('*').where('id','=', id),
    getAllHobbies : async () =>  await knex('hobbies').select(),
    setLoginData : async (user_data) => await  knex('users').insert(user_data)
}