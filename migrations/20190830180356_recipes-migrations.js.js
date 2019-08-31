exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("step_number")
        .notNullable()
        .unsigned();
      tbl.string("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl.float("quantity").notNullable();
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
