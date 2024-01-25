class Dino 
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

    eatFood(foodToEat)
    {
        foodToEat.leeft = false;
        this.honger = false;
        console.log("ik ben een " + this.naam);
        console.log("ik eet nu " + foodToEat.naam);
        console.log("mijn honger: " + this.honger);
    }
}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
        this.leeft = true;
    }
}

class App
{
    runApplication()
    {
        console.log("Hello world!");
        
        let dino = new Dino("T-Rex", true, 40);
        let plantenEter = new Dino("Triceratops", false, 20);
        let gras = new Plant("gras");
        let struik = new Plant("struik");

        console.log(dino);
        console.log(plantenEter);
        console.log("de leeftijd van deze " + dino.naam + " is: " + dino.leeftijd);
        console.log("en deze " + dino.naam + " eet vlees: " + dino.vleeseter);

        plantenEter.eatFood(gras);
        plantenEter.eatFood(struik);

        dino.eatFood(plantenEter);
        console.log("leeft " + plantenEter.naam + "? " + plantenEter.leeft);

    }
}

let app = new App();
app.runApplication();