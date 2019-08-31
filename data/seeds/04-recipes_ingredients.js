exports.seed = function(knex) {
  return knex("recipes_ingredients").insert([
    { quantity: 1, recipe_id: 1, ingredient_id: 1 }
  ]);
};
