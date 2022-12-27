import { Router } from 'express';
import EmployeeController from "../controllers/employee.controller";
const router = Router()
const employeeController = new EmployeeController();

// Hiển thị danh sách nhân viên
router.get('/admin/employees',employeeController.index);

// Show form thêm nhân viên
router.get('/admin/employees/create',employeeController.showCreateForm);

// Thêm nhân viên
router.post('/admin/employees/create',employeeController.store);

// Xóa nhân viên
router.get('/admin/employees/delete/:id',employeeController.delete);

// Show form update nhân viên
router.get('/admin/employees/update/:id',employeeController.showUpdateForm);

// Update nhân viên
router.post('/admin/employees/update/:id',employeeController.update);

// Xem chi tiết nhân viên
router.get('/admin/employees/detail/:id',employeeController.showEmployeeDetails);

// Lọc theo phòng ban
router.get('/admin/employees/search/room',employeeController.searchByRoom);

export default router;
