
exports.up = function(knex) {
    return knex.schema.createTable("tokens", table => {
        table.increments('id').unsigned().primary();
        table.integer('user_id').unsigned().notNullable();
        table.string('token_id').unsigned().notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tokens");
};
