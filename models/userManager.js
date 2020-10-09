const knex = require('../db');

module.exports = {
    getUsers : async () => await knex('users').select('id','name','surname','email'),
    getUserById : async id =>  await knex('users').select('*').where('id','=', id),
    getAllHobbies : async () =>  await knex('hobbies').select(),

    setLoginData : async (user_data) => await  knex('users').returning('id').insert(user_data),
    setHobbieData : async (hobbie) => await knex('hobbies').returning('id').insert(hobbie),
    setIds : async (ids) => await knex('ids').insert(ids)
}