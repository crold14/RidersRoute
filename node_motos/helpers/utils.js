const jwt = require('jsonwebtoken')

const createToken = (pUser) => {
    const obj = {
        usuarioId: pUser.id,
    }
    return jwt.sign(obj, 'cualquier frase');
}

module.exports = {
    createToken
}