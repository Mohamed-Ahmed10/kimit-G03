import { useEffect, useState } from "react";
import SiteNav from "../layout/SiteNav";
import { Container, Row, Col } from "react-bootstrap";
import ViewProducts from "../components/ViewProducts";
import FilterMenu from "../components/FilterMenu";
import Spinner from 'react-bootstrap/Spinner';


export default function Products() {


    const baseUrl = "https://dummyjson.com/products";

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All")

    function getProducts() {
        fetch(baseUrl).then(json => json.json()).then(res => setProducts(res.products))
    }

    function getCategories() {
        fetch(`${baseUrl}/categories`).then(json => json.json()).then(res => setCategories(res))
    }

    let filterProducts = (category) => {
        fetch(`${baseUrl}/category/${category}`).then(json => json.json()).then(res => setProducts(res.products))
        setSelectedCategory(category)
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    return (
        <div className="text-center">
            <SiteNav />
            <div className="m-4">
                <h2>Products</h2>
                <h3>Number of products : {products.length}</h3>
                <Container>
                    <Row className="d-flex justify-content-center">
                        {
                            products.length > 0
                                ?
                                <>
                                    <Col sm={12}>
                                        <FilterMenu
                                            categories={categories}
                                            selectedCategory={selectedCategory}
                                            getProducts={getProducts}
                                            filterProducts={filterProducts} />
                                    </Col>
                                    <ViewProducts products={products} />
                                </>
                                :
                                <Spinner animation="border" role="status" className="m-4">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}
