const express = require("express");
const app = express();
const port = 3000;

const posts = require("./posts.js");
app.use(express.static("public"));


// app.get("/bacheca", (req, res) => {
//     res.json({
//         count: posts.length,
//         AllPosts: posts
//     });
// });


//Index
app.get("/posts", (req, res) => {
    res.send("Elenco delle pizze");
});

//Show
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Ecco la pizza con id: ${id}`);
});

//Store
app.post("/posts", (req, res) => {
    res.send("Creo una nuova pizza");
});

//Update
app.put("/posts/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Aggiorno la pizza con id: ${id}`);
});

//Modify
app.patch("/posts/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Modifico la pizza con id: ${id}`);
});

//Destroy
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Elimino la pizza con id: ${id}`);
});




app.listen(port, () => {
    console.log(`Server port: ${port}`);
});