// Función para mostrar un mensaje de bienvenida
function mostrarMensajeBienvenida() {
    alert("¡Bienvenido/a a nuestra empresa de instalaciones eléctricas!");
  }
  
  // Función para enviar un formulario de contacto
  function enviarFormularioContacto() {
    // Aquí puedes agregar el código para enviar el formulario a través de AJAX o realizar otras acciones necesarias
    alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
  }
  
  // Asignar eventos a elementos de la página
  document.addEventListener("DOMContentLoaded", function () {
    // Mostrar el mensaje de bienvenida cuando la página se cargue completamente
    mostrarMensajeBienvenida();
  
    // Obtener referencia al formulario de contacto
    const formularioContacto = document.getElementById("formulario-contacto");
  
    // Agregar un evento para el envío del formulario
    formularioContacto.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe por defecto
      enviarFormularioContacto();
    });
  });
  
  