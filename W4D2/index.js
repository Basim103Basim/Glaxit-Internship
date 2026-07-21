fetch("https://jsonplaceholder.typicode.com/users?_limit=103")
.then(response=>response.json())
.then(users=>{
    let main=document.getElementById("main")
    users.forEach(user=>{
        main.innerHTML+=
        `
        <div class="cards">
            <h1 class="card-name">${user.name}</h1>
            <p class="card-username">${user.username}</p>
            <p class="card-email">${user.email}</p>
        </div>
        `
    })
})
.catch(err=>{
    console.log(err)
})
//button
let clicked=false
let btn=document.getElementById("menu")
btn.addEventListener("click",()=>{
    if(!clicked){
        document.getElementById("sidebar").style.animation="slideIn 1s forwards"
        document.getElementById("main").style.filter="blur(10px)"
        clicked=true
    }
    else{
        document.getElementById("sidebar").style.animation="slideBack 1s forwards"
        document.getElementById("main").style.filter="blur(0)"
        clicked=false
    }
})
