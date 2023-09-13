import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Ingredients } from "./routes/ingredients";
import { Home } from "./routes/home";

//import root component from components folder
import Root from "./components/Root";
import Recipe from "./components/Recipe";

//create router from routes
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add-recipe" element={<Recipe />} />
        </Route>
    )
);
