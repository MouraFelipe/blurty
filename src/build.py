s=open('src/app.html').read()
parts={'/*MASCOTS*/':'mascots.js','/*MASCOT_ART*/':'mascot-art.js','/*BLOCK1*/':'block1.js','/*BLOCK2*/':'block2.js','/*BLOCK3*/':'block3.js',
       '/*CHALLENGES*/':'challenges.js','/*DE_BLOCK1*/':'de-block1.js','/*DE_COURSE*/':'de-course.js'}
for k,f in parts.items():
    assert k in s, k
    s=s.replace(k,open('src/'+f).read())
open('index.html','w').write(s)
