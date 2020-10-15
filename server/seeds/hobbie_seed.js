
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('continents').del()
    .then(function () {
      // Inserts seed entries
      return knex('continents').insert([
        {continent : "Asia"},
        {continent : "Africa"},
        {continent : "Austalia"},
        {continent : "South_America"},
        {continent : "North_America"},
      ]);
    });
};
