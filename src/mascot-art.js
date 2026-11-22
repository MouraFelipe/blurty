/* =========================================================
   BLURTY — ARTE DOS MASCOTES
   Cada personagem = camadas próprias (corpo, cauda, orelhas…) + âncoras do rosto.
   Expressões e poses são compartilhadas e montadas por cima das âncoras,
   então uma nova expressão vale para todos os mascotes de uma vez.
   API: mascotSVG(id, mood, {accessories:[]})
   moods: idle, welcome, happy, thinking, surprised, sad (alias: oops),
          excited, celebrate, encourage
   ========================================================= */
const MascotArt = (()=>{
  let uid = 0;
  const hx = h => [1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
  const mix = (a,b,t) => "#"+hx(a).map((v,i)=>Math.round(v+(hx(b)[i]-v)*t).toString(16).padStart(2,"0")).join("");
  const W = (c,t)=>mix(c,"#ffffff",t), K = (c,t)=>mix(c,"#000000",t);
  const INK = "#2A2420";

  /* ---------------- personagens ---------------- */
  const CH = {
    /* DINO — corpo de pera, alto e firme; placas nas costas, focinho largo, sobrancelhas decididas */
    dino: {
      colors:{body:"#6DBB82", belly:"#E7F3DC", line:"#2F6A43", iris:"#7A5A1E", extra:"#4F9C67"},
      eyes:[[64,66],[96,66]], er:10.5, mouth:[80,90,13], brow:{w:4.2, base:"determined"},
      arms:{L:[46,100], R:[114,100], len:22, w:13}, hat:[80,24,0], think:[124,34], tear:[58,82],
      tail:c=>`<path d="M112 116 C140 122 156 104 150 84 C146 96 132 104 114 100 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.6" stroke-linejoin="round"/>`,
      back:c=>`
        ${[[58,34,-28],[76,26,-8],[96,28,14],[112,40,34],[122,58,52]].map(([x,y,r])=>`<path d="M${x-8} ${y+8} Q${x} ${y-12} ${x+8} ${y+8} Z" fill="${c.extra}" stroke="${c.line}" stroke-width="2.4" stroke-linejoin="round" transform="rotate(${r} ${x} ${y})"/>`).join("")}`,
      body:c=>`
        <path d="M80 30 C114 30 126 58 124 88 C122 120 106 142 80 142 C54 142 38 120 36 88 C34 58 46 30 80 30 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.8"/>
        <path d="M56 104 C58 90 102 90 104 104 C106 124 94 136 80 136 C66 136 54 124 56 104 Z" fill="${c.belly}"/>
        <path d="M62 112 Q80 116 98 112 M60 122 Q80 126 100 122" stroke="${K(c.belly,.12)}" stroke-width="2" fill="none" stroke-linecap="round"/>
        <circle cx="70" cy="42" r="3" fill="${c.extra}"/><circle cx="90" cy="38" r="2.4" fill="${c.extra}"/><circle cx="82" cy="46" r="1.8" fill="${c.extra}"/>
        <ellipse cx="74" cy="80" rx="2" ry="1.4" fill="${c.line}"/><ellipse cx="86" cy="80" rx="2" ry="1.4" fill="${c.line}"/>`,
      feet:c=>[[62,144],[98,144]].map(([x,y],i)=>`<g class="p-foot pf${i}"><ellipse cx="${x}" cy="${y}" rx="15" ry="7.5" fill="${c.extra}" stroke="${c.line}" stroke-width="2.4"/><path d="M${x-8} ${y-1} v3 M${x} ${y-1} v3 M${x+8} ${y-1} v3" stroke="#F4F1E6" stroke-width="2.4" stroke-linecap="round"/></g>`).join("")
    },
    /* LUMI — criatura original: um pequeno ser de luz que flutua; gota macia, orelhas-folha e antena luminosa */
    lumi: {
      colors:{body:"#AE97E2", belly:"#F3EEFF", line:"#5B4596", iris:"#4E3A92", extra:"#FFE7A3"},
      eyes:[[64,76],[96,76]], er:12, mouth:[80,98,11], brow:{w:3, base:"soft"}, float:true,
      arms:{L:[40,100], R:[120,100], len:14, w:12}, hat:[80,30,0], think:[126,40], tear:[56,94],
      antenna:c=>`
        <path d="M80 32 C84 22 92 14 98 10" stroke="${c.line}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <circle class="orb" cx="99" cy="9" r="9" fill="${c.extra}" stroke="#E3B94F" stroke-width="2"/>
        <circle cx="96" cy="6" r="2.6" fill="#fff" opacity=".9"/>`,
      back:c=>`
        <circle cx="80" cy="84" r="70" fill="url(#${c.id}glow)"/>
        <path d="M46 52 C26 44 20 26 28 18 C40 22 50 36 52 50 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M114 52 C134 44 140 26 132 18 C120 22 110 36 108 50 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M44 46 C36 40 32 32 33 26 M116 46 C124 40 128 32 127 26" stroke="${W(c.body,.45)}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
      body:c=>`
        <path d="M80 30 C116 30 128 62 124 90 C120 116 102 128 92 132 C98 138 94 148 82 148 C88 142 80 136 70 133 C52 128 36 112 36 88 C34 60 46 30 80 30 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.8" stroke-linejoin="round"/>
        <path d="M58 108 C62 98 98 98 102 108 C102 120 92 126 80 126 C68 126 58 120 58 108 Z" fill="${c.belly}" opacity=".9"/>
        <path d="M80 112 l2 4 l4 1 l-4 1.5 l-2 4 l-2 -4 l-4 -1.5 l4 -1 z" fill="${c.extra}" stroke="#E3B94F" stroke-width="1"/>
        <path d="M50 58 l1.2 2.6 l2.6 1.2 l-2.6 1.2 l-1.2 2.6 l-1.2 -2.6 l-2.6 -1.2 l2.6 -1.2 z M110 54 l1 2 l2 1 l-2 1 l-1 2 l-1 -2 l-2 -1 l2 -1 z" fill="#fff" opacity=".8"/>`,
      feet:()=>""
    },
    /* FOXY — cabeça grande e angulosa, orelhas altas, focinho branco e cauda fofa com ponta branca; olhar esperto */
    foxy: {
      colors:{body:"#EE9446", belly:"#FFF6EC", line:"#8F4A16", iris:"#8A5A12", extra:"#6E3510"},
      eyes:[[64,72],[96,72]], er:9.5, mouth:[80,93,10], brow:{w:3, base:"sly"}, sly:true,
      arms:{L:[58,114], R:[102,114], len:17, w:11}, hat:[80,40,0], think:[122,44], tear:[58,86],
      tail:c=>`
        <path d="M100 136 C140 144 158 106 140 70 C136 62 126 64 128 74 C136 102 122 120 100 120 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M140 70 C136 62 126 64 128 74 C130 84 140 88 144 80 C144 76 142 72 140 70 Z" fill="${c.belly}" stroke="${c.line}" stroke-width="2.2"/>`,
      back:c=>`
        <path d="M42 64 L46 16 L74 46 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M118 64 L114 16 L86 46 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M50 54 L51 28 L65 45 Z M110 54 L109 28 L95 45 Z" fill="${c.extra}" opacity=".85"/>`,
      body:c=>`
        <ellipse cx="80" cy="122" rx="28" ry="24" fill="${c.g}" stroke="${c.line}" stroke-width="2.6"/>
        <ellipse cx="80" cy="126" rx="15" ry="16" fill="${c.belly}"/>
        <path d="M80 40 C106 40 124 54 128 74 C122 76 118 80 120 84 C110 96 96 102 80 102 C64 102 50 96 40 84 C42 80 38 76 32 74 C36 54 54 40 80 40 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.8" stroke-linejoin="round"/>
        <path d="M46 80 Q80 112 114 80 Q108 100 80 101 Q52 100 46 80 Z" fill="${c.belly}"/>
        <path d="M74 84 Q80 80 86 84 Q84 90 80 90 Q76 90 74 84 Z" fill="${INK}"/>`,
      feet:c=>[[66,145],[94,145]].map(([x,y],i)=>`<g class="p-foot pf${i}"><ellipse cx="${x}" cy="${y}" rx="11" ry="6.5" fill="${c.extra}" stroke="${c.line}" stroke-width="2.2"/></g>`).join("")
    },
    /* MIKO — suricato alto e esguio, cabeça pequena, manchas escuras nos olhos, patinhas juntas no peito */
    miko: {
      colors:{body:"#86AEDB", belly:"#EAF2FB", line:"#34587F", iris:"#2F4D74", extra:"#3E6390"},
      eyes:[[67,52],[93,52]], er:8.5, mouth:[80,71,7], brow:{w:2.8, base:"up"}, rest:"front",
      arms:{L:[64,88], R:[96,88], len:16, w:10}, hat:[80,24,0], think:[112,26], tear:[62,64],
      tail:c=>`
        <path d="M104 140 C126 138 130 112 122 92 C120 86 114 88 116 94 C122 114 116 128 102 130 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.4" stroke-linejoin="round"/>
        <path d="M118 92 C120 86 114 88 116 94 Z" fill="${c.extra}" stroke="${c.line}" stroke-width="2"/>`,
      back:c=>`
        <circle cx="47" cy="50" r="7" fill="${c.g}" stroke="${c.line}" stroke-width="2.4"/><circle cx="113" cy="50" r="7" fill="${c.g}" stroke="${c.line}" stroke-width="2.4"/>
        <circle cx="47" cy="50" r="3" fill="${c.extra}"/><circle cx="113" cy="50" r="3" fill="${c.extra}"/>`,
      body:c=>`
        <path d="M80 64 C100 64 110 86 110 110 C110 134 98 146 80 146 C62 146 50 134 50 110 C50 86 60 64 80 64 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.8"/>
        <path d="M66 100 C66 84 94 84 94 100 C96 124 90 138 80 138 C70 138 64 124 66 100 Z" fill="${c.belly}"/>
        <ellipse cx="80" cy="53" rx="34" ry="28" fill="${c.g}" stroke="${c.line}" stroke-width="2.8"/>
        <path d="M64 60 Q80 84 96 60 Q94 78 80 80 Q66 78 64 60 Z" fill="${c.belly}"/>
        <ellipse cx="67" cy="53" rx="10" ry="11.5" fill="${c.extra}" opacity=".75" transform="rotate(18 67 53)"/>
        <ellipse cx="93" cy="53" rx="10" ry="11.5" fill="${c.extra}" opacity=".75" transform="rotate(-18 93 53)"/>
        <ellipse cx="80" cy="65" rx="4" ry="2.8" fill="${INK}"/>
        <path d="M62 34 Q80 28 98 34" stroke="${c.extra}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>`,
      feet:c=>[[68,148],[92,148]].map(([x,y],i)=>`<g class="p-foot pf${i}"><ellipse cx="${x}" cy="${y}" rx="10" ry="5.5" fill="${c.extra}" stroke="${c.line}" stroke-width="2.2"/></g>`).join("")
    },
    /* BLOOP — sapo largo e baixinho, olhos em cúpulas, bocão, pintas nas costas e pés grandes */
    bloop: {
      colors:{body:"#5EC6B6", belly:"#E5F8F3", line:"#226D63", iris:"#1F5E57", extra:"#3EA594"},
      eyes:[[54,70],[106,70]], er:11.5, mouth:[80,100,24], brow:{w:3, base:"none"},
      arms:{L:[38,114], R:[122,114], len:15, w:12}, hat:[80,46,0], think:[136,46], tear:[46,86],
      back:c=>`
        <circle cx="54" cy="72" r="20" fill="${c.g}" stroke="${c.line}" stroke-width="2.8"/>
        <circle cx="106" cy="72" r="20" fill="${c.g}" stroke="${c.line}" stroke-width="2.8"/>`,
      body:c=>`
        <ellipse cx="80" cy="110" rx="54" ry="34" fill="${c.g}" stroke="${c.line}" stroke-width="2.8"/>
        <path d="M40 76 Q54 66 68 76 M92 76 Q106 66 120 76" fill="${c.g}"/>
        <ellipse cx="80" cy="122" rx="32" ry="20" fill="${c.belly}"/>
        <circle cx="36" cy="104" r="5" fill="${c.extra}"/><circle cx="126" cy="100" r="4" fill="${c.extra}"/><circle cx="118" cy="114" r="2.8" fill="${c.extra}"/><circle cx="44" cy="118" r="2.6" fill="${c.extra}"/>`,
      feet:c=>[[50,142,-1],[110,142,1]].map(([x,y,s],i)=>`<g class="p-foot pf${i}"><path d="M${x-18} ${y+3} Q${x-14} ${y-8} ${x} ${y-6} Q${x+14} ${y-8} ${x+18} ${y+3} Q${x+12} ${y+7} ${x+6} ${y+3} Q${x} ${y+8} ${x-6} ${y+3} Q${x-12} ${y+7} ${x-18} ${y+3} Z" fill="${c.extra}" stroke="${c.line}" stroke-width="2.4" stroke-linejoin="round"/></g>`).join("")
    },
    /* ROKI — guaxinim gordinho e redondo, máscara, orelhas redondas, cauda listrada enorme */
    roki: {
      colors:{body:"#E9877A", belly:"#FCEEEA", line:"#8A3A31", iris:"#3A2522", extra:"#5B3B37"},
      eyes:[[66,68],[94,68]], er:8.5, mouth:[80,92,9], brow:{w:3, base:"mischief", color:"#FFF4F1"},
      arms:{L:[48,112], R:[112,112], len:18, w:12}, hat:[80,28,0], think:[122,36], tear:[60,82],
      tail:c=>`
        <clipPath id="${c.id}tail"><path d="M50 132 C14 136 0 104 16 78 C22 70 34 74 30 84 C22 104 34 120 54 118 Z"/></clipPath>
        <path d="M50 132 C14 136 0 104 16 78 C22 70 34 74 30 84 C22 104 34 120 54 118 Z" fill="${c.g}"/>
        <g clip-path="url(#${c.id}tail)" fill="${c.extra}"><rect x="0" y="80" width="40" height="8" transform="rotate(-24 20 84)"/><rect x="2" y="98" width="40" height="8" transform="rotate(-10 22 102)"/><rect x="12" y="116" width="40" height="8" transform="rotate(14 32 120)"/></g>
        <path d="M50 132 C14 136 0 104 16 78 C22 70 34 74 30 84 C22 104 34 120 54 118 Z" fill="none" stroke="${c.line}" stroke-width="2.6"/>`,
      back:c=>`
        <circle cx="50" cy="40" r="13" fill="${c.g}" stroke="${c.line}" stroke-width="2.6"/><circle cx="110" cy="40" r="13" fill="${c.g}" stroke="${c.line}" stroke-width="2.6"/>
        <circle cx="50" cy="41" r="6.5" fill="${c.extra}"/><circle cx="110" cy="41" r="6.5" fill="${c.extra}"/>`,
      body:c=>`
        <ellipse cx="80" cy="112" rx="40" ry="33" fill="${c.g}" stroke="${c.line}" stroke-width="2.8"/>
        <ellipse cx="80" cy="118" rx="24" ry="20" fill="${c.belly}"/>
        <path d="M80 36 C108 36 122 52 122 70 C122 74 128 78 126 82 C118 84 116 92 106 94 C98 98 90 99 80 99 C70 99 62 98 54 94 C44 92 42 84 34 82 C32 78 38 74 38 70 C38 52 52 36 80 36 Z" fill="${c.g}" stroke="${c.line}" stroke-width="2.8" stroke-linejoin="round"/>
        <path d="M46 68 Q56 54 72 62 Q80 66 88 62 Q104 54 114 68 Q110 82 96 78 Q80 74 64 78 Q50 82 46 68 Z" fill="${c.extra}"/>
        <ellipse cx="80" cy="88" rx="15" ry="10" fill="${c.belly}"/>
        <ellipse cx="80" cy="82" rx="5" ry="3.4" fill="${INK}"/>`,
      feet:c=>[[66,144],[94,144]].map(([x,y],i)=>`<g class="p-foot pf${i}"><ellipse cx="${x}" cy="${y}" rx="12" ry="6.5" fill="${c.extra}" stroke="${c.line}" stroke-width="2.2"/></g>`).join("")
    }
  };

  /* ---------------- expressões ---------------- */
  const MOODS = {
    idle:      {eyes:"idle",  brow:"base",    mouth:"idle",  arms:"rest"},
    welcome:   {eyes:"idle",  brow:"base",    mouth:"smile", arms:"wave",  blush:1},
    happy:     {eyes:"happy", brow:"up",      mouth:"grin",  arms:"open",  blush:1},
    thinking:  {eyes:"look",  brow:"think",   mouth:"hmm",   arms:"chin",  fx:"dots"},
    surprised: {eyes:"wide",  brow:"high",    mouth:"o",     arms:"wide",  fx:"bang"},
    sad:       {eyes:"down",  brow:"worried", mouth:"sad",   arms:"close", fx:"tear"},
    excited:   {eyes:"wide",  brow:"high",    mouth:"grin",  arms:"up",    fx:"spark", blush:1},
    celebrate: {eyes:"happy", brow:"up",      mouth:"grin",  arms:"up",    fx:"party", blush:1},
    encourage: {eyes:"wink",  brow:"up",      mouth:"smile", arms:"thumb", blush:1}
  };
  MOODS.oops = MOODS.sad;

  function eyeOpen(x,y,r,c,o={}){
    const sx=o.scale||1, rx=r*.9*sx, ry=r*1.08*sx, ps=o.ps||1, dx=(o.dx||0)*r, dy=(o.dy||0)*r;
    const lid = o.lid ? `<path d="M${x-rx-1} ${y-ry*.42} Q${x} ${y-ry*.85} ${x+rx+1} ${y-ry*.42} L${x+rx+2} ${y-ry-3} L${x-rx-2} ${y-ry-3} Z" fill="${o.lid}"/><path d="M${x-rx} ${y-ry*.42} Q${x} ${y-ry*.85} ${x+rx} ${y-ry*.42}" stroke="${INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/>` : "";
    return `<g class="eye"><ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff" stroke="${INK}" stroke-width="2"/>
      <circle cx="${x+dx}" cy="${y+dy}" r="${r*.62*ps}" fill="url(#${c.id}iris)"/>
      <circle cx="${x+dx}" cy="${y+dy}" r="${r*.32*ps}" fill="${INK}"/>
      <circle cx="${x+dx+r*.24}" cy="${y+dy-r*.3}" r="${r*.2}" fill="#fff"/><circle cx="${x+dx-r*.22}" cy="${y+dy+r*.22}" r="${r*.09}" fill="#fff"/>${lid}</g>`;
  }
  const eyeArc = (x,y,r)=>`<path d="M${x-r*.85} ${y+r*.3} Q${x} ${y-r*.8} ${x+r*.85} ${y+r*.3}" stroke="${INK}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  function eyes(ch,c,kind,lidColor){
    return ch.eyes.map(([x,y],i)=>{
      const r=ch.er;
      if (kind==="happy" || (kind==="wink" && i===1)) return eyeArc(x,y,r);
      if (kind==="wide") return eyeOpen(x,y,r,c,{scale:1.12, ps:.78});
      if (kind==="look") return eyeOpen(x,y,r,c,{dx:-.28, dy:-.3});
      if (kind==="down") return eyeOpen(x,y,r,c,{dy:.26});
      return eyeOpen(x,y,r,c,{lid: ch.sly ? lidColor : null});
    }).join("");
  }
  function brows(ch,c,kind){
    const b=ch.brow; if (b.base==="none" && !["worried","think","high"].includes(kind)) return "";
    if (kind==="base") kind=b.base;
    const col=b.color||c.line;
    return ch.eyes.map(([x,y],i)=>{
      const r=ch.er, by=y-r*1.6, x1=x-r*.75, x2=x+r*.75, inL=i===0;
      let y1=by, y2=by, q=-3;
      if (kind==="determined"){ y1=inL?by-2:by+3; y2=inL?by+3:by-2; q=-1; }
      if (kind==="sly"){ y1=inL?by:by-3; y2=inL?by-3:by; q=-2; }
      if (kind==="mischief"){ y1=inL?by-1:by+2; y2=inL?by+2:by-3; }
      if (kind==="up"||kind==="soft"){ y1=by-2; y2=by-2; }
      if (kind==="high"){ y1=by-6; y2=by-6; q=-4; }
      if (kind==="worried"){ y1=inL?by+2:by-4; y2=inL?by-4:by+2; q=-1; }
      if (kind==="think"){ if(i===0){ y1=by-6; y2=by-7; q=-4; } else { y1=by+1; y2=by+1; q=0; } }
      return `<path d="M${x1} ${y1} Q${x} ${Math.min(y1,y2)+q} ${x2} ${y2}" stroke="${col}" stroke-width="${b.w}" fill="none" stroke-linecap="round"/>`;
    }).join("");
  }
  function mouth(ch,kind){
    const [x,y,w]=ch.mouth;
    if (kind==="idle" && ch.sly) return `<path d="M${x-w} ${y} Q${x-1} ${y+w*.7} ${x+w} ${y-3}" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    if (kind==="idle"||kind==="smile") return `<path d="M${x-w} ${y} Q${x} ${y+w*.85} ${x+w} ${y}" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    if (kind==="grin") return `<path d="M${x-w} ${y-1} Q${x} ${y+w*1.5} ${x+w} ${y-1} Q${x} ${y+w*.25} ${x-w} ${y-1} Z" fill="${INK}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x-w*.5} ${y+w*.75} Q${x} ${y+w*.45} ${x+w*.5} ${y+w*.75} Q${x} ${y+w*1.12} ${x-w*.5} ${y+w*.75} Z" fill="#E9797B"/>`;
    if (kind==="o") return `<ellipse cx="${x}" cy="${y+4}" rx="${Math.min(w*.42,8)}" ry="${Math.min(w*.55,9)}" fill="${INK}"/><ellipse cx="${x}" cy="${y+8}" rx="${Math.min(w*.25,4.5)}" ry="2.5" fill="#E9797B"/>`;
    if (kind==="hmm") return `<path d="M${x-w*.4+3} ${y+3} Q${x+3} ${y+6} ${x+w*.45+3} ${y+1}" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    if (kind==="sad") return `<path d="M${x-w*.55} ${y+6} Q${x} ${y+1} ${x+w*.55} ${y+6}" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    return "";
  }
  function arm(sx,sy,deg,len,w,c,cls=""){
    return `<g class="${cls}" style="transform-origin:${sx}px ${sy}px"><g transform="rotate(${deg} ${sx} ${sy})">
      <rect x="${sx-w/2}" y="${sy-w/2}" width="${w}" height="${len+w/2}" rx="${w/2}" fill="${c.g}" stroke="${c.line}" stroke-width="2.4"/>
      <circle cx="${sx}" cy="${sy+len}" r="${w*.62}" fill="${c.g}" stroke="${c.line}" stroke-width="2.4"/></g></g>`;
  }
  const aim = (sx,sy,tx,ty)=>Math.atan2(-(tx-sx), ty-sy)*180/Math.PI;
  function arms(ch,c,pose){
    const {L,R,len,w}=ch.arms; let a=20, b=-20, extra="", clsR="";
    if (pose==="rest" && ch.rest==="front"){ a=aim(L[0],L[1],76,L[1]+14); b=aim(R[0],R[1],84,R[1]+14); }
    else if (pose==="rest"){ a=22; b=-22; }
    if (pose==="close"){ a=10; b=-10; }
    if (pose==="open"){ a=55; b=-55; }
    if (pose==="wide"){ a=115; b=-115; }
    if (pose==="up"){ a=155; b=-155; }
    if (pose==="wave"){ b=-150; clsR="arm-wave"; }
    if (pose==="chin"){ const [mx,my]=ch.mouth; b=aim(R[0],R[1],mx+6,my+8); }
    if (pose==="thumb"){ b=-118;   // joinha: mão fechada com o polegar gordinho para cima, levemente inclinado
      const t=b*Math.PI/180, x=R[0]-Math.sin(t)*len, y=R[1]+Math.cos(t)*len, u=w*1.2;
      extra=`<g class="thumbup">
        <rect x="${x-u*.56}" y="${y-u*1.22}" width="${u*.56}" height="${u*1.02}" rx="${u*.28}" fill="${c.g}" stroke="${c.line}" stroke-width="2.2" transform="rotate(-14 ${x-u*.28} ${y-u*.35})"/>
        <rect x="${x-u*.64}" y="${y-u*.5}" width="${u*1.28}" height="${u*1.02}" rx="${u*.4}" fill="${c.g}" stroke="${c.line}" stroke-width="2.4"/>
        <path d="M${x+u*.64} ${y-u*.16} h${-u*.46} M${x+u*.64} ${y+u*.18} h${-u*.46}" stroke="${c.line}" stroke-width="1.8" stroke-linecap="round"/></g>`; }
    return arm(L[0],L[1],a,len,w,c,"arm arm-l") + arm(R[0],R[1],b,len,w,c,("arm arm-r "+clsR).trim()) + extra;
  }
  function fx(ch,c,kind,accent){
    const [tx,ty]=ch.think;
    if (kind==="dots") return `<g class="dots"><circle cx="${tx-14}" cy="${ty+14}" r="3" fill="#fff" stroke="${INK}" stroke-width="1.8"/><circle cx="${tx-6}" cy="${ty+5}" r="4.5" fill="#fff" stroke="${INK}" stroke-width="1.8"/><circle cx="${tx+6}" cy="${ty-6}" r="7" fill="#fff" stroke="${INK}" stroke-width="1.8"/></g>`;
    if (kind==="bang") return `<g class="bang"><path d="M${tx} ${ty-12} L${tx-3} ${ty+4} L${tx+3} ${ty+4} Z" fill="${accent}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="${tx}" cy="${ty+10}" r="2.8" fill="${accent}" stroke="${INK}" stroke-width="1.6"/></g>`;
    if (kind==="tear"){ const [x,y]=ch.tear; return `<path class="tear" d="M${x} ${y} q4 7 0 10 q-4 -3 0 -10z" fill="#A9CDEB" stroke="#6E9CC4" stroke-width="1.2"/>`; }
    if (kind==="spark"||kind==="party"){
      const st=(x,y,s)=>`<path d="M${x} ${y-s} L${x+s*.3} ${y-s*.3} L${x+s} ${y} L${x+s*.3} ${y+s*.3} L${x} ${y+s} L${x-s*.3} ${y+s*.3} L${x-s} ${y} L${x-s*.3} ${y-s*.3} Z" fill="${accent}"/>`;
      let s = `<g class="spark">${st(18,40,8)}${st(142,30,6)}${st(146,86,4)}${st(14,94,4)}</g>`;
      if (kind==="party") s += `<g class="confetti-bits">${[[30,20,"#F2C14E",20],[128,14,accent,-30],[150,58,"#7CC2E8",40],[10,66,accent,10],[136,112,"#F2C14E",-20],[22,120,"#7CC2E8",30]].map(([x,y,f,r])=>`<rect x="${x}" y="${y}" width="7" height="4" rx="1" fill="${f}" transform="rotate(${r} ${x} ${y})"/>`).join("")}</g>`;
      return s;
    }
    return "";
  }

  /* ---------------- acessórios (prontos para itens cosméticos futuros) ---------------- */
  const ACCESSORIES = {
    partyHat: (ch,c,accent)=>{ const [x,y,r]=ch.hat; return `<g class="acc" transform="rotate(${r} ${x} ${y})">
      <path d="M${x} ${y-30} L${x-14} ${y+2} Q${x} ${y+7} ${x+14} ${y+2} Z" fill="${accent}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x-9} ${y-8} L${x+9} ${y-12} M${x-12} ${y-1} L${x+12} ${y-5}" stroke="#fff" stroke-width="2.4" opacity=".75" stroke-linecap="round"/>
      <circle cx="${x}" cy="${y-31}" r="4.5" fill="#F2C14E" stroke="${INK}" stroke-width="1.8"/></g>`; },
    /* prêmios dos desafios surpresa */
    crown: (ch,c,accent)=>{ const [x,y,r]=ch.hat; return `<g class="acc" transform="rotate(${r} ${x} ${y})">
      <path d="M${x-15} ${y+5} L${x-16} ${y-9} L${x-7} ${y-2} L${x} ${y-15} L${x+7} ${y-2} L${x+16} ${y-9} L${x+15} ${y+5} Z" fill="#F2C14E" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x-14} ${y+1} L${x+14} ${y+1}" stroke="${K("#F2C14E",.25)}" stroke-width="2"/>
      <circle cx="${x}" cy="${y-16}" r="2.6" fill="#fff" stroke="${INK}" stroke-width="1.5"/><circle cx="${x-16}" cy="${y-10}" r="2.3" fill="#fff" stroke="${INK}" stroke-width="1.5"/><circle cx="${x+16}" cy="${y-10}" r="2.3" fill="#fff" stroke="${INK}" stroke-width="1.5"/>
      <circle cx="${x}" cy="${y+2.5}" r="2.4" fill="${accent}" stroke="${INK}" stroke-width="1.2"/></g>`; },
    cap: (ch,c,accent)=>{ const [x,y,r]=ch.hat; return `<g class="acc" transform="rotate(${r} ${x} ${y})">
      <path d="M${x+10} ${y+5} Q${x+30} ${y+1} ${x+37} ${y+8} Q${x+24} ${y+12} ${x+8} ${y+10} Z" fill="${K(accent,.2)}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x-19} ${y+7} Q${x-20} ${y-14} ${x} ${y-14} Q${x+20} ${y-14} ${x+19} ${y+7} Z" fill="${accent}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x} ${y-14} L${x} ${y+6}" stroke="${INK}" stroke-width="1.2" opacity=".35"/><path d="M${x-12} ${y-8} Q${x-8} ${y-12} ${x-3} ${y-12}" stroke="#fff" stroke-width="2.4" fill="none" opacity=".5" stroke-linecap="round"/>
      <circle cx="${x}" cy="${y-14.5}" r="2.6" fill="${K(accent,.2)}" stroke="${INK}" stroke-width="1.5"/></g>`; },
    flower: (ch,c,accent)=>{ const [hx,hy]=ch.hat, x=hx+15, y=hy+4;
      const petals=[0,72,144,216,288].map(a=>{ const t=a*Math.PI/180; return `<circle cx="${(x+Math.cos(t)*6).toFixed(1)}" cy="${(y+Math.sin(t)*6).toFixed(1)}" r="5" fill="#FFFFFF" stroke="${INK}" stroke-width="1.6"/>`; }).join("");
      return `<g class="acc"><path d="M${x-3} ${y+5} Q${x-10} ${y+12} ${x-15} ${y+10} Q${x-11} ${y+5} ${x-3} ${y+5} Z" fill="#7FB77E" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>${petals}<circle cx="${x}" cy="${y}" r="4" fill="#F2C14E" stroke="${INK}" stroke-width="1.5"/></g>`; },
    chefHat: (ch,c,accent)=>{ const [x,y,r]=ch.hat; return `<g class="acc" transform="rotate(${r} ${x} ${y})">
      <path d="M${x-12} ${y+5} L${x-12} ${y-6} L${x+12} ${y-6} L${x+12} ${y+5} Z" fill="#FFFFFF" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="${x-10}" cy="${y-10}" r="7" fill="#FFFFFF" stroke="${INK}" stroke-width="2"/><circle cx="${x+10}" cy="${y-10}" r="7" fill="#FFFFFF" stroke="${INK}" stroke-width="2"/>
      <circle cx="${x}" cy="${y-13.5}" r="8.5" fill="#FFFFFF" stroke="${INK}" stroke-width="2"/>
      <path d="M${x-11} ${y-7} L${x+11} ${y-7}" stroke="#FFFFFF" stroke-width="5"/>
      <path d="M${x-12} ${y+1} L${x+12} ${y+1}" stroke="${accent}" stroke-width="3"/>
      <path d="M${x-4} ${y-17} Q${x-1} ${y-19.5} ${x+3} ${y-18}" stroke="#D8DEE6" stroke-width="2" fill="none" stroke-linecap="round"/></g>`; },
    tyrolean: (ch,c,accent)=>{ const [x,y,r]=ch.hat; return `<g class="acc" transform="rotate(${r} ${x} ${y})">
      <path d="M${x-22} ${y+5} Q${x} ${y+12} ${x+22} ${y+5} Q${x+20} ${y-1} ${x+14} ${y} L${x-14} ${y} Q${x-20} ${y-1} ${x-22} ${y+5} Z" fill="#4F6B3A" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x-14} ${y+1} Q${x-15} ${y-16} ${x-3} ${y-17} Q${x} ${y-13} ${x+3} ${y-17} Q${x+15} ${y-16} ${x+14} ${y+1} Z" fill="#5E7D45" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x-14} ${y-3} Q${x} ${y+1} ${x+14} ${y-3}" stroke="#A8432F" stroke-width="3.2" fill="none"/>
      <path d="M${x+9} ${y-3} Q${x+20} ${y-22} ${x+15} ${y-30} Q${x+11} ${y-18} ${x+9} ${y-3} Z" fill="#F4F1E6" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M${x+10} ${y-5} Q${x+14} ${y-17} ${x+15} ${y-28}" stroke="${INK}" stroke-width="1" fill="none" opacity=".5"/></g>`; },
    beanie: (ch,c,accent)=>{ const [x,y,r]=ch.hat; return `<g class="acc" transform="rotate(${r} ${x} ${y})">
      <path d="M${x-19} ${y+3} Q${x-21} ${y-19} ${x} ${y-20} Q${x+21} ${y-19} ${x+19} ${y+3} Z" fill="${accent}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${x-8} ${y-18} L${x-8} ${y-2} M${x} ${y-20} L${x} ${y-2} M${x+8} ${y-18} L${x+8} ${y-2}" stroke="${K(accent,.25)}" stroke-width="1.6" stroke-linecap="round"/>
      <rect x="${x-21}" y="${y-2}" width="42" height="9" rx="4.5" fill="${W(accent,.35)}" stroke="${INK}" stroke-width="2"/>
      <circle cx="${x}" cy="${y-23}" r="6.5" fill="#F4F1E6" stroke="${INK}" stroke-width="2"/></g>`; },
    sunglasses: (ch,c,accent)=>{ const [[x1,y1],[x2,y2]]=ch.eyes, e=ch.er, w=e*2.6, h=e*1.9, y=(y1+y2)/2;
      const lens=(cx)=>`<rect x="${cx-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="${e*.7}" fill="${INK}" stroke="${INK}" stroke-width="2"/>
        <path d="M${cx-w/2+e*.55} ${y-h/2+e*.6} L${cx-w/2+e*1.25} ${y-h/2+e*.6}" stroke="#fff" stroke-width="2.2" opacity=".55" stroke-linecap="round"/>`;
      return `<g class="acc">${lens(x1)}${lens(x2)}
        <path d="M${x1+w/2} ${y-h*.18} Q${(x1+x2)/2} ${y-h*.42} ${x2-w/2} ${y-h*.18}" stroke="${INK}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <path d="M${x1-w/2} ${y-h*.2} L${x1-w/2-e*.7} ${y-h*.32}" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/><path d="M${x2+w/2} ${y-h*.2} L${x2+w/2+e*.7} ${y-h*.32}" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/></g>`; }
  };
  const HEAD_ITEMS = ["partyHat","crown","cap","flower","chefHat","tyrolean","beanie"];
  /* visuais especiais: trocam as cores do mascote */
  const SKINS = {golden: {body:"#E9B744", belly:"#FFF3CC", line:"#86600F", extra:"#C9922A"}};
  const sparkles = s => s!=="golden" ? "" : `<g class="gold-spark" fill="#FFF7D6" stroke="#C9922A" stroke-width="1.2">${[[30,48,6],[134,58,5],[128,124,4]].map(([x,y,r])=>`<path d="M${x} ${y-r} L${x+r*.3} ${y-r*.3} L${x+r} ${y} L${x+r*.3} ${y+r*.3} L${x} ${y+r} L${x-r*.3} ${y+r*.3} L${x-r} ${y} L${x-r*.3} ${y-r*.3} Z"/>`).join("")}</g>`;

  /* reflexo de luz: um arco claro no alto da cabeça, igual em todos */
  const SHINE = {dino:[52,52,30], lumi:[50,56,28], foxy:[48,60,26], miko:[56,42,20], bloop:[34,98,30], roki:[50,56,24]};
  function shine(ch){ const id=Object.keys(CH).find(k=>CH[k]===ch), s=SHINE[id]; if(!s) return "";
    const [x,y,l]=s; return `<path d="M${x} ${y+l*.5} Q${x+2} ${y} ${x+l*.6} ${y-l*.25}" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".45"/>`; }

  function render(id, mood="idle", opts={}){
    const ch = CH[id]; if (!ch) return "";
    const m = MOODS[mood] || MOODS.idle;
    const accent = (typeof MASCOTS!=="undefined" && MASCOTS[id]) ? MASCOTS[id].pal.accent : ch.colors.line;
    const k = "m"+(++uid)+"_", skin = (opts.accessories||[]).find(a=>SKINS[a]);
    const c = {...ch.colors, ...(skin?SKINS[skin]:{}), id:k, g:`url(#${k}body)`};
    const defs = `<defs>
      <radialGradient id="${k}body" cx="34%" cy="26%" r="85%"><stop offset="0" stop-color="${W(c.body,.38)}"/><stop offset=".5" stop-color="${c.body}"/><stop offset="1" stop-color="${K(c.body,.16)}"/></radialGradient>
      <radialGradient id="${k}iris" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="${W(c.iris,.35)}"/><stop offset="1" stop-color="${K(c.iris,.2)}"/></radialGradient>
      <radialGradient id="${k}glow"><stop offset="0" stop-color="${W(c.body,.5)}" stop-opacity=".55"/><stop offset="1" stop-color="${c.body}" stop-opacity="0"/></radialGradient></defs>`;
    const worn = (opts.accessories||[]).filter(a=>ACCESSORIES[a]);
    const party = m.fx==="party" && !worn.some(a=>HEAD_ITEMS.includes(a)) ? ["partyHat"] : [];   // chapéu de festa só se não estiver usando outro item na cabeça
    const acc = worn.concat(party).map(a=>ACCESSORIES[a](ch,c,accent)).join("");
    const blush = m.blush ? ch.eyes.map(([x,y],i)=>`<ellipse cx="${x+(i?ch.er*.6:-ch.er*.6)}" cy="${y+ch.er*1.45}" rx="${ch.er*.55}" ry="${ch.er*.32}" fill="#F28B8B" opacity=".38"/>`).join("") : "";
    const shadow = `<ellipse class="shadow" cx="80" cy="${ch.float?154:150}" rx="${ch.float?30:40}" ry="5" fill="${INK}" opacity=".12"/>`;
    return `<svg class="msvg mood-${mood} sp-${id}${ch.float?" floaty":""}" viewBox="0 0 160 160" role="img" aria-label="${(typeof MASCOTS!=="undefined"&&MASCOTS[id]?MASCOTS[id].name:id)}">
      ${defs}${shadow}<g class="whole">
        <g class="p-back">${ch.back(c)}</g>${ch.tail?`<g class="p-tail">${ch.tail(c)}</g>`:""}${ch.antenna?`<g class="p-ant">${ch.antenna(c)}</g>`:""}${ch.feet(c)}${ch.body(c)}${shine(ch)}
        ${brows(ch,c,m.brow)}${eyes(ch,c,m.eyes,c.body)}${blush}${mouth(ch,m.mouth)}
        ${arms(ch,c,m.arms)}${fx(ch,c,m.fx,accent)}${acc}${sparkles(skin)}
      </g></svg>`;
  }
  return {render, MOODS, CHARACTERS:CH, ACCESSORIES, HEAD_ITEMS, SKINS};
})();
function mascotSVG(id, mood="idle", opts={}){ return MascotArt.render(id, mood, opts); }
