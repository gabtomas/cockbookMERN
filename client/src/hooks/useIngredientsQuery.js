import { useQuery } from "@tanstack/react-query";

export function useIngredientsQuery() {
    const ingredientQuery = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("http://localhost:3000/ingredients").then((res) =>
                res.json()
            ),
    });

    return ingredientQuery;
}
