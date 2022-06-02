const jwt = require('jsonwebtoken');
const usuarioModel = require("../models/usuario.model");



const checkToken = async (req, res, next) => {
    //1- comrpobar si el TOKEN viene incluido dentro de las cabeceras

    if (!req.headers['authentication']) {
        return res.json({ Error: 'Debes incluir la cabecera de autenticacion' })
    };
    //2- comprobar si el TOKEN es correcto
    const token = req.headers['authentication']

    let obj;
    try {
        obj = jwt.verify(token, 'cualquier frase')
    } catch (error) {
        return res.json({ error: 'El token es incorrecto' })
    }
    console.log(obj.expira);


    //a partir del id del usuario recuperar todos los datos del mismo


    //metodo dentro del modelo de usuario que me permita recuperar los datos de un usuario por ID
    const [result] = await usuarioModel.getById(obj.usuarioId)

    //IMPORTANTISIMO PARA CUALQUIER ACCION SOBRE USUARIOS CON LOGIN!!!!!
    req.user = result[0]

    next();
}

module.exports = {
    checkToken,
}