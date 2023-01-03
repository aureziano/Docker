module.exports = app => {
  const usuarios = require("../controllers/user.controller.js");

  var router = require("express").Router();

  //rota para home
  router.get("/views/home", usuarios.findEmail);

  //método post do register
  router.post('/register', usuarios.createverifica); 

  router.post('/log', usuarios.log);

  router.get("/todos", usuarios.findAllTudo);


  // Create a new Usuario
  router.post("/", usuarios.create);

  // Retrieve all usuarios
  router.get("/", usuarios.findAll);

  // Retrieve all published usuarios
  router.get("/usuarios", usuarios.findAllUsuarios);

  // Retrieve a single Usuario with id
  router.get("/:id", usuarios.findOne);

  // Update a Usuario with id
  router.put("/:id", usuarios.update);

  // Delete a Usuario with id
  router.delete("/:id", usuarios.delete);

  // Delete all usuarios
  router.delete("/", usuarios.deleteAll);

  app.use('/', router);
};






// app.post('/update', function (req, res){
//   //pega os valores digitados pelo usuário
  
//   console.log("entrou");
  
//   var email = req.body.email;
//   var pass = req.body.pwd;
//   var username = req.body.nome;
//   var idade = req.body.idade;
//   //conexão com banco de dados
//   var con = conectiondb();
//   //query de execução
//   var query = 'UPDATE users SET username = ?, pass = ?, idade = ? WHERE email LIKE ?';
  

//   //execução da query
//   con.query(query, [username, pass, idade, req.session.user], function (err, results){
      
//       var query2 = 'SELECT * FROM users WHERE email LIKE ?';
//       con.query(query2, [req.session.user], function (err, results){
//           res.render('views/home', {message:results});    
//       });
      
//   });
// });

// app.post('/delete', function (req, res){
//   //pega os valores digitados pelo usuário
  
//   var username = req.body.nome;
  
//   //conexão com banco de dados
//   var con = conectiondb();
//   //query de execução
//   var query = 'DELETE FROM users WHERE email LIKE ?';
  

//   //execução da query
//   con.query(query, [req.session.user], function (err, results){
//       res.redirect ('/');
//   });
// });

// termina aqui