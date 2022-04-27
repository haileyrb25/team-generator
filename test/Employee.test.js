// require the employee from the lib folder
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { isTypedArray } = require("util/types");
const Employee = require("../lib/Employee"); 


// test can begin employee instance
describe("Employee", () => {
    it("Begin the instance of the employee", () => {
        const newHire = new Employee();
        expect(new Employee(newHire)).toBe("object");
    });

//test can set name via constructor argument
    it("Can set a name with the constructor argument", () => {
        const name = "Hailey Corona";
        const newHire = new Employee(name);
        expect(newHire.name).toBe(name);
    });

//test can set id via constructor argument



//test can set email via constructor argument



//test can set name via constructor function



//test can set id via constructor function



//test can set email via constructor function



//role function should return employee

});