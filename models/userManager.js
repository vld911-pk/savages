const knex = require('../db');

module.exports = {
    getUsers : async (continent_id) => await knex('users').select('id','name','surname','email'),
    getUserById : async id =>  await knex('users').select('*').where('id','=', id),
    getContinents : async () =>  await knex('continents').select(),

    setLoginData : async (user_data) => await  knex('users').returning('id').insert(user_data),
    setContinentsData : async (continent) => await knex('continents').returning('id').insert(continent),
    setIds : async (ids) => await knex('ids').insert(ids)
}