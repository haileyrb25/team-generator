//require manager and employee from lib
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

//can set office number
describe("Set office number via constructor argument", ()=> {
    const officeNum = 12;
    const newHire = new Manager("Sam", 100, "sam@gmail.com", officeNum);
    expect(newHire.officeNumber).toBe(officeNum);
});
//can get office number
it("getOfficeNumber() returns office number input", () => {
    const officeNum = 12;
    const newHire = new Manager("Sam", 100, "sam@gmail.com", officeNum);
    expect(newHire.officeNumber).toBe(officeNum);
});
//role returns manager
it("getRole() returns \"Manager\"", () => {
    const role = "Manager";
    const newHire = new Manager("Sam", 100, "sam@gmail.com", "12");
    expect(newHire.getRole()).toBe(role);
});
