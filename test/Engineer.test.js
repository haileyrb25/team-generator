//require engineer from lib
const Engineer = require('../lib/Engineer');

//can set github account with constructor
describe("Can set github account with constructor", () => {
    const account = "GithubUser";
    const newHire = new Engineer("Sam", 100, "sam@gmail.com", account);
    expect(newHire.github).toBe(account);
});
//role returns engineer
it("getRole() returns \"Engineer\"", () => {
    const role = "Engineer";
    const newHire = new Engineer("Sam", 100, "sam@gmail.com", "account");
    expect(newHire.getRole()).toBe(role);
});
//get github username from github function
it("getGithub() returns github input", () => {
    const account = "GithubUser";
    const e = new Engineer("Sam", 100, "samgmail.com", account);
    expect(newHire.getGithub()).toBe(account);
});
