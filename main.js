const form=document.getElementById('form-atividade');
const imgAprovado='<img src= "./aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado='<img src= "./reprovado.png" alt="Emoji decepcionado"/>'
const atividades=[]
const notas = []
const spanAprovado='<span class = "Resultado aprovado">Aprovado</span>'
const spanreprovado='<span class = "Resultado reprovado">Reprovado</span>'
const notaMinima=parseFloat(prompt("Digite a nota mínima :"))
 let linhas=''
form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})
function adicionaLinha(){
    const inputNomeAtividade=document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade : "${inputNomeAtividade.value}" já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
        let linha = '<tr>';
        linha+= `<td>${inputNomeAtividade.value}</td>`
        linha+= `<td>${inputNotaAtividade.value}</td>`
        linha+= `<td>${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '<tr>'
        linhas+= linha
    }

    inputNomeAtividade.value=''
    inputNotaAtividade.value=''
}
function atualizaTabela (){
    const corpoTabela=document.querySelector('tbody')
    corpoTabela.innerHTML=linhas
}
function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()
    document.getElementById('media-final').innerHTML =mediaFinal
    document.getElementById('media-resultado').innerHTML =mediaFinal >=notaMinima ? spanAprovado: spanreprovado
}
function calculaMediaFinal (){
    let soma=0
    for (let i=0; i<notas.length; i++)
        soma+=notas[i]
    const media=soma / notas.length
    return soma / notas.length
}