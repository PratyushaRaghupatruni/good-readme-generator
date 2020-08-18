# good-readme-generator

# Description:
When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for.

# UserStory:
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project.

# Acceptance Criteria:
WHEN: I am prompted for information about my application repository
THEN: A quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

# Demo

# Technology:
* Node.js:
Node.js is an open-source, cross-platform, JavaScript runtime environment (Framework) that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

* NPM Package:
Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js.

Inquirer.js should ease the process of

providing error feedback
asking questions
parsing input
validating answers

# Installation:
* Navigate to the 'Develop' folder. To install necessary dependencies, run the following command :
   npm i
* The application will be invoked with the following command:
  node index.js

  # Usage:
  * Run Commands listed in Installation
  * Running node index.js command will prompt user the questions about project repository, and with User's Answers 'README.md' file will be generated.

  # Features:
  * Uses Node.js to build application which generates README.md file dynamically with the user's input .
  * Used Npm package 'Inquirer' to generate the Questions to the User.

