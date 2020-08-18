// function to generate markdown for README
function generateMarkdown(data) {
  var license = data.license;
  var licenseName="";
  console.log(data.title);
  console.log(data.license);
  var badge = "";

   licenseName = (license === "MIT License") ? badge = "https://img.shields.io/badge/license-MIT-green" :
                    (license === "Apache License 2.0") ? badge = "https://img.shields.io/badge/license-Apache--2.0-blue"  :
                    (license === "GNU General Public License 3.0") ? badge = "https://img.shields.io/badge/license-GPL%203.0-blue" :
                    (license === "BSD 3 License") ?  badge = "https://img.shields.io/badge/license-BSD%203-green" :
                    badge= "This project has no license";
 

  return `# ${data.title}

  ![github license](${badge})

  # Description 
   ${data.Description}

  # Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licensce](#license)
  * [Tests](#test)
  * [Questions](#Questions)

  # Installation
  To Install the dependencies you should rin the following command
  <pre><code> ${data.installation}</code></pre>

  # Usage
  ${data.usage}

  # License
  The project licensed under 
  ${license}

  # Tests
  you should run the following command 
  <pre><code>${data.test}</code></pre>
  
  # Questions
  * If you have any questions about the repo, here is my repo 
  (https://github.com/${data.github}/${data.title}/issues/new) . 
  * You can find  my work at [${data.github}](https://github.com/${data.github}).
  `;
}


module.exports = generateMarkdown;
