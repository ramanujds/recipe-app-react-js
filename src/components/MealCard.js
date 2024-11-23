import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavoriteMeal } from '../store/favoriteMealsSlice';


const MealCard = ({meal, btnText, favoriteUpdater}) => {

  const navigate = useNavigate();
  
  const seeRecipe = ()=>{
    navigate(`/recipe/${meal.idMeal}`)
  }


  return (
    <div className="col-md-4">
        <Col key={meal.idMeal}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                   <Row>
                    <Col>
                    <Button onClick={()=>seeRecipe()} variant="primary">See Recipe</Button>
                    </Col>
                    <Col>
                    <Button variant={btnText==='Remove'?'danger':'success'} onClick={()=>favoriteUpdater(meal)}> {btnText}</Button>
                    </Col>
                    </Row>
               
                   
                </Card.Body>
            </Card>
        </Col>
    </div>
  )
}

export default MealCard
