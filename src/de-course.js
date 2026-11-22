/* =========================================================
   ALEMÃO · dicas, falas do mascote e desafios surpresa
   ========================================================= */

/* dicas para evoluir no alemão (aparecem em ordem, uma por pausa) */
const DE_TIPS = [
  {e:"🗣️", t:"Leia em voz alta", d:"Leia as frases em voz alta. No alemão, quase tudo se lê do jeito que se escreve."},
  {e:"🔊", t:"Ouça e repita", d:"Toque no alto-falante e repita logo depois. Capriche nos sons de “ch”, “ü” e “ö”."},
  {e:"🔠", t:"Substantivo com maiúscula", d:"Em alemão, todo substantivo começa com letra maiúscula: der Tisch, das Haus, die Katze."},
  {e:"📌", t:"Aprenda com o artigo", d:"Decore a palavra junto com o artigo: der Kaffee, die Milch, das Brot. Isso ajuda muito depois."},
  {e:"💭", t:"Pense em alemão", d:"Narre coisas simples na cabeça: “Ich trinke Kaffee”, “Ich gehe zur Arbeit”."},
  {e:"🎬", t:"Legenda em alemão", d:"Assista vídeos curtos com legenda em alemão. Você liga o som que ouve à palavra escrita."},
  {e:"⏱️", t:"Pouco, todo dia", d:"10 minutos todo dia valem mais que 2 horas uma vez por semana. Mantenha a sua sequência 🔥."},
  {e:"💪", t:"Erre sem medo", d:"Errar o artigo é normal até para quem estuda há anos. Blurty it out!"},
  {e:"🔁", t:"Revise o que errou", d:"O que você errou vai para a Revisão. Revisar é o que transforma erro em acerto."}
];

/* falas do mascote quando o idioma é alemão (as mesmas para todos os mascotes) */
const DE_MSGS = {
  welcome:  [["Hallo! Bereit für Deutsch?","Oi! Pronto para o alemão?"],["Los geht's!","Vamos lá!"],["Schön, dich zu sehen!","Que bom te ver!"]],
  happy:    [["Richtig!","Certo!"],["Super!","Show!"],["Genau!","Isso mesmo!"],["Sehr gut!","Muito bem!"]],
  oops:     [["Hoppla! Fast!","Opa! Quase!"],["Kein Problem. Weiter geht's!","Sem problema. Bora continuar!"],["Fehler sind okay!","Errar faz parte!"]],
  sad:      [["Hoppla! Fast!","Opa! Quase!"],["Macht nichts!","Não tem problema!"],["Fehler sind okay!","Errar faz parte!"]],
  excited:  [["Phase geschafft!","Fase concluída!"],["Toll gemacht!","Mandou bem!"],["Weiter so!","Continue assim!"]],
  celebrate:[["Wahnsinn! Ein ganzer Block!","Incrível! Um bloco inteiro!"],["Du bist ein Star!","Você é uma estrela!"]],
  surprise: [["Ein Geschenk! Los geht's!","Um presente! Bora!"],["Eine geheime Aufgabe? Ich bin bereit!","Um desafio secreto? Tô pronto!"]],
  gift:     [["Das Geschenk gehört dir!","O presente é seu!"],["Wie sehe ich aus?","Como eu tô?"]],
  streak:   [["Tag {n}! Super!","Dia {n}! Show!"],["{n} Tage in Folge! Wahnsinn!","{n} dias seguidos! Incrível!"],["{n} Tage! Dein Deutsch wird stärker.","{n} dias! Seu alemão está ficando mais forte."]],
  encourage:[["Weiter so!","Continue assim!"],["Du schaffst das!","Você consegue!"],["Schritt für Schritt.","Passo a passo."],["Nicht zu viel denken. Blurty it out!","Não pensa demais. Solta o alemão!"]]
};

