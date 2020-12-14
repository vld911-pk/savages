
exports.up = function(knex) {
    return knex.schema.createTable("ids", table => {
        table.increments('id').unsigned().primary();
        table.integer('user_id').unsigned();
        table.integer('continent_id').unsigned();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ids");
};
