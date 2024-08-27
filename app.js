// #############################################################################################
function clicEncriptar() {
  const textereaInput = document.getElementById("texto-input");
  const textoIngresado = textereaInput.value;

 // Reemplazamos las vocales a, e, i, o, u por otras letras
 const textoModificado = textoIngresado.replace(/[aeiou]/g, function(letra) {
  switch(letra) {
    case 'a': return 'ai';
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'o': return 'ober';
    case 'u': return 'ufat';
  }
});

// mostrar el texto encriptado en la caja de respuesta

const textoOutput = document.getElementById("texto-output");
textoOutput.value = textoModificado;

 // Si el textarea tiene texto, quitar la imagen de fondo
 if (textoModificado.trim() !== "") {
  textoOutput.classList.add('sin-fondo');
} else {
  textoOutput.classList.remove('sin-fondo');
}

// remplaazamos el parrafo de ningun menzaje encontrado por el boton copiar

const mensaje = document.getElementById('mensaje_no_encontrado');

// Creamos un nuevo botón
const boton_copiar = document.createElement('button');
boton_copiar.textContent = 'Copiar';

// Reemplazamos el párrafo con el botón
mensaje.parentNode.replaceChild(boton_copiar, mensaje);

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles() {
  navigator.clipboard.writeText(textoModificado).then(() => {
   
  }).catch(err => {
    console.error('Error al copiar el texto: ', err);
  });
}

// Añadimos un listener al botón para que copie el texto al portapapeles cuando se hace clic
boton_copiar.addEventListener('click', copiarAlPortapapeles);
}
// #############################################################################################



function clicDesEncriptar() {
const textereaOutput = document.getElementById("texto-output");
const textoSalida = textereaOutput.value;

 // Reemplazamos las vocales a su estado original

 const textoDesencriptado = textoSalida
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  // Mostrar el texto desencriptado en la caja de respuesta
  textereaOutput.value = textoDesencriptado;


  // Mostrar el texto desencriptado en la consola
  console.log(textoDesencriptado);

}







