import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="container">
            <span className="text-muted">Easy Recipe 2024</span>
            <p>Credits: <a href="https://www.themealdb.com/api.php">The Meal DB</a></p>
            <p>Created by: <a href="https://www.linkedin.com/in/ramanujdas/">Ramanuj Das</a></p>
            <p className='text-small'>For educational purposes only</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
