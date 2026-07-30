import { BrowserRouter,Routes,Route } from "react-router-dom"
import Hero from "./components/hero"
import Sidebar from "./components/sidebar"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Projects from "./pages/projects"
import Skills from "./pages/skills"
function App(){
    return(
        <BrowserRouter>
            <Hero></Hero>
            <Sidebar></Sidebar>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/skills" element={<Skills></Skills>}/>
                <Route path="/contact" element={<Contact></Contact>}/>
                <Route path="/projects" element={<Projects></Projects>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App