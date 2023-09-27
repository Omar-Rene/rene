require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const navigationController = require('./server/controllers/navigationController')
const productController = require('./server/controllers/productController');
const PORT = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, './pagina')));
app.use(cors());

app.get('/api/products', productController.getAll);

app.get('/index', navigationController.goIndex);
app.get('/inicio', navigationController.goInicio);


app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080')
})