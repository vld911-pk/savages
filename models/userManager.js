const knex = require("../db");

module.exports = {
//users
  getUsers: async () =>
    await knex("users").select("id", "name", "surname", "email", "password"),

  getUserById: async (id) =>
    await knex("users")
      .select("name", "surname", "email", "continents.continent")
      .join("ids", "ids.user_id", "=", "users.id")
      .join("continents", "ids.continent_id", "=", "continents.id")
      .where('users.id','=', id),


  updateUserById: async ({user_id : userId, name, surname, email}) => await knex("users")
    .update({
      name,
      surname,
      email,
    })
    .where({user_id}),

   updateIds: async (user_id, continent_id) => await knex("ids")
    .update({continent_id})
    .where({user_id})
   ,

  getUserByEmail: async (email) =>
    await knex("users")
      .select("id", "password", "email")
      .where("email", "=", email),

//continents
  getContinents: async () => await knex("continents").select("*"),
  

//register  
  setRegisterData: async (user_data) =>
    await knex("users").returning("id").insert(user_data),

  setIds: async (ids) => await knex("ids").insert(ids),

//tokens
  findTokenByUserID: async (user_id) =>
    await knex("tokens").select("token_id").where({ user_id }),

  deleteTokenByUserID: async (user_id) =>
    await knex("tokens").where({ user_id }).del(),

  setNewRefreshToken: async (data) =>
    await knex("tokens").insert(data).returning("id"),

  findTokenByTokenId: async (token_id) =>
    await knex("tokens").select("token_id").where({ token_id }),
};
