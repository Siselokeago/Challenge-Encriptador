var lock = true;
var specialChar = false;
var capLet = false;
function getText(){ 
    return document.getElementById("textToCrypt").value;
}
function startProcess(){
    if(getText().length === 1){
        clearText();
    }
    if (getText() != ""){
        setText(getText());
    }
    else{
        clearText();
        document.getElementById("result").innerHTML ="Mensaje no encontrado";
        document.getElementById("error").innerHTML = "";
        document.getElementById("hideError").checked = false;
    }
    /* Verificar cuando se borra un caracter */
}
function setText(string){
    if (lock) {
        document.getElementById("result").innerHTML = cleanText(string).replace(/e/g,"enter")
                                                        .replace(/i/g,"imes")
                                                        .replace(/a/g,"ai")
                                                        .replace(/o/g,"ober")
                                                        .replace(/u/g,"ufat");
    }
    else{
        document.getElementById("result").innerHTML = cleanText(string).replace(/imes/g,"i")
                                                        .replace(/enter/g,"e")
                                                        .replace(/ai/g,"a")
                                                        .replace(/ober/g,"o")
                                                        .replace(/ufat/g,"u");
    }
    
}
function cleanText(str){
    var stringClean = str
    .replace(/[^A-Za-z0-9 .,]/g, function(match){
        specialChar = true;
        return '';
    })
    .replace(/[A-Z]/g, function(match){
        capLet = true;
        return match.toLowerCase();
    });
    showError();
    return stringClean;
}
function verifyMode(){

    document.getElementById("textToCrypt").value = "";
    document.getElementById("result").innerHTML ="Mensaje no encontrado";
    return lock = !lock;
}
function clearText(){
    document.getElementById("result").innerHTML = "";

}
function copyResult(){
    navigator.clipboard.writeText(document.getElementById("result").innerHTML)
}
function showError(){
    if(!specialChar && !capLet){
        document.getElementById("error").innerHTML = "";
        document.getElementById("hideError").checked = false;

    }else if(specialChar && capLet){
        document.getElementById("error").innerHTML = "Error: Mayúsculas y carácteres especiales detectados y corregidos.";
        document.getElementById("hideError").checked = true;
    }else if(specialChar){
        document.getElementById("error").innerHTML = "Error: Carácteres especiales detectados y corregidos.";
        document.getElementById("hideError").checked = true;
    }else{
        document.getElementById("error").innerHTML = "Error: Mayúsculas detectadas y corregidas.";
        document.getElementById("hideError").checked = true;
    }
    
    capLet= false;
    specialChar = false;
}


