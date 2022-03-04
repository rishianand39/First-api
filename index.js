const express = require("express");
const app = express();

app.get("", function(req, res) {
    res.send({ str: "hello" })
})
app.get("/books", function(req, res) {
    res.send({ books1: "Do or Die", books2: "The Great Gatsby.", books3: "A Passage to India", books4: "Invisible Man", })
})



app.listen(4000, () => {
    console.log("listening on 4000")
})