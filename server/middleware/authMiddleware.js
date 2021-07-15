const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: 'not authorized' })
        }
        const decoder = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoder
        next()
    } catch (e) {
        res.status(401).json({ message: 'not authorized' })
    }
}