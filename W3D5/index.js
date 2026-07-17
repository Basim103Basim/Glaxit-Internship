let input=document.getElementById("input")
let add=document.getElementById("add")
let remove=document.getElementById("delete")
add.addEventListener("click",()=>{
    let text=input.value.trim()
    let ul=document.getElementById("tasks-list")
    if(text!=""){
        ul.innerHTML+=
        `
        <li>
        ${text} <input type="checkbox">
        </li>
        `
        input.value=""
    }
})
remove.addEventListener("click",()=>{
    let ul=document.getElementById("tasks-list")
    ul.innerHTML=""
})
