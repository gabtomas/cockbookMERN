import React, { useState } from "react";

export default function IngredientsForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onsubmit({ name, description });
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <button type="submit">Add Ingredient</button>
            </form>
        </div>
    );
}
