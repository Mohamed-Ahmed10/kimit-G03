import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    let [theme, setTheme] = useState("light");

    let toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme,  toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;