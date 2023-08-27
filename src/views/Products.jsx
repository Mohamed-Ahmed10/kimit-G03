import { useContext, useEffect, useState } from "react";
import SiteNav from "../layout/SiteNav";
import { Container, Row, Col } from "react-bootstrap";
import ViewProducts from "../components/ViewProducts";
import FilterMenu from "../components/FilterMenu";
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { ThemeContext } from "../context/ThemeContext";
import Button from 'react-bootstrap/Button';

export default function Products() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);

    const baseUrl = "http://localhost:1111";

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All")

    function getProducts() {
        fetch(`http://localhost:1111/products`).then(json => json.json()).then(res => setProducts(res))
    }

    function getCategories() {
        fetch(`http://localhost:1111/categories`).then(json => json.json()).then(res => setCategories(res))
    }

    let filterProducts = (category) => {
        fetch(`${baseUrl}/categories/${category}`).then(json => json.json()).then(res => setProducts(res))
        setSelectedCategory(category)
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])


    return (
        <div className={`text-center ${i18n.language === "ar" && "rtl"} ${theme.theme === "dark" && "dark"}`}>
            <SiteNav />

            <div className="m-4 p-4">
                <h2>{t('products')}</h2>
                <h3>{t('number_of_products')} : {products.length}</h3>
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
                                    <ViewProducts products={products} getProducts={getProducts}/>
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
