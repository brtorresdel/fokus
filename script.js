const html = document.querySelector("html");

const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");

const tempFoco = 1500, tempCurto = 300, tempLongo = 900;

const timer = document.querySelector("#timer");
const start_pause_btn = document.querySelector("#start-pause");

const bannerImg = document.querySelector(".app__image");

const title = document.querySelector(".app__title");
const titleStrong = document.querySelector(".app__title-strong");

focoBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'foco');
    bannerImg.setAttribute("src", "./imagens/foco.png");
    focoBtn.classList.add("active");
    curtoBtn.classList.remove("active");
    longoBtn.classList.remove("active");
});

curtoBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    bannerImg.setAttribute("src", "./imagens/descanso-curto.png");
    focoBtn.classList.remove("active");
    curtoBtn.classList.add("active");
    longoBtn.classList.remove("active");
});

longoBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    bannerImg.setAttribute("src", "./imagens/descanso-longo.png");
    focoBtn.classList.remove("active");
    curtoBtn.classList.remove("active");
    longoBtn.classList.add("active");
});