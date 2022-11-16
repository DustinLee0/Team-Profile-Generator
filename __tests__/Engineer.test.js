const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it("should have four properties(name, email, id, officeNum)", () => {
        const engineer = new Engineer();
        expect('name' in engineer).toBe(true);
        expect('email' in engineer).toBe(true);
        expect('id' in engineer).toBe(true);
        expect('github' in engineer).toBe(true);
    });
    it("should set 'github' property when class is created", () => {
        const { github } = new Engineer('fred', 'fred@live.com', '13', 'myGithubRepo');
        expect(github).toEqual('myGithubRepo');
    });
    it("should return property value when method is called(getGithub, getRole)", () => {
        const engineer = new Engineer();
        expect(engineer.getGithub()).toBe(engineer.github);
        expect(engineer.getRole()).toBe('Engineer');
    });
});