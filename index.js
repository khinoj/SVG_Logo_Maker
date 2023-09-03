const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes');



const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Type 3 letters:',
        validate: function (input) {
            if (input.length <= '3') {
                return true;
            } else {
                return 'You must type 3 characters or less'
            }
        }
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Pick your text color (OR a hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Wat color do you want the shape (OR a hexdecimal number)'
    },
];


inquirer
  .prompt(questions)
    /* Pass your questions in here */
  .then((answers) => {
    // Use user feedback for... whatever!!
    var characters = answers.characters.toUpperCase();
    var text_color = answers.text_color;

    }
  );