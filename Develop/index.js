// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github Username"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address"
    },

    {
        type: "input",
        name: "Description",
        message: "Please write a short description of your project"
    },
    {
        type: "checkbox",
        name: "license",
        message: "what kind of license should your project have",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License 3.0",
            "BSD 3 License",
            "None",
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "what command should be run to install dependencies",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),err=> {
        if(err){
            return console.log(err);
        }
        console.log("Success!")
        
    });


}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(function(userInput){
        fs.writeFile(README.md,userInput,err =>{

            if(err){
                return console.log(err);
            }
          console.log("Success! README.md created")
        });
    });
}

// function call to initialize program
init();
