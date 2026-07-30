import photo from "../assets/photo.jpg"
function Hero(){
    return(
        <header>
            <img src={photo}/>
            <div>
                <h1>Basim Ali</h1>
                <p>Software Engineering Student | MERN Stack Developer | UET Lahore</p>
            </div>
        </header>
    )
}
export default Hero