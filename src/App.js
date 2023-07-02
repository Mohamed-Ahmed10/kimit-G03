import "./App.scss";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Persons from "./components/persons";
import RecipeList from "./components/Recipe";
function App() {
    return (
        <div className="text-center">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={ <Contact />} />
                <Route path="/persons" element={ <Persons />} />
                <Route path="/recipe" element={ <RecipeList />} />
            </Routes>
        </div>
    );
}

export default App;