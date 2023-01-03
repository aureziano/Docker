require("dotenv").config();


// require('dotenv/config');
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require('path');
// const routes = require("./app/routes/turorial.routes");

// require('dotenv').config({  
//   path: process.env.NODE_ENV === "test" ? ".env.sample" : "../.env"
// });
// require('dotenv').config({ path: path.join(__dirname, '../.env') });
//console.log(process.env.NODE_ENV) // dev
//console.log(process.env.NODE_ENV === 'dev') // false
//console.log(process.env.NODE_ENV.length) // 4 (including a space at the end) 
const app = express();
app.use(express.favicon(path.join(__dirname, 'public','images','favicon.ico'))); 
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//require do bodyparser responsável por capturar valores do form
const bodyParser = require("body-parser");

const { resolveSoa } = require('dns');
//criando a sessão
app.use(session({ secret: "ssshhhhh" }));

//definindo pasta pública para acesso
app.use(express.static('public'))

//config engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));

//config bodyparser para leitura de post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/help", (req, res) => {
  res.json({ message: "Welcome to aureziano application." });
});

//rota padrao
app.get('/', (req, res) => {
  var message = ' ';
  req.session.destroy();
  res.render('views/registro', { message: message });
});

//rota para registro
app.get('/views/registro', (req, res) => {
  res.redirect('../');
  //res.render('views/registro', {message:message});
});

//rota para login
app.get("/views/login", function (req, res) {
  var message = ' ';
  res.render('views/login', { message: message });
});




app.get("/calc", (req, res) => {

})

// app.use("/",routes);
require("./app/routes/turorial.routes")(app);
require("./app/routes/user.routes")(app);

db.sequelize.sync(() => console.log('Banco de dados conectado: ${process.env.MYSQLDB_DATABASE}'));





// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
