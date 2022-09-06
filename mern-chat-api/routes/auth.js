const { Router } = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controllers/auth');
const { fieldValidator } = require('../middlewares/field-validators');

const router = Router();

router.post(
    '/new', 
    [
        check('name', 'Tu nombre es obligatorio para crear una cuenta').not().isEmpty(),
        check('surname', 'Tu apellido es obligatorio para crear una cuenta').not().isEmpty(),
        check('email', 'Tu correo electrónico es obligatorio para crear una cuenta').isEmail(),
        check('password', 'Tu contraseña debe tener 6 caracteres o más').isLength({ min: 6 }),
        fieldValidator
    ],
    createUser
);

module.exports = router;