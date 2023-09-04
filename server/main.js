const express = require("express");
const app = express();
const port = 3000;

//import ingredient controller
const ingredientController = require("./controllers/ingredient.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use ingredient controller
app.use("/ingredient", ingredientController);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
