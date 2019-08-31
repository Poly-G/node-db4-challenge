const Recipes = require("./recipeModel");
const express = require("express");

const router = express.Router();

//get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get schemes" });
  }
});

//get ingredients and quantities
router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingList = await Recipes.getIngredients(id);
    res.status(200).json(shoppingList);
  } catch (err) {
    res.status(500).json({ message: "Failed to get shoppingList" });
  }
});

//get instructions
router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await Recipes.getInstructions(id);
    res.status(200).json(instructions);
  } catch (err) {
    res.status(500).json({ message: "Failed to get instructions" });
  }
});
module.exports = router;
