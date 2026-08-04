import { createContext, useContext, useState } from "react";
export const ThemeContext=createContext()
function ThemeProvider({children}){
    let [theme,setTheme]=useState("light")
    function toggle(){
        if(theme=="light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    return(
        <ThemeContext.Provider value={{theme,toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider