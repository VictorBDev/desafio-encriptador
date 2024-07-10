function encriptar() {
  let inputText = document.getElementById("inputText").value;
  let outputText = inputText.replace(/e/g, "enter")
                           .replace(/i/g, "imes")
                           .replace(/a/g, "ai")
                           .replace(/o/g, "ober")
                           .replace(/u/g, "ufat");
  document.getElementById("outputText").value = outputText;
}

function desencriptar() {
  let inputText = document.getElementById("outputText").value;
  let originalText = inputText.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
  document.getElementById("inputText").value = originalText;
}

function copiarTexto() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles: " + outputText.value);
}

// Asignar eventos a los botones
document.querySelector('.btn-encriptar').addEventListener('click', encriptar);
document.querySelector('.btn-desencriptar').addEventListener('click', desencriptar);
document.querySelector('.btn-copiar').addEventListener('click', copiarTexto);
