declare class EmployeeController {
    index(req: any, res: any, next: any): Promise<void>;
    showCreateForm(req: any, res: any, next: any): Promise<void>;
    store(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any, next: any): Promise<void>;
    showUpdateForm(req: any, res: any, next: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    showEmployeeDetails(req: any, res: any, next: any): Promise<void>;
    searchByRoom(req: any, res: any, next: any): Promise<void>;
}
export default EmployeeController;
