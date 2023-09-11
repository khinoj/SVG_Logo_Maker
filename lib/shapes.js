class Shape {
    constructor(color) {
        this.color = color
    } 
    setColor(color) {
        this.color = color;
    };
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color)
    }

    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
};

class Square extends Shape {
    constructor(color) {
     super(color)   
    }

    render() {
        return `<rect x="60" y="10" rx="10" ry="10" width="200" height="200" fill="${this.color}"/>`
    }
};

module.exports = {Triangle, Square, Circle};
