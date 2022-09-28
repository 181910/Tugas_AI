class Food {
    constructor() {
        this.generate();
    }

    generate() {
        let maxCol = Math.floor(width / gridSize);
        let maxRow = Math.floor(height / gridSize);

        this.x = Math.floor(Math.random() * maxCol);
        this.y = Math.floor(Math.random() * maxRow);
    }

    draw() {
        fill(251, 236, 93);
        drawBox(this.x, this.y);
    }
}