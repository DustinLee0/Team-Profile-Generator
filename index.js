// require packages
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
// const { writeFile } = require('fs');
// const generateHTML = require('./src/generateHTML');

//  require team classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//  create variable to store an array of objects of team members
const team = [];

function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please provide the name of the team manager?',
                name: 'manager'
            },
            {
                type: 'input',
                message: 'Please enter the team managers\' employee ID.',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please enter the team managers\' e-mail address.',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please enter the team managers\' office number.',
                name: 'office'
            }
        ])
        .then((data) => {
            const manager = new Manager(data.manager, data.email, data.id, data.office);
            team.push(manager);
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the engineer?',
                name: 'engineer'
            },
            {
                type: 'input',
                message: 'Please enter the engineers\' employee ID.',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please enter the engineers\' e-mail address.',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please enter the engineers\' github username.',
                name: 'github'
            }
        ])
        .then( (data) => {
            const engineer = new Engineer(data.engineer, data.email, data.id, data.github);
            team.push(engineer);
        })
}


function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the intern?',
                name: 'intern'
            },
            {
                type: 'input',
                message: 'Please enter the interns\' employee ID.',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please enter the interns\' e-mail address.',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please enter the name of the school the intern attends.',
                name: 'school'
            }
        ])
        .then((data) => {
            const intern = new Intern(data.intern, data.email, data.id, data.school);
            team.push(intern);
        })
}

function initialize() {

}

function writeToFile(fileName, data) {
    // const readMe = markdown(data);
    // writeFile(fileName, readMe, (err) => {
    //     if (err) throw err;
    //     console.log('A readme file was generated!');
    //     console.log(`Data written to ${fileName}`);
    // });
}