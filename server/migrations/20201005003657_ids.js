
exports.up = function(knex) {
    return knex.schema.createTable("ids", table => {
        table.integer('user_id').unsigned();
        table.integer('hobbie_id').unsigned();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ids");
};