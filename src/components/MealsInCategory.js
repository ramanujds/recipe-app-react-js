import React, { useEffect } from 'react'
import Meal from './MealCard';
import { useNavigate, useParams } from 'react-router-dom';
import MealCard from './MealCard';
import { useDispatch } from 'react-redux';
import { addFavoriteMeal } from '../store/favoriteMealsSlice';

const MealsInCategory = () => {

    // read the category from the URL

    const {category} = useParams()

    const navigate = useNavigate();

    const [meals, setMeals] = React.useState([]);

    useEffect(() => {
        fetchMeals()
    }, [])

    const fetchMeals = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
        const data = await response.json()
        setMeals(data.meals)
    }

    const dispatch = useDispatch();

  const addAsFavorite = (meal)=>{
    // code to dispatch an action to add meal to favorites
      dispatch(addFavoriteMeal(meal));
      navigate('/favorites');
      
  }


  return (
    <div>
        <h1>{category}</h1>
        <div className="row">
            {meals.map(meal => (
                <MealCard meal={meal} btnText={'+ Favorite'} favoriteUpdater={addAsFavorite} />
            ))}
        </div>


      
    </div>
  )
}

export default MealsInCategory
