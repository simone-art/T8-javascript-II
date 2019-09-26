
const livros = {
    1: {
        "titulo": "Java Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const livrosCatalogo = document.getElementById ("lista-do-catalogo")


    // (let propiedade in livros) {
    // livros [propiedade]
    let livro1 = document.createElement ("p");
    livro1.textContent = livros[1]["titulo"];
    let nomeEscritor = document.createElement ("h2");
    nomeEscritor.textContent= ("Marijn Haverbeke");
    let linksLivros = document.createElement ("a");
    linksLivros.textContent = ("https://github.com/braziljs/eloquente-java");
    linksLivros.setAttribute = ("href", livros [1] ["link"]);
    livrosCatalogo.appendChild (livro1);
    livrosCatalogo.appendChild (nomeEscritor);
    livrosCatalogo.appendChild (linksLivros);
    livro1.classList.add ("livro1");


    let livro2 = document.createElement ("p");
    livro2.textContent = livros[2]["titulo"];
    let nomeEscritor2 = document.createElement ("h2");
    nomeEscritor2.textContent= ("Kyle Simpson");
    let linksLivros2 = document.createElement ("a");
    linksLivros2.textContent = ("https://github.com/cezaraugusto/You-Dont-Know-JS");
    linksLivros2.setAttribute = ("href", livros[2] ["link"]);
    livrosCatalogo.appendChild (livro2);
    livrosCatalogo.appendChild (nomeEscritor2);
    livrosCatalogo.appendChild (linksLivros2);
    livro2.classList.add ("livro2");


    let livro3 = document.createElement ("p");
    livro3.textContent = livros[3]["titulo"];
    let nomeEscritor3 = document.createElement ("h2");
    nomeEscritor3.textContent= livros[3]["nomeEscritor3"];
    let linksLivros3 = document.createElement ("a");
    linksLivros3.textContent = ("http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf");
    linksLivros3.setAttribute = ("href", livros[3] ["link"]);
    livrosCatalogo.appendChild (livro3);
    livrosCatalogo.appendChild (nomeEscritor3);
    livrosCatalogo.appendChild (linksLivros3);
    livro3.classList.add ("livro3");



// let livro1 = document.createElement (li);
// livro1.textContent = (livros.titulo);
// let nomeEscritor = document.createElement (p);
// nomeEscritor.textContent= ("Marijn Haverbeke");
// let linksLivros = document.createElement ("a");
// linksLivros.textContent = ("https://github.com/braziljs/eloquente-java");


// livrosCatalogo.appendChild (livro1);
// livro1.classlist.add ("livro1");

// let nomeEscritor = document.create (p);
// nomeEscritor.textContent= ("Marijn Haverbeke");
// livrosCatalogo.appendChild (nomeEscritor);




// const meuSite = document.createElement ("a")
// meuSite.textContent = "acessar meu site";
// meuSite.setAttribute = ("href", objeto.meuSite);
// meuSite.getAttribute = ("target", "_blank");
// descricaoFinal.appendChild (meuSite);






// const objeto = {
//     nome: "Simone",
//     profissao: "Desenvolvedora",
//     idade: 42,
//     hobbie: ["nataçao", "ler", "correr"],
//     cantoraFavorita: "Sia",
//     fraseDoDia: "vai dar certo"

// } 



