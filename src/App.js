import "./App.scss";
import FAQ from "./components/FAQ";
import Product from "./components/Product";
import HomePage from "./views/Homepage";
import Alert from 'react-bootstrap/Alert';
import ProductsView from "./views/ProductsView";
import Loop from "./components/Loop";

function App() {
    var myCourse = "React course";
    return (
        <div className="App test">
            {/* <HomePage />
            <FAQ /> */}

            {/* <ProductsView /> */}
            <Loop />
        </div>
    );
}

export default App;
