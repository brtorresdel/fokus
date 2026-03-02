const html = document.querySelector("html");

const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const btnsModes = document.querySelectorAll(".app__card-button");

const tempFoco = 1500, tempCurto = 300, tempLongo = 900;

const timer = document.querySelector("#timer");
const start_pause_btn = document.querySelector("#start-pause");

const bannerImg = document.querySelector(".app__image");
const title = document.querySelector(".app__title");

const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("./sons/luna-rise-part-one.mp3");
musica.loop = true;

focoBtn.addEventListener("click", () => {alterarContexto("foco")});

curtoBtn.addEventListener("click", () => {alterarContexto("descanso-curto")});

longoBtn.addEventListener("click", () => {alterarContexto("descanso-longo")});

musicaFocoInput.addEventListener("change", () => {
    if (musicaFocoInput.checked) {
        return musica.play();
    } 

    return musica.pause();
});

function alterarContexto (contexto) {
    html.setAttribute('data-contexto', contexto);
    bannerImg.setAttribute("src", `./imagens/${contexto}.png`);
    btnsModes.forEach(btn => btn.classList.remove("active"));

    switch (contexto) {
        case "foco":
            title.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
            focoBtn.classList.add("active");
            break;
        case "descanso-curto":
            title.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            curtoBtn.classList.add("active");
            break;
        case "descanso-longo":
            title.innerHTML = 'Hora de voltar à superficie<br><strong class="app__title-strong">Faça uma pausa longa!</strong>';
            longoBtn.classList.add("active");
            break;
    }
}