//Para realizar la validación del formulario utilizando JavaScript, puedes seguir los siguientes pasos:

//Agrega un identificador único al formulario en el archivo HTML. Por ejemplo, puedes agregar el atributo id="miFormulario" al formulario:
//html
//Copy code
//<form class="formcontato__form" name="form" id="miFormulario">
//Crea una función de validación en el archivo JavaScript (validacion.js) que se vinculará al evento submit del formulario. Dentro de esta función, realizarás las validaciones necesarias. Aquí hay un ejemplo básico de cómo puedes hacerlo:
//javascript
//Copy code
// Obtener el formulario
const formulario = document.getElementById("miFormulario");

// Agregar el evento submit al formulario
formulario.addEventListener("submit", function (event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Validar los campos del formulario
  if (validarCampos()) {
    // Si todos los campos son válidos, enviar el formulario
    formulario.submit();
  }
});

// Función para validar los campos del formulario
function validarCampos() {
  // Obtener los valores de los campos del formulario
  const nombre = formulario.nombre.value.trim();
  const email = formulario.email.value.trim();
  const asunto = formulario.asunto.value.trim();
  const mensaje = formulario.mensaje.value.trim();

  // Validar que todos los campos estén completos
  if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  // Validar el formato del campo de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }

  // Si todas las validaciones pasan, retornar true
  return true;
}
//En este ejemplo, se obtienen los valores de los campos del formulario y se realizan las siguientes validaciones:

//Verificar que todos los campos estén completos.
//Validar el formato del campo de correo electrónico utilizando una expresión regular.
//Si alguna de las validaciones falla, se muestra una alerta y se devuelve false, evitando el envío del formulario. Si todas las validaciones son exitosas, se envía el formulario.

//Asegúrate de vincular el archivo JavaScript de validación en el archivo HTML agregando el siguiente código antes del cierre del elemento body:
//html
//Copy code
//<script src="validacion.js"></script>
//Con estos pasos, tendrás la validación básica del formulario implementada en JavaScript. Puedes personalizar y expandir la lógica de validación según tus necesidades.




