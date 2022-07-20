const express = require('express'); //importa a biblicoteca express
const app = express(); //instancia a biblioteca na variável app
const PORT = 1500;

app.get("", (req, res) => {
    res.send("Hello World!")
});

app.get("/filtro/:imovel", (req, res) => {
    console.log(req.params.imovel);
    res.send("Bem vindo a tela filtro!")
});

app.get("/filtro", (req, res) => {
    console.log(req.query.imovel);
    res.send("Bem vindo a tela filtro!(2)")
});

app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
}); //localhost:1500 - 0.0.0.1:1500 - 127.0.0.1:1500