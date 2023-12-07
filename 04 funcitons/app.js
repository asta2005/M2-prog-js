class App {
    runApplication() {
        console.log("Hello world");
        newclassfunction();
        superMooieGlobalFunction();

        argumentsAreHandy("Dit is een shoutout!");
        argumentsAreHandy("ik ben omar hallo!");

        // Overige code hier
        superMooieGlobalFunction();

        // Nieuwe functies toegevoegd
        this.marioFunction();
        let bwahahaResult = this.bwahahaFunction();
        console.log(bwahahaResult);

        let sumResult = this.addNumbers(5, 7);
        console.log(sumResult);

        // Roep de overige functies aan en vang het resultaat op
        let ax2bcWiskundeResult = ax2bcWiskunde(2, 3, 4, 5);
        console.log(ax2bcWiskundeResult);

        let heeftEenResultaatResult = heeftEenResultaat();
        console.log(heeftEenResultaatResult);
    }

    anotherFunctionWithArguments(aArguments) {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArguments);
    }

    marioFunction() {
        console.log("MARIO!!");
    }

    bwahahaFunction() {
        return "BWAHAHA!!!";
    }

    addNumbers(num1, num2) {
        return num1 + num2;
    }
}

function newclassfunction() {
    console.log("Hello word in nieuwe class function");
}

function runApplication() {
    console.log("Hello world");
}

function ax2bcWiskunde(x, a, b, c) {
    let y = a * x * x + b * x + c;
    return y;
}

function heeftEenResultaat() {
    let resultaat = 1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

function argumentsAreHandy(shoutout) {
    console.log("do you want to give a shoutout?");
    console.log(shoutout);

    let x = 9;
    let a = 3;
    let b = 4;
    let c = 84;

    let y = ax2bcWiskunde(x, a, b, c);
    console.log(y);

    let y1 = ax2bcWiskunde(9, 3, 4, 89);
    console.log(y1);

    let y2 = ax2bcWiskunde(3, 6, 5, 45);
    console.log(y2);

    let y3 = ax2bcWiskunde(7, 1, 2, 13);
    console.log(y3);

    let u = 9;
    let h = 8;
    let i = 15;

    let logY = Math.log(1) + h + Math.pow(u, 2);
    console.log(logY);
}

function superMooieGlobalFunction() {
    console.log("ik ben global");
    console.log("dus jij mag mij overal aanroepen");
}

let app = new App();
app.anotherFunctionWithArguments("mijn argument is iets...");
superMooieGlobalFunction();
app.runApplication(); // Voeg deze regel toe om de runApplication-methode van de klasse App aan te roepen
