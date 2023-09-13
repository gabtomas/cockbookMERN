import { useState, useEffect } from "react";

export default function IngredientsData() {
    const [ingredients, setIngredients] = useState([]);

    const ingredientsDataFetch = async () => {
        try {
            const response = await fetch("http://localhost:3000/ingredients");
            const data = await response.json();
            setIngredients(data);
        } catch (error) {
            console.log(error);
        }
    };

    //fetch ingredients from localhost:3000/ingredients on every render
    useEffect(() => {
        ingredientsDataFetch();
    }, []);

    return (
        <div>
            <h1>Ingredients</h1>
            <div>
                {ingredients.length && (
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
