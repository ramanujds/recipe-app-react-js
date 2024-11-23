import React from 'react'
import useConnectionStatus from '../utils/useConnectionStatus';
import useCategories from '../utils/useCategory';
import CategoryCard, { withVegetarianCategoryLabel } from './CategoryCard';
import Shimmer from './Shimmer';


const Categories = () => {

    const connectionStatus = useConnectionStatus();
    const VegetarianCategoryCard = withVegetarianCategoryLabel(CategoryCard);

    const categories = useCategories();

    if (!connectionStatus) {
        return <>
        <h1>Sorry, you are offline</h1>
        <Shimmer />
        </>
    }



    return (
    categories?.length === 0 ? <Shimmer /> :
        <div className="row">
            {categories.map(category => {
                
  /*              if(category.strCategory.includes('Vegetarian') || category.strCategory.includes('Vegan')){
                    return <div className="col-md-4"><VegetarianCategoryCard category={category} /></div>
                }
*/
               return (<div className="col-md-4"><CategoryCard category={category} /></div>)
            }
            )}


        </div>

    )

}

export default Categories
