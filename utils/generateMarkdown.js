// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTests(testsMD){
  let retStr = ''
  if(testsMD){
    retStr = `## Tests\n${testsMD}\n\n`
  }
  return retStr;
}

function renderCredits(creditsMD){
  let retStr = ''
  if(creditsMD){
    retStr = `## Credits\n${creditsMD}\n\n`
  }
  return retStr;
}

function renderContribution(contributionMD){
  let retStr = ''
  if(contributionMD){
    retStr = `## Contributing\n${contributionMD}\n\n`
  }
  return retStr;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 const md=  
`# ${data.title}
${renderLicenseBadge(data.license)}
${data.desc}

----- 
## Table of Contents
[toc]

-----
## Installation
${data.installation? data.installation : 'Install with ``` npm i ```'}

## Usage
${data.usage}

-----
${renderTests(data.test)}${renderCredits(data.credits)}${renderContribution(data.contribute)}

## License
${renderLicenseSection(data.license)}


`;

return md;
}

module.exports = generateMarkdown;
