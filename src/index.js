// index.js
const { app } = require('./app.js'); // Importar la aplicación Express
const db = require('./db/index.db.js');
const { port } = require('./config/index.config'); // Importar el puerto del archivo de configuración
const mysql = require('mysql2');

app.listen(port, () => {
  console.log(`El servidor se encuentra corriendo en el puerto ${port}`);
});
