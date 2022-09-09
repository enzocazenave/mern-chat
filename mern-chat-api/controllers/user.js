const { response } = require('express');

const updateUser = (req, res = response) => {
    const data = req.body;
    //TODO: HACER UPDATE DE USER
    // De "req.body" estoy recibiendo el uid del usuario y nombre de usuario para actualizar



    res.status(200).json({
        ok: true,
        msg: 'peticion recibida',
        ...data
    })
}


module.exports = {
    updateUser,
}