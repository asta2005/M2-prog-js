class App {
    constructor() {
        // Class variabelen
        this.classBoolean = true;
        this.classString = "Hello, class!";
        this.classNumber = 42;
    }

    runApplication() {
        console.log("hallo school!");

        // Local variabelen
        let localBoolean = true;
        let localString = "Hello, local!";
        let localNumber = 123;

        console.log("Local boolean:", localBoolean);
        console.log("Local string:", localString);
        console.log("Local number:", localNumber);

        // Class variabelen
        console.log("Class boolean:", this.classBoolean);
        console.log("Class string:", this.classString);
        console.log("Class number:", this.classNumber);

        
        this.greeting = "starting up";
        this.appNaam = "les1";
        this.versienummer = 0.9;
        this.versiedatum = new Date(2023, 10, 21); 
        this.auteur = "omar kahouach";
        this.copyright = "media college ";
        this.distributeur = "visualcode";
        this.darkmode = false;
    }
}

let app = new App();
app.runApplication();

console.log("appNaam:", app.appNaam);
console.log("Versienummer:", app.versienummer);
console.log("Versiedatum:", app.versiedatum);
console.log("Auteur:", app.auteur);
console.log("Copyright:", app.copyright);
console.log("Distributeur:", app.distributeur);
console.log("Darkmode:", app.darkmode);
