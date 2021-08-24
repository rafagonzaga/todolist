import { Tarefa, Prioridade } from "./Tarefa";
import uniqid from '../../node_modules/uniqid/index.js';


export class ListaDeTarefas {

    tarefas:Tarefa[];
    input:HTMLInputElement;
    form:HTMLFormElement;
    tabela:HTMLTableElement;
    id:string;

    constructor(main: HTMLElement) {
        this.input = <HTMLInputElement>main.querySelector('#tf_2do');
        this.form = <HTMLFormElement>main.querySelector('#form');
        this.tabela = <HTMLTableElement>main.querySelector('#table');
        this.tarefas = [];
        this.id = uniqid();

        // Quando o form for submetido, que se adicione uma tarefa.
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.adicionarTarefa();
        });

    };

    // Solução do Eric
    // removerTarefa(tarefa:Tarefa,tr:HTMLTableRowElement){
    //     this.tarefas.splice(this.tarefas.indexOf(tarefa),1);
    //     `document.getElementById("${tarefa.id}").deleteRow(tr.rowIndex);`
    // }



    removerTarefa(t:Tarefa) {
    // removerTarefa() {
        // alert('clicou!');
        // let todas = this.tarefas;
        // todas.forEach(e => console.log);
    
        this.tarefas.splice(this.tarefas.indexOf(t),1)
        console.log(this);
        // this.mostrarTarefas();        
    };

    adicionarTarefa() {
        // evt.preventDefault();

        if (this.input.value == '')
            return;

        // Criar nova tarefa com prioridade baixa e com o texto digitado pelo usuário
        let t = new Tarefa(uniqid(), this.input.value, Prioridade.Baixa);
        console.log(t);
        this.tarefas.push(t);
        // console.log(uniqid());


        // this.mostrarTarefas();

        // Criando a linha da tarefa
        let tr = t.toRow()

        tr.querySelector('i').addEventListener('click', () => {
                tr.remove();            // remove visualmente
                this.removerTarefa(t);  // remove do array tarefas
                // console.log(this.tarefas);
            }
        );

        // Executar exibirTarefas(tarefas)
        this.tabela.appendChild(tr);

        // Limpar o campo toda vez que a tarefa seja adicionada
        this.input.value = '';
    };

    mostrarTarefas():void {

        this.tabela.innerHTML = '';
        for(let tarefa of this.tarefas){
            this.tabela.appendChild(tarefa.toRow());
        };
    }
};