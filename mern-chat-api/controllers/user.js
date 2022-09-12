const { response } = require('express');
const User = require('../models/User');

const updateUser = async(req, res = response) => {
    const { uid, username } = req.body;
    
    try {
        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese nombre de usuario está en uso'
            });
        }

        await User.findByIdAndUpdate(uid, { username });

        res.status(200).json({
            ok: true,
        });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

}

module.exports = {
    updateUser,
}