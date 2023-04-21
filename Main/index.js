//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./markdown/generatemarkdown');


//Array of questions for user input
const questions = [    
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a title for your project.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'Please give a brief description of your project?',
    name: 'description',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please give a description of your project.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'How do you install this project?',
    name: 'installation',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please explain how to install this project.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'How do you run this project?',
    name: 'usage',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please explain how to run this project.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'Did you have any contributors on this project?',
    name: 'contributors',
    validate: contributorsInput => {
        if (contributorsInput) {
            return true;
        } else {
            console.log('Please list any contributors you had on this project.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please list your email address.');
            return false;
        }
    }},
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please list your GitHub username.');
            return false;
        }
    }},
    {
    type: 'list',
    message: 'Did you use a license for this project?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'None of the above.'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Please chose a license or select "None of the above.');
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
        writeToFile('../README.md', generateMarkdown({ ...responses }))
    });
};
  
//Function call to initialize app
init();
