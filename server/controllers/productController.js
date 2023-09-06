const { conectarDB, desconectarDB  } = require("../db/connection");
const Product = require("../db/schemas/ProductSchema");

const getAll = async (req, res) => {
    console.log(process.env);
    console.log("Nueva peticion en users")
    await conectarDB();
    // User.find es una promesa que retorna un array de usuarios
    const products = await Product.find({});
    await desconectarDB();
    res.json(products);
};
module.exports = {getAll,}
