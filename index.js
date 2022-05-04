// insert required packages
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const generateTeam = require(`./src/team.js`)
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

// from lib
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

//will be array for all answers
let staffResults = [];

// question for employee and to set role
const formQuestion = async () => {
    console.log("we hit formQuestion function")
    const employeeInput = await inquirer
        .prompt([
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
                    type: 'input',
                    message: 'What school did you attend?',
                    name: 'school',
                },
            ])
        const internNew = new Intern(
            internSpec.name,
            internSpec.id,
            internSpec.email,
            internSpec.school
        );
        staffResults.push(internNew);
        mainMenu();
        // If engineer
    } else if (employeeInput.role === 'Engineer') {
        const engineerSpec = await inquirer
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
                    type: 'input',
                    message: 'What is your GitHub username?',
                    name: 'github',
                }
            ])
        const engineerNew = new Engineer(
            engineerSpec.name,
            engineerSpec.id,
            engineerSpec.email,
            engineerSpec.github
        );
        staffResults.push(engineerNew);
            mainMenu()

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
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'officeNumber',
                },
            ])
        const managerNew = new Manager(
            managerSpec.name,
            managerSpec.id,
            managerSpec.email,
            managerSpec.officeNumber
        );
        staffResults.push(managerNew);
        mainMenu()
    }
};

async function init() {
    await formQuestion()
}
init();


function generateMyTeam(){
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(
        outputPath,
        generateTeam(staffResults),
        'utf-8'
    );
}

function mainMenu() {
    // ending question to exit or add new member
    inquirer.prompt([
        {
            type: 'list',
            name: 'lastOption',
            message: 'Would you like to add a new staff member or finish?',
            choices: ['Add new employee', 'Finish and generate team'],
        },
    ]).then((answer) => {

        if (answer.lastOption === 'Add new employee') {
         
            formQuestion()
        } else {
       
            generateMyTeam();
        }
    })

}

