const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {

    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }
            return res.json(device);

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let { brandId, typeId, page, limit, } = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let devices;
            if (!brandId && !typeId) {
                devices = await Device.findAndCountAll({ limit, offset })
            } else if (typeId && !brandId) {
                devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
            } else if (brandId && !typeId) {
                devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
            } else if (brandId && typeId) {
                devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
            }
            return res.json(devices)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const device = await Device.findOne({
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };
    async update(req, res, next) {
        try {
            let { id, name, price, brandId, typeId, } = req.body;
            const device = await Device.findOne({ where: { id } })
            device.Device.update({ where: name, price, brandId, typeId, })
                // const { img } = req.files;
                // let fileName = uuid.v4() + '.jpg';
                // img.mv(path.resolve(__dirname, '..', 'static', fileName));
                // const device = await Device.update({ where: { name, price, brandId, typeId, } })
                // if (info) {
                //     info = JSON.parse(info)
                //     info.forEach(i => {
                //         DeviceInfo.update({
                //             title: i.title,
                //             description: i.description,
                //             deviceId: device.id
                //         })
                //     });
                // }
            return res.json(device);

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params
            const device = await Device.destroy({
                where: { id },
            })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    };

};

module.exports = new DeviceController()