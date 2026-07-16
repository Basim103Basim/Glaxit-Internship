let btn=document.getElementById("sumbit")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
    let form=document.getElementById("form")
    data=new FormData(form)
    let username=data.get("username").trim()
    let password=data.get("password")
    let confirm=data.get("confirm")
    if(username==""){
        document.getElementById("msg").innerText="Enter username!"
    }
    else if(password.length<8){
        document.getElementById("msg").innerText="Password cant be less than 8 charachters!"
    }
    else if(password!=confirm){
        document.getElementById("msg").innerText="Passwords didnt match!"
    }
    else{
        document.getElementById("msg").innerText="Form submitted successfully!"
        setTimeout(()=>{
            form.submit()
        },2000)
    }
})