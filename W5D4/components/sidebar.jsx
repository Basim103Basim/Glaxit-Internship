import {NavLink} from "react-router-dom"
function Sidebar(){
    return(
        <section id="sidebar">
            <NavLink to="/" className={({isActive})=>isActive?"active":""}>🏠Home</NavLink>
            <NavLink to="/skills" className={({isActive})=>isActive?"active":""}>🛠️Skills</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive?"active":""}>💼Contact</NavLink>
            <NavLink to="/projects" className={({isActive})=>isActive?"active":""}>📞Projects</NavLink>
        </section>
    )
}
export default Sidebar