import React, { useState } from 'react'

export default function RespondingToEvents() {

    var [courseName, setCourseName] = useState("React")

    let handleClick = () => {
        console.log("Clicked")
    }
    let handleCourse = (event) => {
        // courseName = event.target.value; WRONG
        setCourseName(event.target.value)
        console.log(courseName)
    }
    return (
        <div>
            <h2>RespondingToEvents</h2>
            <input type="text" placeholder='Enter your course name' onChange={handleCourse} />
            <div className='m-3'>{courseName}</div>
            <button onClick={handleClick}>Click me in function</button>
        </div>
    )
}
