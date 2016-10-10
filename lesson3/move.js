var kv = document.getElementById("kv");
var kvadr = document.querySelectorAll(".kv");

for(var i = 0; i < kvadr.length; i++) {
    console.log(kvadr[i]);

    kvadr[i].style.top = (Math.random() * (590 - 0) + 0) + "px";
    kvadr[i].style.left = (Math.random() * (790 - 0) + 0) + "px";
}

document.onkeydown = function(e){

    console.log(e.keyCode)

    // top 38
    if(e.keyCode == 38 ) {

        if(kv.offsetTop <= 0) {
            return;
        }
        kv.style.top = kv.offsetTop - 10 + "px";

    }

    // right 39
    if(e.keyCode == 39 ) {

        if(kv.offsetLeft >= 740) {
            return;
        }
        kv.style.left = kv.offsetLeft + 10 + "px";


    }

    // down 40
    if(e.keyCode == 40 ) {

        if(kv.offsetTop >= 540) {
            return;
        }
        kv.style.top = kv.offsetTop + 10 + "px";

    }

    // left 37
    if(e.keyCode == 37 ) {

        if(kv.offsetLeft <= 0) {
            return;
        }
        kv.style.left = kv.offsetLeft - 10 + "px";

    }

};

/**
 * Создать игры
 * 1. Sneak
 * 2. Pac-man
 * 3. Лабиринт
 */