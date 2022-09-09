const { response } = require('express');
const User = require('../models/User');


const updateUser = async(req, res = response) => {
    const { uid, username } = req.body;
        
    try {
        let itUserExists = await User.findOne({ username });
        
        if (itUserExists) {
            return res.status(400).json({
                ok: false,
                msg: `El nombre de usuario ${ username } ya está en uso`
            })
        }

        let user = await User.findByIdAndUpdate(uid, { username });
        
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'El uid recibido en la petición no existe'
            })
        }

        res.status(200).json({
            ok: true,
        });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}


module.exports = {
    updateUser,
}