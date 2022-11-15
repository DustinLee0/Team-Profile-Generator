//  create a card for each team member
function teamCards(team) {
    //  for each class, return a html card with associated properties
    team.forEach((obj) => {
        let role = obj.getRole();
        switch (role) {
            case 'Manager':
                return `<div class="card">
                <div class="card-body">
                  <h4 class="card-title">${obj.getName()}</h4>
                  <h5>${obj.getRole()}</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${obj.getId()}</li>
                    <li class="list-group-item">Email: ${obj.getEmail()}</li>
                    <li class="list-group-item">Office #: ${obj.officeNum}</li>
                  </ul>
              </div>`
                break;
            case 'Engineer':
                return `<div class="card">
                <div class="card-body">
                  <h4 class="card-title">${obj.getName()}</h4>
                  <h5>${obj.getRole()}</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${obj.getId()}</li>
                    <li class="list-group-item">Email: ${obj.getEmail()}</li>
                    <li class="list-group-item">Github Repository: ${obj.github}</li>
                  </ul>
              </div>`
                break;
            case 'Intern':
                return `<div class="card">
                <div class="card-body">
                  <h4 class="card-title">${obj.getName()}</h4>
                  <h5>${obj.getRole()}</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${obj.getId()}</li>
                    <li class="list-group-item">Email: ${obj.getEmail()}</li>
                    <li class="list-group-item">School: ${obj.school}</li>
                  </ul>
              </div>`
                break;
        }
    })
    // const teamHTML = team.map( function returnCard(object) {
    //     return `<div class="card">
    //     <div class="card-body">
    //       <h4 class="card-title">${object.getName()}</h4>
    //       <h5>${object.getRole()}</h5>
    //     </div>
    //       <ul class="list-group list-group-flush">
    //         <li class="list-group-item">Id: ${object.getId()}</li>
    //         <li class="list-group-item">Email: ${object.getEmail()}</li>
    //         <li class="list-group-item">Office #: }</li>
    //       </ul>
    //   </div>`
    // })
    return teamHTML;
}

module.exports = generateHTML;