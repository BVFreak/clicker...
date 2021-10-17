var clciks = 0;
function clcikClick(number){
    clciks = clciks + number;
    document.getElementById("clciks").innerHTML = clciks;
};
var cursrors = 0;
function buyCursror(){
    var cursrorCost = Math.floor(10 * Math.pow(1.1,cursrors));     //works out the cost of this cursror
    if(clciks >= cursrorCost){                                   //checks that the player can afford the cursror
        cursrors = cursrors + 1;                                   //increases number of cursrors
    	clciks = clciks - cursrorCost;                          //removes the clciks spent
        document.getElementById('cursrors').innerHTML = cursrors;  //updates the number of cursrors for the player
        document.getElementById('clciks').innerHTML = clciks;  //updates the number of clciks for the player
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursrors));       //works out the cost of the next cursror
    document.getElementById('cursrorCost').innerHTML = nextCost;  //updates the cursror cost for the player
};

window.setInterval(function(){
clcikClick(cursrors);
}, 10000);