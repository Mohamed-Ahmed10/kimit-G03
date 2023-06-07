import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default class TodoClass extends Component {

    state = {
        todos: ["one", "Two", "three"],
        newTodo: ""
    }

    handleTodo = (ev) => {
        this.setState({ newTodo: ev.target.value })
    }

    addTodo = () => {
        let newTodos = [...this.state.todos, this.state.newTodo];

        this.setState({ todos: newTodos })

    }
    render() {
        return (
            <div className='m-4'>
                <h2>Todo list in class based component</h2>
                <Container className='m-4'>
                    <Row>
                        <Col md="9">
                            <Form.Control type="text" placeholder="Normal text" onChange={this.handleTodo} />
                        </Col>
                        <Col md="3">
                            <Button variant="primary" onClick={this.addTodo}>Add new task</Button>
                        </Col>
                        <Col md="12" className='py-4'>
                            <ListGroup>
                                {
                                    this.state.todos.map((todo, index) =>
                                        <ListGroup.Item key={index}>{todo}</ListGroup.Item>
                                    )
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
