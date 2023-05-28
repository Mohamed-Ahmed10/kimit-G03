import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product";

export default function ProductsView() {
    return (
        <div>
            <h1 className="text-center m-4">Products</h1>
            <Container>
                <Row>
                    
                    <Col lg="3" md="6" sm="12">
                        <Product/>
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <Product/>
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <Product/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
