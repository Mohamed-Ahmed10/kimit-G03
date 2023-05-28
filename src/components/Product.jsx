import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../logo.svg"

function Product() {
    return (
        <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>React course</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;