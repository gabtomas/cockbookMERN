//import link component from react router
import { Link, Outlet } from "react-router-dom";

const Root = () => (
    <>
        <div>
            <Link to="/home">home</Link>
            <Link to="/ingredients">Ingredients</Link>
            <Link to="/add-recipe">Add recipe</Link>
        </div>
        <div>
            <Outlet />
        </div>
    </>
);

export default Root;
