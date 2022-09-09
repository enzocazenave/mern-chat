const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req, res = response) => {
    
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo electrónico está en uso'
            });
        }

        user = new User(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const token = await generateJWT(user.id, user.name, user.surname, user.email);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            surname: user.surname,
            token
        });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const loginUser = async(req, res = response) => {
    
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario con ese correo electrónico'
            });
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña es incorrecta'
            });
        }

        const token = await generateJWT(user.id, user.name, user.surname, user.email);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            surname: user.surname,
            token
        });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const renewToken = async(req, res = response) => {
    const { uid, name, surname, email } = req;
    const token = await generateJWT(uid, name, surname, email);
    
    res.json({
        ok: true,
        uid,
        name,
        surname,
        email,
        token
    });
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}