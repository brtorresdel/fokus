const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");

focoBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'foco');
    focoBtn.classList.add("active");
    curtoBtn.classList.remove("active");
    longoBtn.classList.remove("active");
});

curtoBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    focoBtn.classList.remove("active");
    curtoBtn.classList.add("active");
    longoBtn.classList.remove("active");
});

longoBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    focoBtn.classList.remove("active");
    curtoBtn.classList.remove("active");
    longoBtn.classList.add("active");
});