
var tabla = document.querySelector("#tabla-pacientes");

    tabla.addEventListener("dblclick",function(eliminar){
        eliminar.preventDefault();
        eliminar.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            eliminar.target.parentNode.remove();
        },500);

});



