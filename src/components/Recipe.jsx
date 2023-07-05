import { recipes } from '../assets/database/recipesData';

export default function RecipeList() {

    let handleClick = () => {
        console.log("Clicked")
    }
    return (
        <div>
            <h1>Recipes</h1>

            <button onClick={(e) => { handleClick()}}>OK</button>
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
