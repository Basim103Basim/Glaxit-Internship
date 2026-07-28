const faqs = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library used for building interactive user interfaces using reusable components."
    },
    {
        question: "Why should I use React?",
        answer: "React makes applications easier to organise by splitting the interface into small reusable components."
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. React converts it into regular JavaScript."
    },
    {
        question: "What is useState?",
        answer: "useState is a React Hook that stores data inside a component. Whenever that data changes, React updates the interface automatically."
    },
    {
        question: "What are props?",
        answer: "Props are values passed from a parent component to a child component, allowing components to reuse the same structure with different data."
    },
    {
        question: "Why does React use keys?",
        answer: "Keys help React identify which items have changed, been added, or removed when rendering lists efficiently."
    },
    {
        question: "Can a component have multiple states?",
        answer: "Yes. A component can call useState multiple times to manage different pieces of information independently."
    },
    {
        question: "What happens when state changes?",
        answer: "When state changes, React re-renders the component so the user interface always reflects the latest data."
    }
];
import { useState } from "react";
function FAQbox(){
    const [openIndex,setOpenIndex]=useState(null)
    return(
        faqs.map((faq,index)=>(
            <div id="Box" key={index} onClick={()=>{
                setOpenIndex(index)
            }}>           
            <p className="questionBox">{faq.question}</p>
            {
                openIndex==index&&<p className="answerBox">{faq.answer}</p>
            }
            </div>
        ))
    )
}
export default FAQbox