/* =========================================================
   DESAFIOS SURPRESA
   Aparecem no mapa, num espaço livre do caminho, depois da fase "after".
   São opcionais: não travam as próximas fases.
   Conteúdo: uma expressão secreta (só aparece ao abrir) + exercícios sorteados
   das fases anteriores do bloco + 1 exercício da expressão secreta.
   Vencer (acertar "need" de "total") dá o prêmio: um item para o mascote.
   ========================================================= */
const PRIZES = {
  sunglasses: {name: "Óculos escuros", e: "🕶️", slot: "face"},
  crown:      {name: "Coroa",          e: "👑", slot: "head"},
  cap:        {name: "Boné",           e: "🧢", slot: "head"},
  flower:     {name: "Flor",           e: "🌼", slot: "head"}
};

const CHALLENGES = [
  {
    id: "b1c1", block: "b1", after: "b1p2", side: -64, prize: "sunglasses",
    title: "What's up?", pt: "E aí?",
    reading: [
        {say: ["@", "Psst… here's a secret expression. Natives use it all the time!"], pt: "Psiu… aqui vai uma expressão secreta. Os nativos usam toda hora!"},
        {ex: "What's up?", pt: "E aí? / Beleza? (bem informal)"},
        {ex: "Not much. You?", pt: "Nada de mais. E você?"},
        {tip: "💡 <b>What's up?</b> não pede um relatório nem <i>I'm fine</i>. O natural é responder <b>Not much!</b> ou <b>Nothing much, you?</b>"}
    ],
    question: {type: "choice", kind: "Expressão secreta", dialog: [["Leo", "Hey! What's up?"]], prompt: "Qual é a resposta mais natural?",
      options: ["Not much. You?", "I'm 25.", "Good night!"], answer: 0,
      explain: "<b>Not much</b> = nada de mais. É a resposta padrão para <i>What's up?</i>"}
  },
  {
    id: "b1c2", block: "b1", after: "b1p4", side: 74, prize: "crown",
    title: "My bad!", pt: "Foi mal!",
    reading: [
        {say: ["@", "Another secret: how friends apologize and say it's okay."], pt: "Outro segredo: como amigos pedem desculpa e dizem que está tudo bem."},
        {ex: "My bad!", pt: "Foi mal! (informal)"},
        {ex: "No worries!", pt: "Tranquilo! / Sem problema!"},
        {tip: "💡 Entre amigos, <b>My bad</b> e <b>No worries</b> são super comuns. Em situações formais, prefira <i>Sorry</i> e <i>No problem</i>."}
    ],
    question: {type: "choice", kind: "Expressão secreta", situation: "Você esbarra no seu amigo e derruba o café dele.",
      prompt: "O que você diz?", options: ["My bad! Sorry!", "No worries!", "You're welcome!"], answer: 0,
      explain: "Quem errou diz <b>My bad!</b> E o amigo provavelmente responde <i>No worries!</i>"}
  },
  {
    id: "b2c1", block: "b2", after: "b2p2", side: -64, prize: "cap",
    title: "I'm swamped!", pt: "Estou atolado!",
    reading: [
        {say: ["@", "Busy day? Here's how to say it like a native."], pt: "Dia corrido? Veja como dizer igual a um nativo."},
        {ex: "I'm swamped!", pt: "Estou atolado de coisas para fazer!"},
        {ex: "It's been a long day.", pt: "Foi um dia longo/cansativo."},
        {tip: "💡 <b>Swamped</b> vem de <i>swamp</i> (pântano): é estar “afundado” em tarefas."}
    ],
    question: {type: "choice", kind: "Expressão secreta", dialog: [["Maya", "Sorry, I can't talk now. I'm swamped!"]], prompt: "O que a Maya quis dizer?",
      options: ["Que está cheia de coisas para fazer", "Que está molhada", "Que está de folga hoje"], answer: 0,
      explain: "<b>I'm swamped</b> = estou atolado(a) de trabalho, sem tempo nenhum."}
  },
  {
    id: "b2c2", block: "b2", after: "b2p4", side: 74, prize: "flower",
    title: "Let's hang out!", pt: "Bora sair!",
    reading: [
        {say: ["@", "Weekend plans! Two expressions everybody uses."], pt: "Planos de fim de semana! Duas expressões que todo mundo usa."},
        {ex: "Let's hang out on Saturday!", pt: "Bora sair/fazer algo no sábado!"},
        {ex: "I binge-watch series on weekends.", pt: "Eu maratono séries nos fins de semana."},
        {tip: "💡 <b>Hang out</b> é passar tempo junto, sem um plano fixo. <b>Binge-watch</b> é maratonar série."}
    ],
    question: {type: "build", kind: "Expressão secreta", situation: "Você quer chamar a Maya para fazer algo no fim de semana.",
      prompt: "Monte: “Bora sair no sábado!”", words: ["Let's", "hang", "out", "on", "Saturday!", "in", "with"],
      answer: "Let's hang out on Saturday!",
      explain: "<b>Let's hang out</b> = bora sair / passar um tempo juntos. Dia da semana usa <b>on</b>."}
  }
];
