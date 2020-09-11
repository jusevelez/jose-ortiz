
function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
      alert("Por favor ingresa tu nombre") ;
      return false;

    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
      alert("Por favor ingresa un nombre correcto") ;//Validation Message
      return false;
    }
    return true;
  }

  function validatePhone() {
    var phone = document.getElementById('phone').value;
    if(phone.length == 0) {
      alert("Por favor ingresa un numero de teléfono") ;//Validation Message
      return false;
    }

  //   if(!phone.match(/^[0]?[789]\d{9}$/)) {
  //    alert("Por favor ingresa un numero de teléfono") ;//Validation Message
  //    return false;
  //  }

   return true;

 }

 function validateEmail () {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert("Por favor ingresa su correo electrónico") ;//Validation Message
    return false;

  }

  // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  //   alert("Por favor ingresa una cuenta de correo valida") ;//Validation Message
  //   return false;

  // }

  return true;

}


function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail()) {

    alert("Por favor verifica nuevamente la información ingresada");//Validation Message
    return false;
  }
  else {
    submitted=true;
    return true;
  }
}

// Form mobile

// function validateNombre() {
//   var name = document.getElementById('nombre').value;
//   if(name.length == 0) {
//     alert("Por favor ingresa tu nombre") ;
//     return false;

//   }
//   if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
//     alert("Por favor ingresa un nombre correcto") ;//Validation Message
//     return false;
//   }
//   return true;
// }

// function validateTelefono() {
//   var phone = document.getElementById('telefono').value;
//   if(phone.length == 0) {
//     alert("Por favor ingresa un numero de teléfono") ;//Validation Message
//     return false;
//   }

// //   if(!phone.match(/^[0]?[789]\d{9}$/)) {
// //    alert("Por favor ingresa un numero de teléfono") ;//Validation Message
// //    return false;
// //  }

//  return true;

// }

// function validateCorreo () {

// var email = document.getElementById('correo').value;
// if(email.length == 0) {
//   alert("Por favor ingresa su correo electrónico") ;//Validation Message
//   return false;

// }

// // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
// //   alert("Por favor ingresa una cuenta de correo valida") ;//Validation Message
// //   return false;

// // }

// return true;

// }


// function validateFormulario() {
// if (!validateNombre() || !validateTelefono() || !validateCorreo()) {

//   alert("Por favor verifica nuevamente la información ingresada");//Validation Message
//   return false;
// }
// else {
//   submitted=true;
//   return true;
// }
// }