var lock = true;
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
    }
    /* Verificar cuando se borra un caracter */
}
function setText(string){
    if (lock) {
        document.getElementById("result").innerHTML = string.replaceAll("e","enter")
                                                        .replaceAll("i","imes")
                                                        .replaceAll("a","ai")
                                                        .replaceAll("o","ober")
                                                        .replaceAll("u","ufat");
    }
    else{
        document.getElementById("result").innerHTML = string.replaceAll("imes","i")
                                                        .replaceAll("enter","e")
                                                        .replaceAll("ai","a")
                                                        .replaceAll("ober","o")
                                                        .replaceAll("ufat","u");
    }
    
    
    
}
function verifyMode(){

    document.getElementById("textToCrypt").value = "";
    document.getElementById("result").innerHTML ="Mensaje no encontrado";
    return lock = !lock;
}
function clearText(){
    document.getElementById("result").innerHTML = "";
}


