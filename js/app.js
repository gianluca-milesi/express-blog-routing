const express = require("express");
const app = express();
const port = 3000;

const posts = require("./posts.js");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
    res.json({
        count: posts.length,
        AllPosts: posts
    });
});


app.listen(port, () => {
    console.log(`Server port: ${port}`);
});