let btn=document.getElementById("add")
btn.addEventListener("click",()=>{
    let input=document.getElementById("input")
    let liText=input.value.trim()
    if(liText!=""){
        let ul=document.getElementById("ul")
        let li=document.createElement("li")
        li.innerText=liText
        ul.appendChild(li)
        input.value=""
    }
})
let scroll=document.getElementById("btn")
scroll.addEventListener("click",()=>{
    document.getElementById("field").scrollIntoView()
})