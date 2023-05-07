const innerDiv = document.getElementById("innerDiv");
const btn = document.getElementById("btn");

innerDiv.addEventListener('mouseover', changeRed);
innerDiv.addEventListener('mouseout', changeBlue);

btn.addEventListener('click', clicked);

function changeRed() {
    innerDiv.style.backgroundColor= "red";
}

function changeBlue() {
    innerDiv.style.backgroundColor ="lightblue";
} 

function clicked() {
    btn.style.color= "rgb(0,0,0)";
    btn.style.backgroundColor="rgb(255,165,0)";
}

let usersName;
let length;

document.getElementById("myButton").onclick = function() {
    usersName = document.getElementById("getName").value;
    document.getElementById("buttonLabel").innerHTML = usersName;
    length = usersName.replaceAll(" ", "");
    length = length.toLowerCase();
    document.getElementById("nameLength").innerHTML = length.length;

    if (length == "travismounsteven") {
        document.getElementById("helloTravis").innerHTML = "Travis is AMAZING!";
    } else if (length == "danielleboulger") {
        document.getElementById("helloTravis").innerHTML = "Travis loves you!!!!";
    } else if (length == "valariemounsteven") {
        document.getElementById("helloTravis").innerHTML = "Valarie rocks!!!!";
    } else if (length == "wesleymounsteven" || length == "wesmounsteven") {
        document.getElementById("helloTravis").innerHTML = "Wes is super cool!!!!";
    } else {
        document.getElementById("helloTravis").innerHTML = "";
    }
}



