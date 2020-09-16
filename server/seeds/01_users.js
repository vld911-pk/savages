
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {nick : "vlad",salt : "ffffff",password : "obelisk"},
        {nick : "john",salt : "zzzzzz",password : "kentavr"},
        {nick : "ralph",salt : "llllll",password : "fenix"}
      ]);
    });
};
