import { Col, Container, Row } from "react-bootstrap";
import SiteNav from "../layout/SiteNav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { createRef, useState } from "react";


export default function Todo() {

    const [tasks, setTasks] = useState(["one", "two", "three"]);
    const [task, setTask] = useState("")
    let inputRef = createRef();

    let handleTask = (event) => {
        setTask(event.target.value)
    }

    let addNewTask = () => {
        let newTasks = [...tasks, task];
        setTasks(newTasks)
        setTask("")
        inputRef.current.focus()
    }
    return (
        <div>
            <SiteNav />
            <h2 className="text-center m-4">Todo</h2>

            <Container className="text-center m-4">
                <Row>
                    <Col sm={9}>
                        <Form.Control type="text" value={task} onChange={handleTask} ref={inputRef} placeholder="Enter email" />
                    </Col>
                    <Col sm={3}>
                        <Button variant="primary" onClick={addNewTask}>
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <ListGroup className="my-4">
                            {
                                tasks.map((task, index) =>
                                    <ListGroup.Item key={index}>{task}</ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
