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

//Inicializando la app
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
});