const express = require("express");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(
        `${req.method} ${req.url} ${new Date().toISOString()}`
    );
    next();
});
let tasks = [
    {
        id: 1,
        title: "Learn Express",
        completed: false
    },
    {
        id: 2,
        title: "Learn REST",
        completed: false
    }
];
app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});
app.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }
    res.status(200).json(task);
});
app.post("/tasks", (req, res) => {
    const { title, completed } = req.body;
    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: completed ?? false
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
    const { title, completed } = req.body;
    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }
    task.title = title;
    task.completed = completed ?? false;
    res.status(200).json(task);
});
app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }
    const deletedTask = tasks.splice(taskIndex, 1);
    res.status(200).json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
});
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});
app.listen(3000, () => {
    console.log("Server running");
});