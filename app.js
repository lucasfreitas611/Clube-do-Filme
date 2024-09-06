function pesquisar() {
   //console.log (dados);
let section = document.getElementById ("resultados-pesquisa");
console.log (section);

let campoPesquisa = document.getElementById ("campo-pesquisa").value;

//se o campo pesquisa for uma string sem nada
if(campoPesquisa == "") {
    section.innerHTML = "Nenhum filmes foi encontrado. Digite algum filme."
   return
}

campoPesquisa = campoPesquisa.toLowerCase(); 

let resultados = "";
let titulo ="";
let snopse = "";
let gênero = "";
let tags = "";

//Para da dado dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase ();
    sinopse = dado.sinopse.toLowerCase ();
    gênero = dado.gênero.toLowerCase ();
    tags = dado.tags.toLocaleLowerCase();
//se titulo includes campoPesquisa
if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || gênero.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    //cria um novo elemento
resultados += `
<div class="item-resultado">
    <h2>${dado.titulo}</h2>
        <p class="descricao-meta">
            <strong>Ano:</strong> ${dado.ano}</strong><br>
            <strong>Gênero: </strong>${dado.gênero}</strong><br>
            <strong>Sinopse: </strong>${dado.sinopse}</p>
    <a href="${dado.link}" target="_blank"> Onde Assistir</a>
    </div>
    `;
        }
   
    }

if (!resultados) {
     resultados = "Nada foi encontrado"
}

section.innerHTML = resultados
 
}
