exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "soup stuff" },
        { id: 2, ingredient_name: "fish or somethin" },
        { id: 3, ingredient_name: "bricks" }
      ]);
    });
};
