//Primero traemos a los inputs del formulario y llegan limpios
let inputPres = document.getElementById("inputPresidente");
let inputSec = document.getElementById("inputSecretario");
let inputAux1 = document.getElementById("inputAuxiliar1");
let inputAux2 = document.getElementById("inputAuxiliar2");
let inputAux3 = document.getElementById("inputAuxiliar3");
let inputAux4 = document.getElementById("inputAuxiliar4");

let botonEnviarC = document.getElementById("botonEnviarCuestionario");
botonEnviarC.disabled = true;

//Ahora creamos limpiamos los datos del formulario antes de comenzar
inputPres.value = "";
inputSec.value = "";
inputAux1.value = "";
inputAux2.value = "";
inputAux3.value = "";
inputAux4.value = "";


function noEsPrimero(valor, indice, lista) {
    return !(lista.indexOf(valor) === indice);
}

function noBlanks() {
    let array = [];
    let arrayValid = [];

    array.push(inputPres.value);
    array.push(inputSec.value);
    array.push(inputAux1.value);
    array.push(inputAux2.value);
    array.push(inputAux3.value);
    array.push(inputAux4.value);

    array.forEach(element => {
        if (element !== ""){
            arrayValid.push(element);
        }
    });

    console.log(arrayValid);
    console.log("arrayValid tiene repetidos?", arrayValid.some(noEsPrimero));
    if (arrayValid.some(noEsPrimero)) {
        botonEnviarC.disabled = true;
    } else { botonEnviarC.disabled = false; }
}



//Función del botón enviar formulario. 
function botonVerificacion() {
    noBlanks();   
}

/*
function handleSubmit(event) {
    event.preventDefault();
  
    if (localStorage.getItem("formSubmitted")) {
      alert("Ya has enviado este formulario.");
      return;
    }
  
    // Código para enviar el formulario
    // ...
    
  
    localStorage.setItem("formSubmitted", "true");
    alert("Formulario enviado con éxito.");
}
*/

function submitInfo() {
    event.preventDefault();

    botonEnviarC.disabled = true;

    var formData = new FormData(document.getElementById('nominacionesFFTForm'));
    

    fetch('https://script.google.com/macros/s/AKfycbxNTaTA79YJbgKtBR2Q2628AN-3XvfsctoWZVn01ae9Sf_OzRLnh84O-j9yXwWsk8OT/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        window.location.href = "./thanks.html";
    });
}

botonEnviarC.addEventListener("click", submitInfo);