
exports.up = function(knex) {
    return knex.schema.createTable("hobbies", table => {
        table.increments('id').unsigned().primary();
        table.string("hobbie");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('hobbies');
};
