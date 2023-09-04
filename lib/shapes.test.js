// 3 test
const { Triangle, Square, Circle } = require('./shapes');


describe('Triangle', () => {
    test('Return correct polygon points & color', () => {
        const shape = new Triangle();
        color = 'blue';
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`);

    });
}) 