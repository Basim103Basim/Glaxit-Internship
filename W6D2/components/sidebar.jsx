import { useContext } from "react";
import { ThemeContext } from "../themeContext";
function Sidebar(){
    return(
        <aside>
            <p>React</p>
            <p>Node</p>
            <p>Express</p>
            <p>Angular</p>
            <p>Next</p>
        </aside>
    )
}
export default Sidebar