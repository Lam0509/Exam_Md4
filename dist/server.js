"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_router_1 = __importDefault(require("./src/routers/employee.router"));
const fileUpload = require('express-fileupload');
const PORT = 3000;
const database_1 = __importDefault(require("./src/configs/database"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express_1.default.static('public'));
app.use(fileUpload({
    createParentPath: true,
}));
database_1.default.connect();
app.use('/', employee_router_1.default);
app.listen(PORT, () => {
    console.log('App running on port: ' + PORT);
});
//# sourceMappingURL=server.js.map