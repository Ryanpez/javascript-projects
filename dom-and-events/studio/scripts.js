
    //loading event listener
window.addEventListener("load", function() {

    //variables
    let height = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    //buttons
    const takeOff = document.getElementById('takeoff')
    const land = document.getElementById('landing');
    const abort = document.getElementById('missionAbort');

    //other variables
    let rocket = document.getElementById('rocket');
    let flightStatus = document.getElementById('flightStatus');
    let background = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

    //event listeners
    takeOff.addEventListener("click", function() {
        let takeOffResponse = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeOffResponse) {
            flightStatus.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue"
            height = 10000;
            shuttleHeight.innerHTML = height;
    }
});

    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "";
        height = 0;
        shuttleHeight.innerHTML = height;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
});

    abort.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response == true) {
            flightStatus.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "";
            height = 0;
            shuttleHeight.innerHTML = height;
            rocketPosX = 0;
            rocketPosY = 0;
            rocket.style.marginLeft = rocketPosX + 'px';
            rocket.style.marginBottom = rocketPosY + 'px';
        }
});

//event delegation for directional buttons
    window.addEventListener("click", function(event) {
        let bgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === "left" && rocketPosX > -(bgWidth /2 -40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX +'px';
        }
        if (event.target.id === "right" && rocketPosX < (bgWidth /2 -40)) {
            rocketPosX += 10;
            rocket.style.marginRight = rocketPosX + 'px';
        }
        if (event.target.id === "up" && height < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            height += 10000;
            shuttleHeight.innerHTML = height;
        }
        if (event.target.id === "down" && height > 0) {
            rocketPosY -= 10
            rocket.style.marginTop = rocketPosY + 'px';
            shuttleHeight.innerHTML = height;
            height -= 10000;
     }
});


});



