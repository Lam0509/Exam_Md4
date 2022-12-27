"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = __importDefault(require("../controllers/employee.controller"));
const router = (0, express_1.Router)();
const employeeController = new employee_controller_1.default();
router.get('/admin/employees', employeeController.index);
router.get('/admin/employees/create', employeeController.showCreateForm);
router.post('/admin/employees/create', employeeController.store);
router.get('/admin/employees/delete/:id', employeeController.delete);
router.get('/admin/employees/update/:id', employeeController.showUpdateForm);
router.post('/admin/employees/update/:id', employeeController.update);
router.get('/admin/employees/detail/:id', employeeController.showEmployeeDetails);
router.get('/admin/employees/search/room', employeeController.searchByRoom);
exports.default = router;
//# sourceMappingURL=employee.router.js.map