window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let name = document.querySelector("input[name=testName]");
        let date = document.querySelector("input[name=testDate]");
        let rocket = document.querySelector("input[name=rocketType]");
        let booster = document.querySelector("input[name=boosterCount]");
        let wind = document.querySelector("input[name=windRating]");
        let prod = document.querySelector("input[name=productionServers");

        if (name.input.value === "" || date.input.value === "" || rocket.input.value === "" || 
        booster.input.value === "" || wind.input.value === "" || prod.input.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
    });

});

