var lock = true;
var notValid = false;
var getText = document.getElementById("textToCrypt");
var placeText = document.getElementById("result");
const claves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

var clavesExp = [RegExp(Object.keys(claves).join('|'), 'g'),
RegExp(Object.values(claves).join('|'), 'g')];

function startProcess() {
    if (getText.value === "") {
        placeText.textContent = "Mensaje no encontrado";
        validate();
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
            notValid = true;
            return '';
        })
        .replace(/[A-Z]/g, function (match) {
            notValid = true;
            return match.toLowerCase();
        });
    validate();
    return stringClean;
}
function switchMode() {
    validate();
    getText.value = "";
    placeText.textContent = "Mensaje no encontrado";
    lock = !lock;
}
function copyResult() {
    navigator.clipboard.writeText(placeText.textContent)
}
function validate() {
    document.getElementById("error").textContent = notValid === false ? "" : "Error: Mayúsculas y/o carácteres especiales detectados y corregidos";
    document.getElementById("hideError").checked = notValid;
    notValid = false;
}