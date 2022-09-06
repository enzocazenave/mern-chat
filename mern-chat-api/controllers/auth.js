const { response } = require('express');

const createUser = async(req, res = response) => {
    
    const { name, surname, email, password } = req.body;

    try {
        res.status(201).json({
            ok: true,
            name,
            surname,
            email,
            password
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
    createUser,
}