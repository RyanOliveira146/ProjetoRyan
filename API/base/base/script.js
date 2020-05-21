
var sla = document.getElementById('botao');
var pesquisa = document.getElementById('pesquisar');
var image = document.getElementById('imagem')

var infor = document.getElementsByClassName('informacoes');

var getFilme = async () => {
    var url = `http://www.omdbapi.com/?apikey=13ffbdb1&t=${pesquisa.value}`
    
    var api = await fetch (url);
    var filme = await api.json();

    infor[0].innerHTML = `${filme.Title}`;
    infor[1].innerHTML = `${filme.Genre}`;
    infor[2].innerHTML = `${filme.Released}`;
    infor[3].innerHTML = `${filme.Actors}`;
    infor[4].innerHTML = `${filme.Year}`;
    
    image.innerHTML = `<img id="imge" src='${filme.Poster}'>`
}

sla.addEventListener('click', getFilme);