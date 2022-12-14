const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id);
        this.officeNum = officeNum;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;