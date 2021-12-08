const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];
const idArray = [];

const promptManager = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Please enter Managers name: (Required)',
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log('Please enter the Managers name!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter Managers employee ID: (Required)',
        validate: name => {
          if (name) {
            return true;
          } else {
            console.log('Please enter the Managers employee ID!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter Managers email address: (Required)',
        validate: name => {
          if (name) {
            return true;
          } else {
            console.log('Please enter the Managers email address!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Please enter Managers office number: (Required)',
        validate: name => {
          if (name) {
            return true;
          } else {
            console.log('Please enter the Managers office number!');
            return false;
          }
        }
    },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        team.push(manager);
        idArray.push(answers.managerId);
        createEmployee();
    })
}

// prompt new employee information
const createEmployee = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'I do not wish to add another employee'],
        },
    ]).then(newEmployee => {
        switch (newEmployee.employeeRole) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            // case "I do not wish to add another employee":
            //     return generateHTML
        }
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter Engineers name: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter new employees name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Please enter Engineers employee ID: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the employee ID!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter Engineers email address: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the engineers email address!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter Engineers Github username: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the engineers Github username!');
                return false;
              }
            }
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        idArray.push(answers.engineerId);
        createEmployee();
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter new Interns name: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter new employees name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Please enter Interns employee ID: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the interns employee ID!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter Interns email address: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the interns email address!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter Interns school: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the interns school!');
                return false;
              }
            }
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        idArray.push(answers.intern);
        createEmployee();
    })
}

promptManager();