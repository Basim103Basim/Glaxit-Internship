import logo from "./LOGO.png"
function Navbar(){
    return(
        <nav>
            <img src={logo}/>
            <p>Home</p>
            <p>Story</p>
            <p>World</p>
            <p>Contact</p>
        </nav>
    )
}
export default Navbar