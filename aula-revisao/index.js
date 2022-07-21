const express = require('express');
const app = express();
const PORT = 1500;
const users = require('./users');

app.use(express.json());//infortmando para o express que o body vem no formato de JSON

app.get('/', (req, res) => {
    return res.send({test: 'ok'});
});

app.get('/obrigatorio/:id', (req, res) => {
    const id = req.params.id;
    
    return res.send(`Você mandou o id: ${id}`);
});

app.get('/opcional', (req, res) => {
    const id = req. query.id;

    return res.send(`Você mandou o id: ${id}`);
});

app.post('/methodpost', (req, res) => {
    const body = req.body;

    return res.send(body);
});

app.post('/users', (req, res) => {
    const body = req.body;

    if(body){
        users.push(body);
    }
    return res.send(users);
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;

    const usersId = users.map((user) => user.id);
    const index = usersId.indexOf(id);

    if(index != -1){
        users[index] = {
            ...users[index],
            ...body
        }
        return res.send(users);
    }
    else{
        res
        .status(404)
        .json({ status: 404, errorMessage: 'Usuário não encontrado!'});
    }
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const usersId = users.map((user) => user.id);
    const index = usersId.indexOf(id);

    if(index != -1){
        const resultado = users.filter((user) => user.id != id);
        return res.send(users);
    }
    else{
        res
        .status(404)
        .json({ status: 404, errorMessage: 'Usuário não encontrado!'});
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
});