import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProducts(response.data)
        })
    }, [])
    return (
        <div>
            <h1>Products</h1>
            <Container>
                <Row>
                    {
                        products.map((product) =>
                            <Col sm={4} key={product.id}>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>         
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}
