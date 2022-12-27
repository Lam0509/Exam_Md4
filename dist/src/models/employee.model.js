"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: [true, 'Please inclue employee code']
    },
    name: {
        type: String,
        required: [true, 'Please include car name']
    },
    age: {
        type: Number,
        required: [true, 'Please include age']
    },
    salary: {
        type: Number,
        required: [true, 'Please include salary']
    },
    room: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Room'
    }
});
const Employee = (0, mongoose_1.model)('Car', employeeSchema);
exports.default = Employee;
//# sourceMappingURL=employee.model.js.map