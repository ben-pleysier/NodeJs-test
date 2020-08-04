
exports.up = function(knex) {
  return knex('users').insert({"first_name":"Ben","last_name":"Pleysier","gender":"Male","email":"ben@pleysier.com.au","company":"Pleysier Web Solutions","avatar":"/assets/img/ben.jpg","password":"benp"})
};

exports.down = function(knex) {
};
