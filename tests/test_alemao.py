"""Alemão de ponta a ponta: quem já jogava inglês mantém o progresso, troca para o alemão pela bandeira,
joga o Bloco 1 (5 fases + 2 desafios), o XP soma no total e fica separado por idioma.
Também testa o primeiro acesso (mascote -> idioma). Uso: python tests/test_alemao.py (precisa do Playwright)"""
import json, os, subprocess, sys, time
from playwright.sync_api import sync_playwright
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8802", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
done = {f"b1p{i}": {"stars": 3, "best": 100, "plays": 1} for i in range(1, 6)}
save = {"profile": {"mascot": "foxy", "skin": None, "accessories": []}, "phases": done, "xp": 500, "streak": 1, "best": 1, "last": time.strftime("%Y-%m-%d"), "days": {},
        "history": [], "review": {"b1p1:0": {"n": 1, "d": "2026-11-01"}}, "achieved": {}, "stats": {"answered": 0, "correct": 0, "cleared": 0}, "challenges": {}, "items": []}
errors = []

def answer(p):
    q = p.evaluate("L.cur")
    if q["type"] == "choice": p.click(f'#body .opt[data-i="{q["answer"]}"]'); p.click("#check")
    elif q["type"] == "build":
        for w in q["answer"].split(" "): p.click(f'.bank .w:not(.used):text-is("{w}")')
        p.click("#check")
    else:
        for i in range(len(q["pairs"])): p.click(f'.pairs .opt[data-side="L"][data-i="{i}"]'); p.click(f'.pairs .opt[data-side="R"][data-i="{i}"]')
    p.wait_for_selector(".foot.ok, .foot.no"); ok = p.query_selector(".foot.ok") is not None
    p.click("#check")
    if p.query_selector(".pep"): p.click("#go")
    return ok

try:
  with sync_playwright() as pw:
    b = pw.chromium.launch(**({"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}))
    # 1) jogador antigo (inglês) troca para o alemão
    ctx = b.new_context(viewport={"width": 390, "height": 844})
    ctx.add_init_script("try{ if(!localStorage.getItem('blurty-v2')) localStorage.setItem('blurty-v2', %s); }catch(e){}" % json.dumps(json.dumps(save)))
    p = ctx.new_page(); p.on("pageerror", lambda e: errors.append(str(e))); p.goto("http://localhost:8802/index.html"); p.wait_for_selector(".block")
    assert p.inner_text("#lang").strip() == "🇺🇸" and p.evaluate("S.xpBy.en") == 500
    p.click("#lang"); p.wait_for_selector('[data-lang="de"]'); p.screenshot(path="/tmp/blurty_idiomas.png", full_page=True)
    p.click('[data-lang="de"]'); p.wait_for_selector(".block")
    assert p.inner_text("#lang").strip() == "🇩🇪" and "ERSTE GESPRÄCHE" in p.inner_text("#next").upper()
    assert p.query_selector("#rev") is None, "revisão do inglês não deve aparecer no alemão"
    p.screenshot(path="/tmp/blurty_mapa_de.png", full_page=True)
    print("trocou para o alemão; mapa:", p.inner_text("#next").replace("\n", " | "))
    for i in range(1, 6):
        p.click(f'[data-ph="de1p{i}"]'); p.click("#go")
        assert all(answer(p) for _ in range(p.evaluate("L.total"))), f"fase {i}"
        p.wait_for_selector("#map")
        if i in (2, 4):
            c = "de1c1" if i == 2 else "de1c2"; p.click("#map"); p.wait_for_selector(f'[data-ch="{c}"]:not(.locked)'); p.click(f'[data-ch="{c}"]')
            p.click("#go"); p.wait_for_selector('#go:has-text("Começar")'); p.click("#go")
            for _ in range(p.evaluate("L.total")): answer(p)
            p.wait_for_selector(".prize"); print(f"desafio {c}:", p.inner_text(".prize").replace("\n", " "))
            p.click("#use"); p.wait_for_selector(".block")
        else:
            p.click("#map"); p.wait_for_selector(".block")
    xp = p.evaluate("S.xpBy"); print("XP por idioma:", xp, "| total:", p.evaluate("S.xp"))
    assert xp["en"] == 500 and xp["de"] > 0 and p.evaluate("S.xp") == 500 + xp["de"]
    assert p.evaluate("!!S.achieved.de1 && !!S.achieved.poly") and "tyrolean" in p.evaluate("S.items") and "beanie" in p.evaluate("S.items")
    p.click('[data-tab="me"]'); p.wait_for_selector("#langs"); p.screenshot(path="/tmp/blurty_perfil_de.png", full_page=True)
    print("Perfil:", p.inner_text(".list").replace("\n", " | "))
    # volta para o inglês: progresso continua
    p.click("#lang"); p.click('[data-lang="en"]'); p.wait_for_selector(".block")
    assert "DAILY LIFE" in p.inner_text("#next").upper() or "REVISÃO" in p.inner_text("#next").upper()
    print("voltou para o inglês:", p.inner_text("#next").replace("\n", " | "))
    ctx.close()
    # 2) primeiro acesso: mascote -> idioma
    ctx = b.new_context(viewport={"width": 390, "height": 844}); p = ctx.new_page(); p.on("pageerror", lambda e: errors.append(str(e)))
    p.goto("http://localhost:8802/index.html"); p.click('[data-m="dino"]'); p.click("#ok"); p.wait_for_selector('[data-lang="de"]')
    p.click('[data-lang="de"]'); p.wait_for_selector(".block")
    assert p.evaluate("S.langs") == ["de"] and p.evaluate("S.course") == "de"
    print("primeiro acesso: escolheu alemão ->", p.evaluate("S.langs"))
    b.close()
  print("erros:", errors); assert not errors
finally:
    srv.terminate()
