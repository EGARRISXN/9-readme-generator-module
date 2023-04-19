const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index');


//Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = ''
  } else if (license === 'APACHE 2.O') {
    badge = ''
  } else if (license === 'GPL v3.0') {
    badge = ''
  } else {
    badge = ''
  }
  return `https://img.shields.io/badge/license-${license}-blue`
}

//Function that returns the license link - this is internally in the .md file...a link to the license section
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = ''
  } else if (license === 'APACHE 2.O') {
    licenseLink = ''
  } else if (license === 'GPL v3.0') {
    licenseLink = ''
  } else {
    licenseLink = ''
  }
  return `https://img.shields.io/badge/license-${license}-blue`
}

//Function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'NONE') {
    licenseSection = ''
  } else {
    licenseSection = 
    ` License: ${license} `
  }
  return licenseSection;
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## A description about your program.
  ## ${response.description}
  
  ### Installation
  ### ${response.installation}

  ### Usage
  ### ${response.usage}

  ## License
  ## ${response.license}

  ## Contributors
  ## ${response.contributors} 
`;
}

module.exports = generateMarkdown;


//for this you'll return a template literal. this will be the markdown language
//write general readme first then paste into template literal to see if it works
//license up top will be used in the template literal generatemarkdown
//since (data) is the parameter and the data getting passed is the questions... the data.license is what youre going to pass into whatever license.function is and thats going to be the argument for the (license) parameter 
//to render the license badge you'll use the data that's been passed around rather what kind of license or if there is one at all YOU WILL HAVE A LOGIC GATE -- use shields.io for this *also refer to screenshot* fill in message on shields site with data you get from inquirer prompt. USE A TEMPLATE LITERAL
//data passing function example. kitchen. chef to sous chef. produce. etc.
//init is head chef tells sous chef what to do. generatemarkdown and other functions is the sous chef and processes the produce. data or questions array is the produce.
