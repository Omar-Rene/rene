const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const navigationController = require('./server/controllers/NavigationController')

app.use(express.static(path.join(__dirname, './pagina')));
app.use(cors());
app.get('/', navigationController.goIndex);
app.get('/nosotros', navigationController.goNosotros);


app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080')
})