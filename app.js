const express = require('express');
const app = express();
app.use(express.json());


//Router de libros
const routerLibro = require('./routes/libros');

// Middleware
const error = require('./middlewares/errors');

app.use('/libros', routerLibro);

app.use(error);

app.listen(3000, () => {
    console.log('Servidor Iniciado');
});