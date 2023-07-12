import { createContext, useState } from "react";
import "./App.scss";
import HomePage from "./views/HomePage";
import { Route, Routes } from "react-router-dom";
import SiteNav from "./layout/SiteNav";
import Cart from "./components/Cart";
import Error from "./components/Error";

export const ThemeContext = createContext();
export const ProductsContext = createContext()

function App() {

    const [theme, setTheme] = useState("light");
    let [numOfProducts, setNumOfProducts] = useState(localStorage.getItem("products") ? localStorage.getItem("products") : 0)


    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const handleProducts = () => {
        setNumOfProducts(++numOfProducts)
        localStorage.setItem("products", numOfProducts)
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ProductsContext.Provider value={numOfProducts}>
                <h1>Home page</h1>
                <button onClick={handleTheme}>Change theme to {theme === "light" ? "dark" : "light"}</button>
                <hr />
                <button onClick={handleProducts}> +1</button>
                <h4> {numOfProducts}</h4>
                <hr />
                <SiteNav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </ProductsContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;