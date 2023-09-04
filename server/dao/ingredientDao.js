//imports
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//create a new ingredient
async function createIngredient(ingredient) {
    const newIngredient = await prisma.ingredient.create({
        data: ingredient,
    });
    return newIngredient;
}

//get all ingredients
async function getAllIngredients() {
    const ingredients = await prisma.ingredient.findMany();
    return ingredients;
}

//get ingredient by id
async function getIngredientById(id) {
    const ingredient = await prisma.ingredient.findUnique({
        where: {
            id: id, //mongodb id
        },
    });
    return ingredient;
}

//update ingredient by id
async function updateIngredientById(id, ingredient) {
    const updatedIngredient = await prisma.ingredient.update({
        where: {
            id: id,
        },
        data: ingredient,
    });
    return updatedIngredient;
}

//delete ingredient by id
async function deleteIngredientById(id) {
    const deletedIngredient = await prisma.ingredient.delete({
        where: {
            id: id,
        },
    });
    return deletedIngredient;
}

//export functions
module.exports = {
    createIngredient,
    getAllIngredients,
    getIngredientById,
    updateIngredientById,
    deleteIngredientById,
};
