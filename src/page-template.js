// create html card for manager
const generateManager = manager => {
const team = [];
  return `
<div class="card mx-2" style="width: 18rem;">
<div class="card-header bg-primary">
 ${manager.getName()} <br/>
 ${manager.getRole()}
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${manager.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
  <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
</ul>
</div>
`;
};

// create html for engineer
const generateEngineer = engineer => {
if (!engineer) {
    return;
}
return `
<div class="card mx-2" style="width: 18rem;">
  <div class="card-header bg-primary">
   ${engineer.getName()} <br/>
   ${engineer.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">Github: ${engineer.getGithub()}</li>
  </ul>
</div>
`;
};

//  create html for intern
const generateIntern = intern => {
if (!intern) {
    return;
}
return `
<div class="card mx-2" style="width: 18rem;">
  <div class="card-header bg-primary">
    ${intern.getName()} <br/>
    ${intern.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
  </ul>
</div>
`;
};

// create forloop to grab everyone from html array
const generateTeam = teams => {
  console.log(teams);
  const html = [];
for(i = 0; i < teams.length; i++) {
    if(teams[i].getRole() === "Manager") {
      html.push(generateManager(teams[i]))
    } else if (teams[i].getRole() === "Engineer") {
        html.push(generateEngineer(teams[i]))
    } else {
      html.push(generateIntern(teams[i]))
    }
}

  return html.join("");

};

module.exports = generateTeam;