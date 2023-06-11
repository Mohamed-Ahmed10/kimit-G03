import "./App.scss";
import CourseView from "./components/CourseView";

function App() {
    var courses = [
        {
            courseName: "HTML",
            desc: "hyper"
        }
    ]
    return (
        <div className="text-center">
            <CourseView course_name="HTML" course_desc="HyperText markdfgnkpojytmfpov" />
            <CourseView course_name="JS" course_desc="This is programming language" />
            <CourseView course_name="React" course_desc="This is SPA" />
        </div>
    );
}

export default App;

