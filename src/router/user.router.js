const express = require('express');
const router = express.Router();
const { getUser, updateUserById} = require("../controller/user.controller.js");


router.get('/', (req, res) => {
  // Lógica para manejar la solicitud GET a /user
  res.send('Respuesta de la ruta GET /user');
});

router.put('/', (req, res) => {
  // Lógica para manejar la solicitud PUT a /user
  res.send('Respuesta de la ruta PUT /user');
});

module.exports = router;

module.exports = router