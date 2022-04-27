//require manager and employee from lib
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

//can set office number
describe("Set office number via constructor argument", ()=> {
    const testNum = 100;
    const newHire = new Manager("Sam", 1, "sam@gmail.com", testNum);
    expect(newHire.officeNumber).toBe(testNum);
})
//can get office number
//role returns manager