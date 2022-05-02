const path = require("path");
const fs = require("fs");

const render = (employees) => {
    let myteam = "";

    employees.forNewEmployee((employee) => {
        switch (employee.getRole()) {
            case "Manager":
            myteam += `
                <div class="card mb-3" style="max-width: 23rem;">
                <div class="card-header">
                  <h3>${employee.getName()}</h3>
                  <h3>${employee.getRole()}</h3>
                </div>
                <div class="card-body">
                  <p>
                    <div class="card">
                      <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: ${employee.getEmail()}</li>
                        <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
              `;
        break;
            case "Engineer":
                myteam += `
                <div class="card mb-3" style="max-width: 23rem;">
                <div class="card-header">
                  <h3>${employee.getName()}</h3>
                  <h3>${employee.getRole()}</h3>
                </div>
                <div class="card-body">
                  <p>
                    <div class="card">
                      <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: ${employee.getEmail()}</li>
                        <li class="list-group-item">GitHub: ${employee.getGitHub()}</li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
              `;
        break;
            case "Intern":
                myteam += `
                <div class="card mb-3" style="max-width: 23rem;">
                <div class="card-header">
                  <h4>${employee.getName()}</h4>
                  <h4>${employee.getRole()}</h4>
                </div>
                <div class="card-body">
                  <p>
                    <div class="card">
                      <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: ${employee.getEmail()}</li>
                        <li class="list-group-item">School:${employee.getSchool()}</li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
              `;
        break;
        default:
            return "Error";
        }});
        
    const indexHTML = `
    <!DOCTYPE html>
    <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="../dists/style.css" />
  <title>Team Generator</title>
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 jumbotron mb-3 team-heading">
        <h1 class="text-center">My Team</h1>
      </div>
    </div>
  </div>
  <main class="row">
    ${myteam}
  </main>
</body>
</html>
    `;
    return indexHTML;
};

module.exports = render;