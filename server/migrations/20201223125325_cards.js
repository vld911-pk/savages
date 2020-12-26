
exports.up = function(knex) {
    return knex.schema.createTable("cards", table => {
        table.increments('id').unsigned().primary();
        table.string('card_link').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cards");
};
