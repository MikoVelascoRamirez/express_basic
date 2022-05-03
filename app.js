//Objeto de express
const express = require('express');

//App de express
const app = express();

//Puerto en donde escuchará el servidor
const port = 3000;

//Path Inicial
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Agregando una nueva ruta con la dirección /launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launch X!');
});

//Inicializando la app
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
});
