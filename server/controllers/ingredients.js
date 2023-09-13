//ingredient controller
const ingredientDao = require("../dao/ingredientDao");

//create router
const express = require("express");
const router = express.Router();

//create a new ingredient
router.post("/", async (req, res) => {
    const ingredient = req.body;
    const newIngredient = await ingredientDao.createIngredient(ingredient);
    res.json(newIngredient);
});

//get all ingredients
router.get("/", async (req, res) => {
    const ingredients = await ingredientDao.getAllIngredients();
    res.json(ingredients);
});

//get ingredient by id
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const ingredient = await ingredientDao.getIngredientById(id);
    res.json(ingredient);
});

//update ingredient by id
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const ingredient = req.body;
    const updatedIngredient = await ingredientDao.updateIngredientById(
        id,
        ingredient
    );
    res.json(updatedIngredient);
});

//delete ingredient by id
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedIngredient = await ingredientDao.deleteIngredientById(id);
    res.json(deletedIngredient);
});

//export router
module.exports = router;
