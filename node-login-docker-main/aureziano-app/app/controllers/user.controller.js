const { BOOLEAN } = require("sequelize");
const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Usuario
  const usuario = {
    nome: req.body.nome,
    pwd: req.body.pwd,
    email: req.body.email,
    idade: req.body.idade
  };

  // Save Usuario in the database
  Usuarios.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario."
      });
    });
};

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Usuarios.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarios."
      });
    });
};

// Find a single Usuario with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuarios.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Usuario with id=" + id
      });
    });
};

// Find a Email
exports.findEmail = (req, res) => {
  if (req.session.user) {
    const email = req.params.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
    Usuarios.findAll({ where: condition })
      .then(data => {
        res.send(data);
        res.render('views/home', { message: data.nome });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Usuario with id=" + email
        });
      });

  } else {
    res.redirect("/");
  }


};

exports.createverifica = (req, res) => {
  // Create a Usuario
  const usuario = {
    nome: req.body.nome,
    pwd: req.body.pwd,
    email: req.body.email,
    idade: req.body.idade
  };
  var condition = usuario.email ? { email: { [Op.like]: `%${usuario.email}%` } } : null;
  Usuarios.findAll({ where: condition })
    .then(data => {
      if (data.length > 0) {
        var message = 'E-mail já cadastrado';
        res.render('views/registro', { message: message });
      }
      else {
        Usuarios.create(usuario)
          .then(data => {
            res.send(data);
            console.log("Usuario adicionado com email " + usuario.email);
            var message = "ok";
            res.render('views/login_sucess', { message: message });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Usuario."
            });
          });

      }

    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Usuario with id=" + usuario.email
      });
    });
};

//método post do login
exports.log = (req, res) => {
  //pega os valores digitados pelo usuário
  var email = req.body.email;
  var pass = req.body.pass;
  //conexão com banco de dados
  var condition_1 = email ? { email: { [Op.like]: `%${email}%` } } : null;
  var condition_2 = pass ?  { pass: { [Op.eq]: pass } } : null;
  //execução da query
  Usuarios.findAll({ where: condition_1, condition_2 })
  .then(data => {
    if (data.length > 0) {
      req.session.user = email; //seção de identificação            
      console.log("Login feito com sucesso!");
      res.render('views/home', {message:data});
    }else{
        var message = 'Login incorreto!';
        res.render('views/login', { message: message });
    }
  });
};

// Update a Usuario by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Usuarios.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Usuario with id=${id}. Maybe Usuario was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Usuario with id=" + id
      });
    });
};

// Delete a Usuario with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuarios.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Usuario with id=${id}. Maybe Usuario was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Usuario with id=" + id
      });
    });
};

// Delete all Usuarios from the database.
exports.deleteAll = (req, res) => {
  Usuarios.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Usuarios were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Usuarios."
      });
    });
};

// find all published Usuario
exports.findAllUsuarios = (req, res) => {
  Usuarios.findAll({ where: { nome: !null } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarios."
      });
    });
};

exports.findAllTudo = (req, res) => {
  Usuarios.findAll()
    .then(data => {
      res.render("views/tela", { usuario: data});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarios."
      });
    });
};
