const { response } = require('express');
const User = require('../models/User');


const updateUser = async(req, res = response) => {
    const { uid } = req.body;
    let user = await User.findOne({ uid });

    if (!user) {
        res.status(404).json({
            ok: false,
            msg: 'El uid recibido en la petición no existe'
        })
    }
}


module.exports = {
    updateUser,
}