class App
{
    runApplication()
    {
       
        this.tekencircel();
        console.log(this.tekencircel())
        
    }

    tekencircel()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        for (let i = 0; i <= 400; i++) 
        {
            let x = Math.floor(Math.random() * 3000);
            let y = Math.floor(Math.random() * 2000);
            let kleur = Math.floor(Math.random() * 5);
            console.log(kleur);
            g.beginPath();
            if(kleur == 0)
            {
                g.fillStyle = "purple";
            }
            else if(kleur == 1)
            {
                g.fillStyle = "green";
            }
            else if(kleur == 3)
            {
                g.fillStyle = "black";
            }
            else if(kleur == 4)
            {
                g.fillStyle = "orange";
            }
            else if(kleur == 5)
            {
                g.fillStyle = "red";
            }
            g.arc(x, y, 50, 0, 2 * Math.PI);
            g.fill();
        }
    }
}

let app = new App();
app.runApplication();
app.tekencircel();
        