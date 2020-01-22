
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      // id column, integer, primary key, auto-increment
      tbl.increments();
      tbl.real("VIN", 128).index();
      tbl.string("Make",60);
      tbl.string("Model",60);
      tbl.integer("Mileage");

      tbl.timestamps(true,true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
