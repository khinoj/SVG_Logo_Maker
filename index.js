const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        title: 'characters',
        message: 'Pick 3 letters',
        validate: function (input) {
            if (input.lenth <= 3) {
                return true
            } else {
                return 'You must type 3 characters or less'
            }
        }
    },
    {
        type: 'input',
        title: 'textColor',
        message: 'Pick a text color (OR a hexadecimal number)'
    },
    {
        type: 'list',
        title: 'shape',
        message: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        title: 'shapeColor',
        message: 'Wat color do you want the shape (OR a hexdecimal number)'
    },
];


inquirer
  .prompt(questions)
    /* Pass your questions in here */
  .then((answers) => {
    // Use user feedback for... whatever!!
  });