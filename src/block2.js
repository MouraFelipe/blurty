/* =========================================================
   BLOCO 2 — DAILY LIFE (Básico)
   Mesmo formato do Bloco 1 (ver src/block1.js).
   ========================================================= */
const BLOCK2 = {
  id: "b2", title: "Daily Life", pt: "Rotina, trabalho, estudos e hobbies", level: "Básico", emoji: "☀️",
  goal: "Falar da sua rotina, do seu trabalho ou estudos e do que você gosta de fazer.",
  doneMsg: "Agora você consegue falar da sua rotina, do seu trabalho ou estudos e do que gosta de fazer no tempo livre.",
  phases: [
    {
      id: "b2p1", title: "My Day", pt: "Minha rotina", emoji: "⏰",
      goal: "Contar o que você faz num dia normal",
      reading: [
        {say: ["@", "Let's talk about a normal day. Here's Maya's routine:"], pt: "Vamos falar de um dia normal. Esta é a rotina da Maya:"},
        {dialog: [["Maya", "I wake up at 7. I have breakfast and I go to work. I get home at 6."]]},
        {ex: "I wake up at 7.", pt: "Eu acordo às 7."},
        {ex: "I have breakfast.", pt: "Eu tomo café da manhã."},
        {ex: "I go to work.", pt: "Eu vou para o trabalho."},
        {ex: "I get home at 6.", pt: "Eu chego em casa às 6."},
        {ex: "I go to bed at 11.", pt: "Eu vou dormir às 11."},
        {tip: "💡 Horário usa <b>at</b>: <i>at 7</i>, <i>at 7:30</i>. E <b>home</b> não leva <i>to</i>: <i>I go home</i>, <i>I get home</i>."}
      ],
      questions: [
        {type: "choice", kind: "Tradução", prompt: "Como se diz “Eu acordo às 7.” em inglês?",
         options: ["I wake up at 7.", "I wake up in 7.", "I am wake up at 7."], answer: 0,
         explain: "Horário usa <b>at</b>. E não se usa <i>am</i> junto com outro verbo: <i>I wake up</i>, não <i>I am wake up</i>."},
        {type: "build", kind: "Monte a frase", situation: "Alguém pergunta a que horas você chega em casa.",
         prompt: "Monte: “Eu chego em casa às 6.”", words: ["I", "get", "home", "at", "6.", "to", "in"],
         answer: "I get home at 6.",
         explain: "<b>Get home</b> = chegar em casa, sem <i>to</i>. Horário com <b>at</b>."},
        {type: "choice", kind: "Encontre o erro", prompt: "Qual frase está ERRADA?",
         options: ["I have breakfast at 8.", "I go to home at 6.", "I go to bed at 11."], answer: 1,
         explain: "<b>Home</b> não leva <i>to</i>: o certo é <i>I go home at 6</i>."}
      ]
    },
    {
      id: "b2p2", title: "Work and Studies", pt: "Trabalho e estudos", emoji: "💼",
      goal: "Dizer onde você trabalha ou o que você estuda",
      reading: [
        {say: ["@", "What do you do all day? Let's say it in English."], pt: "O que você faz o dia todo? Vamos dizer em inglês."},
        {ex: "I work at a bank.", pt: "Eu trabalho num banco."},
        {ex: "I work in sales.", pt: "Eu trabalho com vendas."},
        {ex: "I work from home.", pt: "Eu trabalho de casa."},
        {ex: "I'm a student.", pt: "Eu sou estudante."},
        {ex: "I study engineering.", pt: "Eu estudo engenharia."},
        {ex: "I'm looking for a job.", pt: "Estou procurando emprego."},
        {tip: "💡 <b>Work at</b> + lugar (<i>at a bank</i>, <i>at Google</i>). <b>Work in</b> + área (<i>in sales</i>, <i>in IT</i>). E “home office” em inglês é o cômodo da casa: para trabalho remoto, diga <b>I work from home</b>."}
      ],
      questions: [
        {type: "choice", kind: "Complete a frase", prompt: "Complete a frase", sentence: "I work ___ sales.",
         options: ["in", "at", "on"], answer: 0,
         explain: "Área de trabalho usa <b>in</b>: <i>in sales</i>, <i>in marketing</i>, <i>in IT</i>."},
        {type: "choice", kind: "Tradução", prompt: "Como se diz “Eu trabalho de casa” (home office)?",
         options: ["I work from home.", "I make home office.", "I do home office."], answer: 0,
         explain: "Em inglês, o trabalho remoto é <b>work from home</b> (ou <i>work remotely</i>). “Home office” é só o escritório da casa."},
        {type: "choice", kind: "Responda na conversa", situation: "Você conhece o Leo numa festa.",
         dialog: [["Leo", "So, what do you do?"]], prompt: "Qual é uma resposta natural?",
         options: ["I'm a student. I study engineering.", "I'm doing my homework.", "I do 25 years."], answer: 0,
         explain: "<b>What do you do?</b> pergunta a sua ocupação. Você diz o que faz e pode completar com o que estuda ou onde trabalha."}
      ]
    },
    {
      id: "b2p3", title: "How Often?", pt: "Com que frequência?", emoji: "🔁",
      goal: "Dizer com que frequência você faz as coisas",
      reading: [
        {say: ["@", "Some things we do every day, some things never. Let's see how to say it."], pt: "Algumas coisas a gente faz todo dia, outras nunca. Vamos ver como dizer."},
        {ex: "I always drink coffee in the morning.", pt: "Eu sempre tomo café de manhã."},
        {ex: "I usually walk to work.", pt: "Eu geralmente vou a pé para o trabalho."},
        {ex: "I sometimes cook dinner.", pt: "Às vezes eu faço o jantar."},
        {ex: "I never work on Sundays.", pt: "Eu nunca trabalho aos domingos."},
        {ex: "I go to the gym every day.", pt: "Eu vou à academia todo dia."},
        {tip: "💡 <b>always, usually, sometimes, never</b> vêm antes do verbo: <i>I <b>always</b> walk</i>. Com <b>am/is/are</b>, vêm depois: <i>I'm <b>always</b> tired</i>."}
      ],
      questions: [
        {type: "match", kind: "Associe", prompt: "Ligue cada palavra ao significado",
         pairs: [["always", "sempre"], ["usually", "geralmente"], ["sometimes", "às vezes"], ["never", "nunca"]],
         explain: "Do mais frequente ao menos: <b>always</b> → <b>usually</b> → <b>sometimes</b> → <b>never</b>."},
        {type: "build", kind: "Monte a frase", situation: "Alguém te convida para trabalhar num domingo.",
         prompt: "Monte: “Eu nunca trabalho aos domingos.”", words: ["I", "never", "work", "on", "Sundays.", "not", "at"],
         answer: "I never work on Sundays.",
         explain: "<b>Never</b> já é negativo, então não precisa de <i>not</i>. Dias da semana usam <b>on</b>."},
        {type: "choice", kind: "Encontre o erro", prompt: "Qual frase está ERRADA?",
         options: ["I always drink coffee.", "I drink always coffee.", "I'm always late."], answer: 1,
         explain: "<b>Always</b> vem antes do verbo principal: <i>I always drink coffee</i>. Com <i>am</i>, vem depois: <i>I'm always late</i>."}
      ]
    },
    {
      id: "b2p4", title: "Free Time", pt: "Tempo livre", emoji: "🎮",
      goal: "Falar do que você gosta e do que não gosta de fazer",
      reading: [
        {say: ["@", "Now the fun part: what do you like doing?"], pt: "Agora a parte divertida: do que você gosta de fazer?"},
        {ex: "What do you do in your free time?", pt: "O que você faz no seu tempo livre?"},
        {ex: "I like watching movies.", pt: "Eu gosto de ver filmes."},
        {ex: "I love playing soccer.", pt: "Eu adoro jogar futebol."},
        {ex: "I enjoy cooking.", pt: "Eu curto cozinhar."},
        {ex: "I don't like running.", pt: "Eu não gosto de correr."},
        {ex: "I'm into music.", pt: "Eu curto música. (bem informal)"},
        {tip: "💡 Depois de <b>enjoy</b>, o verbo vem sempre com <b>-ing</b>: <i>I enjoy <b>cooking</b></i>. Com <b>like</b> e <b>love</b>, o <b>-ing</b> é o mais comum na conversa."}
      ],
      questions: [
        {type: "choice", kind: "Complete a frase", prompt: "Complete a frase", sentence: "I enjoy ___ on weekends.",
         options: ["cooking", "cook", "to cooking"], answer: 0,
         explain: "Depois de <b>enjoy</b>, sempre <b>-ing</b>: <i>I enjoy cooking</i>."},
        {type: "choice", kind: "Interprete", dialog: [["Maya", "I'm not a big fan of sports, but I love reading."]],
         prompt: "O que a Maya disse?",
         options: ["Que não curte muito esportes, mas adora ler", "Que é fã de esportes e de leitura", "Que é atleta e não gosta de ler"], answer: 0,
         explain: "<b>I'm not a big fan of</b> = não curto muito. <b>I love reading</b> = adoro ler."},
        {type: "choice", kind: "Responda na conversa", dialog: [["Leo", "What do you do in your free time?"]],
         prompt: "Qual é uma resposta natural?",
         options: ["I like playing video games.", "I'm free at 5.", "I don't have time free."], answer: 0,
         explain: "Ele quer saber do que você gosta de fazer. <i>I'm free at 5</i> = estou livre às 5, que é outra coisa."}
      ]
    },
    {
      id: "b2p5", title: "Let's Talk!", pt: "Vamos conversar!", emoji: "💬",
      goal: "Conversar sobre rotina, trabalho e hobbies do começo ao fim",
      reading: [
        {say: ["@", "Let's put it all together. You meet Leo at the gym."], pt: "Vamos juntar tudo. Você encontra o Leo na academia."},
        {dialog: [["Leo", "Hey! How's it going?"], ["Você", "Good, thanks! Busy day at work."], ["Leo", "Oh, what do you do?"], ["Você", "I work in IT. I usually work from home."], ["Leo", "Nice! What do you do in your free time?"], ["Você", "I love playing soccer. And you?"], ["Leo", "I'm into cooking. I cook every weekend!"]]},
        {tip: "💡 <b>How's it going?</b> é um jeito informal de perguntar <i>How are you?</i> Responda <i>Good, thanks!</i> ou <i>Not bad!</i>"}
      ],
      questions: [
        {type: "choice", kind: "Interprete o diálogo", dialog: [["Leo", "I'm into cooking. I cook every weekend!"]],
         prompt: "O que o Leo disse?",
         options: ["Que curte cozinhar e cozinha todo fim de semana", "Que está entrando na cozinha agora", "Que cozinha todo dia no trabalho"], answer: 0,
         explain: "<b>I'm into cooking</b> = curto cozinhar. <b>Every weekend</b> = todo fim de semana."},
        {type: "build", kind: "Construa a resposta", dialog: [["Leo", "What do you do in your free time?"]],
         prompt: "Responda: “Eu adoro jogar futebol.”", words: ["I", "love", "playing", "soccer.", "the", "likes"],
         answer: "I love playing soccer.",
         explain: "<b>Love</b> + verbo com <b>-ing</b>. Esportes não levam <i>the</i>: <i>playing soccer</i>."},
        {type: "choice", kind: "Continue a conversa", dialog: [["Leo", "Well, I have to go. See you at the gym!"]],
         prompt: "Como você encerra a conversa?", options: ["See you! Have a good one!", "Good morning, Leo!", "I go to the gym."], answer: 0,
         explain: "<b>See you!</b> = até mais. <b>Have a good one!</b> = tenha um bom dia (bem comum e informal)."}
      ]
    }
  ]
};
