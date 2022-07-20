const express = require('express');
const app = express();
const porta = 1500;
const carros = require('./exercise.js');

app.get('/filter/:modelo', (req, res) => {
    const modelo = req.params.modelo;
    const resultado = carros.filter((carro) => {
        return carro.modelo === modelo;
    });
    if(resultado.length > 0){
        res.send(resultado);
    }else{
        res.send(`Não encontramos nenhum carro para a marca: ${modelo}`);
    }
});

app.get('/filtro', (req, res) => {
    const marca = req.query.marca;
    const modelo = req.query.modelo;
    const cor = req.query.cor;
    const ano = req.query.ano;

    const resultado = carros.filter((carro) => {
        return carro.marca === marca ||
               carro.modelo === modelo ||
               carro.ano == ano ||
               carro.cor === cor;
    });
    if(resultado.length > 0){
        res.send(resultado);
    }else{
        res.send(`Não encontramos nenhum carro com as informações buscadas`);
    }
});

app.listen(porta, () => console.log('API está funcionando corretamente.'));