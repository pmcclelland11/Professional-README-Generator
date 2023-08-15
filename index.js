const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateReadme = require('./generateReadme');

async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain how to install your project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache', 'GPL', 'BSD-2-Clause', 'ISC', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Explain how others can contribute to your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions on how to test your project:',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ]);

    return userInput;
}

async function main() {
    const userInput = await getUserInput();
    const readmeContent = generateReadme(userInput);

    const outputPath = path.join(__dirname, 'Output', 'README.md'); 

    fs.writeFile(outputPath, readmeContent, (err) => {
        if (err) {
            console.error('Error writing README.md:', err);
        } else {
            console.log('README.md has been successfully generated and saved!');
        }
    });
}

main();