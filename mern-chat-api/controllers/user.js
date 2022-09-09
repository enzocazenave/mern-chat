const { response } = require('express');
const User = require('../models/User');

const updateUser = async(req, res = response) => {
    const { uid, username, profile_img } = req.body;
}

module.exports = {
    updateUser,
}