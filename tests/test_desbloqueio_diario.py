"""Desbloqueio por dia: concluir o Bloco 1 hoje deixa o Bloco 2 travado até amanhã;
quem já tinha blocos concluídos não perde nada. Uso: python tests/test_desbloqueio_diario.py"""
import json, os, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8804", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
done = {f"b1p{i}": {"stars": 3, "best": 3, "plays": 1} for i in range(1, 5)}
save = {"profile": {"mascot": "lumi", "skin": None, "accessories": []}, "phases": done, "xp": 200, "streak": 1, "best": 1, "last": time.strftime("%Y-%m-%d"), "days": {},
        "history": [], "review": {}, "achieved": {}, "stats": {"answered": 0, "correct": 0, "cleared": 0}, "challenges": {}, "items": []}
errors = []
def answer(p):
    q = p.evaluate("L.cur")
    if q["type"] == "choice": p.click(f'#body .opt[data-i="{q["answer"]}"]'); p.click("#check")
    elif q["type"] == "build":
        for w in q["answer"].split(" "): p.click(f'.bank .w:not([disabled]):text-is("{w}")')
        p.click("#check")
    else:
        for i in range(len(q["pairs"])): p.click(f'.pairs .opt[data-side="L"][data-i="{i}"]'); p.click(f'.pairs .opt[data-side="R"][data-i="{i}"]')
    p.wait_for_selector(".foot.ok, .foot.no"); p.click("#check")
    if p.query_selector(".pep"): p.click("#go")
try:
  with sync_playwright() as pw:
    b = pw.chromium.launch(**({"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}))
    ctx = b.new_context(viewport={"width": 390, "height": 844})
    ctx.add_init_script("try{ if(!localStorage.getItem('blurty-v2')) localStorage.setItem('blurty-v2', %s); }catch(e){}" % json.dumps(json.dumps(save)))
    p = ctx.new_page(); p.on("pageerror", lambda e: errors.append(str(e))); p.goto("http://localhost:8804/index.html"); p.wait_for_selector(".block")
    p.click('[data-ph="b1p5"]'); p.click("#go")
    for _ in range(p.evaluate("L.total")): answer(p)
    p.wait_for_selector("#map"); end = p.inner_text(".end")
    assert "abre amanhã" in end, end; assert "My Day" not in p.inner_text(".foot")
    print("fim do bloco 1: avisa que o próximo bloco abre amanhã")
    p.click("#map"); p.wait_for_selector(".block")
    assert p.query_selector('[data-ph="b2p1"].locked') and "Abre amanhã" in p.inner_text("body")
    p.screenshot(path="/tmp/blurty_amanha.png", full_page=True)
    p.click('[data-ph="b2p1"]'); p.wait_for_selector(".toast"); print("toque no bloco 2:", p.inner_text(".toast"))
    p.click('[data-ms="b1"]'); p.wait_for_selector("#go"); print("teste de domínio continua liberado hoje"); p.goto("http://localhost:8804/index.html"); p.wait_for_selector(".block")
    # dia seguinte
    p.evaluate("S.blockAt.b1=dayStr(new Date(Date.now()-864e5)); persist()"); p.reload(); p.wait_for_selector(".block")
    assert p.query_selector('[data-ph="b2p1"]:not(.locked)') and "DAILY LIFE" in p.inner_text("#next").upper()
    print("no dia seguinte o bloco 2 abre:", p.inner_text("#next").replace("\n", " | "))
    b.close()
  print("erros:", errors); assert not errors
finally:
    srv.terminate()
