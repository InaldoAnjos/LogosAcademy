const express = require('express');
const app = express();
const PORT = 1500;

app.get('/', (req, res) => {
    res.send('Bem vindo a Logos Academy');
});

app.use((req, res, next) => {
    if(req.headers.host == 'localhost:1500'){
        res.send('Você não tem permissão para acessar esse serviço.');
    }
    next();
});

app.get('/relatorio', (req, res) => {
    res.send('Fazendo download do relatorio...');
});

app.get('/relatorio-com-filtro', (req, res) => {
    res.send('Fazendo download do relatório...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
})