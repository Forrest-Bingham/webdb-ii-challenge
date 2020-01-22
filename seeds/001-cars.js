
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 01, Make: "Toyota", Model:"Corolla", Mileage: 100000},
        {id: 2, VIN: 22, Make: "Volkswagen", Model:"Passat", Mileage: 77000},
        {id: 3, VIN: 58, Make: "Kia", Model:"Optima", Mileage: 85000},
      ]);
    });
};
