
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name : "vlad", surname : "panchuk",email : 'test', password : "oasdf6asdf6"},
        {name : "john", surname : "vozchuk",email : 'test', password : "zxcv8zxc7vv"},
        {name : "ralph",surname : "marchuk",email : 'test', password : "dzgzdfg653c"}
      ]);
    });
};
