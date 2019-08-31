exports.seed = function(knex) {
  return knex("steps").insert([
    {
      step_number: 1,
      instructions: "stir in bricks",
      recipe_id: 1
    }
  ]);
};
