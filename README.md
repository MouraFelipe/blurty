# Blurty

Aprenda inglês de conversa jogando: fases curtas, cada uma com um objetivo, e um mascote que acompanha você.

👉 **Jogar:** https://mourafelipe.github.io/blurty/

<img src="qrcode.png" width="240" alt="QR code do Blurty">

## Mascotes
<img src="docs/mascotes.png" alt="Os 6 mascotes do Blurty e suas expressões">

## Como funciona
- **Mascote:** no primeiro acesso você escolhe um companheiro (Dino, Lumi, Foxy, Miko, Bloop ou Roki), cada um com desenho e personalidade próprios. Ele define as cores do app, reage às suas respostas e te incentiva a cada 5 exercícios. Dá para trocar no Perfil sem perder nada.
- **Blocos e fases:** cada bloco tem 5 fases; cada fase tem um objetivo, um cartão "Aprenda" e 3 exercícios.
- **Exercícios:** tradução, completar frase, responder numa conversa, montar frase, situação, encontrar o erro, interpretar diálogo, associar e construir resposta.
- **Progresso:** XP, sequência de dias, taxa de acertos, histórico, conquistas e revisão do que você errou. Fica salvo no navegador.

## Conteúdo atual
- Bloco 1 — First Conversations (iniciante): 5 fases, 15 exercícios.
- Blocos 2 a 5 aparecem como "em breve".

## Editar
- Conteúdo: `src/block1.js` (novos blocos seguem o mesmo formato)
- Mascotes, cores e mensagens: `src/mascots.js`
- Desenho dos mascotes, expressões e acessórios: `src/mascot-art.js`
- App: `src/app.html`
- Gerar o `index.html`: `python3 src/build.py`
