function superMooieGlobalFunction() {
    console.log("ik ben global");
    console.log("dus jij mag mij overal aanroepen");
}

class App {
    runApplication() {
        console.log("hallo school!");
        superMooieGlobalFunction();  // Eerste  console.log("hello world");
        // Overige code hier
        superMooieGlobalFunction();  // Tweede  superMooieGlobalFunction();
    }
}

let app = new App();
app.runApplication();
superMooieGlobalFunction();  // Derde aanroep buiten de class, als dat de bedoeling is
