"""Bloco 3 de ponta a ponta: abre depois do Bloco 2, 5 fases, 2 desafios e os prêmios
(chapéu de chef e visual dourado) no Perfil. Uso: python tests/test_bloco3.py"""
import json, os, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8801", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
done = {f"b{b}p{i}": {"stars": 3, "best": 3, "plays": 1} for b in (1, 2) for i in range(1, 6)}
save = {"profile": {"mascot": "dino", "skin": None, "accessories": []}, "phases": done, "xp": 500, "streak": 1, "best": 1, "last": time.strftime("%Y-%m-%d"), "days": {},
        "history": [], "review": {}, "achieved": {}, "stats": {"answered": 0, "correct": 0, "cleared": 0}, "challenges": {}, "items": []}
errors = []
def answer(p):
    """responde certo o exercício atual (escolha, montar frase ou associar)"""
    q = p.evaluate("L.cur")
    if q["type"] == "choice": p.click(f'#body .opt[data-i="{q["answer"]}"]'); p.click("#check")
    elif q["type"] == "build":
        for w in q["answer"].split(" "): p.click(f'.bank .w:not([disabled]):text-is("{w}")')
        p.click("#check")
    else:
        for i in range(len(q["pairs"])): p.click(f'.pairs .opt[data-side="L"][data-i="{i}"]'); p.click(f'.pairs .opt[data-side="R"][data-i="{i}"]')
    p.wait_for_selector(".foot.ok, .foot.no"); ok = p.query_selector(".foot.ok") is not None
    p.click("#check")
    if p.query_selector(".pep"): p.click("#go")
    return ok
def play(p, n):
    p.click("#go"); oks = [answer(p) for _ in range(n)]; return all(oks)
try:
  with sync_playwright() as pw:
    b = pw.chromium.launch(**({"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}))
    ctx = b.new_context(viewport={"width": 390, "height": 844})
    ctx.add_init_script("try{ if(!localStorage.getItem('blurty-v2')) localStorage.setItem('blurty-v2', %s); }catch(e){}" % json.dumps(json.dumps(save)))
    p = ctx.new_page(); p.on("pageerror", lambda e: errors.append(str(e))); p.goto("http://localhost:8801/index.html"); p.wait_for_selector(".block")
    assert "OUT AND ABOUT" in p.inner_text("#next").upper()
    assert p.query_selector('[data-ph="b3p1"]:not(.locked)') and p.query_selector('[data-ch="b3c1"].locked') and p.query_selector('[data-ch="b3c2"]')
    print("bloco 3 aberto depois do bloco 2, com 2 desafios no mapa")
    for i in range(1, 6):
        p.click(f'[data-ph="b3p{i}"]'); assert play(p, 3), f"fase {i}"; p.wait_for_selector("#map, #nx")
        if i in (2, 4):   # desafio abre depois da fase 2 e da 4
            c = "b3c1" if i == 2 else "b3c2"; p.click("#map"); p.wait_for_selector(f'[data-ch="{c}"]:not(.locked)'); p.click(f'[data-ch="{c}"]')
            p.click("#go"); p.wait_for_selector('#go:has-text("Começar")'); p.click("#go"); total = p.evaluate("L.total")
            for _ in range(total): answer(p)
            p.wait_for_selector(".prize"); print(f"desafio {c}:", p.inner_text(".prize").replace("\n", " "))
            p.click("#use"); p.wait_for_selector(".block")
        else:
            p.click("#map"); p.wait_for_selector(".block")
    print("fases concluídas:", p.evaluate("BLOCK3.phases.filter(x=>done(x.id)).length"), "| itens:", p.evaluate("S.items"), "| usando:", p.evaluate("S.profile.accessories"))
    assert p.evaluate("S.items").count("golden") == 1 and "chefHat" in p.evaluate("S.items") and p.evaluate("!!S.achieved.b3")
    p.click('[data-tab="me"]'); p.wait_for_selector(".items"); p.screenshot(path="/tmp/blurty_perfil.png", full_page=True)
    print("Perfil:", [x.split("\n")[1] for x in p.eval_on_selector_all(".items .item", "es=>es.map(e=>e.innerText)")])
    b.close()
  print("erros:", errors); assert not errors
finally:
    srv.terminate()
