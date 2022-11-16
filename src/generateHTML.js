//  create a card for each team member
function teamCards(team) {
    //  for each class object, return a member card with associated properties
    //  use .map to return new array of html code of team
    const cards = team.map((obj) => {
        let role = obj.getRole();
        switch (role) {
            case 'Manager':
                return `
                <div class="card">
                <div class="card-header-manager">
                  <h4 class="card-title">${obj.getName()}</h4>
                  <h5>${obj.getRole()}</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id:  ${obj.getId()}</li>
                    <li class="list-group-item">Email:  <a href='mailto: ${obj.getEmail()}'>${obj.getEmail()}</a></li>
                    <li class="list-group-item">Office #:  ${obj.officeNum}</li>
                  </ul>
                </div>\n`
            case 'Engineer':
                return `
                <div class="card">
                <div class="card-header-engineer">
                  <h4 class="card-title">${obj.getName()}</h4>
                  <h5>${obj.getRole()}</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id:  ${obj.getId()}</li>
                    <li class="list-group-item">Email:  <a href='mailto: ${obj.getEmail()}'>${obj.getEmail()}</a></li>
                    <li class="list-group-item">Github Repository:  <a href='https://github.com/${obj.getGithub()}' target="_blank">${obj.github}</a></li>
                  </ul>
                </div>\n`
            case 'Intern':
                return `
                <div class="card">
                <div class="card-header-intern">
                  <h4 class="card-title">${obj.getName()}</h4>
                  <h5>${obj.getRole()}</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id:  ${obj.getId()}</li>
                    <li class="list-group-item">Email:  <a href='mailto: ${obj.getEmail()}'>${obj.getEmail()}</a></li>
                    <li class="list-group-item">School:  ${obj.getSchool()}</li>
                  </ul>
                </div>\n`
        }
    })
    return cards.join('');
}

function generateHTML(team) {
    const cards = teamCards(team)

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <h1 class="display-5 text-center header-bg">My Team Profile</h1>
        <section class="d-flex flex-wrap justify-content-center" id="team-card">\n
        ${cards}
        </section>
    </body>
    </html>`
}

module.exports = generateHTML;