import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const CategoryCard = ({category}) => {
  const navigate = useNavigate();

  const browseMeals = ()=>{
    // write code to route to category/:category
    navigate(`/category/${category.strCategory}`)
  }

  return (
    
        <Col key={category.idCategory} style={{marginBottom: '20px'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={category.strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{category.strCategory}</Card.Title>
                    <Button onClick={()=>browseMeals()} variant="primary">Browse</Button>
                </Card.Body>
            </Card>
        </Col>
    
  )
}

// Higher Order Component

export const withVegetarianCategoryLabel = (CategoryCard) => {
return (props) => {
  return (
    <span>
    {/* <label className='text-success'>Vegetarian</label>   */}
    <CategoryCard {...props}/>
    </span>
    
  )
}
}

export default CategoryCard
