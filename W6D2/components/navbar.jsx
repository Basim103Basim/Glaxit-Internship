import { useContext } from "react"
import {ThemeContext} from "../themeContext"
import { FaSun,FaMoon } from "react-icons/fa"
function Navbar(){
    let {theme,toggle}=useContext(ThemeContext)
    return(
        <nav>
            <p>Home</p>
            <p>JS</p>
            <p>About</p>
            {theme=="light"?<FaSun onClick={toggle} size={20} color="rgb(163, 160, 160)"></FaSun>:
            <FaMoon onClick={toggle} size={20} color="rgb(163, 160, 160)"></FaMoon>
            }
            
        </nav>
    )
}
export default Navbar