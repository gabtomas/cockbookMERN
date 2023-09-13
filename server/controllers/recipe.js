//import recipe dao
const Recipe = require("../dao/recipeDao");

//create router
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const recipe = req.body;
    const newRecipe = await Recipe.createRecipe(recipe);
    res.json(newRecipe);
});

router.get("/all", async (req, res) => {
    const recipes = await Recipe.getAllRecipes();
    const recipesWithoutIngredients = recipes.map((recipe) =>
        Recipe.excludeIngredientsField(recipe)
    );
    res.json(recipesWithoutIngredients);
});

router.get("/", async (req, res) => {
    const recipes = await Recipe.getAllRecipes();
    res.json(recipes);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const recipe = await Recipe.getRecipeById(id);
    res.json(recipe);
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const recipe = req.body;
    const updatedRecipe = await Recipe.updateRecipeById(id, recipe);
    res.json(updatedRecipe);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedRecipe = await Recipe.deleteRecipeById(id);
    res.json(deletedRecipe);
});

//export router
module.exports = router;
