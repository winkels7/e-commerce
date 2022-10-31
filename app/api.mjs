import express from "express";
const app = express();

app.get("/api/", (req, res) => {
    // abra no navegador o link http://localhost:3000/api
    const request = JSON.stringify({
        error: false,
        result: "Olá mundo isso é um teste",
    });
    res.send(request);
});

app.listen(3000);
