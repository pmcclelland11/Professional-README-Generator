function generateReadme(userInput) {
    const licenseBadge = generateLicenseBadge(userInput.license);

    return `# ${userInput.title}
${licenseBadge}

## Description
${userInput.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## License
This project is covered under the ${userInput.license} license.

## Contributing
${userInput.contributing}

## Tests
${userInput.tests}

## Questions
For additional questions, you can reach me via [GitHub](https://github.com/${userInput.githubUsername}) or email at ${userInput.email}.`;
}

function generateLicenseBadge(license) {
    const badgeURLs = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'GPL': '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD-2-Clause': '[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        'None': 'No License',
    };

    return badgeURLs[license] || '';
}

module.exports = generateReadme;