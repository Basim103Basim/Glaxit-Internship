let btn=document.getElementById("menu")
let show=false
btn.addEventListener("click",()=>{
    let sidebar=document.getElementById("sidebar")
    let msg=document.getElementById("msg")
    if(!show){
        sidebar.style.left="0vw"
        btn.style.left="26vw"
        msg.style.visibility="hidden"
        show=true
    }
    else{
        sidebar.style.left="-100vw"
        msg.style.visibility="visible"
        btn.style.left="1vw"
        show=false
    }
})
//msg
let MSG=document.getElementById("msg")
let h=String(new Date().getHours())
if(h<12 && h>=0){
    MSG.innerText="Good Morning"
}
else if(h>=12 && h<17){
    MSG.innerText="Good Afternoon"
}
else if(h>=17 && h<19){
    MSG.innerText="Good Evening"
}
else{
    MSG.innerText="Good Night"
}