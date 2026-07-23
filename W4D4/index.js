// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks when page loads
renderTasks();


// Add Button
document.getElementById("add").addEventListener("click", () => {

    let input = document.getElementById("input");
    let text = input.value.trim();

    if (text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks();
    renderTasks();

    input.value = "";
});


// Clear All Button
document.getElementById("delete").addEventListener("click", () => {

    tasks = [];

    saveTasks();
    renderTasks();

});


// Save Array into localStorage
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// Display Tasks
function renderTasks() {

    let ul = document.getElementById("tasks-list");

    ul.innerHTML = "";

    tasks.forEach((task, index) => {

        ul.innerHTML += `
            <li>
                ${task.text}

                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${index})"
                >
            </li>
        `;

    });

}


// Checkbox Click
function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

}