import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'


export default function ViewProducts({ products, getProducts }) {


    let deleteProduct = (product) => {
        Swal.fire({
            icon: 'error',
            title: 'Are you sure you delete',
            text: `${product.title}`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:1111/products/${product.id}`, { method: 'DELETE' })
                    .then((res) => res.json())
                    .then(getProducts);
            }
        })
    }
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
                            <Card.Footer className="d-flex flex-column gap-2">
                                <Link to={`./${product.id}`} className="btn btn-primary mx-2">View more</Link>
                                <Button variant="success" className="mx-2">Add to cart</Button>

                                <Button variant="danger" className="mx-2" onClick={() => deleteProduct(product)}>Delete</Button>
                                <Link to={`./edit/${product.id}`} className="btn btn-info mx-2">Edit</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            }
        </>
    )
}
