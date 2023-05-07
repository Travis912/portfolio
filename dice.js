
// Gives us a random # between 1 - 6
let a, b, c, d, e, f;

document.getElementById("rollDice").onclick = function() {
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    c = Math.floor(Math.random() * 6) + 1;
    d = Math.floor(Math.random() * 6) + 1;
    e = Math.floor(Math.random() * 6) + 1;
    f = Math.floor(Math.random() * 6) + 1;     

    array = ["", "Stab", "Block", "Dodge", "Shoot", "Steal", "Special"];

    for(let i = 1; i < 7; i++){
        if(a == i){
            a = array[i];
            break;
        }
    }
    for(let i = 1; i < 7; i++){
        if(b == i){
            b = array[i];
            break;
        }
    }
    for(let i = 1; i < 7; i++){
        if(c == i){
            c = array[i];
            break;
        }
    }
    for(let i = 1; i < 7; i++){
        if(d == i){
            d = array[i];
            break;
        }
    }
    for(let i = 1; i < 7; i++){
        if(e == i){
            e = array[i];
            break;
        }
    }
    for(let i = 1; i < 7; i++){
        if(f == i){
            f = array[i];
            break;
        }
    }

    document.getElementById("aDice").innerHTML = a;
    document.getElementById("bDice").innerHTML = b;
    document.getElementById("cDice").innerHTML = c;
    document.getElementById("dDice").innerHTML = d;
    document.getElementById("eDice").innerHTML = e;
    document.getElementById("fDice").innerHTML = f;
}

const dice = document.getElementById('aDice');

dice.addEventLsitener('onclick', selected);

function selected() {
    dice.style.backgroundColor = "green";
}

