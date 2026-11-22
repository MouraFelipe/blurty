/* =========================================================
   BLOCO 3 — OUT AND ABOUT (Básico)
   Mesmo formato do Bloco 1 (ver src/block1.js).
   ========================================================= */
const BLOCK3 = {
  id: "b3", title: "Out and About", pt: "Restaurantes, lojas e pedir informação", level: "Básico", emoji: "🛍️",
  goal: "Pedir comida, fazer compras e pedir informação na rua.",
  doneMsg: "Agora você consegue pedir num café ou restaurante, perguntar preço e tamanho nas lojas e pedir e entender o caminho na rua.",
  phases: [
    {
      id: "b3p1", title: "At the Café", pt: "No café", emoji: "☕",
      goal: "Pedir algo para comer ou beber num café",
      reading: [
        {say: ["@", "Hungry? Let's order something at a café!"], pt: "Com fome? Vamos pedir algo num café!"},
        {dialog: [["Barista", "Hi! What can I get you?"], ["Maya", "Can I get a coffee, please?"], ["Barista", "Sure! For here or to go?"], ["Maya", "To go, please."]]},
        {ex: "Can I get a coffee, please?", pt: "Pode me ver um café, por favor?"},
        {ex: "I'd like a sandwich.", pt: "Eu queria um sanduíche."},
        {ex: "For here or to go?", pt: "Para comer aqui ou para levar?"},
        {ex: "To go, please.", pt: "Para levar, por favor."},
        {ex: "That's all, thanks.", pt: "É só isso, obrigado(a)."},
        {tip: "💡 Para pedir, use <b>Can I get…?</b> ou <b>I'd like…</b>. <i>I want…</i> soa direto demais com quem está te atendendo."},
        {tip: "🇬🇧 No Reino Unido, a pergunta costuma ser <b>Eat in or take away?</b> e a resposta, <b>Take away, please.</b> Nos EUA: <i>For here or to go?</i> / <i>To go, please.</i>"}
      ],
      questions: [
        {type: "choice", kind: "Tradução", prompt: "Como se diz “Para levar, por favor.”?",
         options: ["To go, please.", "To take, please.", "For bring, please."], answer: 0,
         explain: "<b>To go</b> = para levar. <b>For here</b> = para comer aqui. No Reino Unido também se diz <b>take away</b>, mas <i>to take</i> sozinho não se usa."},
        {type: "choice", kind: "Responda na conversa", dialog: [["Barista", "What can I get you?"]],
         prompt: "Qual é o pedido mais natural e educado?",
         options: ["Can I get a latte, please?", "I want latte.", "Give me a latte."], answer: 0,
         explain: "<b>Can I get…, please?</b> é o jeito natural de pedir. <i>Give me</i> e <i>I want</i> soam rudes no balcão."},
        {type: "build", kind: "Monte a frase", situation: "O atendente pergunta se você quer mais alguma coisa.",
         prompt: "Monte: “É só isso, obrigado.”", words: ["That's", "all,", "thanks.", "everything", "is", "only"],
         answer: "That's all, thanks.",
         explain: "<b>That's all</b> = é só isso. Jeito curto e natural de fechar o pedido."}
      ]
    },
    {
      id: "b3p2", title: "At the Restaurant", pt: "No restaurante", emoji: "🍝",
      goal: "Pedir mesa, fazer o pedido e pedir a conta",
      reading: [
        {say: ["@", "Now a real restaurant: from the table to the check."], pt: "Agora um restaurante de verdade: da mesa até a conta."},
        {ex: "A table for two, please.", pt: "Uma mesa para dois, por favor."},
        {ex: "Can I see the menu?", pt: "Posso ver o cardápio?"},
        {ex: "I'll have the chicken.", pt: "Eu vou querer o frango."},
        {ex: "Could we get some water?", pt: "Pode trazer uma água para a gente?"},
        {ex: "Can we get the check, please?", pt: "A conta, por favor."},
        {tip: "💡 Na hora de pedir o prato, o natural é <b>I'll have…</b> (vou querer…). Nos EUA a conta é <b>the check</b>; 🇬🇧 no Reino Unido, <b>the bill</b>: <i>Can we have the bill, please?</i>"}
      ],
      questions: [
        {type: "choice", kind: "Complete a frase", prompt: "Complete a frase", sentence: "I'll ___ the pasta, please.",
         options: ["have", "take of", "eat the"], answer: 0,
         explain: "<b>I'll have…</b> = vou querer… É o jeito mais comum de fazer o pedido."},
        {type: "match", kind: "Associe", prompt: "Ligue cada palavra ao significado",
         pairs: [["menu", "cardápio"], ["check", "conta"], ["table", "mesa"], ["waiter", "garçom"]],
         explain: "Palavras básicas do restaurante. Lembre: a conta é <b>check</b> (EUA) ou <b>bill</b> (Reino Unido)."},
        {type: "choice", kind: "Responda na conversa", situation: "Você terminou de comer e quer pagar.",
         dialog: [["Waiter", "How was everything?"]], prompt: "O que você diz?",
         options: ["It was great! Can we get the check, please?", "It was great! Can we get the count, please?", "I was great! The account, please."], answer: 0,
         explain: "A conta é <b>the check</b> (ou <i>the bill</i>). <i>Count</i> e <i>account</i> não servem aqui."}
      ]
    },
    {
      id: "b3p3", title: "Shopping", pt: "Compras", emoji: "👕",
      goal: "Perguntar preço e tamanho e pedir para provar",
      reading: [
        {say: ["@", "Shopping time! Let's ask about prices and sizes."], pt: "Hora das compras! Vamos perguntar preço e tamanho."},
        {dialog: [["Clerk", "Hi! Can I help you?"], ["Leo", "I'm just looking, thanks."]]},
        {ex: "How much is this?", pt: "Quanto custa isto?"},
        {ex: "How much are these shoes?", pt: "Quanto custam estes sapatos?"},
        {ex: "Do you have this in medium?", pt: "Tem este no tamanho M?"},
        {ex: "Can I try it on?", pt: "Posso provar?"},
        {ex: "It's too small.", pt: "Está pequeno demais."},
        {tip: "💡 <b>How much is</b> para uma coisa, <b>How much are</b> para várias (<i>shoes</i>, <i>jeans</i>). E quando o vendedor te aborda e você só está olhando: <b>I'm just looking, thanks.</b>"},
        {tip: "🇬🇧 Loja: <b>store</b> (EUA) ou <b>shop</b> (Reino Unido). Calça: <b>pants</b> (EUA) ou <b>trousers</b> (Reino Unido), porque lá <i>pants</i> é cueca!"}
      ],
      questions: [
        {type: "choice", kind: "Complete a frase", prompt: "Complete a frase", sentence: "How much ___ these jeans?",
         options: ["are", "is", "does"], answer: 0,
         explain: "<b>Jeans</b> (e <i>shoes</i>, <i>pants</i>) é plural em inglês: <i>How much <b>are</b> these jeans?</i>"},
        {type: "choice", kind: "Responda na conversa", situation: "Você só está dando uma olhada.",
         dialog: [["Clerk", "Hi! Can I help you?"]], prompt: "O que você responde?",
         options: ["I'm just looking, thanks.", "I'm just seeing, thanks.", "No, I don't need you."], answer: 0,
         explain: "<b>I'm just looking</b> = só estou olhando. É educado e todo mundo entende."},
        {type: "build", kind: "Monte a frase", situation: "Você gostou de uma camiseta e quer experimentar.",
         prompt: "Monte: “Posso provar?”", words: ["Can", "I", "try", "it", "on?", "prove", "in"],
         answer: "Can I try it on?",
         explain: "<b>Try on</b> = provar (roupa). <i>Prove</i> é “comprovar”, outra coisa."}
      ]
    },
    {
      id: "b3p4", title: "Which Way?", pt: "Qual caminho?", emoji: "🧭",
      goal: "Pedir e entender o caminho na rua",
      reading: [
        {say: ["@", "Lost in the city? Let's ask for directions."], pt: "Perdido na cidade? Vamos pedir informação."},
        {ex: "Excuse me, where's the subway station?", pt: "Com licença, onde fica a estação de metrô?"},
        {ex: "How do I get to the museum?", pt: "Como eu chego ao museu?"},
        {ex: "Go straight ahead.", pt: "Siga em frente."},
        {ex: "Turn left at the corner.", pt: "Vire à esquerda na esquina."},
        {ex: "It's next to the bank.", pt: "Fica ao lado do banco."},
        {ex: "It's across from the park.", pt: "Fica em frente ao parque (do outro lado da rua)."},
        {tip: "💡 Comece com <b>Excuse me</b> para chamar a atenção de alguém. <b>Across from</b> = em frente, do outro lado da rua."},
        {tip: "🇬🇧 No Reino Unido, metrô é <b>the underground</b> (em Londres, <b>the Tube</b>) e “em frente” é <b>opposite</b>: <i>It's opposite the park.</i>"}
      ],
      questions: [
        {type: "match", kind: "Associe", prompt: "Ligue cada expressão ao significado",
         pairs: [["turn left", "vire à esquerda"], ["turn right", "vire à direita"], ["go straight", "siga em frente"], ["next to", "ao lado de"]],
         explain: "Com essas quatro você já entende a maioria das direções."},
        {type: "choice", kind: "Interprete", dialog: [["Woman", "Go straight and turn right. It's across from the park."]],
         prompt: "Para onde você vai?",
         options: ["Em frente, depois à direita; fica em frente ao parque", "Em frente, depois à esquerda; fica dentro do parque", "À direita, depois em frente; fica ao lado do parque"], answer: 0,
         explain: "<b>Turn right</b> = vire à direita. <b>Across from the park</b> = em frente ao parque, do outro lado da rua."},
        {type: "choice", kind: "Tradução", prompt: "Como se diz “Como eu chego ao museu?”",
         options: ["How do I get to the museum?", "How I arrive in the museum?", "Where I go to museum?"], answer: 0,
         explain: "<b>How do I get to…?</b> é a pergunta padrão para pedir caminho. <b>Get to</b> = chegar a."}
      ]
    },
    {
      id: "b3p5", title: "Let's Talk!", pt: "Vamos conversar!", emoji: "💬",
      goal: "Pedir comida e informação numa conversa do começo ao fim",
      reading: [
        {say: ["@", "Let's put it all together. You're at a food truck in New York."], pt: "Vamos juntar tudo. Você está num food truck em Nova York."},
        {dialog: [["Seller", "Hi there! What can I get you?"], ["Você", "Can I get a hot dog and a soda, please?"], ["Seller", "Sure! For here or to go?"], ["Você", "To go. How much is it?"], ["Seller", "That's eight dollars."], ["Você", "Here you go. Excuse me, how do I get to Central Park?"], ["Seller", "Go straight for two blocks. You can't miss it!"]]},
        {tip: "💡 <b>Here you go</b> = aqui está (ao entregar algo). <b>Two blocks</b> = dois quarteirões. <b>You can't miss it!</b> = não tem erro!"}
      ],
      questions: [
        {type: "choice", kind: "Interprete o diálogo", dialog: [["Seller", "That's eight dollars."]],
         prompt: "Quanto custou?", options: ["8 dólares", "18 dólares", "80 dólares"], answer: 0,
         explain: "<b>Eight</b> = 8. Cuidado: <i>eighteen</i> = 18 e <i>eighty</i> = 80."},
        {type: "build", kind: "Construa a resposta", dialog: [["Seller", "That's eight dollars."]],
         prompt: "Entregue o dinheiro: “Aqui está.”", words: ["Here", "you", "go.", "stay", "take", "your"],
         answer: "Here you go.",
         explain: "<b>Here you go</b> = aqui está, ao entregar alguma coisa. Também se diz <i>Here you are</i>."},
        {type: "choice", kind: "Continue a conversa", dialog: [["Seller", "Go straight for two blocks. You can't miss it!"]],
         prompt: "Como você encerra a conversa?", options: ["Thanks so much! Have a good one!", "You're welcome!", "Turn left, please."], answer: 0,
         explain: "Agradeça com <b>Thanks so much!</b> e despeça-se com <b>Have a good one!</b> <i>You're welcome</i> é a resposta a um obrigado."}
      ]
    }
  ]
};
