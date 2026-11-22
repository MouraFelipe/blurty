/* =========================================================
   DESAFIOS SURPRESA
   Aparecem no mapa, num espaço livre do caminho, depois da fase "after".
   São opcionais: não travam as próximas fases.
   Conteúdo: uma expressão secreta (só aparece ao abrir) + exercícios sorteados
   3 exercícios novos sobre a expressão secreta + 1 revanche de algo que o jogador já errou (se houver).
   Vencer (errar no máximo 1) dá o prêmio: um item para o mascote.
   ========================================================= */
const PRIZES = {
  sunglasses: {name: "Óculos escuros", e: "🕶️", slot: "face"},
  crown:      {name: "Coroa",          e: "👑", slot: "head"},
  cap:        {name: "Boné",           e: "🧢", slot: "head"},
  flower:     {name: "Flor",           e: "🌼", slot: "head"},
  chefHat:    {name: "Chapéu de chef", e: "👨‍🍳", slot: "head"},
  golden:     {name: "Visual dourado", e: "✨", slot: "skin"}   // muda as cores do mascote para dourado
};

const CHALLENGES = [
  {
    id: "b1c1", block: "b1", after: "b1p2", prize: "sunglasses",
    title: "What's up?", pt: "E aí?",
    reading: [
        {say: ["@", "Psst… here's a secret expression. Natives use it all the time!"], pt: "Psiu… aqui vai uma expressão secreta. Os nativos usam toda hora!"},
        {ex: "What's up?", pt: "E aí? / Beleza? (bem informal)"},
        {ex: "Not much. You?", pt: "Nada de mais. E você?"},
        {tip: "💡 <b>What's up?</b> não pede um relatório nem <i>I'm fine</i>. O natural é responder <b>Not much!</b> ou <b>Nothing much, you?</b>"}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", prompt: "O que significa “What's up?” numa conversa entre amigos?",
       options: ["E aí? / Beleza?", "O que tem lá em cima?", "Pode subir?"], answer: 0,
       explain: "<b>What's up?</b> é um cumprimento informal, tipo <i>E aí?</i> Nada a ver com “em cima”."},
      {type: "build", kind: "Expressão secreta", dialog: [["Leo", "What's up?"]], prompt: "Responda: “Nada de mais. E você?”",
       words: ["Not", "much.", "You?", "many", "Your", "up"], answer: "Not much. You?",
       explain: "<b>Not much</b> (nada de mais) e devolva com <b>You?</b>"},
      {type: "choice", kind: "Expressão secreta", dialog: [["Leo", "Hey! What's up?"]], prompt: "Qual é a resposta mais natural?",
      options: ["Not much. You?", "I'm 25.", "Good night!"], answer: 0,
      explain: "<b>Not much</b> = nada de mais. É a resposta padrão para <i>What's up?</i>"}
    ]
  },
  {
    id: "b1c2", block: "b1", after: "b1p4", prize: "crown",
    title: "My bad!", pt: "Foi mal!",
    reading: [
        {say: ["@", "Another secret: how friends apologize and say it's okay."], pt: "Outro segredo: como amigos pedem desculpa e dizem que está tudo bem."},
        {ex: "My bad!", pt: "Foi mal! (informal)"},
        {ex: "No worries!", pt: "Tranquilo! / Sem problema!"},
        {tip: "💡 Entre amigos, <b>My bad</b> e <b>No worries</b> são super comuns. Em situações formais, prefira <i>Sorry</i> e <i>No problem</i>."}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", dialog: [["Maya", "Sorry, I'm late!"]], prompt: "Qual resposta mostra que está tudo bem?",
       options: ["No worries!", "My bad!", "Not much."], answer: 0,
       explain: "<b>No worries!</b> = tranquilo, sem problema. <i>My bad</i> é de quem errou."},
      {type: "choice", kind: "Expressão secreta", situation: "Você esbarra no seu chefe numa reunião importante.",
       prompt: "O que é mais adequado dizer?", options: ["I'm so sorry!", "My bad, dude!", "No worries!"], answer: 0,
       explain: "Em situação formal, prefira <b>I'm so sorry</b>. <i>My bad</i> é para amigos."},
      {type: "choice", kind: "Expressão secreta", situation: "Você esbarra no seu amigo e derruba o café dele.",
      prompt: "O que você diz?", options: ["My bad! Sorry!", "No worries!", "You're welcome!"], answer: 0,
      explain: "Quem errou diz <b>My bad!</b> E o amigo provavelmente responde <i>No worries!</i>"}
    ]
  },
  {
    id: "b2c1", block: "b2", after: "b2p2", prize: "cap",
    title: "I'm swamped!", pt: "Estou atolado!",
    reading: [
        {say: ["@", "Busy day? Here's how to say it like a native."], pt: "Dia corrido? Veja como dizer igual a um nativo."},
        {ex: "I'm swamped!", pt: "Estou atolado de coisas para fazer!"},
        {ex: "It's been a long day.", pt: "Foi um dia longo/cansativo."},
        {tip: "💡 <b>Swamped</b> vem de <i>swamp</i> (pântano): é estar “afundado” em tarefas."}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", prompt: "Como se diz “Foi um dia longo.”?",
       options: ["It's been a long day.", "It was a big day long.", "Today is long day."], answer: 0,
       explain: "<b>It's been a long day</b> é o jeito natural de dizer que o dia foi cansativo."},
      {type: "choice", kind: "Expressão secreta", situation: "Você está atolado de trabalho.", dialog: [["Leo", "Want to grab lunch?"]],
       prompt: "O que você responde?", options: ["Sorry, I'm swamped today!", "Yes, I'm swamp.", "I'm a swamp."], answer: 0,
       explain: "<b>I'm swamped</b> = estou atolado. <i>I'm a swamp</i> seria “eu sou um pântano” 😄"},
      {type: "choice", kind: "Expressão secreta", dialog: [["Maya", "Sorry, I can't talk now. I'm swamped!"]], prompt: "O que a Maya quis dizer?",
      options: ["Que está cheia de coisas para fazer", "Que está molhada", "Que está de folga hoje"], answer: 0,
      explain: "<b>I'm swamped</b> = estou atolado(a) de trabalho, sem tempo nenhum."}
    ]
  },
  {
    id: "b2c2", block: "b2", after: "b2p4", prize: "flower",
    title: "Let's hang out!", pt: "Bora sair!",
    reading: [
        {say: ["@", "Weekend plans! Two expressions everybody uses."], pt: "Planos de fim de semana! Duas expressões que todo mundo usa."},
        {ex: "Let's hang out on Saturday!", pt: "Bora sair/fazer algo no sábado!"},
        {ex: "I binge-watch series on weekends.", pt: "Eu maratono séries nos fins de semana."},
        {tip: "💡 <b>Hang out</b> é passar tempo junto, sem um plano fixo. <b>Binge-watch</b> é maratonar série."}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", dialog: [["Leo", "I binge-watched the whole series this weekend."]],
       prompt: "O que o Leo fez?", options: ["Maratonou a série inteira no fim de semana", "Trabalhou o fim de semana inteiro", "Assistiu um episódio só"], answer: 0,
       explain: "<b>Binge-watch</b> = maratonar. <i>The whole series</i> = a série inteira."},
      {type: "choice", kind: "Expressão secreta", prompt: "Complete a frase", sentence: "Do you want to hang ___ tonight?",
       options: ["out", "on", "up"], answer: 0,
       explain: "<b>Hang out</b> = sair, passar um tempo juntos. (<i>hang on</i> = espera; <i>hang up</i> = desligar o telefone)"},
      {type: "build", kind: "Expressão secreta", situation: "Você quer chamar a Maya para fazer algo no fim de semana.",
      prompt: "Monte: “Bora sair no sábado!”", words: ["Let's", "hang", "out", "on", "Saturday!", "in", "with"],
      answer: "Let's hang out on Saturday!",
      explain: "<b>Let's hang out</b> = bora sair / passar um tempo juntos. Dia da semana usa <b>on</b>."}
    ]
  },
  {
    id: "b3c1", block: "b3", after: "b3p2", prize: "chefHat",
    title: "It's on me!", pt: "Essa é por minha conta!",
    reading: [
        {say: ["@", "Psst… two secret expressions for when the check arrives."], pt: "Psiu… duas expressões secretas para quando a conta chega."},
        {ex: "It's on me!", pt: "Essa é por minha conta! / Eu pago!"},
        {ex: "Let's split the check.", pt: "Vamos rachar a conta."},
        {tip: "💡 <b>It's on me</b> = eu pago. Se for a outra pessoa: <b>It's on you!</b> E <b>split</b> = dividir, rachar."}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", dialog: [["Leo", "Put your wallet away. It's on me!"]], prompt: "O que o Leo quis dizer?",
       options: ["Que ele vai pagar", "Que a carteira está com ele", "Que a conta caiu em cima dele"], answer: 0,
       explain: "<b>It's on me!</b> = eu pago / é por minha conta."},
      {type: "build", kind: "Expressão secreta", situation: "Você quer dividir a conta com a Maya.", prompt: "Monte: “Vamos rachar a conta.”",
       words: ["Let's", "split", "the", "check.", "divide", "broke"], answer: "Let's split the check.",
       explain: "<b>Split the check</b> (ou <i>split the bill</i>) = rachar a conta."},
      {type: "choice", kind: "Expressão secreta", situation: "Seu amigo pagou o almoço ontem. Hoje você quer pagar.",
      prompt: "O que você diz?", options: ["Today it's on me!", "Today it's on you!", "Today I'm on it!"], answer: 0,
      explain: "Quem paga diz <b>It's on me</b>. <i>I'm on it</i> = estou cuidando disso, outra coisa."}
    ]
  },
  {
    id: "b3c2", block: "b3", after: "b3p4", prize: "golden",
    title: "What a steal!", pt: "Que pechincha!",
    reading: [
        {say: ["@", "Shopping secret: how to say something is super cheap… or way too expensive."], pt: "Segredo das compras: como dizer que algo está baratíssimo… ou caro demais."},
        {ex: "What a steal!", pt: "Que pechincha! (preço ótimo)"},
        {ex: "That's a rip-off!", pt: "Isso é um roubo! (caro demais)"},
        {tip: "💡 Como verbo, <b>steal</b> é roubar, mas <b>a steal</b> é uma pechincha. Já <b>a rip-off</b> é quando o preço é um absurdo."}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", dialog: [["Maya", "These shoes were only ten dollars!"]], prompt: "Qual é a reação natural?",
       options: ["What a steal!", "What a rip-off!", "Steal them!"], answer: 0,
       explain: "Preço ótimo = <b>What a steal!</b> <i>Rip-off</i> é o contrário."},
      {type: "choice", kind: "Expressão secreta", situation: "Uma garrafinha de água custa 9 dólares no aeroporto.", prompt: "O que você diz?",
       options: ["That's a rip-off!", "That's a steal!", "That's on me!"], answer: 0,
       explain: "Caro demais = <b>That's a rip-off!</b>"},
      {type: "choice", kind: "Expressão secreta", dialog: [["Leo", "I got this jacket for 20 bucks. It was a steal!"]], prompt: "O que o Leo disse da jaqueta?",
      options: ["Que comprou muito barato", "Que roubou a jaqueta", "Que pagou caro demais"], answer: 0,
      explain: "<b>It was a steal</b> = foi uma pechincha. <b>Bucks</b> = dólares, informal."}
    ]
  }
];
