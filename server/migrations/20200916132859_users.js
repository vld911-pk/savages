
exports.up = function(knex) {
   return knex.schema.createTable("users", table => {
        table.increments('id').unsigned().primary();
        table.string("name");
        table.string("surname");
        table.integer("age");
        table.string("password");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
