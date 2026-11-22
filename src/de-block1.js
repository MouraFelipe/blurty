/* =========================================================
   ALEMÃO · BLOCO 1 — ERSTE GESPRÄCHE (Iniciante)
   Mesmo formato dos blocos de inglês. Os ids começam com "de" para não misturar o progresso.
   Blocos da leitura: {say:[personagem, de], pt} | {ex, pt} | {tip} | {p} | {dialog:[[quem, de], ...]}
   ========================================================= */
const DE_BLOCK1 = {
  id: "de1", title: "Erste Gespräche", pt: "Primeiras conversas", level: "Iniciante", emoji: "👋",
  goal: "Cumprimentar, se apresentar e manter uma conversa curta com alguém que você acabou de conhecer.",
  doneMsg: "Agora você consegue cumprimentar, se apresentar e manter uma conversa curta em alemão.",
  phases: [
    {
      id: "de1p1", title: "Begrüßungen", pt: "Cumprimentos", emoji: "👋",
      goal: "Cumprimentar alguém e responder a “Wie geht's?”",
      reading: [
        {say: ["@", "Hallo! Fangen wir mit dem Wichtigsten an: Hallo sagen!"], pt: "Oi! Vamos começar pelo mais importante: dizer oi!"},
        {ex: "Hallo!", pt: "Oi! / Olá! (o mais comum no dia a dia)"},
        {ex: "Guten Morgen!", pt: "Bom dia!"},
        {ex: "Guten Tag!", pt: "Bom dia! / Boa tarde! (durante o dia, mais formal)"},
        {ex: "Wie geht's?", pt: "Tudo bem? / Como vai?"},
        {ex: "Gut, danke. Und dir?", pt: "Bem, obrigado(a). E você?"},
        {ex: "Tschüss!", pt: "Tchau!"},
        {tip: "💡 <b>Gute Nacht</b> é só para se despedir antes de dormir. Para cumprimentar à noite, use <b>Guten Abend</b> ou simplesmente <b>Hallo</b>."}
      ],
      questions: [
        {type: "choice", kind: "Tradução", prompt: "Como se diz “Bom dia!” (de manhã) em alemão?",
         options: ["Guten Morgen!", "Gute Nacht!", "Guten Morgen Tag!"], answer: 0,
         explain: "<b>Guten Morgen</b> é o cumprimento da manhã. <b>Gute Nacht</b> é para ir dormir."},
        {type: "choice", kind: "Responda na conversa", situation: "Você entra numa padaria. A Lena está no balcão.",
         dialog: [["Lena", "Hallo! Wie geht's?"]], prompt: "Qual é uma resposta natural?",
         options: ["Gut, danke. Und dir?", "Ich bin 25 Jahre.", "Gute Nacht, Lena."], answer: 0,
         explain: "Você responde e devolve a pergunta com <b>Und dir?</b> (Bem, obrigado. E você?)"},
        {type: "choice", kind: "Encontre o erro", situation: "São 21h e você está chegando a um jantar com amigos.",
         prompt: "Qual cumprimento NÃO combina com a situação?",
         options: ["Hallo zusammen!", "Guten Abend!", "Gute Nacht!"], answer: 2,
         explain: "<b>Gute Nacht</b> é para se despedir antes de dormir. Na chegada: <i>Guten Abend</i> ou <i>Hallo zusammen</i> (Oi, pessoal)."}
      ]
    },
    {
      id: "de1p2", title: "Sich vorstellen", pt: "Apresentações", emoji: "🙋",
      goal: "Dizer seu nome, de onde você é e sua idade",
      reading: [
        {say: ["@", "Jetzt stellen wir uns vor. Schau, wie Lena das macht:"], pt: "Agora vamos nos apresentar. Veja como a Lena faz:"},
        {dialog: [["Lena", "Hallo! Ich heiße Lena. Ich komme aus Berlin. Freut mich!"]]},
        {ex: "Ich heiße Ana.", pt: "Eu me chamo Ana."},
        {ex: "Ich bin Ana.", pt: "Eu sou a Ana."},
        {ex: "Freut mich!", pt: "Prazer!"},
        {ex: "Ich komme aus Brasilien.", pt: "Eu sou do Brasil. (venho do Brasil)"},
        {ex: "Ich bin 25 Jahre alt.", pt: "Tenho 25 anos."},
        {tip: "💡 Idade usa o verbo <b>sein</b> (ser/estar): <i>Ich bin 25</i>. Nunca <i>Ich habe 25 Jahre</i>."}
      ],
      questions: [
        {type: "build", kind: "Monte a frase", situation: "Alguém acabou de perguntar o seu nome.",
         prompt: "Monte em alemão: “Eu me chamo Ana.”", words: ["Ich", "heiße", "Ana.", "heißt", "habe"],
         answer: "Ich heiße Ana.",
         explain: "<b>Ich heiße</b> = eu me chamo. <i>heißt</i> é a forma do <i>du</i>: <i>Wie heißt du?</i>"},
        {type: "choice", kind: "Encontre o erro", prompt: "Qual frase está ERRADA?",
         options: ["Ich bin 30 Jahre alt.", "Ich habe 30 Jahre.", "Ich bin 30."], answer: 1,
         explain: "Idade em alemão usa <b>sein</b>: <i>Ich bin 30</i>. “Ich habe 30 Jahre” é tradução literal do português."},
        {type: "choice", kind: "Responda na conversa", situation: "Primeiro dia no curso de alemão.",
         dialog: [["Jonas", "Hallo, ich bin Jonas. Freut mich!"]], prompt: "Qual é a melhor resposta?",
         options: ["Freut mich auch! Ich bin Ana.", "Ja, ich freue Jonas.", "Mich auch Name ist Ana."], answer: 0,
         explain: "<b>Freut mich auch</b> devolve a gentileza, e você já se apresenta. (Prazer também! Sou a Ana.)"}
      ]
    },
    {
      id: "de1p3", title: "Fragen stellen", pt: "Fazendo perguntas", emoji: "❓",
      goal: "Fazer as 4 perguntas básicas para conhecer alguém",
      reading: [
        {say: ["@", "Ein gutes Gespräch geht in beide Richtungen. Stell Fragen!"], pt: "Uma boa conversa é de ida e volta. Faça perguntas!"},
        {ex: "Wie heißt du?", pt: "Como você se chama?"},
        {ex: "Woher kommst du?", pt: "De onde você é?"},
        {ex: "Was machst du beruflich?", pt: "O que você faz? (profissão)"},
        {ex: "Wie alt bist du?", pt: "Quantos anos você tem?"},
        {tip: "💡 Com quem você não conhece ou em situações formais, use <b>Sie</b>: <i>Wie heißen Sie?</i> <i>Woher kommen Sie?</i> Entre amigos e jovens, use <b>du</b>."}
      ],
      questions: [
        {type: "match", kind: "Associe", prompt: "Ligue cada pergunta à resposta certa",
         pairs: [["Wie heißt du?", "Ich heiße Ana."], ["Woher kommst du?", "Ich komme aus Brasilien."], ["Was machst du beruflich?", "Ich bin Lehrerin."], ["Wie alt bist du?", "Ich bin 28."]],
         explain: "Cada pergunta pede uma informação: nome, origem, profissão e idade. (<i>Lehrerin</i> = professora)"},
        {type: "choice", kind: "Complete a frase", prompt: "Complete a pergunta", sentence: "___ kommst du?",
         options: ["Woher", "Wie", "Was"], answer: 0,
         explain: "<b>Woher</b> = de onde. <i>Woher kommst du?</i> = De onde você é?"},
        {type: "choice", kind: "Situação", situation: "Você vai conhecer o diretor da sua nova empresa.",
         prompt: "Como perguntar o nome dele com educação?",
         options: ["Wie heißen Sie?", "Wie heißt du?", "Was heißt du?"], answer: 0,
         explain: "Em situações formais, use <b>Sie</b>: <i>Wie heißen Sie?</i> Já <i>Was heißt…?</i> pergunta o que uma palavra significa."}
      ]
    },
    {
      id: "de1p4", title: "Alltagsausdrücke", pt: "Expressões do dia a dia", emoji: "🙏",
      goal: "Agradecer, pedir licença e pedir para repetir",
      reading: [
        {say: ["@", "Diese kleinen Wörter machen dich höflich und natürlich."], pt: "Essas palavrinhas fazem você soar educado e natural."},
        {ex: "Danke!", pt: "Obrigado(a)!"},
        {ex: "Bitte!", pt: "De nada! / Por favor!"},
        {ex: "Entschuldigung!", pt: "Com licença! / Desculpa!"},
        {ex: "Wie bitte?", pt: "Como? (quando você não entendeu)"},
        {ex: "Noch einmal, bitte.", pt: "Mais uma vez, por favor."},
        {ex: "Kein Problem.", pt: "Sem problema."},
        {tip: "💡 <b>Bitte</b> é coringa: vale “por favor”, “de nada” e, em <i>Wie bitte?</i>, “como é que é?”."}
      ],
      questions: [
        {type: "choice", kind: "Situação", situation: "Você precisa passar por alguém em um corredor estreito.",
         prompt: "O que você diz?", options: ["Entschuldigung!", "Danke schön!", "Tschüss!"], answer: 0,
         explain: "<b>Entschuldigung</b> serve para pedir licença e também para pedir desculpas."},
        {type: "choice", kind: "Responda na conversa", dialog: [["Você", "Danke schön!"]],
         prompt: "O que a Lena responde, naturalmente?", options: ["Bitte schön!", "Danke auch!", "Guten Morgen!"], answer: 0,
         explain: "<b>Bitte schön</b> (ou só <i>Bitte</i>) = de nada. Também se ouve <i>Gern geschehen</i>."},
        {type: "build", kind: "Monte a frase", situation: "Você não entendeu o que a pessoa falou.",
         prompt: "Monte: “Mais uma vez, por favor.”", words: ["Noch", "einmal,", "bitte.", "danke", "wie"],
         answer: "Noch einmal, bitte.",
         explain: "Pedir para repetir é normal, até entre nativos! Mais curto ainda: <i>Wie bitte?</i>"}
      ]
    },
    {
      id: "de1p5", title: "Lass uns reden!", pt: "Vamos conversar!", emoji: "💬",
      goal: "Acompanhar uma conversa curta do começo ao fim",
      reading: [
        {say: ["@", "Jetzt alles zusammen. Hier lernt Ana Lena in einem Café kennen."], pt: "Agora tudo junto. Aqui a Ana conhece a Lena num café."},
        {dialog: [["Lena", "Hallo! Ich bin Lena. Wie heißt du?"], ["Você", "Hallo, Lena! Ich heiße Ana. Freut mich."], ["Lena", "Freut mich auch! Woher kommst du?"], ["Você", "Ich komme aus Brasilien. Und du?"], ["Lena", "Ich komme aus Deutschland. Was machst du beruflich?"], ["Você", "Ich bin Studentin."], ["Lena", "Cool! Bis später!"]]},
        {tip: "💡 Repare: depois de responder, a Ana devolve a pergunta com <b>Und du?</b> E profissão vem <b>sem artigo</b>: <i>Ich bin Studentin</i> (para homem, <i>Student</i>)."}
      ],
      questions: [
        {type: "choice", kind: "Interprete o diálogo", dialog: [["Lena", "Ich komme aus Deutschland. Was machst du beruflich?"]],
         prompt: "O que a Lena disse?",
         options: ["Que é da Alemanha e perguntou a sua profissão", "Que mora no Brasil e perguntou a sua idade", "Que é estudante e perguntou o seu nome"], answer: 0,
         explain: "<i>Ich komme aus Deutschland</i> = sou da Alemanha. <i>Was machst du beruflich?</i> = o que você faz (profissão)."},
        {type: "build", kind: "Construa a resposta", dialog: [["Lena", "Was machst du beruflich?"]],
         prompt: "Responda como a Ana: “Eu sou estudante.”", words: ["Ich", "bin", "Studentin.", "eine", "habe", "mache"],
         answer: "Ich bin Studentin.",
         explain: "Em alemão, profissão vem <b>sem artigo</b>: <i>Ich bin Studentin</i>, e não <i>Ich bin eine Studentin</i>."},
        {type: "choice", kind: "Continue a conversa", dialog: [["Lena", "Es war schön, dich kennenzulernen!"]],
         prompt: "Como você encerra a conversa?", options: ["Gleichfalls! Bis später!", "Guten Morgen!", "Ich komme aus Brasilien."], answer: 0,
         explain: "<b>Gleichfalls</b> devolve a gentileza e <b>Bis später</b> encerra. (Igualmente! Até mais!)"}
      ]
    }
  ]
};

const DE_UPCOMING = [
  {title: "Alltag", pt: "Rotina, horas e dias da semana", level: "Básico", emoji: "☀️"},
  {title: "Unterwegs", pt: "Café, compras e pedir o caminho", level: "Básico", emoji: "🛍️"}
];
