const inquirer = require('inquirer');
const fs = require('fs');

//Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'The MIT License') {
    badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license === 'Apache 2.0 License') {
    badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'GNU GPL v3') {
    badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else {
    badge = ''
  }
  return badge;
}

//Function that returns the license link - this is internally in the .md file...a link to the license section
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'The MIT License') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache 2.0 License') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GNU GPL v3') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

//Function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = 'None'
  } else {
    licenseSection = 
    `
    [![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})
    `
  }
  return licenseSection;
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title

  ${data.title}
  
  ## Description
  
  ${data.description}
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, and add it to your README.
  
  ## Contributors
  
  ${data.contributors} 
  
  ## License
  
  ${data.licenseSection}
  
  ---
  
  Note: The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
`;
}

module.exports = generateMarkdown;

