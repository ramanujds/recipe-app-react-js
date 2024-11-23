import { useEffect, useState } from "react";

const useCategories = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetchCategory()
    }, [])

    const fetchCategory = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data = await response.json()
        // const categories = data.categories.slice(1) // removed beef category
        setCategory(data.categories)
    }

        return categories;
    
    }

export default useCategories;