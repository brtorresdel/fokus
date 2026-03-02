const addTaskBtn = document.querySelector('.app__button--add-task');

addTaskBtn.addEventListener('click', () => {
    const form = document.querySelector('.app__form-add-task');
    form.classList.toggle('hidden');
});