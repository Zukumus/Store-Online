const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {

    async create(req, res, next) {
        try {
            const { name } = req.body;
            const type = await Type.create({ name });
            return res.json(type);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

    async getAll(req, res, next) {
        try {
            const type = await Type.findAll();
            return res.json(type);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

    async getOne(req, res, next) {
        const type = await Type.findOne(req.params.id)
        return res.json(type)
    };
    async update(req, res, next) {
        // try {
        //     const type = await Type.findOne(req.body)
        //     return res.json(type)
        // } catch (e) {
        //     next(ApiError.badRequest(e.message))
        // }
    };

    async delete(req, res, next) {
        try {
            const { id } = req.params
            const device = await Type.destroy({
                where: { id },
            })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

};

module.exports = new TypeController()