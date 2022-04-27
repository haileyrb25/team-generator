// require from lib folder
const Intern = require('../lib/Intern');


// set school
describe("School should match user input", () => {
    const school = "UT";
    const newHire = new Intern("Sam", 100, "sam@gmail.com", school);
    expect(newHire.school).toBe(school);
});


//get school
it("getSchool() returns school input", () => {
    const school = "UT";
    const newHire = new Intern("Sam", 100, "sam@gmail.com", school);
    expect(newHire.getSchool()).toBe(school);
});


// role return intern
it("getRole() returns \"Intern\"", () => {
    const role = "Intern";
    const newHire = new Intern("Sam", 100, "sam@gmail.com", "UT");
    expect(newHire.getRole()).toBe(role);
});
