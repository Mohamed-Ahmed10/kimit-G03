import { useContext } from "react"
import { ProductsContext, ThemeContext } from "../App"

export default function Cart() {
    const theme = useContext(ThemeContext)
    const numOfProducts = useContext(ProductsContext)
    return (
        <div className={theme}>
            <h2>Cart</h2>
            <div>{numOfProducts}</div>
        </div>
    )
}
