const { Brand, TypeBrand, Type, Device } = require('../models/models');
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
         const { id } = req.params
         const type = await Brand.findOne({
            where: { id },
            include: [Brand]
         })
         return res.json(type)
      } catch (e) {
         next(ApiError.badRequest(e.message))
      }
   };
   async update(req, res, next) {
      try {
         const { id } = req.body
         const updateBrand = await Brand.update(req.body, {
            where: { id: id }
         })
         return res.json(req.body)
      } catch (e) {
         next(ApiError.badRequest(e.message))
      }
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