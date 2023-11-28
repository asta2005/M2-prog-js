class App 
{
    runApplication()
    {

        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

            g.fillStyle = "black";
            g.fillRect(50, 50, 300, 300);

        
            g.fillStyle = "#8B4513";
            g.beginPath();
            g.moveTo(50, 50);
            g.lineTo(200, 10);
            g.lineTo(350, 50);
            g.closePath();
            g.fill();

            g.fillStyle = "white";
            g.fillRect(150, 200, 100, 150);

            g.fillStyle = "white"; //
            g.fillRect(80, 80, 60, 60);
    


    }    
}
let app = new App();
app.runApplication();   
