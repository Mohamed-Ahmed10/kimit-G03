import React, { Component } from 'react'

export default class RespondingToEventsClass extends Component {


    state = {
        name: "John",
    }

    handleClick = () => {
        console.log("Clicked")
        console.log(this)
    }

    handleChange = (ev) => {
        this.setState({ name: ev.target.value })
    }

    render() {
        return (
            <div>
                <h2>RespondingToEventsClass</h2>
                <input type="text" placeholder='Please enter your name' onChange={this.handleChange} value={this.state.name} />
                <div className='m-2'>{this.state.name}</div>
                <button onClick={this.handleClick}>Click me in class</button>
            </div>
        )
    }
}
// One way data binding
// Two ways data binding