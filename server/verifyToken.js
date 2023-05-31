const jwt = require('jsonwebtoken')
const { secret } = require("./models/config");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if(!token){
        res.status(403).json({
            message: 'token required for authentication'
        })
    } else {
        try {
            const decodedToken = jwt.verify(token, secret)
            req.decodedToken = decodedToken;
        } catch (error) {
            res.status(401).json({
                message: 'Invalid token received'
            })
        }
    }
    return next();
}

module.exports = verifyToken;