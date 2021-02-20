// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [	{
    type: "input", //what kind of input it is supposed to be. Check docs for all types
    name: "title", //the variable that the response will be returned as
    message: "Enter the title of your project", //the question to be displayed to the user
    // choices: [] //if the type requires selectable choices, those choices go here. can be ommited otherwise
    //type = 'checkbox' or 'list' require choices.
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data.title)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response)=>{writeToFile("",response)})
    .catch((err)=>{console.error(err)});
}

// Function call to initialize app
init();
