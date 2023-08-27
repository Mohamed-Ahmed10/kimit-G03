import SiteNav from "../layout/SiteNav";
import Button from 'react-bootstrap/Button';
import { Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddNewProduct() {

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState("")
    let [description, setDescription] = useState("")
    let navigate = useNavigate()

    let handleProductData = ev => {
        ev.target.name === "title"
            ? setTitle(ev.target.value)
            : ev.target.name === "price"
                ? setPrice(ev.target.value)
                : ev.target.name === "description" &&
                setDescription(ev.target.value);
    };

    async function postData() {
        const response = await fetch(`http://localhost:1111/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                price,
                description
            })
        });
        return response.json();
    }


    let handleEditProduct = (ev) => {
        postData();
        ev.preventDefault();
        navigate("/products");
    }

    return (
        <div className="text-center">
            <SiteNav />
            <h2 className="margin-top">AddNewProduct</h2>
            <div>
                <SiteNav />
                <Container className="mainContent text-center">
                    <Form
                        className="w-50 mx-auto"
                        onSubmit={handleEditProduct}
                    >
                        <br />
                        <br />
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleProductData}
                        />
                        <br />
                        <br />
                        <Form.Control
                            type="number"
                            name="price"
                            placeholder="Price"
                            onChange={handleProductData}
                        />
                        <br />
                        <br />
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Description"
                        >
                            <Form.Control
                                name="description"
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "100px" }}
                                onChange={handleProductData}
                            />
                        </FloatingLabel>
                        <Button variant="primary" type="submit" className="m-3">
                            OK
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}
