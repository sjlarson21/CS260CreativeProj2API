window.onload = function() {
    document.getElementById("nasaSubmit").addEventListener("click", async function(event) {
        event.preventDefault();
        const value = document.getElementById("nasaInput").value;
        if (value === "")
            return;
        console.log(value);

        const url1="https://images-api.nasa.gov/search?q=" + value;
        try{
            //trying 
            const response1 = await fetch(url1);
            console.log("response",response1);
            const json = await response1.json();
            //console.log("json: ",json); use when run into problems
            console.log(json);

            let results ="";
            results += '<img src='+ json.collection.items[0].links[0].href +'>';
            // results+= '<h2>Current Weather in ' + json.name +"</h2>";
            // for (let i=0; i < json.weather.length; i++) {
            //     results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            // }
            // results += '<h2' + json.main.temp + " &deg;F</h2>";
            // results += "<p>"
            // for (let i=0; i < json.weather.length; i++) {
            //     results += json.weather[i].description
            //     if (i!== json.weather.length - 1)
            //         results += ", "
            // }
            // results += "</p>";

            document.getElementById("nasaResults").innerHTML = results;

        }catch(myError){
            console.log(myError);
        }
    });
}