const addTaskBtn = document.querySelector('.app__button--add-task');
const form = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const tarefas = localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : [];
const ulTarefas = document.querySelector('.app__section-task-list');

addTaskBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const tarefa = {
        descricao: textArea.value
    };
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
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
    button.innerHTML = `<img src="/imagens/edit.png">`;

    li.appendChild(svg);
    li.appendChild(p);
    li.appendChild(button);

    return li;
}

tarefas.forEach(tarefa => {
    ulTarefas.appendChild(criarElementoTarefa(tarefa));
});