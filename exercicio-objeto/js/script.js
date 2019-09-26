
const objeto = {
    nome: "Simone",
    profissao: "Desenvolvedora",
    idade: 42,
    hobbie: ["nataçao", "ler", "correr"],
    cantoraFavorita: "Sia",
    fraseDoDia: "vai dar certo",
    meuSite: "https://www.siamusic.net",
    fotoSia:"https://media.giphy.com/media/l2SpSyK4kghB60KlO/giphy.gif"    
} 

const descricaoFinal = document.getElementById ("sou-a-mae");
let nome = document.createElement ("h1"); 
nome.textContent = (objeto.nome);
descricaoFinal.appendChild (nome);
nome.classList.add ("nome");
 

let profissao = document.createElement ("h2");
profissao.textContent = (objeto.profissao);
descricaoFinal.appendChild (profissao);
profissao.classList.add ("profissao");

let idade = document.createElement ("p")
idade.textContent = (objeto.idade);
descricaoFinal.appendChild (idade);
idade.classList.add ("idade");

let hobbie = document.createElement ("li");
hobbie.textContent = ("Gosto de nataçao, ler e correr");
descricaoFinal.appendChild (hobbie);
hobbie.classList.add ("hobbie");

const cantoraFavorita = document.createElement ("div")
cantoraFavorita.textContent = ("Minha cantora favorita é Sia");
descricaoFinal.appendChild (cantoraFavorita);
cantoraFavorita.classList.add ("cantoraFavorita");

const fotoSia = document.createElement ("img");
descricaoFinal.appendChild (fotoSia);
fotoSia.setAttribute ("src", objeto.fotoSia);
fotoSia.classList.add ("fotoSia");


const fraseDoDia = document.createElement ("div")
fraseDoDia.textContent = ("Frase do dia: Vai dar certo");
descricaoFinal.appendChild (fraseDoDia);
fraseDoDia.classList.add ("fraseDoDia");

const meuSite = document.createElement ("a")
meuSite.textContent = "acessar meu site";
meuSite.setAttribute = ("href", objeto.meuSite);
meuSite.getAttribute = ("target", "_blank");
descricaoFinal.appendChild (meuSite);

// const descricaoFinal = document.getElementById ("sou-a-mae");

// for (let propiedade in objeto) {
//     objeto [propiedade]
//     let objetoFinal =document.createElement ("p");
//     descricaoFinal.appendChild (objetoFinal);
//     objetoFinal.textContent = objeto[propiedade];
//     objetoFinal.classList.add ("objetoFinal")
// }

// const objeto2 =  {
//     meuSite: "https://www.siamusic.net",
//     fotoSia:"https://media.giphy.com/media/l2SpSyK4kghB60KlO/giphy.gif"    
// }

// for (let propiedade in objeto2) {
//     objeto2 [propiedade];
//     let objetoText = document.createElement ("a");
//     descricaoFinal.appendChild (objetoText);
//     objetoText.textContent = "clique";
//     objetoText.setAttribute ("href","https://www.siamusic.net");
//     objetoText.setAttribute ("target", "_blank");
//     objetoText.setAttribute ("href","https://media.giphy.com/media/l2SpSyK4kghB60KlO/giphy.gif");
//     objetoText.setAttribute ("target", "_blank");
//     objetoText.classList.add ("objetoText");

// }


// for (let propiedade in Objeto3) {
//     objeto3 [propiedade];
//     let imagenSia = document.createElement ("img");
//     descricaoFinal.appendChild (objeto3);
//     imagenSia.setAttribute ("src", objeto3.imagenSia);
//     imagenSia.classList.add ("imagenSia");
// }




// // la propiedad nome, cuando lo llames puedes utilizar las comillas en el console para ver el valor. "nome"
// //todo lo que está en la llave sólo funciona allí. Para que accedas al objeto lo escribes así 
// //en el console para que no te de error= objeto ["nome"]. ASI SE ACCEDE A LA PROPIEDAD DE UN OBJETO.


