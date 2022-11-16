const Manager = require('../lib/Manager');

describe('Manager', () => {
    it("should have four properties(name, email, id, officeNum)", () => {
        const manager = new Manager();
        expect('name' in manager).toBe(true);
        expect('email' in manager).toBe(true);
        expect('id' in manager).toBe(true);
        expect('officeNum' in manager).toBe(true);
    });
    it("should set 'officeNum' property when class is created", () => {
        const { officeNum } = new Manager('fred', 'fred@live.com', '13', '141');
        expect(officeNum).toEqual('141');
    });
    it("should return property value when method is called", () => {
        const manager = new Manager();
        expect(manager.getRole()).toBe('Manager');
    });
});