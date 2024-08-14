const buttom = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
            tarefa:input.value,
            concluida: false
        })
    

    input.value = ''


    mostrarTarefas()

}

function mostrarTarefas() {


    let novaLi = ``

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `

         <li class="task ${item.concluida && "done"}">
             <img src="./img/chek.png" alt="chek-na-tarefa" onClick="concluirTarefa(${posicao})">
             <p>${item.tarefa}</p>
             <img src="./img/lixeira.png" alt="tarefa-para-lixeira" onClick="deletarItem(${posicao})">
     </li>
    
`
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))


}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()

}
function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    
    mostrarTarefas()

}function recarregarTarefas(){
    const tarefaDoLocalStorage = localStorage.getItem('Lista')

    minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
    console.log(tarefaDoLocalStorage)

    mostrarTarefas()
}

buttom.addEventListener('click', adicionarNovaTarefa)