const express = require("express");
const server = express();
const shortid = require("shortid");

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});

server.use(express.json());

let users = [
    {
        id: shortid.generate(),
        name: "Jane Doe", 
        bio: "Not Tarzan's Wife, another Jane",
    }
]

server.get("/api/users", (req, res) => {
    res.status(200).json({ data: users});
});

server.post("/api/users", (req, res) => {
    const user = req.body;

    if(!user.name || !user.bio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    } else {
        users.push(user);
        res.status(200).json({ user: user })
    }

});