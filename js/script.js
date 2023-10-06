// Función que aplica estilo a la opcion seleccionada en el menu y quita la anterior

function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    for (let i = 0; i < opciones.length; i++) {
        opciones[i].className = "";
        link.className = 'seleccionado';
    }
    
    // Desaparece el menu una vez que se ha seleccionado una opcion en el modo responsive
    let nombreNav = document.getElementById("nav");
    nombreNav.className = "";
}


//Función que muestra el menu responsive

function responsiveMenu(){
    let nombreNav = document.getElementById("nav");
    if (nombreNav.className === ""){
        nombreNav.className = "responsive";
    }else{
        nombreNav.className = "";
    }
}

// window.onscroll = function(){
//     efectoHabilidades(){

//     }
// }

// function efectoHabilidades(){
//     let skills = document.getElementById("skills");
//     let distancia_skills = window.innerHeight - skills.getBoundingClientRect(.top)
// }
