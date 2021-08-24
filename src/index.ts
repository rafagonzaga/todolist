// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa, Prioridade } from "./models/Tarefa";
import { ListaDeTarefas } from "./models/ListaDeTarefas";

const lt:ListaDeTarefas = new ListaDeTarefas(document.querySelector('main'));

// let t1 = new Tarefa('Pagar escola das crianças', Prioridade.Alta);
// let t2 = new Tarefa('Tomar café antes da aula', Prioridade.Alta);

// t1.imprimir();
// t2.imprimir();

// const tarefas: Tarefa[] = [ t1, t2 ];
// const tarefas: Tarefa[] = [ ];

// const input:HTMLInputElement = <HTMLInputElement>document.getElementById('tf_2do');
// const form:HTMLFormElement = <HTMLFormElement>document.getElementById('form');
// const tabela:HTMLTableElement = <HTMLTableElement>document.getElementById('table');
    
    // [
    // {
    //     feita: false,
    //     texto: 'Molhar as plantas',
    //     prioridade: Prioridade.Baixa //poderia ser prioridade: 1
    // },
    // {
    //     feita: true,
    //     texto: 'Por as crianças para dormir',
    //     prioridade: Prioridade.Alta
    // },
    // {
    //     feita: false,
    //     texto: 'Aprender typescript',
    //     prioridade: Prioridade.Alta
    // },
    // {
    //     feita: false,
    //     texto: 'Terminar o shoes-store',
    //     prioridade: Prioridade.Alta
    // }
// ];

// function exibirTarefas(tarefas: Tarefa[]):void {
    // let tabela = document.getElementById('table');
    // let tabela:HTMLTableElement = <HTMLTableElement>document.getElementById('table');
    // tabela.innerHTML = '';
    // for (const tarefa of tarefas) {
        // let tr = document.createElement('tr');
        // let tr:HTMLTableRowElement = <HTMLTableRowElement>document.createElement('tr');
        // tr.className = tarefa.feita?'done':'';
        // tr.innerHTML = `<td>
        //                     <input type="checkbox">
        //                 </td>
        //                 <td>
        //                     ${tarefa.texto}
        //                 </td>
        //                 <td>
        //                     <i class="material-icons">delete</i>
        //                 </td>`
        // tabela.appendChild(tarefa.toRow());
        // if (tarefa.feita == true){
        //     tr.classList.toggle('done');
        // };
    // };
// }

// form.addEventListener(
    // 'submit', 
    // (evt) => {
        // console.log(tarefas);
        // console.log(event);
        // evt.preventDefault();

        // if(input.value == '')
            // return;

        // <HTMLInputElement> faz o cast para um tipo mais específico para resolver o problema do valor
        // Criar nova tarefa
        // let t = new Tarefa(input.value, Prioridade.Baixa);
        // tarefas.push(t);
        // Executar exibirTarefas(tarefas)
        // tabela.appendChild(t.toRow());
        // exibirTarefas(tarefas);

        // Limpar o campo toda vez que a tarefa seja adicionada
        // input.value = '';

        // Pega o valor do input
        // let input:HTMLInputElement = <HTMLInputElement>document.querySelector('input[type = text]');
        // if(input.value != ''){
            // Criar nova tarefa com prioridade baixa e com texto digitado pelo usuário
            // let t = new Tarefa(input.value, Prioridade.Baixa);
            // input.value = '';
            // Adicionar a tarefa criada ao array tarefa[]
            // tarefas.push(t);
        // }

        // Executar a exibirTarefas(tarefas)
        // exibirTarefas(tarefas);
// })

// let btn = document.querySelector('form');
// btn.addEventListener('submit', function(){
//     alert('clicou!');
// })

// Será executada quando o script for carregado.
// exibirTarefas(tarefas);
// console.log(tarefas);