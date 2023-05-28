import React, {Component} from "react";

export default class ClassTest extends Component {
    myCourse = "React course";
    render() {
        return (
            <div>
                <h2>ClassTest</h2>
                {this.myCourse}
            </div>
        );
    }
}

export var x = 5;


// rcc 