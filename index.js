const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 character for your logo:',
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            } else {
                return 'Input must be 3 characters of less.'
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
        message: 'Pick a shape?',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Wat color do you want the shape (OR a hexdecimal number)'
    }
]


inquirer
    .prompt(questions)
    /* Pass your questions in here */
    .then((answers) => {
        console.log(answers);
        let shape;
        // Use user feedback for... whatever!!
        let text = answers.text.toUpperCase();
        if (answers.shape === 'Triangle') {
            return shape = new Triangle();
        } else if (answers.shape === 'Circle') {
            return shape = new Circle();
        } else if (answers.shape === 'Square') {
            return shape = new Square();
        } else {
            console.log(text);
            fs.writeFile('logo.svg', (err) =>
                err ? console.log(err) : console.log('Success')
            )
        }
    }
    );