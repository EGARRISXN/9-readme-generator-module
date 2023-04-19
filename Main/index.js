//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Main/utilities/generatemarkdown');


//Array of questions for user input
const questions = [    
    {
    type: 'input',
    message: 'What is the title of the program?',
    name: 'title',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter the title of the program.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'What is a brief description of the program?',
    name: 'description',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter a brief description of the program.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'How do you install this program?',
    name: 'installation',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please describe how to install this program.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'How do you run the program?',
    name: 'usage',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please describe how to run this program.');
            return false;
        }
    }},
    {
    type: 'list',
    message: 'Did you use a license for this program?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL v3.0', 'NONE'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Please enter a license for this program.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'Did you have any contributors for this program?',
    name: 'contributors',
    validate: contributorsInput => {
        if (contributorsInput) {
            return true;
        } else {
            console.log('Please list any contributors for this program.');
            return false;
        }
    }},
];
  
//Function to write README file
const writeToFile = function(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=> {
        if(err){
            console.log(err)
        }
        console.log('README.md complete!');
    })
}
  
//Function that initializes the app
function init() {
    inquirer.prompt(questions).then(function(response) {
        console.log(response);

    let data = generateMarkdown(response);
        writeToFile(data)
    });
};
  
//Function call to initialize app
init();
