async function getUsers() {
    let main = document.getElementById("main");

    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json();

        main.innerHTML = "";

        users.forEach(user => {
            main.innerHTML += `
                <div class="cards">
                    <h1 class="card-name">${user.name}</h1>
                    <p class="card-username">${user.username}</p>
                    <p class="card-email">${user.email}</p>
                </div>
            `;
        });
    }
    catch (err) {
        console.error(err);

        // Fallback UI
        main.innerHTML = `
            <div class="error">
                <h2>⚠ Failed to load users.</h2>
                <p>Please try again later.</p>
            </div>
        `;
    }
}

// Call the function
getUsers();


// Button
let clicked = false;
let btn = document.getElementById("menu");

btn.addEventListener("click", () => {
    if (!clicked) {
        document.getElementById("sidebar").style.animation = "slideIn 1s forwards";
        document.getElementById("main").style.filter = "blur(10px)";
        clicked = true;
    }
    else {
        document.getElementById("sidebar").style.animation = "slideBack 1s forwards";
        document.getElementById("main").style.filter = "blur(0)";
        clicked = false;
    }
});