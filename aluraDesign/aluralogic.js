var lock = true;
var getText = document.getElementById("textToCrypt");
var placeText = document.getElementById("result");
const initialHiddenBoxes = document.querySelectorAll('.initialHide');
const claves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

var clavesExp = [RegExp(Object.keys(claves).join('|'), 'g'),
RegExp(Object.values(claves).join('|'), 'g')];

function valuingArea(topbot, center){
    initialHiddenBoxes.forEach(element => {
        element.style.display = topbot;
    });
    document.getElementById("center-container").style.display = center;
}
function startProcess() {
    valuingArea("flex" , "none");
    if (getText.value === "") {
        valuingArea("none" , "flex");
    }
    else {
        setText(getText.value);
    }
}
function setText(string) {
    //Identifica si se hará un encriptado o
    if (lock) {
        placeText.textContent = cleanText(string).replace(clavesExp[0], function (match) {
            return claves[match];
        })
    }
    else {
        placeText.textContent = cleanText(string).replace(clavesExp[1], function (match) {
            return match[0];
        });
    }

}
function cleanText(str) {
    var stringClean = str
        .replace(/[^A-Za-z0-9 .,\u00f1]/g, function (match) {
            return '';
        })
        .replace(/[A-Z]/g, function (match) {
            return match.toLowerCase();
        });
    return stringClean;
}
function copyResult() {
    valuingArea("none" , "flex");
    getText.value = "";
    navigator.clipboard.writeText(placeText.textContent)
}