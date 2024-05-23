const formulario = document.getElementById("form");
const inputNomeContato = document.getElementById('input-nome');
const inputTelefoneContato = document.getElementById('input-tel');
let linhas = '';


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionarContatoNaTabela()

})

function criarLinha(){
    let linha = '<tr><td>';
    linha = linha + inputNomeContato.value;
    linha = linha + '</td>';
    linha = linha + '<td>';
    linha = linha + inputTelefoneContato.value;
    linha = linha + '</td></tr>';
    linhas = linhas + linha;
}

function adicionarContatoNaTabela(){
    criarLinha();

    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas;

    
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}