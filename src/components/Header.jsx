import { useContext } from "react"
import { ThemeContext } from "../App"

export default function Header() {

    const theme = useContext(ThemeContext)

    return (
        <div className={theme}>
            <h3>Header</h3>
        </div>
    )
}
