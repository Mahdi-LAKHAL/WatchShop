const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'secret_key');
        next();

    } catch (error) {
        console.log('error auth', error);
        res.status(401).json({
            message: 'Secret Key invalid: error in Token getted from FE'
        })
    }

};