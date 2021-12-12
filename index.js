const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateTeam = require("./src/page-template");
const team = [];

// create function to start building the team
function buildTeam() {
// prompt manager questions
  function promptManager() {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Please enter Managers name: (Required)',
      validate: managerName => {
        if (managerName) {
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
        validate: managerId => {
          if (managerId) {
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
        validate: managerEmail => {
          if (managerEmail) {
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
        validate: managerOfficeNumber => {
          if (managerOfficeNumber) {
            return true;
          } else {
            console.log('Please enter the Managers office number!');
            return false;
          }
        }
    }, // take answers and create a new manager, push manager to team array.  run addemployee func
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        addEmployee();
    })
}

// prompt new employee information
  function addEmployee() {

      return inquirer.prompt([
          {
              type: 'list',
              name: 'employeeRole',
              message: 'Would you like to add another employee?',
              choices: ['Engineer', 'Intern', 'I do not wish to add another employee'],
          }, // based off choices, run func to add engineer, intern or generate html
      ]).then(newEmployee => {
          switch (newEmployee.employeeRole) {
              case "Engineer":
                  addEngineer();
                  break;
              case "Intern":
                  addIntern();
                  break;
              case "I do not wish to add another employee":
                generateHTML();
                break;
          }
      })
  }
// prompt questions for engineer
  function addEngineer() {
      return inquirer.prompt([
          {
              type: 'input',
              name: 'engineerName',
              message: 'Please enter Engineers name: (Required)',
              validate: engineerName => {
                if (engineerName) {
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
              validate: engineerId => {
                if (engineerId) {
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
              validate: engineerEmail => {
                if (engineerEmail) {
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
              validate: engineerGithub => {
                if (engineerGithub) {
                  return true;
                } else {
                  console.log('Please enter the engineers Github username!');
                  return false;
                }
              }
          },  // create new engineer from answers and push to team array
      ]).then(answers => {
          const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
          team.push(engineer);
          addEmployee();
      })
  }
// prompt questions to add intern
  function addIntern() {
      return inquirer.prompt([
          {
              type: 'input',
              name: 'internName',
              message: 'Please enter new Interns name: (Required)',
              validate: internName => {
                if (internName) {
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
              validate: internId => {
                if (internId) {
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
              validate: internEmail => {
                if (internEmail) {
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
              validate: internSchool => {
                if (internSchool) {
                  return true;
                } else {
                  console.log('Please enter the interns school!');
                  return false;
                }
              }
          }, // create new intern based off answers and push to team
      ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          team.push(intern);
          // console.log(team);
          addEmployee();
      })
  }
// create function to hold HTML with card data function inserted
  function buildHtml(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <div class="bg-danger container-fluid text-white">
                <div class="container d-flex justify-content-center">
                    <h1 class="">My Team</h1>
                </div>
            </div>
        </header>
    
        <main class="d-flex flex-column">
            <div class="container d-flex justify-content-center flex-row">
                ${generateTeam(data)}
    
            </div>
        </main>
    
        
    </body>
    </html>
    `;
  }
//  create function to generate the html
  function generateHTML() {
  fs.writeFile('./dist/team.html', buildHtml(team), function (err) {
    if (err) throw err;
  console.log('File is created successfully.');
  });
  }
// prompt user with first set of questions
  promptManager();

}
// start building
buildTeam();