const alunas = ["Ana", "Thais", "Simone", "Simaria", "Raquel", "Adriana", "Carol", "Monique", "Priscilla"];


let nome = 0
for (nome= 0; nome < alunas.length; nome++) {
    let listaAlunas = document.createElement ("li");
    let lista = document.getElementById ("lista-alunas");
    lista.appendChild (listaAlunas);
    listaAlunas.textContent = alunas[nome];
}



// let soma = 0;

//     const alunas = document.querySelector (".alunas");
//     alunas.addEventListener ("click", function logar () {
//     console.log (soma++)
// });

// // EN ESTE CASO DA ERRADO PORQUE LO TENGO FUERA DEL FOR. DEBERÍA ESTAR ADENTRO.//


// let soma = 0;

//     const meuTitulo = document.querySelector (".titulo");
//     meuTitulo.addEventListener("click", function logar () {
//     console.log (soma++)
// });



const meuTitulo = document.querySelector (".titulo");
meuTitulo.addEventListener ("click", function() {
    meuTitulo.style.color= "red";
});
