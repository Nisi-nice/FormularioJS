const form = document.querySelector('form');
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
  console.log(event);
});
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const codigoPostal = document.getElementById("cp").value;

  if (nombre.length === 0 || edad.length === 0 || codigoPostal.length === 0) {
    console.log("Dejaste algo sin responder :ccc");
    return;
  }

  if (isNaN(edad)) {
    console.log("La edad no es numérica :c");
  } else {
    console.log("La edad es numérica c:");
  }

  if (isNaN(codigoPostal)) {
    console.log("El código postal no es numérico :00");
  } else {
    if (codigoPostal.length === 5) {
      console.log("El CP tiene 5 dgitos");
    } else {
      console.log(`El CP tiene ${codigoPostal.length} dígitos.`);
    }
  }
});