/* desafios surpresa do alemão (prêmios em src/challenges.js) */
const DE_CHALLENGES = [
  {
    id: "de1c1", block: "de1", after: "de1p2", prize: "tyrolean",
    title: "Na, alles klar?", pt: "E aí, tudo certo?",
    reading: [
        {say: ["@", "Psst… hier ist ein Geheimausdruck. Die Deutschen sagen das ständig!"], pt: "Psiu… aqui vai uma expressão secreta. Os alemães falam isso o tempo todo!"},
        {ex: "Na, alles klar?", pt: "E aí, tudo certo? (bem informal)"},
        {ex: "Alles klar!", pt: "Tudo certo! / Beleza!"},
        {tip: "💡 <b>Na?</b> sozinho já é um “e aí?” entre amigos. E <b>Alles klar</b> também serve para dizer “entendi” ou “combinado”."}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", prompt: "O que significa “Na, alles klar?” numa conversa entre amigos?",
       options: ["E aí, tudo certo?", "Está tudo claro na sala?", "Você é claro?"], answer: 0,
       explain: "<b>Na, alles klar?</b> é um cumprimento informal, tipo <i>E aí, tudo certo?</i>"},
      {type: "build", kind: "Expressão secreta", dialog: [["Jonas", "Na, alles klar?"]], prompt: "Responda: “Tudo certo! E com você?”",
       words: ["Alles", "klar!", "Und", "bei", "dir?", "du", "Klar"], answer: "Alles klar! Und bei dir?",
       explain: "<b>Alles klar!</b> (tudo certo) e devolva com <b>Und bei dir?</b> (e com você?)"},
      {type: "choice", kind: "Expressão secreta", situation: "Seu colega avisou o horário da reunião.",
       dialog: [["Jonas", "Das Meeting ist um zehn Uhr."]], prompt: "Como dizer “Entendi, combinado!”?",
       options: ["Alles klar!", "Gute Nacht!", "Wie alt bist du?"], answer: 0,
       explain: "<b>Alles klar</b> também quer dizer “entendi / combinado”."}
    ]
  },
  {
    id: "de1c2", block: "de1", after: "de1p4", prize: "beanie",
    title: "Macht nichts!", pt: "Não tem problema!",
    reading: [
        {say: ["@", "Noch ein Geheimnis: So entschuldigt man sich, und so sagt man, dass alles okay ist."], pt: "Outro segredo: como pedir desculpa e como dizer que está tudo bem."},
        {ex: "Tut mir leid!", pt: "Sinto muito! / Foi mal!"},
        {ex: "Macht nichts!", pt: "Não tem problema! / Deixa pra lá!"},
        {tip: "💡 <b>Entschuldigung</b> é o pedido de desculpas rápido. <b>Tut mir leid</b> mostra que você sente mesmo. A resposta mais comum: <b>Macht nichts!</b>"}
    ],
    questions: [
      {type: "choice", kind: "Expressão secreta", prompt: "O que significa “Macht nichts!”?",
       options: ["Não tem problema!", "Não faça nada!", "Não sei fazer!"], answer: 0,
       explain: "Ao pé da letra é “não faz nada”, mas significa <b>não tem problema</b>."},
      {type: "build", kind: "Expressão secreta", dialog: [["Jonas", "Oh, tut mir leid!"]], prompt: "Responda: “Não tem problema!”",
       words: ["Macht", "nichts!", "nicht", "Mach", "kein"], answer: "Macht nichts!",
       explain: "<b>Macht nichts!</b> é a resposta padrão para um pedido de desculpas."},
      {type: "choice", kind: "Expressão secreta", situation: "Você esbarrou em alguém e derrubou o café dele.",
       prompt: "O que você diz?", options: ["Tut mir leid!", "Macht nichts!", "Alles klar!"], answer: 0,
       explain: "Quem pede desculpa diz <b>Tut mir leid!</b> Quem recebe responde <b>Macht nichts!</b>"}
    ]
  }
];
