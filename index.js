// insert required packages
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const generateTeam = require(`./src/team.js`)
const outputPath = path.join(OUTPUT_DIR, "index.html");

// from lib
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

//will be array for all answers
let staffResults = [];

// question for employee and to set role
const formQuestion = async () => {
    const employeeInput = await inquirer
        .prompt ([
            {
            type: 'list',
            message: 'What is your role?', 
            name: 'role',
            choices: ['Intern', 'Engineer', 'Manager'],
            },
        ])
    // if intern
    if (employeeInput.role === 'Intern') {
        const internSpec = await inquirer
            .prompt ([
                {
                    type: 'input',
                    message: 'What is your name?', 
                    name: 'name',
                    },
                    {
                    type: 'input',
                    message: 'What is your ID number?', 
                    name: 'id',
                    },
                    {
                    type: 'input',
                    message: 'What is your email address?', 
                    name: 'email',
                    },
                {
                    type: 'input',
                    message: 'What school did you attend?',
                    name: 'school',
                },
            ])
            const internNew = new Intern(
                employeeInput.name,
                employeeInput.id,
                employeeInput.email,
                employeeSpec.school
            );
            staffResults.push(internNew);
// If engineer
} else if (employeeInput.role === 'Engineer'){
    const engineerSpec = await inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is your name?', 
                name: 'name',
                },
                {
                type: 'input',
                message: 'What is your ID number?', 
                name: 'id',
                },
                {
                type: 'input',
                message: 'What is your email address?', 
                name: 'email',
                },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            }
        ])
        const engineerNew = new Engineer(
            employeeInput.name,
            employeeInput.id,
            employeeInput.email,
            engineerSpec.github
        );
        staffResults.push(engineerNew);


// If manager
} else if (employeeInput.role === 'Manager') {
    const managerSpec = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?', 
                name: 'name',
                },
                {
                type: 'input',
                message: 'What is your ID number?', 
                name: 'id',
                },
                {
                type: 'input',
                message: 'What is your email address?', 
                name: 'email',
                },
            {
            type:'input',
            message: 'What is your office number?',
            name: 'officeNumber',
        },
        ])
        const managerNew = new Manager (
            employeeInput.name,
            employeeInput.id,
            employeeInput.email,
            managerSpec.officeNumber
        );
        staffResults.push(managerNew);
        }
};

async function init() {
await formQuestion()

// ending question to exit or add new member
const addEmployee = await inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'lastOption',
      message: 'Would you like to add a new staff member or finish?',
      choices: ['Add new employee', 'Finish and generate team'],
    },
  ])
  
    if (addEmployee.lastOption === 'Add new employee') {
        return formQuestion()
    } else
    return generateMyTeam();
}
init();

let generateMyTeam = () => {
fs.writeFileSync(
    './dist/index.html',
    generateTeam(staffResults),
    'utf-8'
    );
}

