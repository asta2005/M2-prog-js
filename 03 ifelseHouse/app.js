class App {
    constructor() {
        this.canvas = document.getElementById("canvasId");
        this.context = this.canvas.getContext("2d");

        // Set the background color of the canvas to black
        this.canvas.style.backgroundColor = "black";

        // Constants for sizes
        this.houseWidth = 300;
        this.houseHeight = 300;
        this.windowSize = 60;
        this.windowMargin = 20;
        this.roofHeight = 40;
        this.houseColor = "grey";
        this.roofColor = "#8B4513";
        this.windowFrameColor = "red";
        this.lightColor = "blue";
        this.doorColor = "green";
        this.doorWidth = 60;
        this.doorHeight = 120;
    }

    runApplication() {
        // Draw the house
        this.drawHouse();

        // Draw windows
        this.drawWindow(80, 80);
        this.drawWindow(200, 80);
        this.drawWindow(80, 200);
        this.drawWindow(200, 200);

        // Draw door
        this.drawDoor(150, 200);
    }

    drawHouse() {
        // Draw the house structure
        this.context.fillStyle = this.houseColor;
        this.context.fillRect(50, 50, this.houseWidth, this.houseHeight);

        this.context.fillStyle = this.roofColor;
        this.context.beginPath();
        this.context.moveTo(50, 50);
        this.context.lineTo(200, 10);
        this.context.lineTo(350, 50);
        this.context.closePath();
        this.context.fill();

        this.context.fillStyle = "white";
        this.context.fillRect(150, 200, 100, 150);
    }

    drawWindow(x, y) {
        // Use random number to determine if the window light is on or off
        let lightOn = Math.random() > 0.5;

        // Draw window frame
        this.context.fillStyle = this.windowFrameColor;
        this.context.fillRect(x, y, this.windowSize, this.windowSize);

        // Draw window light
        if (lightOn) {
            this.context.fillStyle = this.lightColor;
            this.context.fillRect(x + this.windowMargin, y + this.windowMargin, this.windowSize - 2 * this.windowMargin, this.windowSize - 2 * this.windowMargin);
        }
    }

    drawDoor(x, y) {
        // Draw door
        this.context.fillStyle = this.doorColor;
        this.context.fillRect(x, y, this.doorWidth, this.doorHeight);
    }
}

let app = new App();
app.runApplication();
