const express = require('express');
const authRoutes = require('./router/auth.router');
const userRoutes = require('./router/user.router');
const listRoutes = require('./router/lists.router');

const multer = require('multer');

const app = express();

// Configuración de Multer para almacenar en la base de datos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

// Rutas

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/lists', listRoutes);

// Otro middleware y configuración

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});


module.exports = { app };