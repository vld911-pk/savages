
exports.up = function(knex) {
    return knex.schema.createTable("continents", table => {
        table.increments('id').unsigned().primary();
        table.string("continent");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('continents');
};
