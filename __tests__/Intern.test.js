const Intern = require('../lib/Intern');

describe('Intern', () => {
    it("should have four properties(name, email, id, officeNum)", () => {
        const intern = new Intern();
        expect('name' in intern).toBe(true);
        expect('email' in intern).toBe(true);
        expect('id' in intern).toBe(true);
        expect('school' in intern).toBe(true);
    });
    it("should set 'school' property when class is created", () => {
        const { school } = new Intern('fred', 'fred@live.com', '13', 'waterloo');
        expect(school).toEqual('waterloo');
    });
    it("should return property value when methods are called(getSchool, getRole)", () => {
        const intern = new Intern();
        expect(intern.getSchool()).toBe(intern.school);
        expect(intern.getRole()).toBe('Intern');
    });
});