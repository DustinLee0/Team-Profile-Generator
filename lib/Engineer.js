const Team = require('Team');

class Engineer extends Team {
    constructor(github) {
        super(name, email, id);
        this.github = github;
    }
}

module.exports = Engineer;