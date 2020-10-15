const knex = require('../db');

module.exports = {
    getUsers : async () => await knex('users').select('id','name','surname','email','password'),
    getUserById : async id =>  await knex('users').select('*').where('id','=', id),
    getUserByEmail : async email => await knex('users').select('password','email').where('email', '=', email), 
    getContinents : async () =>  await knex('continents').select(),

    setRegisterData : async (user_data) => await knex('users').returning('id').insert(user_data),
    setIds : async (ids) => await knex('ids').insert(ids)
}