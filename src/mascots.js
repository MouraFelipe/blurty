/* =========================================================
   MASCOTES — configuração central
   Para adicionar um mascote: inclua um item em MASCOTS (paleta + mensagens)
   e, se for uma espécie nova, um desenho em SPECIES.
   Futuro: skins (troca de paleta) e acessórios (camadas em ACCESSORIES).
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
    name: "Lumi", species: "llama", speciesPt: "Lhama", colorPt: "Lilás",
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

/* ----------- desenho (SVG) — partes comuns + traços por espécie ----------- */
const EYES = {default:[[47,64],[73,64]], frog:[[43,40],[77,40]]};
const SPECIES = {
  dino: {back: p=>`
      <path d="M92 92 Q116 96 112 74 Q104 86 90 82Z" fill="${p.body}"/>
      <path d="M40 40 L46 22 L54 36 Z M54 34 L62 16 L70 34 Z M68 36 L76 22 L82 40 Z" fill="${p.dark}"/>`},
  llama: {back: p=>`
      <ellipse cx="42" cy="26" rx="7" ry="18" fill="${p.body}" transform="rotate(-12 42 26)"/>
      <ellipse cx="78" cy="26" rx="7" ry="18" fill="${p.body}" transform="rotate(12 78 26)"/>
      <ellipse cx="42" cy="28" rx="3" ry="11" fill="${p.dark}" opacity=".5" transform="rotate(-12 42 28)"/>
      <ellipse cx="78" cy="28" rx="3" ry="11" fill="${p.dark}" opacity=".5" transform="rotate(12 78 28)"/>`,
    front: p=>`<circle cx="50" cy="40" r="9" fill="${p.belly}"/><circle cx="60" cy="35" r="10" fill="${p.belly}"/><circle cx="70" cy="40" r="9" fill="${p.belly}"/>`},
  fox: {back: p=>`
      <path d="M30 56 L38 16 L60 42 Z" fill="${p.body}"/><path d="M90 56 L82 16 L60 42 Z" fill="${p.body}"/>
      <path d="M36 48 L40 26 L52 42 Z" fill="${p.belly}"/><path d="M84 48 L80 26 L68 42 Z" fill="${p.belly}"/>`,
    front: p=>`<path d="M30 70 Q60 102 90 70 Q78 92 60 92 Q42 92 30 70Z" fill="${p.belly}"/>`},
  meerkat: {back: p=>`<circle cx="24" cy="62" r="8" fill="${p.dark}"/><circle cx="96" cy="62" r="8" fill="${p.dark}"/>`,
    front: p=>`<ellipse cx="47" cy="64" rx="11" ry="12" fill="${p.dark}" opacity=".55"/><ellipse cx="73" cy="64" rx="11" ry="12" fill="${p.dark}" opacity=".55"/>`},
  frog: {back: p=>`<circle cx="43" cy="42" r="15" fill="${p.body}"/><circle cx="77" cy="42" r="15" fill="${p.body}"/>`},
  raccoon: {back: p=>`
      <path d="M90 96 Q120 92 114 66 Q108 78 92 84Z" fill="${p.body}"/>
      <path d="M106 72 l7 4 M100 82 l8 3" stroke="${p.dark}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="36" cy="40" r="12" fill="${p.body}"/><circle cx="84" cy="40" r="12" fill="${p.body}"/>
      <circle cx="36" cy="40" r="6" fill="${p.dark}"/><circle cx="84" cy="40" r="6" fill="${p.dark}"/>`,
    front: p=>`<path d="M28 62 Q32 52 47 54 Q60 58 73 54 Q88 52 92 62 Q88 74 73 72 Q60 68 47 72 Q32 74 28 62Z" fill="${p.dark}" opacity=".75"/>`}
};
/* acessórios: camadas opcionais, prontos para itens cosméticos no futuro */
const ACCESSORIES = {
  partyHat: ()=>`<g class="acc"><path d="M60 4 L48 34 L72 34 Z" fill="#26241F"/><path d="M52 24 L68 24 M50 30 L70 30" stroke="#fff" stroke-width="2" opacity=".6"/><circle cx="60" cy="4" r="4" fill="#fff" stroke="#26241F" stroke-width="2"/></g>`
};

