import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeDetails = () => {

    const [recipe, setRecipe] = React.useState([]);
    
    const {id} = useParams();

    useEffect(() => {
        fetchRecipe()
    }
    , [])

    const fetchRecipe = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
        const data = await response.json()
        setRecipe(data.meals[0])
    }


  return (
    <div>
            <div className="row">
                <div className="col-auto">
                    <img src={recipe.strMealThumb} />
                </div>
                <div className="col-auto">
                    <h1>{recipe.strMeal}</h1>
                    <h3>Ingredients</h3>
                    <ul>
                    {recipe.strIngredient1 && <li>{recipe.strIngredient1}</li>}
                    {recipe.strIngredient2 && <li>{recipe.strIngredient2}</li>}
                    {recipe.strIngredient3 && <li>{recipe.strIngredient3}</li>}
                    {recipe.strIngredient4 && <li>{recipe.strIngredient4}</li>}
                    {recipe.strIngredient5 && <li>{recipe.strIngredient5}</li>}
                    {recipe.strIngredient6 && <li>{recipe.strIngredient6}</li>}
                    {recipe.strIngredient7 && <li>{recipe.strIngredient7}</li>}
                    {recipe.strIngredient8 && <li>{recipe.strIngredient8}</li>}
                    {recipe.strIngredient9 && <li>{recipe.strIngredient9}</li>}
                    {recipe.strIngredient10 && <li>{recipe.strIngredient10}</li>}
                    {recipe.strIngredient11 && <li>{recipe.strIngredient11}</li>}
                    {recipe.strIngredient12 && <li>{recipe.strIngredient12}</li>}
                    {recipe.strIngredient13 && <li>{recipe.strIngredient13}</li>}
                    {recipe.strIngredient14 && <li>{recipe.strIngredient14}</li>}
                    {recipe.strIngredient15 && <li>{recipe.strIngredient15}</li>}
                    {recipe.strIngredient16 && <li>{recipe.strIngredient16}</li>}
                    {recipe.strIngredient17 && <li>{recipe.strIngredient17}</li>}
                    {recipe.strIngredient18 && <li>{recipe.strIngredient18}</li>}
                    {recipe.strIngredient19 && <li>{recipe.strIngredient19}</li>}
                    {recipe.strIngredient20 && <li>{recipe.strIngredient20}</li>}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Instructions</h3>
                    <p>{recipe.strInstructions}</p>
                </div>
            </div>

        
    </div>
    
  )
}

export default RecipeDetails
