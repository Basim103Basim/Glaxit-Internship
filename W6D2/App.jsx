import Navbar from "./components/navbar";
import Header from "./components/header";
import Content from "./components/content";
import Sidebar from "./components/sidebar";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";
function App(){
  let {theme} =useContext(ThemeContext)
  return(
    <div className={theme}>
    <Header></Header>
    <Navbar></Navbar>
    <div id="box">
    <Sidebar></Sidebar>
    <Content></Content>
    </div>
    </div>
  )
}
export default App