const { Router } = require('express');
const { check } = require('express-validator');
const { updateUser } = require('../controllers/user');
const { fieldValidator } = require('../middlewares/field-validators');

const router = Router();

router.post('/update',
    [
        check('uid', 'ERROR: uid no recibida').not().isEmpty(),
        check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
        fieldValidator
    ],
    updateUser
);

module.exports = router;