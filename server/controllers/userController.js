const { User, Basket } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role },
        process.env.SECRET_KEY, { expiresIn: '24h' })
}

class UserController {

    async registration(req, res, next) {
        try {
            const { email, password, role } = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('not correct email or password'))
            }
            const candidate = await User.findOne({ where: { email } })
            if (candidate) {
                return next(ApiError.badRequest('email busy'))
            }
            const hashPassword = await bcrypt.hash(password, 4)
            const user = await User.create({ email, role, password: hashPassword })
            const basket = await Basket.create({ userId: user.id })
            const token = generateJwt(user.id, user.email, user.role)

            return res.json({ token, basket, user })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            if (!user) {
                return next(ApiError.badRequest('email not found'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return next(ApiError.badRequest('password incorrect'))
            }
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({ token })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    };

    async auth(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({ token })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    };

    async update(req, res, next) {
        // const type = await Type.findOne(req.body)
        // return type
    };

    async delete(req, res, next) {
        try {
            const { id } = req.params
            const device = await User.destroy({
                where: { id },
            })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

};

module.exports = new UserController()