function eyesSVG(mood, pos){
  const ink = "#26241F";
  return pos.map(([x,y],i)=>{
    const wink = mood==="encourage" && i===1;
    if (mood==="happy" || mood==="celebrate" || wink)
      return `<path d="M${x-6} ${y+2} Q${x} ${y-6} ${x+6} ${y+2}" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    if (mood==="oops")
      return i===0 ? `<path d="M${x-5} ${y-4} L${x+4} ${y} L${x-5} ${y+4}" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
                   : `<path d="M${x+5} ${y-4} L${x-4} ${y} L${x+5} ${y+4}" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    const r = mood==="excited" ? 8.5 : 7;
    return `<g class="eye"><circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x+1}" cy="${y+1}" r="${r*.55}" fill="${ink}"/><circle cx="${x+2.5}" cy="${y-1.5}" r="1.6" fill="#fff"/></g>`;
  }).join("");
}
function mouthSVG(mood, sp){
  const ink="#26241F", y = sp==="frog" ? 72 : 80, w = sp==="frog" ? 16 : 9;
  if (mood==="happy" || mood==="celebrate" || mood==="excited")
    return `<path d="M${60-w-2} ${y-2} Q60 ${y+16} ${60+w+2} ${y-2} Z" fill="${ink}"/><path d="M${60-6} ${y+6} Q60 ${y+2} ${60+6} ${y+6} Q60 ${y+11} ${60-6} ${y+6}Z" fill="#E46F6F"/>`;
  if (mood==="oops")
    return `<path d="M${60-w} ${y+3} q4 -5 ${w/2} 0 t${w/2} 0 t${w/2} 0 t${w/2} 0" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  return `<path d="M${60-w} ${y} Q60 ${y+8} ${60+w} ${y}" stroke="${ink}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
}
/* mood: idle | happy | oops | excited | celebrate | welcome | encourage */
function mascotSVG(id, mood="idle", opts={}){
  const m = MASCOTS[id], p = m.pal, sp = SPECIES[m.species];
  const eyes = EYES[m.species==="frog"?"frog":"default"];
  const wave = mood==="welcome" || mood==="encourage";
  const acc = (opts.accessories||[]).concat(mood==="celebrate"?["partyHat"]:[]).map(a=>ACCESSORIES[a]?ACCESSORIES[a](p):"").join("");
  const sparkle = (mood==="excited"||mood==="celebrate") ? `<g class="spark" fill="${p.accent}"><path d="M14 30 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3z"/><path d="M104 18 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2z"/><circle cx="108" cy="50" r="3"/></g>` : "";
  const drop = mood==="oops" ? `<path d="M92 44 q5 8 0 12 q-5 -4 0 -12z" fill="#9CC3E6"/>` : "";
  return `<svg class="msvg mood-${mood}" viewBox="0 0 120 120" role="img" aria-label="${m.name}">
    <g class="whole">
      ${sparkle}
      ${sp.back ? sp.back(p) : ""}
      <ellipse cx="44" cy="108" rx="11" ry="6" fill="${p.dark}"/><ellipse cx="76" cy="108" rx="11" ry="6" fill="${p.dark}"/>
      <ellipse class="arm-l" cx="25" cy="84" rx="8" ry="12" fill="${p.body}" transform="rotate(20 25 84)"/>
      <g class="${wave?"arm-wave":""}" style="transform-origin:92px 80px"><ellipse cx="96" cy="${wave?70:84}" rx="8" ry="12" fill="${p.body}" transform="rotate(${wave?-35:-20} 96 ${wave?70:84})"/></g>
      <ellipse cx="60" cy="72" rx="38" ry="37" fill="${p.body}"/>
      <ellipse cx="60" cy="90" rx="22" ry="16" fill="${p.belly}"/>
      ${sp.front ? sp.front(p) : ""}
      <g class="eyes">${eyesSVG(mood, eyes)}</g>
      ${(mood==="happy"||mood==="excited"||mood==="celebrate"||mood==="welcome") ? `<circle cx="${eyes[0][0]-8}" cy="${eyes[0][1]+13}" r="5" fill="#F29A9A" opacity=".45"/><circle cx="${eyes[1][0]+8}" cy="${eyes[1][1]+13}" r="5" fill="#F29A9A" opacity=".45"/>` : ""}
      ${mouthSVG(mood, m.species)}
      ${drop}${acc}
    </g></svg>`;
}

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
