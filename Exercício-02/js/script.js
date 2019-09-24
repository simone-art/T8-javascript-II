
const imagenGato= document.querySelectorAll (".item__imagem");

    for (let i = 0; i < imagenGato.length; i++) {
    imagenGato[i].addEventListener ("click", function () {
        if (imagenGato[i].classList.contains("invisivel")) {
            imagenGato[i].classList.remove ("invisivel")
            imagenGato[i].classList.add ("visivel")
        } else { 
            imagenGato[i].classList.add ("invisivel")
            imagenGato[i].classList.remove ("visivel")
        }
    });   
};

