// SECTION LETS AND ARRAYS
let stars = 0;

let lasersTotal = 0;

let nIntervId;

let clickUpgrades = [
    {
        id: 1,
        name: 'laser',
        price: 10,
        quantity: 0,
        multiplier: 1,
    },
    {
        id: 2,
        name: 'starship',
        price: 50,
        quantity: 0,
        multiplier: 5,
    }
];

let automaticUpgrades = [
    {
        id: 3,
        name: 'rover',
        price: 600,
        quantity: 0,
        multiplier: 20
    },
    {
        id: 4,
        name: 'planet',
        price: 1200,
        quantity: 0,
        multiplier: 40
    }
];






// SECTION FUNCTIONS 




function mine() {
    stars += 1;
    clickUpgrades.forEach(s => {
        stars += s.multiplier * s.quantity
    })
    console.log(stars);
    updateStars();
}



function autoMine() {
    automaticUpgrades.forEach(a => {
        stars += a.multiplier * a.quantity
    })
    updateStars()
}

setInterval(autoMine, 3000)

function updateStars() {
    document.getElementById("starsCount").innerText = stars
}




// SECTION BUY FUNCTIONS AND ITEMS

function updateLasers() {
    document.getElementById("laserTotal").innerText = clickUpgrades[0].quantity

}
function updateLasersPrice() {
    document.getElementById("laserPrice").innerText = clickUpgrades[0].price
}


function buyLaser() {

    if (stars >= clickUpgrades[0].price) {
        stars -= clickUpgrades[0].price
        updateStars();
        clickUpgrades[0].quantity += 1;
        updateLasers();
        clickUpgrades[0].price += 10;
        updateLasersPrice();
        console.log('purchased laser');
    }


}

function updateStarships() {
    document.getElementById("starshipTotal").innerText = clickUpgrades[1].quantity
}
function updateStarshipsPrice() {
    document.getElementById("starshipPrice").innerText = clickUpgrades[1].price
}

function buyStarship() {
    if (stars >= clickUpgrades[1].price) {
        stars -= clickUpgrades[1].price
        updateStars();
        clickUpgrades[1].quantity += 1;
        updateStarships();
        clickUpgrades[1].price += 15;
        updateStarshipsPrice();
    }
}




function updateRovers() {
    document.getElementById("roverTotal").innerText = automaticUpgrades[0].quantity
}
function updateRoversPrice() {
    document.getElementById("roverPrice").innerText = automaticUpgrades[0].price
}



function buyRover() {
    if (stars >= automaticUpgrades[0].price) {
        stars -= automaticUpgrades[0].price
        updateStars();
        automaticUpgrades[0].quantity += 1;
        updateRovers();
        automaticUpgrades[0].price += 150;
        updateRoversPrice();
    }
}










function updatePlanets() {
    document.getElementById("planetTotal").innerText = automaticUpgrades[1].quantity
}
function updatePlanetsPrice() {
    document.getElementById("planetPrice").innerText = automaticUpgrades[1].price
}



function buyPlanet() {
    if (stars >= automaticUpgrades[1].price) {
        stars -= automaticUpgrades[1].price
        updateStars();
        automaticUpgrades[1].quantity += 1;
        updatePlanets();
        automaticUpgrades[1].price += 150;
        updatePlanetsPrice();
    }
}
