/* =========================================================
   BLOCO 1 — FIRST CONVERSATIONS (Iniciante)
   Cada fase: cartão "Aprenda" (reading) + 3 desafios.
   Blocos da leitura: {say:[personagem, en], pt} | {ex, pt} | {tip} | {p} | {dialog:[[quem, en], ...]}
   Campos da pergunta: kind (rótulo), situation, dialog, sentence, prompt, explain (aceita HTML)
   ========================================================= */
const BLOCK1 = {
  id: "b1", title: "First Conversations", pt: "Primeiras conversas", level: "Iniciante", emoji: "👋",
  goal: "Cumprimentar, se apresentar e manter uma conversa curta com alguém que você acabou de conhecer.",
  phases: [
    {
      id: "b1p1", title: "Greetings", pt: "Cumprimentos", emoji: "👋",
      goal: "Cumprimentar alguém e responder a “How are you?”",
      reading: [
        {say: ["@", "Hi! Let's start with the first thing everyone says: hello!"], pt: "Oi! Vamos começar pela primeira coisa que todo mundo diz: olá!"},
        {ex: "Hi!", pt: "Oi! (o mais comum no dia a dia)"},
        {ex: "Good morning!", pt: "Bom dia!"},
        {ex: "How are you?", pt: "Como você está?"},
        {ex: "I'm good, thanks. And you?", pt: "Estou bem, obrigado(a). E você?"},
        {ex: "See you later!", pt: "Até mais!"},
        {tip: "💡 <b>Good night</b> é só para se despedir ou ir dormir. Para cumprimentar à noite, use <b>Good evening</b> ou simplesmente <b>Hi</b>."}
      ],
      questions: [
        {type: "choice", kind: "Tradução", prompt: "Como se diz “Bom dia!” em inglês?",
         options: ["Good morning!", "Good night!", "Good day, morning!"], answer: 0,
         explain: "<b>Good morning</b> é o cumprimento natural pela manhã. <b>Good night</b> é despedida."},
        {type: "choice", kind: "Responda na conversa", situation: "Você chega na cafeteria. A Maya está no balcão.",
         dialog: [["Maya", "Hi! How are you?"]], prompt: "Qual é uma resposta natural?",
         options: ["I'm good, thanks. And you?", "I'm 25 years.", "Good night, Maya."], answer: 0,
         explain: "Você responde e devolve a pergunta com <b>And you?</b>, como os nativos fazem. (Estou bem, obrigado. E você?)"},
        {type: "choice", kind: "Encontre o erro", situation: "São 21h e você está chegando a um jantar com amigos.",
         prompt: "Qual cumprimento NÃO combina com a situação?",
         options: ["Hi, everyone!", "Good evening!", "Good night!"], answer: 2,
         explain: "<b>Good night</b> é para se despedir ou ao ir dormir, não para chegar. Na chegada: <i>Hi</i> ou <i>Good evening</i>."}
      ]
    },
    {
      id: "b1p2", title: "Introducing Yourself", pt: "Apresentações", emoji: "🙋",
      goal: "Dizer seu nome, de onde você é e sua idade",
      reading: [
        {say: ["@", "Now let's introduce ourselves. Look how Maya does it:"], pt: "Agora vamos nos apresentar. Veja como a Maya faz:"},
        {dialog: [["Maya", "Hi! I'm Maya. I'm from Canada. Nice to meet you!"]]},
        {ex: "My name is Ana.", pt: "Meu nome é Ana."},
        {ex: "I'm Ana.", pt: "Eu sou a Ana. (mais comum na conversa)"},
        {ex: "Nice to meet you!", pt: "Prazer em te conhecer!"},
        {ex: "Nice to meet you too!", pt: "O prazer é meu!"},
        {ex: "I'm from Brazil.", pt: "Eu sou do Brasil."},
        {ex: "I'm 25 years old.", pt: "Tenho 25 anos."},
        {tip: "💡 Idade usa o verbo <b>be</b>: <i>I'm 25</i>. Nunca <i>I have 25 years</i>."}
      ],
      questions: [
        {type: "build", kind: "Monte a frase", situation: "Alguém acabou de se apresentar para você.",
         prompt: "Monte em inglês: “Prazer em te conhecer!”", words: ["Nice", "to", "meet", "you!", "know", "have"],
         answer: "Nice to meet you!",
         explain: "<b>Nice to meet you</b> é a frase padrão ao conhecer alguém. Aqui não se usa <i>know</i>."},
        {type: "choice", kind: "Encontre o erro", prompt: "Qual frase está ERRADA?",
         options: ["I'm 30 years old.", "I have 30 years.", "I'm 30."], answer: 1,
         explain: "Idade em inglês usa <b>be</b>: <i>I'm 30</i>. “I have 30 years” é tradução literal do português."},
        {type: "choice", kind: "Responda na conversa", situation: "Primeiro dia no trabalho novo.",
         dialog: [["Leo", "Hi, I'm Leo. Nice to meet you!"]], prompt: "Qual é a melhor resposta?",
         options: ["Nice to meet you too! I'm Ana.", "Yes, I meet you.", "Me too name is Ana."], answer: 0,
         explain: "<b>Nice to meet you too</b> devolve a gentileza, e você já se apresenta. (Prazer também! Sou a Ana.)"}
      ]
    },
    {
      id: "b1p3", title: "Asking Questions", pt: "Fazendo perguntas", emoji: "❓",
      goal: "Fazer as 4 perguntas básicas para conhecer alguém",
      reading: [
        {say: ["@", "A good conversation goes both ways. Ask questions!"], pt: "Uma boa conversa é de ida e volta. Faça perguntas!"},
        {ex: "What's your name?", pt: "Qual é o seu nome?"},
        {ex: "Where are you from?", pt: "De onde você é?"},
        {ex: "What do you do?", pt: "O que você faz? (profissão)"},
        {ex: "How old are you?", pt: "Quantos anos você tem?"},
        {tip: "💡 <b>What do you do?</b> pergunta a profissão. Para “o que você está fazendo agora?”, use <b>What are you doing?</b>"}
      ],
      questions: [
        {type: "match", kind: "Associe", prompt: "Ligue cada pergunta à resposta certa",
         pairs: [["What's your name?", "I'm Ana."], ["Where are you from?", "I'm from Brazil."], ["What do you do?", "I'm a nurse."], ["How old are you?", "I'm 28."]],
         explain: "Cada pergunta pede uma informação: nome, origem, profissão e idade."},
        {type: "choice", kind: "Complete a frase", prompt: "Complete a pergunta", sentence: "___ are you from?",
         options: ["Where", "What", "How"], answer: 0,
         explain: "<b>Where</b> = onde. <i>Where are you from?</i> = De onde você é?"},
        {type: "choice", kind: "Interprete", dialog: [["Maya", "So, what do you do?"]], prompt: "O que a Maya quer saber?",
         options: ["Qual é a sua profissão", "O que você está fazendo agora", "Do que você gosta de fazer"], answer: 0,
         explain: "<b>What do you do?</b> é o jeito comum de perguntar a profissão. Resposta: <i>I'm a teacher</i>, <i>I work in sales</i>…"}
      ]
    },
    {
      id: "b1p4", title: "Everyday Expressions", pt: "Expressões do dia a dia", emoji: "🙏",
      goal: "Agradecer, pedir licença e pedir para repetir",
      reading: [
        {say: ["@", "These little phrases make you sound polite and natural."], pt: "Essas frases curtinhas fazem você soar educado e natural."},
        {ex: "Thanks!", pt: "Obrigado(a)!"},
        {ex: "You're welcome.", pt: "De nada."},
        {ex: "Excuse me.", pt: "Com licença. (antes de pedir passagem ou chamar alguém)"},
        {ex: "Sorry!", pt: "Desculpa! (depois de um esbarrão ou erro)"},
        {ex: "Could you repeat that, please?", pt: "Pode repetir, por favor?"},
        {ex: "No problem.", pt: "Sem problema."}
      ],
      questions: [
        {type: "choice", kind: "Situação", situation: "Você precisa passar por alguém em um corredor estreito.",
         prompt: "O que você diz?", options: ["Excuse me.", "Sorry me.", "Thanks you."], answer: 0,
         explain: "<b>Excuse me</b> pede licença <i>antes</i>. <b>Sorry</b> é para depois de esbarrar. “Sorry me” e “Thanks you” não existem."},
        {type: "choice", kind: "Responda na conversa", dialog: [["Você", "Thank you so much!"]],
         prompt: "O que a Maya responde, naturalmente?", options: ["You're welcome!", "Thank you too!", "Yes, please."], answer: 0,
         explain: "<b>You're welcome</b> = de nada. Também se ouve muito <i>No problem</i>."},
        {type: "build", kind: "Monte a frase", situation: "Você não entendeu o que a pessoa falou.",
         prompt: "Monte: “Pode repetir, por favor?”", words: ["Could", "you", "repeat", "that,", "please?", "me", "do"],
         answer: "Could you repeat that, please?",
         explain: "Pedir para repetir é normal, até entre nativos! Também vale: <i>Sorry, could you say that again?</i>"}
      ]
    },
    {
      id: "b1p5", title: "Let's Talk!", pt: "Vamos conversar!", emoji: "💬",
      goal: "Acompanhar uma conversa curta do começo ao fim",
      reading: [
        {say: ["@", "Time to put it all together. Here's Ana meeting Maya at a coffee shop."], pt: "Hora de juntar tudo. Aqui a Ana conhece a Maya numa cafeteria."},
        {dialog: [["Maya", "Hi! I'm Maya. What's your name?"], ["Você", "Hi, Maya! I'm Ana. Nice to meet you."], ["Maya", "Nice to meet you too! Where are you from?"], ["Você", "I'm from Brazil. And you?"], ["Maya", "I'm from Canada. What do you do?"], ["Você", "I'm a student."], ["Maya", "Cool! See you later!"]]},
        {tip: "💡 Repare: depois de responder, a Ana devolve a pergunta com <b>And you?</b> É assim que a conversa continua."}
      ],
      questions: [
        {type: "choice", kind: "Interprete o diálogo", dialog: [["Maya", "I'm from Canada. What do you do?"]],
         prompt: "O que a Maya disse?",
         options: ["Que é do Canadá e perguntou a sua profissão", "Que mora no Brasil e perguntou a sua idade", "Que é estudante e perguntou o seu nome"], answer: 0,
         explain: "<i>I'm from Canada</i> = sou do Canadá. <i>What do you do?</i> = o que você faz (profissão)."},
        {type: "build", kind: "Construa a resposta", dialog: [["Maya", "What do you do?"]],
         prompt: "Responda: “Eu sou estudante.”", words: ["I'm", "a", "student.", "an", "am", "do"],
         answer: "I'm a student.",
         explain: "Profissão usa <b>a/an</b>: I'm <b>a</b> student, I'm <b>an</b> engineer."},
        {type: "choice", kind: "Continue a conversa", dialog: [["Maya", "It was nice talking to you!"]],
         prompt: "Como você encerra a conversa?", options: ["You too! See you later!", "Good morning!", "I'm from Brazil."], answer: 0,
         explain: "<b>You too!</b> devolve a gentileza e <b>See you later!</b> encerra. (Igualmente! Até mais!)"}
      ]
    }
  ]
};

const UPCOMING = [
  {title: "Daily Life", pt: "Rotina, trabalho, estudos e hobbies", level: "Básico", emoji: "☀️"},
  {title: "Out and About", pt: "Restaurantes, lojas e pedir informação", level: "Básico", emoji: "🛍️"},
  {title: "Travel Talk", pt: "Aeroporto, hotel e imprevistos", level: "Intermediário", emoji: "✈️"},
  {title: "Real Opinions", pt: "Opinar, concordar e argumentar", level: "Avançado", emoji: "🗣️"}
];
