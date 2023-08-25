const express = require("express");
const app = express();
const fs = require("fs/promises");

//middlewares
app.use(express.json());

app.get('/', (req, res) => {
    console.log("test")
    res.send("Hola mundo");
});


app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});