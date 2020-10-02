
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hobbies').del()
    .then(function () {
      // Inserts seed entries
      return knex('hobbies').insert([
        {id : 1, hobbie : "swimming"},
        {id : 2,hobbie : "reading"},
        {id : 3,hobbie : "fucking"}
      ]);
    });
};
