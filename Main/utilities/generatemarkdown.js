// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // this will use data passed in from generateMarkdown function. have a logic gate to make sure a license was chosen.
  return `https://img.shields.io/badge/license-${license}-blue`
}

// TODO: Create a function that returns the license link - this is internally in the .md file...a link to the license section
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // this will use data passed in from generateMarkdown function. have a logic gate to make sure a license was chosen.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // this will use data passed in from generateMarkdown function.  have a logic gate to make sure a license was chosen.
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
`;
  // you will need to use the license functions in here ^, passing data to the functions you call -- licenseFunction(data.license)
}

module.exports = generateMarkdown;




//for this you'll return a template literal. this will be the markdown language

//write general readme first then paste into template literal to see if it works

//license up top will be used in the template literal generatemarkdown

//since (data) is the parameter and the data getting passed is the questions... the data.license is what youre going to pass into whatever license.function is and thats going to be the argument for the (license) parameter 

//to render the license badge you'll use the data that's been passed around rather what kind of license or if there is one at all YOU WILL HAVE A LOGIC GATE -- use shields.io for this *also refer to screenshot* fill in message on shields site with data you get from inquirer prompt. USE A TEMPLATE LITERAL

//data passing function example. kitchen. chef to sous chef. produce. etc.

//init is head chef tells sous chef what to do. generatemarkdown and other functions is the sous chef and processes the produce. data or questions array is the produce.