// require packages
const inquirer = require('inquirer');
const { writeFile } = require('fs');
const generateHTML = require('./src/generateHTML');

//  require team classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function initialize() {
    inquirer
        .prompt(
            {
                type: 'input',
                message: 'What is the name of the team manager?',
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
                name: 'title'
            },
            { 
                type: 'input',
                message: 'Please enter the team managers\' employee ID.',
                name: 'title'
            },
        )
}

function writeToFile(fileName, data) {
    // const readMe = markdown(data);
    // writeFile(fileName, readMe, (err) => {
    //     if (err) throw err;
    //     console.log('A readme file was generated!');
    //     console.log(`Data written to ${fileName}`);
    // });
}

initialize();