
exports.up = function(knex) {
    return knex.schema.createTable("tokens", table => {
        table.integer('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.integer('token_id').unsigned().notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tokens");
};
