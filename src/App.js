import logo from "./logo.svg";
import "./App.css";
import SiteNav from "./components/SiteNav";
import ClassTest, {x} from "./components/ClassTest";
import Condition from "./components/Condition";
function App() {
    var myCourse = "React course";
    return (
        <div className="App" style={{backgroundColor:'#cee'}}>
            {/* <img src={logo} alt="" width="200" />
            Hello React
            <h2> {myCourse} </h2>
            <hr />
            {x} */}
            {/* <SiteNav/> */}
            {/* <ClassTest /> */}
            <Condition />
        </div>
    );
}

export default App;
