const Team = require('Team');

class Intern extends Team {
    constructor(school) {
        this.school = school;
    }
}

module.exports = Intern;