// insert required packages
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const { exit } = require(`process`);
// const gm = require(`./lib/generateMarkdown`);

let results = [];

// roles
const roleInput = [{
    name: `role`, type: `list`,
    message: `I would like to input a-`,
    choices: [`Manager`, `Engineer`, `Intern`, `That's it for now`],
}]

