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

        const ft = {
            profile_img: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
            username: ''
        }

        user = new User({ ...ft, ...req.body });

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const token = await generateJWT(user.id, user.name, user.surname, user.username, user.profile_img, user.email );

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            surname: user.surname,
            username: user.username,
            profile_img: user.profile_img,
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

        const token = await generateJWT(user.id, user.name, user.surname, user.username, user.profile_img, user.email );

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            surname: user.surname,
            username: user.username,
            profile_img: user.profile_img,
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
    const { uid, name, surname, username, profile_img, email } = req;
    console.log(req);
    const token = await generateJWT(uid, name, surname, username, profile_img, email );
    
    res.json({
        ok: true,
        uid,
        name,
        surname,
        username,
        profile_img,
        email,
        token
    });
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}