  const form = document.querySelector('form');
  const button = document.querySelector('button');
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const resultado = num1 + num2;
  document.getElementById("pregunta").textContent = `${num1} + ${num2}`;
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const codigoPostal = document.getElementById("cp").value;
    const captchaValor = parseInt(document.getElementById("captcha").value, 10);
//////////////validación/////////////
    if (!nombre || !edad || !codigoPostal || isNaN(captchaValor)) {
      alert("Dejaste algo sin responder :C");
      return;
    }
    if (isNaN(edad)) {
      alert("La edad no es numérica :c");
      return;
    }
    if (isNaN(codigoPostal)) {
      alert("El código postal no es numérico :00");
      return;
    }
    if (codigoPostal.length !== 5) {
      alert(`Escribiste ${codigoPostal.length} dígitos en el CP, deben ser 5.`);
      return;
    }
/////////////captcha/////////////////
    if (captchaValor !== resultado) {
      alert("CAPTCHA incorrecto");
      return;
    }
    alert("CAPTCHA verificado. Formulario enviado.");
  });
  button.addEventListener('click', function(event) {
    console.log(event);
  });