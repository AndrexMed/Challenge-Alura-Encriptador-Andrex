var boton1 = document.querySelector(".btn1"); boton1.onclick = encriptar; // Llamado al boton
var boton2 = document.querySelector(".btn2"); boton2.onclick = desencriptar;
var boton3 = document.querySelector("#btn3"); boton3.onclick = copiar;

function detectarMayusculas(texto){
    var texto = document.getElementById("area").value;
    let expRegular = /[A-Z]/g;
    return expRegular.test(texto);
}
function encriptar(){
    var texto = document.getElementById("area").value;
    if(detectarMayusculas("area") == false){
        var textocifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("muneco").style.display="none";
    document.getElementById("notfound").style.display="none";
    document.getElementById("ingresa").style.display="none";
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inherit";
    document.getElementById("area1").innerHTML = textocifrado;
    document.getElementById("area1").style.display="show";
    document.getElementById("area1").style.display="inherit";
    document.getElementById("encriptado").style.display="show";
    document.getElementById("encriptado").style.display="inherit";
    }else{
        alert("No esta permitido letras Mayusculas")
    }
}
//Funcion para desencriptar
function desencriptar(){
    var texto = document.getElementById("area").value;
    if(detectarMayusculas("area") == false){
     var textocifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("muneco").style.display="none";
    document.getElementById("notfound").style.display="none";
    document.getElementById("ingresa").style.display="none";
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inherit";
    document.getElementById("area1").innerHTML = textocifrado;
    document.getElementById("area1").style.display="show";
    document.getElementById("area1").style.display="inherit";
    document.getElementById("encriptado").style.display="show";
    document.getElementById("encriptado").style.display="inherit";
    }else{
        alert("No esta permitido letras Mayusculas")
    }
}
//Funcion para copiar el texto
function copiar(){
var copy = document.querySelector("#area1");
copy.select();
document.execCommand("copy");
}