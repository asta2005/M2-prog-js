class App 
{
  runApplication()
    {
      console.log("hello world")
     let arr = ["rustage","purojuice","earial ace",
                 "2Pac","swabadi" ]
       console.log(arr);
       let headers = document.getElementsByClassName("BandName");
       headers[0].innerHTML = "purojuice";
       headers[1].innerHTML = "earial ace";
       headers[2].innerHTML = "swabadi";
       headers[3].innerHTML = "2Pac";
       headers[4].innerHTML = "rustage"
    }
 
}

let app = new App();
app.runApplication();