//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown');


//Array of questions for user input
const questions = [    
    {
    type: 'input',
    message: 'What is the title?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'How do you install the application?',
    name: 'install',
    },
    {
    type: 'input',
    message: 'What are the instructions?',
    name: 'instructions',
    },
    {
    type: 'input',
    message: 'Do you have any credits?',
    name: 'credits',
    },
    {
    type: 'input',
    message: 'How do you use the application?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Did you use any licenses?',
    name: 'license',
    },
    {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    }
  ];
  
  //Function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.nd`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('README complete!');
    })
  }
  
  //Function that initializes the app
  function init() {
  
      // inquirer goes in here -> questions passed as argument --- .then call back function (writeToFile(){}) will will use generateMarkdown as data source --- pass data from inquirer into this!! how is spread operator to be used in this?
  }
  
  //Function call to initialize app
  init();



//the inquirer prompt array will take the questions as its argument
//the callback will use the generateMarkdown module as the source of data
//pass the data (call it answers or whatever) into generateMarkdown
//data passing is a big core of this exercise