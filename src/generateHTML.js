function generateHTML(data) {
    const { Manager, Engineer, Intern } = data;
    console.log('manager: ', Manager);
    console.log('engineer: ', Engineer);
    console.log('intern: ', Intern);
    console.log('data: ', data);
}

module.exports = generateHTML;