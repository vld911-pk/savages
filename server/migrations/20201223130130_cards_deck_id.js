
exports.up = function(knex) {
    return knex.schema.createTable("cards_deck_id", table => {
        table.increments('id').unsigned().primary();
        table.integer('card_deck_id').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cards_deck_id");
};
