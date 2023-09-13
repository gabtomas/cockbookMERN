import IngredientsData from "../components/IngredientsData";
import IngredientsForm from "../components/IngredientsForm";
import { useIngredientsQuery } from "../hooks/useIngredientsQuery";

export function Ingredients() {
    const { data, isLoading, error } = useIngredientsQuery();

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <h1>Ingredients</h1>
            <ul>
                {data.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                ))}
            </ul>

            <div>
                <IngredientsData />
                <IngredientsForm />
            </div>
        </div>
    );
}
