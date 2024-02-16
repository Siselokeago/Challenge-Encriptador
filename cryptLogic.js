var lock = true;
var notValid = false;
var getText = document.getElementById("textToCrypt");
var placeText = document.getElementById("result")
function startProcess(){
    if(getText.value === ""){
        placeText.innerHTML ="Mensaje no encontrado";
        validate();
    }
    else{
        setText(getText.value);
    }
}
function setText(string){
    if (lock) {
        placeText.innerHTML = cleanText(string).replaceAll("e","enter")
                                                .replaceAll("i","imes")
                                                .replaceAll("a","ai")
                                                .replaceAll("o","ober")
                                                .replaceAll("u","ufat");
    }
    else{
        placeText.innerHTML = cleanText(string).replaceAll("imes","i")
                                                .replaceAll("enter","e")
                                                .replaceAll("ai","a")
                                                .replaceAll("ober","o")
                                                .replaceAll("ufat","u");
    }
    
}
function cleanText(str){
    var stringClean = str
    .replace(/[^A-Za-z0-9 .,\u00f1]/g, function(match){
        notValid = true;
        return '';
    })
    .replace(/[A-Z]/g, function(match){
        notValid = true;
        return match.toLowerCase();
    });
    validate();
    return stringClean;
}
function switchMode(){
    getText.value = "";
    placeText.innerHTML ="Mensaje no encontrado";
    return lock = !lock;
}
function copyResult(){
    navigator.clipboard.writeText(placeText.innerHTML)
}
function validate(){
    document.getElementById("error").innerHTML = notValid === false ? "":"Error: Mayúsculas y/o carácteres especiales detectados y corregidos";
    document.getElementById("hideError").checked = notValid;
    notValid = false;
}