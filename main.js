const WORDS = [
  { word: "FORROACUSTICO", category: "Casa" },
  { word: "ARQUIPELAGO", category: "Lugares" },
  { word: "MILLE-FEUILLE", category: "Alimentos" },
  { word: "CARPACCIO", category: "Alimentos" },
  { word: "PAPPARDELLE", category: "Alimentos" },
  { word: "NECROPOLE", category: "Lugares" },
  { word: "PROGRAMACAO", category: "Tecnologia" },
  { word: "RATATOUILLE", category: "Alimentos" },
  { word: "ALCACHOFRA", category: "Alimentos" },
  { word: "CRIPTOGRAFADO", category: "Tecnologia" },
  { word: "IMPERMEABILIZACAO", category: "Casa" },
  { word: "AMARANTO", category: "Alimentos" },
  { word: "CRIPTOANALISE", category: "Tecnologia" },
  { word: "GORGONZOLA", category: "Alimentos" },
  { word: "FIRMWARE", category: "Tecnologia" },
  { word: "ARQUEOLOGICO", category: "Lugares" },
  { word: "ESTRATOSFERA", category: "Lugares" },
  { word: "FECHADURA", category: "Casa" },
  { word: "ESTUARIO", category: "Lugares" },
  { word: "HIPERCONVERGENCIA", category: "Tecnologia" },
  { word: "INTERFONIA", category: "Casa" },
  { word: "OBSERVATORIO", category: "Lugares" },
  { word: "ARMARIOEMBUTIDO", category: "Casa" },
  { word: "PLANALTO", category: "Lugares" },
  { word: "CLARABOIA", category: "Casa" },
  { word: "QUANTIZACAO", category: "Tecnologia" },
  { word: "CIRCUNVALACAO", category: "Lugares" },
  { word: "MEGALOPOLIS", category: "Lugares" },
  { word: "ENTRONCAMENTO", category: "Lugares" },
  { word: "ESCAROLA", category: "Alimentos" },
  { word: "CONTRAMARCO", category: "Casa" },
  { word: "ESQUADRIA", category: "Casa" },
  { word: "MICROARQUITETURA", category: "Tecnologia" },
  { word: "GRÃO-DE-BICO", category: "Alimentos" },
  { word: "VENEZIANA", category: "Casa" },
  { word: "BRUSCHETTA", category: "Alimentos" },
  { word: "CONURBACAO", category: "Lugares" },
  { word: "CATAKUMBA", category: "Lugares" },
  { word: "CARDAMOMO", category: "Alimentos" },
  { word: "ESCARPAMENTO", category: "Lugares" },
  { word: "ALGORITMO", category: "Tecnologia" },
  { word: "VENTILACAO", category: "Casa" },
  { word: "MACADAMIA", category: "Alimentos" },
  { word: "PROMONTORIO", category: "Lugares" },
  { word: "ANFITEATRO", category: "Lugares" },
  { word: "MONASTERIO", category: "Lugares" },
  { word: "PARAPEITO", category: "Casa" },
  { word: "TAGLIATELLE", category: "Alimentos" },
  { word: "MOUSSELINE", category: "Alimentos" },
  { word: "CONSOMME", category: "Alimentos" },
  { word: "FONDUE", category: "Alimentos" },
  { word: "CRIPTOATIVO", category: "Tecnologia" },
  { word: "ESCOLA", category: "Lugares" },
  { word: "AUTENTICACAO", category: "Tecnologia" },
  { word: "PROVOLONE", category: "Alimentos" },
  { word: "LABIRINTO", category: "Lugares" },
  { word: "GUARNICAO", category: "Casa" },
  { word: "CITADELA", category: "Lugares" },
  { word: "LAMBri", category: "Casa" },
  { word: "RODAPÉ", category: "Casa" },
  { word: "ALCAPARRAS", category: "Alimentos" },
  { word: "JANELA", category: "Casa" },
  { word: "ABACAXI", category: "Alimentos" },
  { word: "SUSHI", category: "Alimentos" },
  { word: "INTEROPERABILIDADE", category: "Tecnologia" },
  { word: "PERGOLADO", category: "Casa" },
  { word: "MICROCONTROLADOR", category: "Tecnologia" },
  { word: "METADADOS", category: "Tecnologia" },
  { word: "CRIPTOGRAFIA", category: "Tecnologia" },
  { word: "PENINSULA", category: "Lugares" },
  { word: "ENDIVIA", category: "Alimentos" },
  { word: "PISTACHE", category: "Alimentos" },
  { word: "MOSTEIRO", category: "Lugares" },
  { word: "HEMISFERIO", category: "Lugares" },
  { word: "BIOMETRIA", category: "Tecnologia" },
  { word: "ALPENDRE", category: "Casa" },
  { word: "LUMINOTECNICA", category: "Casa" },
  { word: "FREGOLA", category: "Alimentos" },
  { word: "TELECOMUNICACAO", category: "Tecnologia" },
  { word: "QUINOA", category: "Alimentos" },
  { word: "HIPERVISOR", category: "Tecnologia" },
  { word: "INTELIGENCIAARTIFICIAL", category: "Tecnologia" },
  { word: "MULTIPROCESSAMENTO", category: "Tecnologia" },
  { word: "SANCa", category: "Casa" },
  { word: "ARMAZENAMENTO", category: "Tecnologia" },
  { word: "DESFRAGMENTACAO", category: "Tecnologia" },
  { word: "PARAPEITAMENTO", category: "Casa" },
  { word: "COMPUTADOR", category: "Tecnologia" },
  { word: "SOLEIRA", category: "Casa" },
  { word: "PANTEON", category: "Lugares" },
  { word: "CIBERSEGURANCA", category: "Tecnologia" },
  { word: "REJUNTAMENTO", category: "Casa" },
  { word: "DOBRADICA", category: "Casa" },
  { word: "NEUROCOMPUTACAO", category: "Tecnologia" },
  { word: "CURCUMA", category: "Alimentos" },
  { word: "VIRTUALIZACAO", category: "Tecnologia" },
  { word: "FORTIFICACAO", category: "Lugares" },
  { word: "HIDROSELAGEM", category: "Casa" },
  { word: "DEPRESSAO", category: "Lugares" },
  { word: "SIFONAMENTO", category: "Casa" },
  { word: "INTERTRAVADO", category: "Casa" },
  { word: "MASCARPONE", category: "Alimentos" },
  { word: "PROCESSADOR", category: "Tecnologia" },
  { word: "ZIMBRO", category: "Alimentos" },
  { word: "FORTALEZA", category: "Lugares" },
  { word: "ESCALABILIDADE", category: "Tecnologia" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;
const app = document.querySelector("#app");

let gameNumber = -1;
let currentWord = WORDS[0];
let guessedLetters = [];
let feedback = "Escolha uma letra para começar a partida.";

function brand() {
  return `
    <div class="brand brand--compact">
      <span class="brand__mark" aria-hidden="true"><span></span><span></span></span>
      <span>Jogo da Forca</span>
    </div>
  `;
}

function hangman(errors, decorative = false) {
  const visible = (step) =>
    `hangman__part ${errors >= step ? "is-visible" : ""}`;
  const accessibility = decorative
    ? 'aria-hidden="true"'
    : `role="img" aria-label="Forca com ${errors} de 6 partes"`;

  return `
    <svg class="hangman" viewBox="0 0 300 280" ${accessibility}>
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <g class="${visible(1)}">
          <path d="M38 248H172"></path>
          <path d="M70 248V35"></path>
        </g>
        <g class="${visible(2)}">
          <path d="M70 36H213"></path>
          <path d="M70 78L112 36"></path>
          <path d="M213 36V70"></path>
        </g>
        <circle class="${visible(3)}" cx="213" cy="94" r="24"></circle>
        <path class="${visible(4)}" d="M213 118V181"></path>
        <g class="${visible(5)}">
          <path d="M213 136L177 164"></path>
          <path d="M213 136L249 164"></path>
        </g>
        <g class="${visible(6)}">
          <path d="M213 181L181 226"></path>
          <path d="M213 181L245 226"></path>
        </g>
      </g>
    </svg>
  `;
}

function getGameState() {
  const wrongLetters = guessedLetters.filter(
    (letter) => !currentWord.word.includes(letter),
  );
  const errors = wrongLetters.length;
  const won = currentWord.word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return {
    errors,
    attempts: MAX_ERRORS - errors,
    status: errors >= MAX_ERRORS ? "lost" : won ? "won" : "playing",
  };
}

function secretWord(status) {
  return currentWord.word
    .split("")
    .map((letter, index) => {
      const show = guessedLetters.includes(letter) || status !== "playing";
      return `
        <span class="letter-slot ${show ? "is-revealed" : ""}">
          <span>${show ? letter : "&nbsp;"}</span>
        </span>
      `;
    })
    .join("");
}

function keyboard(status) {
  return ALPHABET.map((letter) => {
    const used = guessedLetters.includes(letter);
    const correct = used && currentWord.word.includes(letter);
    const wrong = used && !correct;

    const stateClass = correct
      ? "key--correct"
      : wrong
      ? "key--wrong"
      : "";

    const label = used
      ? `${letter}, tentativa ${correct ? "correta" : "incorreta"}`
      : `Letra ${letter}`;

    const disabled = used || status !== "playing" ? "disabled" : "";

    return `
      <button
        class="key ${stateClass}"
        type="button"
        data-letter="${letter}"
        aria-label="${label}"
        ${disabled}
      >
        ${letter}
        ${
          used
            ? `<span class="key__state" aria-hidden="true">${correct ? "✓" : "×"}</span>`
            : ""
        }
      </button>
    `;
  }).join("");
}

function resultPanel(status) {
  if (status === "playing") return "";

  const won = status === "won";
  return `
  <div class="result-overlay">
    <section
      class="result result--${status}"
      role="dialog"
      aria-modal="true"
      aria-labelledby="result-title"
    >
      <span class="result__icon" aria-hidden="true">${won ? "✓" : "×"}</span>
      <div>
        <p class="result__eyebrow">${won ? "Parabéns!" : "Não foi dessa vez"}</p>
        <h2 id="result-title">${won ? "Você venceu! 🎉" : "Fim de jogo!"}</h2>
        <p>
          ${won ? "Você descobriu a palavra" : "A palavra secreta era"}
          <strong>${currentWord.word}</strong>.
        </p>
      </div>
      <button class="button button--primary" data-action="new-game" type="button">
        ${won ? "Jogar novamente" : "Tentar novamente"}
      </button>
    </section>
  </div>
`;
}

function feedbackIcon() {
  if (feedback.startsWith("Boa")) {
    return `<span class="feedback-icon is-success" aria-hidden="true">✓</span>`;
  }
  if (feedback.startsWith("Essa")) {
    return `<span class="feedback-icon is-error" aria-hidden="true">!</span>`;
  }
  return `<span class="feedback-icon" aria-hidden="true">i</span>`;
}

function renderGame() {
  const { errors, attempts, status } = getGameState();

  app.innerHTML = `
    <main class="game-shell">
      <header class="game-header">
        ${brand()}
        <button class="button button--secondary" data-action="new-game" type="button">
          <span class="button__plus" aria-hidden="true">+</span>
          Nova partida
        </button>
      </header>

      <div class="game-layout">
        <section class="game-card game-card--figure">
          <div class="card-heading">
            <div>
              <span class="section-index">01</span>
              <p class="overline">Sua situação</p>
              <h2>A forca</h2>
            </div>
            <span class="errors-badge">
              ${errors} ${errors === 1 ? "erro" : "erros"}
            </span>
          </div>

          <div class="hangman-stage">${hangman(errors)}</div>

          <div class="attempts">
            <div class="attempts__copy">
              <span>Tentativas restantes</span>
              <strong>${attempts}</strong>
            </div>
            <div
              class="attempts__bars"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="${MAX_ERRORS}"
              aria-valuenow="${attempts}"
              aria-label="${attempts} tentativas restantes"
            >
              ${Array.from(
                { length: MAX_ERRORS },
                (_, index) =>
                  `<span class="attempts__bar ${
                    index < attempts ? "is-active" : "is-spent"
                  }"></span>`,
              ).join("")}
            </div>
          </div>
        </section>

        <section class="game-card game-card--play">
          <div class="play-topline">
            <div>
              <span class="section-index">02</span>
              <p class="overline">Palavra secreta</p>
            </div>
            <span class="category">
              <span aria-hidden="true">◆</span> ${currentWord.category}
            </span>
          </div>

          <div
            class="secret-word"
            aria-label="Palavra com ${currentWord.word.length} letras"
          >
            ${secretWord(status)}
          </div>

          <div class="feedback-row">
            ${feedbackIcon()}
            <p aria-live="polite">${feedback}</p>
          </div>

          <div class="keyboard-wrap">
            <p class="keyboard-label">
              Escolha uma letra <span>ou use seu teclado</span>
            </p>
            <div class="keyboard" aria-label="Teclado virtual">
              ${keyboard(status)}
            </div>
          </div>
        </section>
      </div>

      <footer>
        <span>Jogo da Forca</span>
        <span>6 erros possíveis · Boa sorte!</span>
      </footer>

      ${resultPanel(status)}
    </main>
  `;
}

function startGame() {
  gameNumber += 1;
  currentWord = WORDS[gameNumber % WORDS.length];
  guessedLetters = [];
  feedback = "Escolha uma letra para começar a partida.";
  renderGame();
}

function chooseLetter(letter) {
  const { status } = getGameState();
  if (status !== "playing" || !ALPHABET.includes(letter)) return;

  if (guessedLetters.includes(letter)) {
    feedback = `Você já tentou a letra ${letter}.`;
    renderGame();
    return;
  }

  guessedLetters.push(letter);
  feedback = currentWord.word.includes(letter)
    ? "Boa! A letra pertence à palavra."
    : "Essa letra não está na palavra.";

  const updatedState = getGameState();
  if (updatedState.status === "won") {
    feedback = "Você completou a palavra!";
  } else if (updatedState.status === "lost") {
    feedback = "Suas tentativas acabaram.";
  }

  renderGame();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.letter) {
    chooseLetter(target.dataset.letter);
    return;
  }

  if (target.dataset.action === "start" || target.dataset.action === "new-game") {
    startGame();
  }
});

window.addEventListener("keydown", (event) => {
  const letter = event.key.toUpperCase();
  if (ALPHABET.includes(letter) && gameNumber >= 0) {
    chooseLetter(letter);
  }
});