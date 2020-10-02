
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name : "vlad", surname : "panchuk",age : 20, password : "oasdf6asdf6"},
        {name : "john", surname : "vozchuk",age : 20, password : "zxcv8zxc7vv"},
        {name : "ralph",surname : "marchuk",age : 20, password : "dzgzdfg653c"}
      ]);
    });
};
