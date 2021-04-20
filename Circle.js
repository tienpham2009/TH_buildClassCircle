class Circle {
    constructor(radius,) {
        this.radius = radius;
        this.color = '';
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        return Math.PI * radius * radius;
    }
}