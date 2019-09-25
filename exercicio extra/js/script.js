const formulario = document.getElementById 
("formulario-de-comentarios");
let textoErro = document. getElementById ("mensagem-erro");

// AQUÍ EL LET textoErro tiene que ser un escopo global y no loval. POR ESO
//NO ESTABA FUNCIONANDO DENTRO DEL IF Y NI DEL ELSE. TIENE QUE DEJAR DE SER
//LOCAL PARA SER GLOBAL.

formulario.addEventListener ("submit", function (evento) {
    evento.preventDefault ();
    let texto = document.querySelector
    (".input-de-texto");
    
    let mensagem = texto.value; 
        console.log (texto);
        console.log (mensagem);
    if (texto.value.trim() == "") {
        // let textoErro = document. getElementById ("mensagem-erro");
        textoErro.textContent = "Essa mensagem é um erro";

    // alert ("Voçe nao digitou nada")
    } else {
        
        textoErro.textContent = "";

        let textoFinal = document.getElementById ("todos-os-comentarios");
        const todosOsComentarios = document.createElement ("p");
        todosOsComentarios.textContent = mensagem;
        textoFinal.appendChild (todosOsComentarios);
        todosOsComentarios.classList.add ("comentarios");
        texto.value = "";      
    }

}); 


    // let textoErro = document. getElementById ("mensagem-erro")
    // const mensagemErro = document.createElement ("div");
    // mensagemErro.textContent = "Essa mensagem é um erro";
    // formulario.appendChild (mensagemErro);
    // mensagemErro.classList.add ("mensagem-erro");

    // NO ES NECESARIO CREAR UNA VARIABLE CONSTANTE PORQUE YA CREE EL DOCUMENTO EN HTML. SI NO LO HUBIESE CREADO
    // AHÍ SÍ DEFINO MI VARIABLE QUE EN ESTE CASO ES CONSTANTE Y LLAMO EL DOCUMENT.createElement ("DIV")

    // mensagemErro.classList.add ("mensagem-erros");


// const formularioDeComentario = document.createElement ("p");
//     let comentarios = 0;
//     for (comentarios = 0; comentarios < comentarios.length; comentarios ++)

//     let texto = document.getElementById ("formulario-de-comentarios")
//     texto.appendChild (formularioDeComentario);

// });