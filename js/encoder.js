//Funcion para encriptar
function encriptar(){
    var texto = document.getElementById("area").value;
    var textocifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    // document.querySelector("#area1").value = textocifrado;
    document.getElementById("muneco").style.display="none";
    document.getElementById("notfound").style.display="none";
    document.getElementById("ingresa").style.display="none";
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inherit";
    document.getElementById("area1").innerHTML = textocifrado;
}
var boton1 = document.querySelector(".btn1"); boton1.onclick = encriptar; // Llamado al boton

//Funcion para desencriptar
function desencriptar(){
    var texto = document.getElementById("area").value;
    var textocifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    // document.querySelector("#area1").value = textocifrado;
    document.getElementById("muneco").style.display="none";
    document.getElementById("notfound").style.display="none";
    document.getElementById("ingresa").style.display="none";
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inherit";
    document.getElementById("area1").innerHTML = textocifrado;
}
var boton2 = document.querySelector(".btn2"); boton2.onclick = desencriptar;

//Funcion para copiar el texto
function copiar(){
var copy = document.querySelector("#area1");
copy.select();
document.execCommand("copy");
alert("Se copio el texto");
}
var boton3 = document.querySelector("#btn3"); boton3.onclick = copiar;