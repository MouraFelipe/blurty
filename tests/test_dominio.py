"""Teste de domínio: aparece no fim do bloco concluído, reprova abaixo de 80% (sem subir de nível)
e aprova com 80% ou mais (bloco dominado e nível sobe). Uso: python tests/test_dominio.py (precisa do Playwright)"""
import json, os, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8804", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
done = {f"b1p{i}": {"stars": 3, "best": 100, "plays": 1} for i in range(1, 6)}
save = {"profile": {"mascot": "miko", "skin": None, "accessories": []}, "phases": done, "xp": 300, "streak": 1, "best": 1, "last": time.strftime("%Y-%m-%d"), "days": {},
        "history": [], "review": {}, "achieved": {}, "stats": {"answered": 0, "correct": 0, "cleared": 0}, "challenges": {}, "items": []}
errors = []
def answer(p, right=True):
    q = p.evaluate("L.cur")
    if q["type"] == "choice":
        i = q["answer"] if right else (q["answer"] + 1) % len(q["options"])
        p.click(f'#body .opt[data-i="{i}"]'); p.click("#check")
    elif q["type"] == "build":
        for w in q["answer"].split(" "): p.click(f'.bank .w:not(.used):text-is("{w}")')
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
    assert "DAILY LIFE" in p.inner_text("#next").upper(), "a próxima fase continua igual (o teste não trava nada)"
    assert p.query_selector('[data-ms="b1"]:not(.locked)') and p.query_selector('[data-ms="b2"].locked')
    assert p.evaluate("level()") == 1
    # reprova: erra as de escolha
    p.click('[data-ms="b1"]'); p.screenshot(path="/tmp/dominio_intro.png", full_page=True); p.click("#go")
    for _ in range(p.evaluate("L.total")): answer(p, right=False)
    p.wait_for_selector("#again"); print("reprovou:", p.inner_text(".cards3").replace("\n", " "))
    assert p.evaluate("level()") == 1 and not p.evaluate("mastered(BLOCK1)")
    # aprova
    p.click("#again"); p.click("#go")
    for _ in range(p.evaluate("L.total")): answer(p)
    p.wait_for_selector(".newach"); p.screenshot(path="/tmp/dominio_fim.png", full_page=True)
    print("aprovou:", p.inner_text("h2"), "|", p.inner_text(".newach").replace("\n", " "))
    assert p.evaluate("level()") == 2 and p.evaluate("mastered(BLOCK1)") and p.evaluate("!!S.achieved.master")
    p.click("#map"); p.wait_for_selector('[data-ms="b1"].won'); print("mapa:", p.inner_text('[data-ms="b1"]').replace("\n", " "))
    b.close()
  print("erros:", errors); assert not errors
finally:
    srv.terminate()
