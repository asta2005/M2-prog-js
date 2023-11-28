class App {
    runApplication() {
        console.log("Hello");

        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);

        if (random < 0.2) {
            title.style.backgroundColor = '#FF0000';
        } else if (random >= 0.2 && random <= 0.6) {
            title.style.backgroundColor = '#00FF00';
        } else if (random > 0.6 && random <= 0.75) {
            title.style.backgroundColor = '#0000FF';
        } else {
            title.style.backgroundColor = '#FFFF00';
        }

        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        let newsitem2 = document.getElementsByClassName("gamenews")[1];

        newsitem1.style.backgroundColor = '#FFA500';
        newsitem2.style.backgroundColor = '#008080';  

    }
}

let app = new App();
app.runApplication();