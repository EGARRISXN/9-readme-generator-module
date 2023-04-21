//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./markdown/generatemarkdown');


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
    message: 'What is a brief description of this program?',
    name: 'description',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter a brief description of this program.');
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
    message: 'How do you run this program?',
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
    choices: ['The MIT License', 'Apache 2.0 License', 'GNU GPL v3', 'None'],
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
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`File ${fileName} created successfully!`);
      }
    });
}

//Function that initializes the app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating Professional README.md file...');
        writeToFile('./final_readme/README.md', generateMarkdown({ ...responses }))
    });
};
  
//Function call to initialize app
init();
