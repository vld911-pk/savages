const knex = require('../db');

module.exports = {
    getUsers : async () => await knex('users').select('id','name','surname','email','password'),
    getUserById : async id =>  await knex('users').select('*').where('id','=', id),
    getUserByEmail : async email => await knex('users').select('id','password','email').where('email', '=', email), 
    getContinents : async () =>  await knex('continents').select('*'),

    setRegisterData : async (user_data) => await knex('users').returning('id').insert(user_data),
    setIds : async (ids) => await knex('ids').insert(ids),

    findTokenByUserID : async (user_id) => await knex('tokens').select('token_id').where({user_id}),
    deleteTokenByUserID : async (user_id) => await knex('tokens').where({user_id}).del(),
    setNewRefreshToken : async(data) => await knex('tokens').insert(data).returning('id'),
    findTokenByTokenId : async (token_id) => await knex('tokens').select('token_id').where({token_id}),

}