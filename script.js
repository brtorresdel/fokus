const html = document.querySelector("html");

const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const btnsModes = document.querySelectorAll(".app__card-button");

const tempFoco = 1500, tempCurto = 300, tempLongo = 900;
let temporizadorSeg = tempFoco;
let intervaloID = null;

const timer = document.querySelector("#timer");
const start_pause_btn = document.querySelector("#start-pause");
const start_pause_btn_text = start_pause_btn.querySelector("span");
const start_pause_btn_icon = start_pause_btn.querySelector("img");

const bannerImg = document.querySelector(".app__image");
const title = document.querySelector(".app__title");

const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("./sons/luna-rise-part-one.mp3");
const start = new Audio("./sons/play.wav");
const pause = new Audio("./sons/pause.mp3");
const finalizado = new Audio("./sons/beep.mp3");
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
            temporizadorSeg = tempFoco;
            mostrarTempo();
            break;
        case "descanso-curto":
            title.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            curtoBtn.classList.add("active");
            temporizadorSeg = tempCurto;
            mostrarTempo();
            break;
        case "descanso-longo":
            title.innerHTML = 'Hora de voltar à superficie<br><strong class="app__title-strong">Faça uma pausa longa!</strong>';
            longoBtn.classList.add("active");
            temporizadorSeg = tempLongo;
            mostrarTempo();
            break;
    }
}

const contagemRegressiva = () => {
    if (temporizadorSeg <= 0){
        // finalizado.play();
        alert("Tempo esgotado!");
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('focoFinalizado');
            document.dispatchEvent(evento);
        }
        zerar()
        return;
    } 
    temporizadorSeg--;
    mostrarTempo();
}

start_pause_btn.addEventListener("click", iniciar_pausar)

function iniciar_pausar() {
    if (intervaloID) {
        pause.play();
        zerar();
        start_pause_btn_text.textContent = "Começar";
        start_pause_btn_icon.setAttribute("src", "./imagens/play_arrow.png");
        return;
    }
    start.play();
    intervaloID = setInterval(contagemRegressiva, 1000);
    start_pause_btn_text.textContent = "Pausar";
    start_pause_btn_icon.setAttribute("src", "./imagens/pause.png");
}

function zerar() {
    clearInterval(intervaloID);
    intervaloID = null;
}

function mostrarTempo() {
    const tempo = new Date(temporizadorSeg * 1000);
    const tempoFormatado = tempo.toLocaleString("pt-BR", { minute: "2-digit", second: "2-digit" });
    timer.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();