// variables 
var clicks = 0;
var cursors = 0;
var cardboardboxes = 0;
var cacti = 0;
var cabinets = 0;
var cafes = 0;

function save(){
    var save = {
        clicks: clicks,
        cursors: cursors,
        cardboardboxes: cardboardboxes,
        cacti: cacti,
        cabinets: cabinets,
        cafes: cafes
    }
    localStorage.setItem("save",JSON.stringify(save));
    
    // show Saved for 1 second only
    document.getElementById('savebox').innerHTML = "Saved!";
    console.log("Saved");
}

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));

    clicks = savegame ? savegame.clicks : 0;
    cursors = savegame ? savegame.cursors : 0;
    cardboardboxes = savegame ? savegame.cardboardboxes : 0;
    cacti = savegame ? savegame.cacti : 0;
    cabinets = savegame ? savegame.cabinets : 0;
    cafes = savegame ? savegame.cafes : 0;

    document.getElementById('cursors').innerHTML = cursors;
    var nextCost = Math.floor(15 * Math.pow(1.15,cursors));
    document.getElementById('cursorCost').innerHTML = nextCost;

    document.getElementById('cardboardboxes').innerHTML = cardboardboxes;
    var nextCost = Math.floor(100 * Math.pow(1.15,cardboardboxes));
    document.getElementById('cardboardboxCost').innerHTML = nextCost;

    document.getElementById('cacti').innerHTML = cacti;
    var nextCost = Math.floor(500 * Math.pow(1.15,cacti));
    document.getElementById('cactusCost').innerHTML = nextCost;

    document.getElementById('cabinets').innerHTML = cabinets;
    var nextCost = Math.floor(5000 * Math.pow(1.15,cabinets));
    document.getElementById('cabinetCost').innerHTML = nextCost;

    document.getElementById('cafes').innerHTML = cafes;
    var nextCost = Math.floor(15000 * Math.pow(1.15,cafes));
    document.getElementById('cafeCost').innerHTML = nextCost;

}

load();

// console message
console.log("Cheating ruins the fun... or are you looking for a bug?")

// save automatically
window.setInterval(function(){
 save();
}, 30000);

// save when close window
window.onbeforeunload = closingCode;
function closingCode(){
   save();
   return null;
}

function wipesave(){
    alert("Wiped save successfully.")
    localStorage.removeItem("save");
    load();
}

function clickClick(number){
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById('savebox').innerHTML = "";
};

function buyCursor(){
    var cursorCost = Math.floor(15 * Math.pow(1.15,cursors));     //works out the cost of this cursor
    if(clicks >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	clicks = clicks - cursorCost;                          //removes the clicks spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(15 * Math.pow(1.15,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the player
};

window.setInterval(function(){
clickClick(cursors);
}, 10000);


function buyCardboardBox(){
    var cardboardboxCost = Math.floor(100 * Math.pow(1.15,cardboardboxes));     //works out the cost of this cardboardbox
    if(clicks >= cardboardboxCost){                                   //checks that the player can afford the cardboardbox
        cardboardboxes = cardboardboxes + 1;                                   //increases number of cardboardboxes
        clicks = clicks - cardboardboxCost;                          //removes the clicks spent
        document.getElementById('cardboardboxes').innerHTML = cardboardboxes;  //updates the number of cardboardboxes for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(100 * Math.pow(1.15,cardboardboxes));       //works out the cost of the next cardboardbox
    document.getElementById('cardboardboxCost').innerHTML = nextCost;  //updates the cardboardbox cost for the player
};

window.setInterval(function(){
clickClick(cardboardboxes);
clickClick(cardboardboxes);
}, 1000);


function buyCactus(){
    var cactusCost = Math.floor(500 * Math.pow(1.15,cacti));     //works out the cost of this cactus
    if(clicks >= cactusCost){                                   //checks that the player can afford the cactus
        cacti = cacti + 1;                                   //increases number of cacti
        clicks = clicks - cactusCost;                          //removes the clicks spent
        document.getElementById('cacti').innerHTML = cacti;  //updates the number of cacti for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(500 * Math.pow(1.15,cacti));       //works out the cost of the next cactus
    document.getElementById('cactusCost').innerHTML = nextCost;  //updates the cactus cost for the player
};

window.setInterval(function(){
clickClick(cacti);
clickClick(cacti);
clickClick(cacti);
clickClick(cacti);
clickClick(cacti);
}, 250);


function buyCabinet(){
    var cabinetCost = Math.floor(5000 * Math.pow(1.15,cabinets));     //works out the cost of this cabinet
    if(clicks >= cabinetCost){                                   //checks that the player can afford the cabinet
        cabinets = cabinets + 1;                                   //increases number of cabinets
        clicks = clicks - cabinetCost;                          //removes the clicks spent
        document.getElementById('cabinets').innerHTML = cabinets;  //updates the number of cabinets for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(5000 * Math.pow(1.15,cabinets));       //works out the cost of the next cabinet
    document.getElementById('cabinetCost').innerHTML = nextCost;  //updates the cabinet cost for the player
};

window.setInterval(function(){
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);
clickClick(cabinets);

}, 100);


function buyCafe(){
    var cafeCost = Math.floor(15000 * Math.pow(1.15,cafes));     //works out the cost of this cafe
    if(clicks >= cafeCost){                                   //checks that the player can afford the cafe
        cafes = cafes + 1;                                   //increases number of cafes
        clicks = clicks - cafeCost;                          //removes the clicks spent
        document.getElementById('cafes').innerHTML = cafes;  //updates the number of cafes for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(15000 * Math.pow(1.15,cafes));       //works out the cost of the next cafe
    document.getElementById('cafeCost').innerHTML = nextCost;  //updates the cafe cost for the player
};

window.setInterval(function(){
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
clickClick(cafes);
}, 25);

