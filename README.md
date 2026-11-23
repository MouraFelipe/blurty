# Blurty

**Blurty it out!** Aprenda inglês e alemão de conversa jogando, sem medo de errar: fases curtas, cada uma com um objetivo, e um mascote que acompanha você.

*To blurt* é soltar as palavras sem pensar demais. No Blurty você se joga, fala sem medo e erra sem medo: errar faz parte de aprender.

👉 **Jogar:** https://mourafelipe.github.io/blurty/

<img src="qrcode.png" width="240" alt="QR code do Blurty">

## App no celular
No site, o Blurty pode ser instalado na tela inicial e abre como app, até sem internet (`manifest.webmanifest`, `sw.js` e ícones `icon-*.png`). No Perfil, o card "Blurty no celular" mostra o botão ou o passo a passo para instalar.

## Mascotes
<img src="docs/mascotes.png" alt="Os 6 mascotes do Blurty e suas expressões">

## Como funciona
- **Idiomas:** 🇺🇸 Inglês e 🇩🇪 Alemão (🇯🇵 Japonês e 🇮🇹 Italiano em breve). No primeiro acesso você escolhe o idioma; depois troca pela bandeira no topo ou no Perfil. Dá para estudar mais de um: o progresso de cada idioma fica salvo, o XP de todos soma no total e fica separado por idioma (`S.xpBy`, pronto para o ranking). Quem já jogava continua no inglês, com tudo como estava.
- **Mascote:** no primeiro acesso você escolhe um companheiro (Dino, Lumi, Foxy, Miko, Bloop ou Roki), cada um com desenho e personalidade próprios. Ele define as cores do app e reage às suas respostas. A cada 5 exercícios há uma pausa que alterna entre incentivo do mascote e uma **dica para evoluir no inglês** (ler em voz alta, ouvir e repetir, pensar em inglês, legenda em inglês etc., lista `TIPS` em `src/app.html`). Dá para trocar no Perfil sem perder nada.
- **Blocos e fases:** cada bloco tem 5 fases; cada fase tem um objetivo, um cartão "Aprenda" e 3 exercícios.
- **Exercícios:** tradução, completar frase, responder numa conversa, montar frase, situação, encontrar o erro, interpretar diálogo, associar e construir resposta.
- **Desafios surpresa:** ao lado do caminho do mapa, como um extra, aparece um 🎁 depois das fases 2 e 4 de cada bloco. Ele é opcional e só mostra o conteúdo ao abrir: uma expressão secreta, 3 exercícios novos sobre ela e 1 revanche de algo que você já errou (se houver). Errando no máximo 1, você ganha um prêmio para o mascote (óculos escuros, coroa, boné, flor, chapéu de chef ou o visual dourado, que deixa o mascote todo dourado) e +50 XP. Os itens ficam no Perfil, em "Personalize o seu mascote". Não vencer também vale: a expressão secreta já foi aprendida e a tentativa dá XP.
- **Teste de domínio e nível:** quando todas as fases de um bloco são concluídas, aparece no fim do bloco o 🎓 Teste de domínio: 10 exercícios do bloco inteiro (2 de cada fase), misturados e sem o cartão "Aprenda". Com 80% de acertos o bloco fica dominado (🏅) e o jogador sobe de nível. O nível só sobe com bloco dominado, não com XP. O teste não trava o próximo bloco.
- **Um bloco novo por dia (🌙):** o próximo bloco só abre no dia seguinte ao que o anterior foi concluído (ex.: terminou o Bloco 1 hoje, o Bloco 2 abre amanhã). Assim o jogador volta todo dia em vez de fazer tudo de uma vez. No mesmo dia ainda dá para fazer o teste de domínio, os desafios e a revisão. Quem já tinha blocos concluídos não perde nada (o dia de conclusão fica em `S.blockAt`).
- **Sequência de dias (🔥):** conta os dias seguidos em que você conclui ao menos uma atividade (fase, revisão ou desafio). No primeiro dia novo, aparece uma comemoração: o mascote faz uma ação própria, com efeito de fogo, uma fala dele e dados reais do seu progresso (recorde, o que você fez hoje, expressões estudadas e quanto falta para a próxima meta).
- **Progresso:** XP, sequência de dias, taxa de acertos, histórico, conquistas e revisão do que você errou. Fica salvo no navegador.

## Conteúdo atual
- Bloco 1 — First Conversations (iniciante): 5 fases, 15 exercícios.
- Bloco 2 — Daily Life (básico): 5 fases, 15 exercícios. Abre no dia seguinte à conclusão do Bloco 1.
- Bloco 3 — Out and About (básico): café, restaurante, compras e pedir o caminho. 5 fases, 16 exercícios. Abre no dia seguinte à conclusão do Bloco 2. Desafios: "It's on me!" (prêmio: chapéu de chef) e "What a steal!" (prêmio: visual dourado).
- Blocos 4 e 5 aparecem como "em breve".
- 🇩🇪 Alemão · Bloco 1 — Erste Gespräche (iniciante): cumprimentos, apresentações, perguntas, expressões do dia a dia e uma conversa. 5 fases, 15 exercícios. Desafios: "Na, alles klar?" (prêmio: chapéu tirolês) e "Macht nichts!" (prêmio: gorro de lã). No alemão o mascote fala em alemão e a voz é em alemão.

## Editar
- Conteúdo: `src/block1.js`, `src/block2.js` e `src/block3.js` (novos blocos seguem o mesmo formato e entram em `MAIN`, em `src/app.html`, e em `src/build.py`)
- Alemão: `src/de-block1.js` (bloco) e `src/de-course.js` (dicas, falas do mascote e desafios). Idiomas ficam em `COURSES`, em `src/app.html`
- Desafios surpresa e prêmios: `src/challenges.js`
- Mascotes, cores e mensagens: `src/mascots.js`
- Desenho dos mascotes, expressões e acessórios: `src/mascot-art.js`
- App: `src/app.html`
- Gerar o `index.html`: `python3 src/build.py`
- Teste do Bloco 3 (fases, desafios e prêmios): `python tests/test_bloco3.py` (precisa do Playwright)
- Teste de domínio (reprovar, aprovar e subir de nível): `python tests/test_dominio.py`
- Desbloqueio por dia (Bloco 2 travado até amanhã e aberto no dia seguinte): `python tests/test_desbloqueio_diario.py`
- Teste do alemão (troca de idioma, Bloco 1, desafios, XP por idioma e primeiro acesso): `python tests/test_alemao.py`
