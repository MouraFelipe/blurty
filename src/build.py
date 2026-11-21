s=open('src/app.html').read()
s=s.replace('/*MASCOTS*/',open('src/mascots.js').read()).replace('/*BLOCK1*/',open('src/block1.js').read())
open('index.html','w').write(s)
