const path = require('path');

function goIndex(req, res){
    const filePath = path.join(__dirname, '../../pagina/index.html')
    res.sendFile(filePath);
}

function goNosotros(req, res){
    const filePath = path.join(__dirname, '../../pagina/inicio.html')
    res.sendFile(filePath);
}

module.exports = {
    goIndex,
    goNosotros,
}