const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

//import ingredient controller
const ingredientController = require("./controllers/ingredients.js");
const recipeController = require("./controllers/recipe.js");

//use cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//use ingredient controller
app.use("/ingredients", ingredientController);
app.use("/recipe", recipeController);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
