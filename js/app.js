    const form = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    }


    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const inputNombre = document.querySelector("#nombre");
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('.btn-enviar')

    inputNombre.addEventListener("input", validar);
    inputEmail.addEventListener("input", validar);
    inputAsunto.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);

    formulario.addEventListener('submit', enviarEmail);

    function enviarEmail(e){
        e.preventDefault();

        setTimeout(() => {

            form.nombre = '';
            form.email = '';
            form.asunto = '';
            form.mensaje = '';

            formulario.reset();
            comprobarFormulario()

            
        }, 3000);


    }

    function validar(e){
        // console.log(e.target.value);

        if(e.target.value.trim() === ""){ 
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            form[e.target.name] = '';
            comprobarFormulario();
            return;
        }

        if(e.target.id === 'email' && ! validarEmail(e.target.value)){
            mostrarAlerta('El email no es válido', e.target.parentElement);
            form[e.target.name] = '';
            comprobarFormulario();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        form[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarFormulario();
    }

    function mostrarAlerta(mensaje, referencia){

        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
           error.classList.add("bg-orange-600", "text-white", "p-2", "text-center");

        referencia.appendChild(error);

    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-orange-600');
        if(alerta){
            alerta.remove()
        }
    }

    function validarEmail(email){
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarFormulario(){

        if(Object.values(form).includes('')){
            btnSubmit.style.opacity = '0.5';
            btnSubmit.disabled = true;
            return;
        }

            btnSubmit.style.opacity = '1';
            btnSubmit.disabled = false;
        
    }





