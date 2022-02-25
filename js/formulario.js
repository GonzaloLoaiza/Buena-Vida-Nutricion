// Este codigo sirve para seleccionar el id del boton 
var botonadicionar = document.querySelector("#adicionar-paciente");
     
botonadicionar.addEventListener("click",function(evento) //.addEventListener esto sirve para llamar el click del boton
     {
      evento.preventDefault(); // eliminar el padron de actualizar pantalla

      var formulario = document.querySelector("#formularioadicionar");// sirve para traer el id del formulario de agregar datos

      var paciente = capturarDatospaciente(formulario); //Sirve para llamar la funcion capturarDatospaciente(formulario)
          
      var errores = validarpaciente(paciente);

      if (errores.length > 0){
          exibirmensajeserrores(errores);
          return;
     }

     adicionarpacienteenlatabla(paciente);
      formulario.reset();
      var mensajeserrores = document.querySelector("#mensajes_errores");
      mensajeserrores.innerHTML = "";
     });

     function adicionarpacienteenlatabla(paciente){
          var insertapaciente = construirTr(paciente);
          var tabla = document.querySelector("#tabla-pacientes");
          tabla.appendChild(insertapaciente);

     }

     
     function capturarDatospaciente(formulario){ // en esta funcion se crea una clase paciente que saca un objeto paciente
     
    // este codigo captura los valores del formulario de Html atravez de una clase 
     var paciente = {
          nombre: formulario.nombre.value,
          peso: formulario.peso.value,
          altura: formulario.altura.value,
          gordura: formulario.gordura.value,
          imc: calcularimc(formulario.peso.value,formulario.altura.value),
          
     }
      return paciente; // me retorna un objeto paciente
     }
     
     
     function construirTr (paciente){// crea una funcion construirTr que recibe el objeto paciente como parametro

     //este codigo sirve para crear etiquetas <tr>
     var insertapaciente = document.createElement("tr");
     insertapaciente.classList.add("paciente");

     // este codigo sirve para llevar de javascript a html
     insertapaciente.appendChild(construirTd (paciente.nombre,"info-nombre"));
     insertapaciente.appendChild(construirTd (paciente.peso,"info-nombre"));
     insertapaciente.appendChild(construirTd (paciente.altura,"info-nombre"));
     insertapaciente.appendChild(construirTd (paciente.gordura,"info-nombre"));
     insertapaciente.appendChild(construirTd (paciente.imc,"info-nombre"));
     
     return insertapaciente;

     }

     // esta funcion contruye el Td del html
     function construirTd (dato,clase){
          var td = document.createElement("td");
          td.classList.add(clase);
          td.textContent = dato;
          return td;
     }

       function validarpaciente(paciente){
          
          var errores = []
          
          if (paciente.nombre.length == 0){

               errores.push ("El nombre no puede estar vacio");

          }
          if (paciente.peso.length == 0){

               errores.push ("El peso no puede estar vacio");

          }

          if (paciente.altura.length == 0){

               errores.push ("La altura no puede estar vacio");

          }

          if (paciente.gordura.length == 0){

               errores.push ("La gordura no puede estar vacio");

          }

          if (!calcularpeso (paciente.peso)){

               errores.push ("El peso es incorrecto");

          }

          if (!calcularaltura  (paciente.altura)){

               errores.push ("La altura es incorrecto");

          }

          return errores;
     }

     function exibirmensajeserrores(errores){
          var ul = document.querySelector("#mensajes_errores");
          ul.innerHTML = "";
          errores.forEach(function(error) {
               var li = document.createElement("li");
               li.textContent = error;
               ul.appendChild(li);
          });
     }

