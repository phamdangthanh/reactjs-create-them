import { createContext, useState } from "react";

const ThemeLoggin = createContext()

function Provider ({ children }) {
    const [open, setOpen] = useState(null)
 

    const handleClick = () => {
        setOpen('open')
    }


    const value = {
        open,
        handleClick,
        setOpen,
    }


    return (
        <ThemeLoggin.Provider value={value}>
            {children}
        </ThemeLoggin.Provider>
    )
}
export {ThemeLoggin}
export default Provider