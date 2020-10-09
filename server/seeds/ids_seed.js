
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ids').del()
    .then(function () {
      // Inserts seed entries
      return knex('ids').insert([
        {user_id: 1, hobbie_id : 2},
        {user_id: 1, hobbie_id : 2},
        {user_id: 1, hobbie_id : 2}
      ]);
    });
};
