/* =========================================================
   MASCOTES — configuração central
   Para adicionar um mascote: inclua um item em MASCOTS (paleta + mensagens)
   e o desenho dele em mascot-art.js (CH). Expressões ficam em MOODS e
   acessórios em ACCESSORIES, no mesmo arquivo.
   ========================================================= */
const MASCOTS = {
  dino: {
    name: "Dino", species: "dino", speciesPt: "Dinossauro", colorPt: "Verde",
    personality: "Corajoso e cheio de energia. Comemora tudo com um rugido.",
    pal: {body:"#7CC28E", belly:"#E2F2E6", dark:"#4E9A64", accent:"#2A7346", accentD:"#1F5A36", soft:"#E8F3EB"},
    msgs: {
      welcome:  [["Roar! Ready for today's English?","Roar! Pronto para o inglês de hoje?"],["Hey, partner! Let's do this!","E aí, parceiro! Bora nessa!"],["Big steps today. Let's go!","Passos grandes hoje. Vamos!"]],
      happy:    [["Roar! That's right!","Roar! Isso mesmo!"],["Stomp! Nailed it!","Pisou firme! Acertou!"],["Dino-mite answer!","Resposta dino-mite!"]],
      oops:     [["Oops! Even dinos trip sometimes.","Opa! Até dinossauro tropeça às vezes."],["No worries. We'll get it next time!","Tranquilo. Na próxima a gente acerta!"],["Rawr... almost! Read the tip.","Rawr... quase! Lê a dica."]],
      excited:  [["Roar! Another English challenge completed!","Roar! Mais um desafio de inglês concluído!"],["Phase done! You're unstoppable!","Fase vencida! Ninguém te para!"],["That was a big step!","Esse foi um passo grande!"]],
      celebrate:[["ROOOAR! A whole block done!","ROOOAR! Um bloco inteiro concluído!"],["Legend! Time to celebrate!","Lenda! Hora de comemorar!"]],
      encourage:[["Five more done! Keep stomping!","Mais cinco feitos! Segue firme!"],["You're stronger in English every day.","Você fica mais forte no inglês a cada dia."],["Keep going. I'm right behind you!","Continua. Tô logo atrás de você!"]]
    }
  },
  lumi: {
    name: "Lumi", species: "lumi", speciesPt: "Ser de luz", colorPt: "Lilás",
    personality: "Calma e gentil. Te ajuda a aprender sem pressa.",
    pal: {body:"#C4ADE3", belly:"#F3ECFB", dark:"#9B7DC6", accent:"#76539F", accentD:"#533A73", soft:"#EFE9F6"},
    msgs: {
      welcome:  [["Hello, friend. Let's learn calmly today.","Olá, amigo. Vamos aprender com calma hoje."],["Nice to see you again.","Que bom te ver de novo."],["One small step at a time.","Um passinho de cada vez."]],
      happy:    [["Lovely. That's correct.","Que lindo. Está certo."],["Smooth and natural.","Suave e natural."],["See? You know this.","Viu? Você sabe isso."]],
      oops:     [["It's okay. Take a breath and read the tip.","Tudo bem. Respira e lê a dica."],["Mistakes help us learn.","Os erros ajudam a gente a aprender."],["Gently now. You'll see it again.","Com calma. Você vai ver de novo."]],
      excited:  [["Phase complete. I'm proud of you.","Fase concluída. Tenho orgulho de você."],["Beautiful work today.","Lindo trabalho hoje."],["Calm and steady wins.","Com calma e constância se vence."]],
      celebrate:[["A whole block! What a journey.","Um bloco inteiro! Que jornada."],["You did it. Enjoy this moment.","Você conseguiu. Aproveite o momento."]],
      encourage:[["Five exercises done. You're doing great.","Cinco exercícios feitos. Você está indo muito bem."],["Slow is fine. Keep going.","Devagar está ótimo. Continue."],["Every answer brings you closer.","Cada resposta te deixa mais perto."]]
    }
  },
  foxy: {
    name: "Foxy", species: "fox", speciesPt: "Raposa", colorPt: "Laranja",
    personality: "Esperta e bem-humorada. Adora uma pegadinha.",
    pal: {body:"#F0A05A", belly:"#FFF4E8", dark:"#D07A35", accent:"#AE520E", accentD:"#7E3B0A", soft:"#FAEDE1"},
    msgs: {
      welcome:  [["Hey there, smart one. Ready?","E aí, espertinho. Pronto?"],["Let's outsmart some English today.","Vamos dar um drible no inglês hoje."],["I've got a good feeling about today.","Tô com um bom pressentimento sobre hoje."]],
      happy:    [["Clever! That's it.","Esperto! É isso."],["Sharp answer!","Resposta afiada!"],["You saw right through it.","Você matou a charada."]],
      oops:     [["Tricky one, huh? Now you know the trick.","Essa era pegadinha, né? Agora você sabe o truque."],["Even foxes miss sometimes.","Até raposa erra às vezes."],["Smart people learn from slips.","Gente esperta aprende com os deslizes."]],
      excited:  [["Phase done. Too easy for you!","Fase concluída. Fácil demais pra você!"],["Nicely played!","Bem jogado!"],["Another one in the bag.","Mais uma no papo."]],
      celebrate:[["A full block? Now that's clever.","Um bloco inteiro? Isso que é esperteza."],["Brilliant! Take a bow.","Brilhante! Pode agradecer à plateia."]],
      encourage:[["You're getting smarter. Keep going!","Você está ficando mais esperto. Continue!"],["Five down. Your brain is warming up.","Cinco feitos. Seu cérebro está esquentando."],["Stay sharp. The next one is yours.","Fica ligado. A próxima é sua."]]
    }
  },
  miko: {
    name: "Miko", species: "meerkat", speciesPt: "Suricato", colorPt: "Azul",
    personality: "Curioso e atento. Repara em cada detalhe.",
    pal: {body:"#8DB8E3", belly:"#E8F1FB", dark:"#5E8FC0", accent:"#2C6699", accentD:"#1D486E", soft:"#E6EEF7"},
    msgs: {
      welcome:  [["Ooh, you're here! What will we learn today?","Ooh, você chegou! O que vamos aprender hoje?"],["I'm on the lookout. Let's learn!","Tô de vigia. Vamos aprender!"],["Curious minds learn faster!","Mentes curiosas aprendem mais rápido!"]],
      happy:    [["Ooh, good eye!","Ooh, bom olho!"],["I noticed that. Perfect!","Eu reparei. Perfeito!"],["Yes! You spotted it!","Isso! Você percebeu!"]],
      oops:     [["Hmm, interesting! Look at the tip.","Hmm, interessante! Olha a dica."],["Now we know something new!","Agora a gente sabe algo novo!"],["Let's look closer next time.","Vamos olhar com mais atenção na próxima."]],
      excited:  [["Phase complete! What's next?","Fase concluída! Qual a próxima?"],["Wow, you learned a lot!","Uau, você aprendeu muito!"],["I'm taking notes on your progress!","Tô anotando seu progresso!"]],
      celebrate:[["A whole block! Everyone, look!","Um bloco inteiro! Gente, olha isso!"],["Amazing! I can't stop jumping!","Incrível! Não consigo parar de pular!"]],
      encourage:[["Five done! You're paying great attention.","Cinco feitos! Você está prestando muita atenção."],["Curiosity is your superpower.","A curiosidade é o seu superpoder."],["Keep exploring. You're doing well!","Continue explorando. Você está indo bem!"]]
    }
  },
  bloop: {
    name: "Bloop", species: "frog", speciesPt: "Sapo", colorPt: "Turquesa",
    personality: "Saltitante e bobo. Transforma tudo em festa.",
    pal: {body:"#6CCFC4", belly:"#E3F6F3", dark:"#3FA79C", accent:"#18736F", accentD:"#10504D", soft:"#E2F2F0"},
    msgs: {
      welcome:  [["Boing! Hi hi! Let's hop in!","Boing! Oi oi! Bora pular nessa!"],["Ribbit! English time!","Ribbit! Hora do inglês!"],["Hop, hop! Ready?","Pula, pula! Pronto?"]],
      happy:    [["Boing! That was a great answer!","Boing! Que resposta ótima!"],["Ribbit! Correct!","Ribbit! Certo!"],["Big hop forward!","Um pulão pra frente!"]],
      oops:     [["Splash! Missed the lily pad.","Tchibum! Errei a folha."],["Oops! Let's hop again later.","Opa! Depois a gente pula de novo."],["Ribbit... almost!","Ribbit... quase!"]],
      excited:  [["Phase done! Boing boing!","Fase concluída! Boing boing!"],["You hopped all the way!","Você pulou até o fim!"],["Ribbit-tastic!","Ribbit-ástico!"]],
      celebrate:[["BOING! A whole block! Pond party!","BOING! Um bloco inteiro! Festa na lagoa!"],["Highest jump ever!","O pulo mais alto da história!"]],
      encourage:[["Five hops done! Keep bouncing!","Cinco pulos feitos! Continua pulando!"],["You're getting so good at this!","Você está ficando muito bom nisso!"],["Hop by hop, you'll get there.","Pulo a pulo, você chega lá."]]
    }
  },
  roki: {
    name: "Roki", species: "raccoon", speciesPt: "Guaxinim", colorPt: "Coral",
    personality: "Brincalhão e travesso. Ri dos erros junto com você.",
    pal: {body:"#EF8E80", belly:"#FDEDEA", dark:"#C9665A", accent:"#B4473A", accentD:"#823227", soft:"#F8E8E4"},
    msgs: {
      welcome:  [["Psst! Ready for some English fun?","Psiu! Pronto pra se divertir com inglês?"],["Hey you! I saved you a seat.","Ei você! Guardei um lugar pra você."],["Let's sneak some English into your day.","Vamos colocar um pouco de inglês no seu dia."]],
      happy:    [["Ha! You got it!","Rá! Acertou!"],["Sneaky good answer!","Resposta boa demais!"],["Not bad at all!","Nada mal!"]],
      oops:     [["Haha! Even mistakes make you smarter!","Haha! Até os erros te deixam mais esperto!"],["Oops! I won't tell anyone.","Opa! Não conto pra ninguém."],["That one tricked us both!","Essa enganou nós dois!"]],
      excited:  [["Phase complete! Look at you go!","Fase concluída! Olha você mandando bem!"],["Treasure found: new English!","Tesouro encontrado: inglês novo!"],["Too good! Next one?","Bom demais! Próxima?"]],
      celebrate:[["A whole block! Let's party!","Um bloco inteiro! Bora comemorar!"],["Best heist ever: a full block!","Melhor golpe da história: um bloco inteiro!"]],
      encourage:[["Five down! You're on a roll.","Cinco feitos! Você está embalado."],["Keep going. I've got snacks.","Continua. Eu tenho lanchinhos."],["You're better at this than you think.","Você é melhor nisso do que pensa."]]
    }
  }
};

/* mensagens sem repetir em sequência */
const _bags = {};
function mascotLine(id, mood){
  const key = id+":"+mood, list = MASCOTS[id].msgs[mood] || MASCOTS[id].msgs.encourage;
  if (!_bags[key] || !_bags[key].length){ _bags[key] = list.map((_,i)=>i).sort(()=>Math.random()-.5); }
  return list[_bags[key].pop()];
}

/* aplica o tema do mascote nas variáveis de cor do app */
function applyTheme(id){
  const p = MASCOTS[id] ? MASCOTS[id].pal : {accent:"#4A4740", accentD:"#2E2C27", soft:"#EEEBE5", body:"#BDB7AC"};
  const r = document.documentElement.style;
  r.setProperty("--accent", p.accent); r.setProperty("--accent-d", p.accentD);
  r.setProperty("--soft", p.soft); r.setProperty("--mbody", p.body);
  const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = "#F7F5F0";
}
