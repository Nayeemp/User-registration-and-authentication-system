/* eslint-disable prettier/prettier */
const User = require('../models/userModel');
require('dotenv').config();

const edit = async (req, res, next) => {
    try {
        const { email } = req.params;
        const { avatar } = req.body;
        // console.log('req.body', req.body);
        // console.log('status = ', status );

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: { avatar } },
            { new: true },
        );
        if (updatedUser) {
            res.status(200).send({ avatar: updatedUser.avatar });
        } else {
            res.status(500).send({ message: 'No user found with this email' });
        }
    } catch (err) {
        console.log('error = ', err);
        next(err);
    }
};

module.exports = { edit };
