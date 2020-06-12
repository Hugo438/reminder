const express = require ('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');


//Config
    // Configurando template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Configuração Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas
app.get('/usuarios/cadastro', (req, res) => {
    res.render('usuarios/cadastro');
});

app.post('/usuarios/cadastro', (req, res) => {
    console.log(req.body);
    res.send("Nome: " + req.body.txt_nome + "<br>Sobrenome: " + req.body.txt_sobrenome + "<br>Telefone: " + req.body.txt_telefone + "<br>Status: " + req.body.rdo_status);
});


// Iniciando server
app.listen(8081, () => {
    console.log('Servidor rodando');
});