// function to generate markdown for README
function generateMarkdown(data) {
  var license = data.license;
  console.log(data.title);
  console.log(data.license);
  var badge = "";

    if (license === "MIT License") {
      badge = "https://img.shields.io/badge/license-MIT-green";
    }
    if (license === "Apache License 2.0") {
      badge = "https://img.shields.io/badge/license-Apache--2.0-blue";
    }
    if (license === "GNU General Public License 3.0") {
      badge = "https://img.shields.io/badge/license-GPL%203.0-blue";
    }
    if (license == "BSD 3 License") {
      badge = "https://img.shields.io/badge/license-BSD%203-green";
    }
    if (license === "none") {
      badeg = "This project has no license";
    }
  

  return `# ${data.title}

  ![github license](${badge})

  #Description 
   ${data.Description}

  # Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licensce](#license)
  * [Tests](#test)
  * [Questions](#Questions)

  # installation
 To Install the dependencies ${data.installation}

  # Usage
  ${data.usage}

  # license
  The project licensed under  ${license}

  # Tests
  you should be able to run ${data.test} to install dependencies
  
  # Questions
  * If you have any questions about the repo, here is my repo 
  (https://github.com/${data.github}/${data.title}/issues/new) . 
  * You can find  my work at [${data.github}](https://github.com/${data.github}).
  `;
}


module.exports = generateMarkdown;
