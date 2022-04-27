// require the employee from the lib folder

const Employee = require("../lib/Employee"); 


// test can begin employee instance
describe("Employee", () => {
    it("Begin the instance of the employee", () => {
        const newHire = new Employee();
        expect(new Employee(newHire)).toBe("object");
    });

//test can set name via constructor argument
    it("Can set a name with the constructor argument", () => {
        const name = "Sam";
        const newHire = new Employee(name);
        expect(newHire.name).toBe(name);
    });

//test can set id via constructor argument
    it("Can set id with the constructor argument", () => {
        const id = "100";
        const newHire = new Employee(id);
        expect(newHire.id).toBe(id);
    });


//test can set email via constructor argument
    it("Can set email with the constructor argument", () => {
        const email = "sam@gmail.com";
        const newHire = new Employee(email);
        expect(newHire.email).toBe(email);
    });


//test can set name via constructor function
    it("getName() should match user input for name", () => {
    const gName = "Sam";
    const newHire = new Employee(gName);
    expect(newHire.getName()).toBe(gName);
    });

//test can set id via constructor function
    it("getId() should match user input for id", () => {
    const id = 100;
    const newHire = new Employee("Sam", id);
    expect(newHire.getId()).toBe(id);
    });


//test can set email via constructor function
    it("getEmail() should match user input for email", () => {
    const email = "sam@gmail.com";
    const newHire = new Employee("Sam", 100, email);
    expect(newHire.getEmail()).toBe(email);
    });


//role function should return employee
    it("getRole() should return \"Employee\"", () => {
    const result = "Employee";
    const newHire = new Employee("Sam", 100, "sam@gmail.com");
    expect(newHire.getRole()).toBe(result);
    });

});