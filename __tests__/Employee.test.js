const Employee = require('../lib/Employee');

describe('Employee', () => {
    it("should return an object containing a 'name', 'email', and 'id' property", () => {
        const employee = new Employee();
        expect(employee).toBeInstanceOf(Employee)
        expect("name" in employee).toEqual(true);
        expect("email" in employee).toEqual(true);
        expect("id" in employee).toEqual(true);
    });
    it("should set 'name', 'email', and 'id' property when class is created", () => {
        const { name, email, id } = new Employee('fred', 'fred@live.com', '13');
        expect(name).toEqual('fred');
        expect(email).toEqual('fred@live.com');
        expect(id).toEqual('13');
    });
    it("should return and object properties when calling methods(name, id, email, role)", () => {
        const employee = new Employee();
        expect(employee.getName()).toBe(employee.name);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getRole()).toBe('Employee');
    });
});