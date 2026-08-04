import { useContext } from "react";
import { ThemeContext } from "../themeContext";
function Content(){
    return(
        <main>
            <p>The useContext Hook is a built-in React Hook that allows components to access shared data without passing props through every level of the component tree. This shared data, known as context, can include themes, user information, language preferences, authentication status, or any other application-wide state.

Before the Context API, data often had to be passed from a parent component to multiple child components using props. As applications grew larger, this process—called prop drilling—made code difficult to manage and maintain. The useContext Hook solves this problem by allowing any component wrapped inside a Context Provider to directly access the shared data.

In this project, useContext is used to manage a global light and dark theme. When the user clicks the theme toggle button, the shared theme state is updated inside the Theme Context. Every component that uses useContext automatically receives the new value and re-renders, causing the entire website to switch themes instantly without passing props between components.

Using useContext makes React applications cleaner, easier to maintain, and more scalable by centralizing shared state in one place.</p>
        </main>
    )
}
export default Content