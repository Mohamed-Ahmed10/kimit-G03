import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
export default function TodoFn() {

    let [todos, setTodos] = useState([]),
        [todo, setTodo] = useState("");

    let handleTodo = (ev) => {
        setTodo(ev.target.value)
    }

    let addTodo = () => {
        let newTodos = [...todos, todo];

        setTodos(newTodos);
        setTodo("")
    }
    return (
        <div>
            <h2>Todo function component</h2>
            <div className='m-4'>
                <Container className='m-4'>
                    <Row>
                        <Col md="9">
                            <Form.Control type="text" placeholder="Please enter your todo" onChange={handleTodo} value={todo} />
                        </Col>
                        <Col md="3">
                            <Button variant="primary" onClick={addTodo}>Add new task</Button>
                        </Col>
                        <Col md="12" className='py-4'>
                            {
                                todos.length === 0
                                    ?
                                    <Alert variant="info">
                                        There is no tasks here
                                    </Alert>
                                    :
                                    <ListGroup>
                                        {
                                            todos.map((todo, index) =>
                                                <ListGroup.Item key={index}>{todo}</ListGroup.Item>
                                            )
                                        }
                                    </ListGroup>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
