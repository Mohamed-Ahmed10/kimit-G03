const Loop = () => {
    var courses = [
        { name: "HTML", description: "HyperText markup language", id: 1 },
        { name: "CSS", description: "Cascading stylesheet", id: 2 },
        { name: "Javascript", description: "Programming language", id: 3 },
        { name: "React", description: "SPA", id: 4 },
    ]


    const coursesView = courses.map((course) =>
        <div key={course.id} className="text-center m-2">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <hr />
        </div>
    )
    
    return (
        <div>
            {coursesView}
        </div>
    );
}

export default Loop;