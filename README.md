# 🎯 Fokus

Um aplicativo web de **produtividade baseado na Técnica Pomodoro**, desenvolvido com HTML, CSS e JavaScript. Otimize seu tempo de trabalho com ciclos estruturados de foco e pausa. Este projeto foi desenvolvido juntamente com a plataforma de cursos Alura, como parte do curso da Trilha Front-End

## ✨ Características

- **3 Modos de Trabalho:**
  - 🔴 **Foco** - 25 minutos para trabalho concentrado
  - 🟢 **Descanso Curto** - 5 minutos para respirar
  - 🔵 **Descanso Longo** - 15 minutos para descanso profundo

- **Interface Intuitiva:**
  - Timer visual com contagem regressiva
  - Mudança de tema e imagem de fundo por modo
  - Botão play/pause para controlar o temporizador

- **Recursos de Áudio:**
  - 🎵 Música de fundo relaxante (pode ser ativada/desativada)
  - Som de início
  - Som de pausa
  - Notificação ao fim do tempo

- **Totalmente Responsivo:**
  - Design adaptado para diferentes tamanhos de tela
  - Navegação clara e acessível

## 🚀 Como Usar

1. **Abra o arquivo** `index.html` em seu navegador
2. **Selecione um modo** (Foco, Descanso Curto ou Descanso Longo)
3. **Clique em "Começar"** para iniciar o temporizador
4. **Ative a música** (opcional) usando o toggle na interface
5. **Pause a qualquer momento** clicando no botão "Pausar"

## 📁 Estrutura do Projeto

```
fokus/
├── index.html          # Página principal da aplicação
├── script.js          # Lógica do temporizador e modos
├── script-crud.js     # Scripts adicionais
├── styles.css         # Estilos da aplicação
├── imagens/           # Imagens do projeto
│   ├── logo.png
│   ├── foco.png
│   ├── descanso-curto.png
│   ├── descanso-longo.png
│   ├── pattern.png
│   ├── play_arrow.png
│   ├── pause.png
│   └── favicon.ico
├── sons/              # Arquivos de áudio
│   ├── luna-rise-part-one.mp3   # Música de fundo
│   ├── play.wav                 # Som de início
│   ├── pause.mp3                # Som de pausa
│   └── beep.mp3                 # Som de conclusão
└── README.md          # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização responsiva com variáveis CSS
- **JavaScript (Vanilla)** - Lógica da aplicação
- **Google Fonts** - Tipografia (Montserrat, Prata, Unbounded)
- **Reset CSS** - Meyer Reset para compatibilidade

## 🎨 Paleta de Cores

| Modo | Cor Primária | Gradiente |
|------|-------------|-----------|
| Foco | #8B1FF8 | Roxo ao Azul |
| Descanso Curto | #0F725C | Verde ao Azul |
| Descanso Longo | #1875E9 | Azul ao Roxo |

## 📝 Funcionalidades Detalhadas

### Timer
- Contagem regressiva em segundos
- Exibição clara do tempo restante
- Alertas automáticos ao término

### Controles
- **Botões de Modo:** Alterne entre Foco, Descanso Curto e Descanso Longo
- **Play/Pause:** Inicie ou pause o temporizador
- **Toggle de Música:** Ative/desative a trilha sonora

### Feedback do Usuário
- Mudança visual de contexto (imagem, tema, título)
- Sons para cada ação
- Interface que indica o estado atual

## 💡 Dicas de Uso

- Use o modo **Foco** para trabalho profundo e tarefas importantes
- Aproveite **Descanso Curto** para uma pausa rápida e refrescante
- Tome **Descanso Longo** após completar 4 ciclos de Pomodoro
- Ative a música para criar um ambiente mais concentrado
- Personalize os tempos no `script.js` se necessário

## 🔧 Personalização

Para ajustar os tempos de cada modo, edite as constantes no `script.js`:

```javascript
const tempFoco = 1500;      // 25 minutos em segundos
const tempCurto = 300;      // 5 minutos em segundos
const tempLongo = 900;      // 15 minutos em segundos
```

## 📚 Baseado em

Este projeto implementa a **Técnica Pomodoro**, um método de gerenciamento de tempo que alterna períodos de trabalho focado com pausas regulares.

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido por Bruno Torres, juntamente com a plataforma de cursos Alura, como parte do curso da Trilha Front-End

---

**Aproveite sua produtividade! 🚀**
