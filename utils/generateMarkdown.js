// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderContribution(contributionMD){}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
`# ${data.title}
${description}

----- 
## Table of Contents
[toc]

## Instalation
${data.installation? data.installation : 'Install with ``` npm i ```'}

## Usage
${data.usage}

${renderTests(data.test)}

${renderCredits(data.credits)}

${renderContribution(data.contribute)}


`;
}

module.exports = generateMarkdown;
