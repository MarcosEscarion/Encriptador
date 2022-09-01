const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(texto){

    let matrizCodigo =[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    texto=texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto=texto.replaceAll (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return texto;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function desencriptar (texto){

    let matrizCodigo =[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    texto=texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][1])){
            texto=texto.replaceAll (matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return texto;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
   
    alert("Texto copiado")
}
