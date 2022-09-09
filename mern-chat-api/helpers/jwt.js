const jwt = require('jsonwebtoken');

const generateJWT = (uid, name, surname, email) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name, surname, email };
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve(token);
        });
    });
}

module.exports = {
    generateJWT
}