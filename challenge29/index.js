const express = require('express');
const app = express();
const PORT = 1500;
const users = require('./lists/users');

app.get('/', (req, res) => {
    res.send('Bem vindo a Logos Academy');
});

app.use('/relatorio/:id', (req, res, next) => {
    const id = req.params.id;
    const resultado = users.filter((user)=> {
        return user.id == id && user.admin == true;
    });
    if(resultado.lenght > 0){
        res.send('Carregando...');
        next('/relatorios');
    }else{
        res.send('Você não tem permissão para acessar esse serviço.');
    }
});

app.get('/relatorios', (req, res) => {
        res.send('Fazendo download do relatorio...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
});