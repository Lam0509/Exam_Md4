"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_model_1 = __importDefault(require("../models/car.model"));
const brand_model_1 = __importDefault(require("../models/brand.model"));
class CarController {
    async index(req, res, next) {
        try {
            const cars = await car_model_1.default.find().populate('brand');
            res.render('admin/employees/list', { cars: cars });
        }
        catch (e) {
            next(e);
        }
    }
    async showCreateForm(req, res, next) {
        console.log(req.body);
        try {
            let brands = await brand_model_1.default.find();
            res.render('admin/employees/add', { data: brands });
        }
        catch (e) {
            next(e);
        }
    }
    async store(req, res, next) {
        try {
            await car_model_1.default.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                brand: req.body.brand
            });
            console.log(req.body);
            res.redirect('/admin/products');
        }
        catch (e) {
            next(e);
        }
    }
    async delete(req, res, next) {
        try {
            let id = req.params.id;
            await car_model_1.default.deleteOne({ _id: id });
        }
        catch (e) {
            next(e);
        }
        finally {
            res.redirect('/admin/products');
        }
    }
    async showUpdateForm(req, res, next) {
        try {
            const car = await car_model_1.default.findOne({ _id: req.params.id });
            const brands = await brand_model_1.default.find();
            if (car) {
                res.render("admin/employees/update", { data: { car, brands } });
            }
            else {
                res.render('error');
            }
        }
        catch (e) {
            next(e);
        }
    }
    async update(req, res, next) {
        try {
            const car = await car_model_1.default.findOne({ _id: req.params.id });
            car.name = req.body.name;
            car.description = req.body.description;
            car.brand = req.body.brand;
            car.price = req.body.price;
            await car.save();
            if (car) {
                res.redirect("/admin/products");
            }
            else {
                res.render("error");
            }
        }
        catch (e) {
            next(e);
        }
    }
    async showCarDetails(req, res, next) {
        try {
            const car = await car_model_1.default.findOne({ _id: req.params.id }).populate('brand');
            const brands = await brand_model_1.default.find();
            res.render('admin/employees/detail', { data: { car, brands } });
        }
        catch (err) {
            res.render(err);
        }
    }
}
exports.default = CarController;
//# sourceMappingURL=car.controller.js.map