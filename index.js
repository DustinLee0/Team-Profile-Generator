const inquirer = require('inquirer');
const { writeFile } = require('fs');
const html = require('./src/generateHTML');

//  require team classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//  variable to store an array of objects of team members
const team = [];

//  creates manager object
function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the name of the team manager',
                name: 'manager'
            },
            {
                type: 'input',
                message: 'Enter the team managers\' employee ID.',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter the team managers\' e-mail address.',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter the team managers\' office number.',
                name: 'office'
            }
        ]).then((data) => {
            const manager = new Manager(data.manager, data.email, data.id, data.office);
            team.push(manager);
            console.log(`\n${manager.getRole()}: ${data.manager} has been added to the team.\n`);
            addTeamMember();
        })
}

//  call function after creating each team member(manager, engineer, intern)
function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add more team members?',
                choices: ['Engineer', 'Intern', 'All team members added'],
                name: 'choice'
            }
        ]).then((input) => {
            const { choice } = input;
            //  switch statement added to filter choices(three choices: engineer, intern, all members added)
            switch (choice) {
                //  creates engineer class object
                case 'Engineer':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'What is the name of the engineer?',
                                name: 'engineer'
                            },
                            {
                                type: 'input',
                                message: 'Enter the engineers\' employee ID.',
                                name: 'id'
                            },
                            {
                                type: 'input',
                                message: 'Enter the engineers\' e-mail address.',
                                name: 'email'
                            },
                            {
                                type: 'input',
                                message: 'Enter the engineers\' github username.',
                                name: 'github'
                            }
                        ])
                        .then((data) => {
                            const engineer = new Engineer(data.engineer, data.email, data.id, data.github);
                            team.push(engineer);
                            console.log(`\n${engineer.getRole()}: ${data.engineer} has been added to the team.\n`);
                            addTeamMember();
                        })
                break;
                //  creates intern class object
                case 'Intern':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'What is the name of the intern?',
                                name: 'intern'
                            },
                            {
                                type: 'input',
                                message: 'Enter the interns\' employee ID.',
                                name: 'id'
                            },
                            {
                                type: 'input',
                                message: 'Enter the interns\' e-mail address.',
                                name: 'email'
                            },
                            {
                                type: 'input',
                                message: 'Enter the name of the school the intern attends.',
                                name: 'school'
                            }
                        ]).then((data) => {
                            const intern = new Intern(data.intern, data.email, data.id, data.school);
                            team.push(intern);
                            console.log(`\n${intern.getRole()}: ${data.intern} has been added to the team.\n`);
                            addTeamMember();
                        })
                break;
                //  generate html when all team members are added
                case 'All team members added':
                        console.log(choice);
                        const htmlCode = html(team);
                        writeFile('./dist/myTeamProfile.html', htmlCode, (err) => {
                            if (err) throw err;
                            console.log('A webpage was generated for your team.');
                            console.log('The .html file will be located in the dist folder.');
                        })
                break;
            }
        })
}

//  prompt manager info when app is invoked
createManager();