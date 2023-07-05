import React, { Component } from 'react';

export default class About extends Component {

    state = {
        show: true,
        task: "",
        products : []
    }

    handleShow = () => {
        this.setState({ show: !this.state.show })
    }

    handleTask = (ev) => {
        this.setState({ task: ev.target.value })
    }

    componentDidMount() {
        console.log("Rendered")
    }

    componentDidUpdate() {
        console.log("Updated")
    }

    componentWillUnmount() {
        console.log("Component died")
    }

    render() {
        return (
            <div>
                <hr />
                <button onClick={this.handleShow}>{this.state.show ? "Hide" : "Show"}</button>
                <br /><br /><br />
                {this.state.show &&
                    <>
                        <input type="text" value={this.state.task} onChange={this.handleTask} />
                    </>
                }
            </div>
        )
    }
}
