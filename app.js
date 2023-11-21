class App {
    runApplication() {
       
        console.log("hallo school!"); 
        // Overige code hier
        let appNaam = "les1"; 
        let versienummer = 0.9;
        let versiedatum = new Date(21/11/2023); 
        let auteur = "omar kahouach";
        let copyright = "media college "; 
        let distributeur = "visualcode"; 
        let darkmode = false;

        console.log("appNaam:", appNaam);
        console.log("Versienummer:", versienummer);
        console.log("Versiedatum:", versiedatum);
        console.log("Auteur:", auteur);
        console.log("Copyright:", copyright);
        console.log("Distributeur:", distributeur);
        console.log("Darkmode:", darkmode);
    }
}

let app = new App();
app.runApplication();