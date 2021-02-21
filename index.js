// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project"
    },
    {
        type: "input",
        name: "desc",
        message: "Enter a description for your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter intallation instructions [npm i]"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions [omit]"
    },
    {
        type: "input",
        name: "credits",
        message: "Enter credits [omit]"
    },
    {
        type: "input",
        name: "contribute",
        message: "Enter contribution guidelines [omit]"
    },
    {
        type: "input",
        name: "contribute",
        message: "Enter contribution guidelines [omit]"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./output/"+fileName,generateMarkdown(data),(err)=>{console.error(err)})

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response)=>{writeToFile("readme.md",response)})
    .catch((err)=>{console.error(err)});
}

// Function call to initialize app
init();
