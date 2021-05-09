
exports.up = function(knex) {
    return knex.schema.createTable('cardsResults', function(table) {
        table.increments('id').unsigned().primary();
        table.integer('userId').notNullable();
        table.integer('score');
        table.date('date').defaultTo(knex.fn.now());
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cardsResults');
};
