const express = require("express");
const app = express();
const port = 3000;

//import ingredient controller
const ingredientController = require("./controllers/ingredient.js");
const recipeController = require("./controllers/recipe.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//use ingredient controller
app.use("/ingredient", ingredientController);
app.use("/recipe", recipeController);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
