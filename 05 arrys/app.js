class App {
    runApplication() {
        console.log("Hello world");

        var favorieteArtiesten = ["rustage", "swabadi", "milss"];
        console.log("Mijn favoriete artiesten zijn:");

        for (let i = 0; i < favorieteArtiesten.length; i++) {
            const artiest = i + 1 + ": " + favorieteArtiesten[i];
            console.log(artiest);
        }

        var nummers = [4, 5, 9];

        for (let i = 0; i < nummers.length; i++) {
            nummers[i] += 1;
        }

        console.log("Nummers na het toevoegen van 1:", nummers);
    }
}

let app = new App();
app.runApplication();
