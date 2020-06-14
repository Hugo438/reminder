// Carregando módulos
    const express       = require('express');
    const handlebars    = require('express-handlebars');
    const bodyParser    = require('body-parser');
    //const mongoose      = require('mongoose');
    const app = express();
    const path = require('path');

// Carregando arquivos de rotas
const usuarios = require('./routes/usuarios');

// Configurações
    // Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Mongoose

    // Arquivos staticos
    app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.get('/', (req, res) => {
    res.render('admin/index');
});

app.use('/usuarios', usuarios);

// Iniciando server
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta: " + PORT);
});