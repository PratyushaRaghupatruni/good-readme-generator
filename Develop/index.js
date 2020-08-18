// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
return inquirer.prompt([
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
        type: "list",
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
]);
}


// function to initialize program
async function init() {
    console.log("hi");
    try {
        const userInput = await promptUser();
        const readMe = generateMarkdown(userInput);
        await writeFileAsync("README.md", readMe)
        console.log("Successfully wrote to Readme");
    } catch (err) {
        console.log(err);
    }

}


// function call to initialize program
init();
