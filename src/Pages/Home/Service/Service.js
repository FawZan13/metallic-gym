import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Col className="my-5 text-center text-white">
            <Card border="primary" className="bg-danger" style={{ width: '18rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;