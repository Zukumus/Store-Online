const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {

    async create(req, res) {
        try {
            const { name } = req.body;
            const brand = await Brand.create({ name });
            return res.json(brand);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

    async getAll(req, res, next) {
        const brand = await Brand.findAll();
        return res.json(brand);
    };

    async getOne(req, res, next) {
        try {
            const type = await Type.findOne(req.params.id)
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };
    async update(req, res, next) {
        // try {
        //     const brand = await Brand.findOne(req.body)
        //     return res.json(brand)
        // } catch (e) {
        //     next(ApiError.badRequest(e.message))
        // }
    };

    async delete(req, res, next) {
        try {
            const { id } = req.params
            const device = await Brand.destroy({
                where: { id },
            })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

};


module.exports = new BrandController()