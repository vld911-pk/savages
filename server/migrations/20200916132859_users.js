
exports.up = function(knex) {
   return knex.schema.createTable("users", table => {
        table.increments('id').unsigned().primary();
        table.string("name");
        table.string("surname");
        table.string("email");
        table.string("password");
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
