const addTaskBtn = document.querySelector('.app__button--add-task');
const cancelBtn = document.querySelector('.app__form-footer__button--cancel');
const removerConcluidasBtn = document.querySelector('#btn-remover-concluidas');
const removerTodasBtn = document.querySelector('#btn-remover-todas');
const form = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
let tarefas = localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : [];
const ulTarefas = document.querySelector('.app__section-task-list');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

addTaskBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
});

cancelBtn.addEventListener('click', () => {
    form.classList.add('hidden');
    textArea.value = '';
});

removerConcluidasBtn.addEventListener('click', () => {
    removerTarefas(true);
});

removerTodasBtn.addEventListener('click', () => {
    removerTarefas(false); 
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const tarefa = {
        descricao: textArea.value
    };
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    atualizarListaTarefas();
    textArea.value = '';
    form.classList.add('hidden');
});

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement("svg");
    svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>`;

    const p = document.createElement('p');
    p.classList.add('app__section-task-list-item-description');
    p.textContent = tarefa.descricao;

    const button = document.createElement('button');
    button.classList.add('app_button-edit');
    button.innerHTML = `<img src="./imagens/edit.png">`;
    button.onclick = () => {
        const novaDescricao = prompt('Digite a nova descrição da tarefa:', tarefa.descricao);
        if (novaDescricao) {
            tarefa.descricao = novaDescricao;
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            atualizarListaTarefas();
        }
    };

    li.appendChild(svg);
    li.appendChild(p);
    li.appendChild(button);

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete');
        button.setAttribute('disabled', 'true');
        return li;
    }

    li.onclick = () => {
        document.querySelectorAll('.app__section-task-list-item').forEach(item => item.classList.remove('app__section-task-list-item-active'));
        if (tarefaSelecionada == tarefa) {
            paragrafoDescricaoTarefa.textContent = '';
            tarefaSelecionada = null;
            liTarefaSelecionada = null;
            return;
        }
        tarefaSelecionada = tarefa;
        liTarefaSelecionada = li;
        paragrafoDescricaoTarefa.textContent = tarefa.descricao;
        li.classList.add('app__section-task-list-item-active');
    }

    return li;
}

function atualizarListaTarefas() {
    ulTarefas.innerHTML = '';
    tarefas = localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : [];
    tarefas.forEach(tarefa => {
        ulTarefas.appendChild(criarElementoTarefa(tarefa));
    });
}

document.addEventListener('focoFinalizado', () => {
    debugger
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'true');
        tarefaSelecionada.completa = true;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
});

function removerTarefas(concluidas) {
    let seletor = concluidas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
    document.querySelectorAll(seletor).forEach(item => {
        item.remove()
    });
    const tarefasNaoConcluidas = concluidas ? tarefas.filter(tarefa => !tarefa.completa) : [];
    localStorage.setItem('tarefas', JSON.stringify(tarefasNaoConcluidas));
    atualizarListaTarefas();
}

atualizarListaTarefas();