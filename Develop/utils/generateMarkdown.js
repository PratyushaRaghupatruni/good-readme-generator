// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Description ${data.Description}
  # Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Licensce](#license)
  *[Tests](#test)
  *[Questions](#Questions)

  #installation
  ${data.installation}

  #Usage
  ${data.usage}

  #license
  ${data.license}

  #Tests
  (you should be able to run ${data.test} to install dependencies)
  
  #Questions
  * If you have any questions about the repo, here is my repo 
  (https://github.com/${data.github}/${data.title}/issues/new) or contact me directly at ${data.email}. 
  * You can find  my work at [${data.github}](https://github.com/${data.github}).
  `;
    }
    

module.exports = generateMarkdown;
