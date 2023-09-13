import React, { useEffect, useState } from "react";

export default function IngredientsForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:3000/ingredients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                description: description,
            }),
        });
        console.log("success");
        setName("");
        setDescription("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name..."
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Description..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <button type="submit">Add Ingredient</button>
            </form>
        </div>
    );
}
