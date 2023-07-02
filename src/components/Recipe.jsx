import { recipes } from '../assets/database/recipesData';

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {
                recipes.map(recipe =>
                    <div key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {
                                recipe.ingredients.map((ingredient, index) =>
                                <li key={index}>{ingredient}</li>
                                )
                            }
                        </ul>
                        <hr />
                    </div>
                    )
            }
        </div>
    );
}
