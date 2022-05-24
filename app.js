const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const Evento     = require('./models/evento');
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`);

});

// body parser
app.use(bodyParser.urlencoded({ extended: false}));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// db connection
db
.authenticate()
.then(() => {
    console.log("Conectou ao banco com sucesso");
})
.catch(err => {
    console.log("ocorreu um erro ao conectar", err);

});

// routes
app.get('/', (req, res) => {

    let search = req.query.evento;
    let query  = '%'+search+'%';

    if(!search) {
        Evento.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(eventos => {
            
            res.render('index', {
            eventos
        });
    })
    .catch(err => console.log(err));
    } else {
        Evento.findAll({
            where: {title: {[Op.like]: search}},
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(eventos => {
            
            res.render('index', {
            eventos
        });
    })

    .catch(err => console.log(err));
    }

});

// eventos routes
app.use('/eventos', require('./routes/eventos'));
