class Triangle {
    constructor(color) {
        this.color = color
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Circle {
    constructor(color) {
        this.color = color
    }

    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
};

class Square {
    constructor(color) {
     this.color   
    }

    render() {
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"/>`
    }
};

module.exports = {Triangle, Square, Circle};
