import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function ViewProducts({ products }) {
    return (
        <>
            {
                products.map((product) =>
                    <Col key={product.id} sm={12} md={6} lg={4} className="card-group">
                        <Card className="m-2">
                            <Card.Img variant="top" src={product.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.price} $</Card.Text>
                                <small className="text-muted">{product.brand}</small>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`./${product.id}`} className="btn btn-primary mx-2">View more</Link>
                                <Button variant="success" className="mx-2">Add to cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            }
        </>
    )
}
