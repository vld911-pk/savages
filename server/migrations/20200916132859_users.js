
exports.up = function(knex) {
   return knex.schema.createTable("users", table => {
        table.increments();
        table.string("nick");
        table.string("salt");
        table.string("password");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
