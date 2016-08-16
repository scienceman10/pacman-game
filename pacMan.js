//Pac Man Game
//By Benjamin A   v. 1.0
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var pc = true;//pac man closed?
var pm = {//pacman object
    x:200,
    y:200,
}
var move = 0;//how many pacman has moved
var pmclosed = new Image();
var pmopen = new Image();
pmclosed.src = "pmclosed.png";
pmopen.src = "pmopen.png";
var map1 = new Image();
map1.src = "map1.png";
setTimeout(function(){rdpm();}, 500);


function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map(1);
}
function map(map) {
    if (map == 1) {
        ctx.drawImage(map1, 0, 0, canvas.width, canvas.height)
    }
}
function keyManager(func, key) {
    if (key == 37){pm.x -=3; pmclosed.src = "pmclosedLEFT.png"; pmopen.src = "pmopenLEFT.png";}
    if (key == 38){pm.y -=3; pmclosed.src = "pmclosedUP.png"; pmopen.src = "pmopenUP.png";}
    if (key == 39){pm.x +=3; pmclosed.src = "pmclosed.png"; pmopen.src = "pmopen.png";}
    if (key == 40){pm.y +=3; pmclosed.src = "pmclosedDOWN.png"; pmopen.src = "pmopenDOWN.png";}
    rdpm();
    
}
function rdpm() {
    move++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    redrawCanvas();
    pc === true?ctx.drawImage(pmclosed, pm.x, pm.y, 25, 25): ctx.drawImage(pmopen, pm.x, pm.y, 25, 25);
    if (move > 4) {
        if (pc === true) {ctx.drawImage(pmopen, pm.x, pm.y, 25, 25); pc = false;
        } else {ctx.drawImage(pmclosed, pm.x, pm.y, 25, 25); pc = true;} move = 0;
    }
}
