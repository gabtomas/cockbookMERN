//imports
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//create a new recipe
async function createRecipe(recipe) {
    const newRecipe = await prisma.recipe.create({
        data: recipe,
    });
    return newRecipe;
}

//get all recipes
async function getAllRecipes() {
    const recipes = await prisma.recipe.findMany();
    return recipes;
}

//create function to exclude ingredients field from recipe
function excludeIngredientsField(recipe) {
    const { ingredientIDs, ...recipeWithoutIngredients } = recipe;
    return recipeWithoutIngredients;
}

//get recipe by id
async function getRecipeById(id) {
    const recipe = await prisma.recipe.findUnique({
        where: {
            id: id, //mongodb id
        },
    });
    return recipe;
}

//update recipe by id
async function updateRecipeById(id, recipe) {
    const updatedRecipe = await prisma.recipe.update({
        where: {
            id: id,
        },
        data: recipe,
    });
    return updatedRecipe;
}

//delete recipe by id
async function deleteRecipeById(id) {
    const deletedRecipe = await prisma.recipe.delete({
        where: {
            id: id,
        },
    });
    return deletedRecipe;
}

//export functions
module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById,
    excludeIngredientsField,
};
