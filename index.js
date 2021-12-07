const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./dist/Employee");
const Engineer = require("./dist/Engineer");
const Intern = require("./dist/Intern");
const Manager = require("./dist/Manager");

const team = [];
const idArray = [];

const promptManager = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Please enter managers name: (Required)',
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
        message: 'Please enter managers employee ID: (Required)',
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
        message: 'Please enter managers email address: (Required)',
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
        message: 'Please enter managers office number: (Required)',
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
        createTeam();
    })
}

// prompt new employee information
const createTeam = () => {

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add a new employee?',
            default: true
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Please select employee role:',
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
            message: 'Please enter new employee name: (Required)',
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
            message: 'Please enter engineers employee ID: (Required)',
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
            message: 'Please enter engineers email address: (Required)',
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
            message: 'Please enter engineers Github username: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the engineers Github username!');
                return false;
              }
            }
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

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter new employee name: (Required)',
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
            message: 'Please enter interns employee ID: (Required)',
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
            message: 'Please enter interns email address: (Required)',
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
            message: 'Please enter interns school: (Required)',
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter the interns school!');
                return false;
              }
            }
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

promptManager();