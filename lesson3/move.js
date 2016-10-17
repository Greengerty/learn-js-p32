var player = document.getElementById("player");
var kvadr = document.querySelectorAll(".kv");
var block = document.getElementById("block1");

var STEP = 5;

for(var i = 0; i < kvadr.length; i++) {
    console.log(kvadr[i]);

    kvadr[i].style.top = (Math.random() * (590 - 0) + 0) + "px";
    kvadr[i].style.left = (Math.random() * (790 - 0) + 0) + "px";
}

document.onkeydown = function(e){


    switch (e.keyCode) {
        case 38:
            if(!isBlock("top"))
                player.style.top = player.offsetTop - 5 + "px";
            break;
        case 39:
            if(!isBlock("right"))
                player.style.left = player.offsetLeft + 5 + "px";

            break;
        case 40:
            if(!isBlock("down"))
                player.style.top = player.offsetTop + 5 + "px";
            break;
        case 37:
            if(!isBlock("left"))
                player.style.left = player.offsetLeft - 5 + "px";
            break;
        default:
            return;
    }


};


var isBlock = function(move) {

    // #block1
    switch (move) {
        case "top":
            if(

                block.offsetTop <= player.offsetTop &&
                (block.offsetTop + block.offsetHeight + STEP) > player.offsetTop &&
                block.offsetLeft <= player.offsetLeft &&
                (block.offsetLeft + block.offsetWidth) >= (player.offsetLeft + player.offsetWidth)
            ) {

                return true;
            }

            break;
        case "down":
            if(

                block.offsetTop >= player.offsetTop &&
                (block.offsetTop + block.offsetHeight + STEP) < player.offsetTop &&
                block.offsetLeft <= player.offsetLeft &&
                (block.offsetLeft + block.offsetWidth) >= (player.offsetLeft + player.offsetWidth)
            ) {

                return true;
            }

            break;
        case "left":

            break;
        case "right":

            break;

    }

};





/**
 * Создать игры
 * 1. Sneak
 * 2. Pac-man
 * 3. Лабиринт
 */