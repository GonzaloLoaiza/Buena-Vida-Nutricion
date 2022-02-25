
var titulo = document.querySelector(".titulo"); // el . sirve para llamar la clase titulo, querySelector sirve para conectar javascript con Html
 console.log(titulo.textContent); // el textContent puedo seleccionar el contenido especifico
 titulo.textContent = "Buena Vida Nutrición";

 var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll captura todas las clases que se llame paciente
 
 for(var i = 0;i < pacientes.length;i++)
 {
   var paciente = pacientes[i]; // pacientes[i] trae la variable donde se selecciona toda la clase pacientes y la ejecuta con el arreglo i
   var tdpeso = paciente.querySelector(".info-peso"); // el . es para acceder a una clase el querySelector captura el campo de Html
   var peso = tdpeso.textContent;
  
   var tdaltura = paciente.querySelector(".info-altura"); // el . es para acceder a una clase
   var altura1 = tdaltura.textContent;
  
   var tdimc = paciente.querySelector(".info-imc");
   var imc = peso / (altura1 * altura1);
   tdimc.textContent = imc;
  
   pesovalido = calcularpeso (peso);
   alturavalida = calcularaltura (altura1);
  //verdadero o falso -->verdadero
   if (!pesovalido) // el simbolo || significa o en los if, el simbolo ! significa diferente
   {
       console.log("el peso ingresado es incorrecto");
       tdimc.textContent = "peso incorrecto"
       pesovalido = false;
       paciente.classList.add("pacienteincorrecto");// .classList.add sirve para crear una clase desde javascript
   }
   else{
      console.log("peso correcto");
   }
  //verdadero o falso -->verdadero
   if (!alturavalida) // el simbolo || significa o en los if
   {
       console.log("la altura ingresa es incorrecta");
       tdimc.textContent = "altura incorrecto"
       alturavalida = false; 
       paciente.classList.add("pacienteincorrecto"); // .classList.add sirve para crear una clase desde javascript
   }else{
      console.log("altura correcta");
   }
  //verdadero o verdadero -->verdadero
  //verdadero o falso --> falso
   if (pesovalido && alturavalida) //&& significa cuando se necesita que los dos valores sean verdaderos
   {

      tdimc.textContent = calcularimc(peso,altura1) ; // .toFixed(2 sirve para poner la cantidad de decimales
   }
  
 }

 function calcularimc (peso,altura1){
   var imc = peso / (altura1 * altura1);
   return imc.toFixed(2);
 }
 
 function calcularpeso (peso){
   if ((peso >= 0) && (peso < 1000)) // el simbolo || significa o en los if
   {
       return true;
   }
   else{
      return false;
   }
 }

 function calcularaltura (altura1){
   if ((altura1 >= 0) && (altura1 < 3.00)) // el simbolo || significa o en los if
   {
       return true;
   }
   else{
      return false;
   }
 }
 
 