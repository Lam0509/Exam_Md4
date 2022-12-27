"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_model_1 = __importDefault(require("../models/employee.model"));
const room_model_1 = __importDefault(require("../models/room.model"));
class EmployeeController {
    async index(req, res, next) {
        try {
            const employees = await employee_model_1.default.find().populate('room').sort({ age: 1 });
            const rooms = await room_model_1.default.find();
            res.render('admin/employees/list', { employees: employees, rooms: rooms });
        }
        catch (e) {
            next(e);
        }
    }
    async showCreateForm(req, res, next) {
        try {
            let rooms = await room_model_1.default.find();
            res.render('admin/employees/add', { rooms: rooms });
        }
        catch (e) {
            next(e);
        }
    }
    async store(req, res, next) {
        try {
            await employee_model_1.default.create({
                code: req.body.code,
                name: req.body.name,
                age: req.body.age,
                salary: req.body.salary,
                room: req.body.room
            });
            res.redirect('/admin/employees');
        }
        catch (e) {
            next(e);
        }
    }
    async delete(req, res, next) {
        try {
            let id = req.params.id;
            await employee_model_1.default.deleteOne({ _id: id });
        }
        catch (e) {
            next(e);
        }
        finally {
            res.redirect('/admin/employees');
        }
    }
    async showUpdateForm(req, res, next) {
        try {
            const employee = await employee_model_1.default.findOne({ _id: req.params.id });
            const rooms = await room_model_1.default.find();
            if (employee) {
                res.render("admin/employees/update", { data: { employee, rooms } });
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
            const employee = await employee_model_1.default.findOne({ _id: req.params.id });
            employee.code = req.body.code;
            employee.name = req.body.name;
            employee.age = req.body.age;
            employee.salary = req.body.salary;
            employee.room = req.body.room;
            await employee.save();
            if (employee) {
                res.redirect("/admin/employees");
            }
            else {
                res.render("error");
            }
        }
        catch (e) {
            next(e);
        }
    }
    async showEmployeeDetails(req, res, next) {
        try {
            const employee = await employee_model_1.default.findOne({ _id: req.params.id }).populate('room');
            const rooms = await room_model_1.default.find();
            res.render('admin/employees/detail', { data: { employee, rooms } });
        }
        catch (err) {
            res.render(err);
        }
    }
    async searchByRoom(req, res, next) {
        try {
            const roomId = req.query.roomId;
            let query = {};
            if (roomId !== 'All Rooms') {
                query = {
                    room: roomId
                };
            }
            const employees = await employee_model_1.default.find(query).populate('room');
            res.status(200).json(employees);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.default = EmployeeController;
//# sourceMappingURL=employee.controller.js.map