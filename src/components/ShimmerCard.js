import React from 'react'
import './Shimmer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';

const ShimmerCard = () => {
  return (
    <Col style={{marginBottom: '20px'}}>
            <Card style={{ width: '18rem' }}>
                <div className="shimmer-wrapper">
                    <div className="shimmer"></div>
                </div>
                <Card.Body>
                    <div className="shimmer-wrapper">
                        <div className="shimmer"></div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
  )
}

export default ShimmerCard
