// 3 test
const { Triangle, Square, Circle } = require('./shapes');

//Test to check to ensure size for Triangle is working
describe('Triangle', () => {
    test('Return correct polygon points & color', () => {
        const shape = new Triangle();
        color = 'blue';
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`);

    });
});
//Test to check to ensure size for Circle is working
describe('Circle', () => {
    test('Return correct circle points & color', () => {
        const shape = new Circle();
        color = "red";
        expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="${this.color}"/>`);
    });
});
//Test to check to ensure size for Square is working
describe('Square', () => {
    test('Return correct square points & color ', () => {
        const shape = new Square();
        color = 'green'; 
        expect(shape.render()).toEqual(`<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"/>`);
    }); 
});