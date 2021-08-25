// export interface Tarefa {
//     feita: boolean;
//     texto: string;
//     prioridade: Prioridade
// }
// import {*} from 'uniqid';
import * as uniqid from 'uniqid';

export class Tarefa {
    feita: boolean;
    texto: string;
    prioridade: Prioridade;
    // implementação do Id
    id: string;

    constructor(texto: string, prioridade: Prioridade){
        this.texto = texto;
        this.prioridade = prioridade;
        // this.feita = true;
        this.feita = false;
        this.id = uniqid();
    }

    imprimir():void{
        // [ ] texto [ prioridade ]
        console.log(`[${this.feita?'X':''}] ${this.texto} [ ${this.prioridade}]`)
    }

    

    toRow():HTMLTableRowElement{
        let tr = document.createElement('tr');
        tr.setAttribute('id', this.id);
        // console.log(this);
        tr.className = this.feita?'done':'';
        // tr.classList.toggle('done');
        tr.innerHTML = `<td><input type="checkbox"></td>
                        <td>${this.texto}</td>
                        <td><i class="material-icons">delete</i></td>`;
        
        // Marcando/desmarcando uma tarefa como feita
        let checkbox = tr.querySelector('input');
        checkbox.addEventListener('click', () => {
            // tr.classList.toggle('done');
            this.feita = checkbox.checked; // inverte o valor lógico true / false
            tr.className = this.feita ? 'done' : '';
        });

        // let lixo = tr.querySelector('i');
        // lixo.addEventListener('click', () => {
        //     console.log('remover')
        // });

        // Removendo a tarefa da DOM!
        // let apagar = tr.querySelector('i');
        // apagar.addEventListener('click', () => {
        //     tr.remove();
        // });

        // Coloca um sensor que funciona durante toda a execução do script
        // tr.querySelector('input').addEventListener('click', () => {
        //     // tr.classList.toggle('done');
        //     this.feita = !this.feita; // inverte o valor lógico true / false
        //     tr.className = this.feita ? 'done' : '';
        // });

        return tr; 
    }
}

export enum Prioridade {
    Baixa = 1,
    Media = 2,
    Alta = 3
}







// export enum EstadoCivil {
//     Casado,
//     Solteiro,
//     Viúvo,
//     Divorciado,
//     Separado
// }

// export enum Sexo{
//     masculino, 
//     feminino
// }

// interface Pessoa {
//     nome: string;
//     ec: EstadoCivil;
//     sexo?: Sexo;
//     observacao: string|number;

// }

// let p:Pessoa = {
//     nome: 'Vailson',
//     ec: EstadoCivil.Solteiro
// }