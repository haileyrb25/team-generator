// offshoot from employee

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(role, name, id, email, school) {
        super(`Intern`, name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;