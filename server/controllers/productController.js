const { conectarDB, desconectarDB  } = require("../db/connection");
const Product = require("../db/schemas/productSchemas");

const getAll = async (req, res) => {
    console.log(process.env);
    console.log("Nueva peticion en users")
    await conectarDB();

    const products = await Product.find({});
    await desconectarDB();
    res.json(products);
};
module.exports = {getAll,}
