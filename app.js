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

//Agregando nueva ruta donde se devolverá un objeto
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "holi"};
    res.send(explorer);
});

//Agregando nueva ruta que reciba Query Params
app.get('/explorers/:explorerName', (req, res) => {
    console.log(req)
    res.send(req.params);
});

//Inicializando la app
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
});
