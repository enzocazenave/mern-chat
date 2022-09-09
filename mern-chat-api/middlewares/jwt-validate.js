const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid, name, surname, username, profile_img, email } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.name = name;
        req.surname = surname;
        req.username = username;
        req.profile_img = profile_img;
        req.email = email;
    } catch(error) {
        return res.status(401).json({
            ok: false,
            msg: 'El token proporcionado no es válido'
        })
    }

    next();
}

module.exports = {
    validateJWT
}