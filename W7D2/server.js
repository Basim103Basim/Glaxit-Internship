const express = require("express");
const app = express();
app.use(express.json());
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Learn Node.js" }
];
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
app.post("/tasks", (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});
app.put("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.title = req.body.title;

    res.json(task);
});
app.delete("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const taskExists = tasks.some(task => task.id === id);

    if (!taskExists) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task deleted successfully"
    });
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});