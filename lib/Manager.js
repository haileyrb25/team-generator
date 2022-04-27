// offshoot from employee

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(role, name, id, email, officeNumber) {
        super(`Manager`, name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;