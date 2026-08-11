const fs = require("fs");
fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let users = JSON.parse(data);
    users.push({
        name: "Muawiyah II",
        reign: "683-684"
    });
    let updatedData = JSON.stringify(users);
    fs.writeFile("users.json", updatedData, "utf8", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("User added successfully");
    });
});