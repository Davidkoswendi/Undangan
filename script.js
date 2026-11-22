/* ===== ISI DATA UNDANGAN DI SINI ===== */
const C={
  bride:'Ica', groom:'Syamsul',
  date:'2026-12-01T09:00:00+07:00',
  verse:'“Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).” (QS. Adz-Dzariyat: 49)',
  story:'Assalamu’alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridha Allah SWT, kami mengundang Anda untuk menyaksikan akad pernikahan kami.',
  time:'09.00',
  /* Ayat pernikahan (bagian "Ayat Pernikahan"): t = isi ayat, s = sumber. Tambah/ubah sesuka hati */
  ayat:[
    {t:'Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan juga orang-orang yang layak (menikah) dari hamba-hamba sahayamu yang laki-laki dan perempuan. Jika mereka miskin, Allah akan memberi kemampuan kepada mereka dengan karunia-Nya. Dan Allah Maha Luas (pemberian-Nya), Maha Mengetahui.',s:'QS. An-Nur: 32'}
  ],
  /* Mempelai: tambahkan p:'Putra dari Bapak ... & Ibu ...' kalau mau menampilkan orang tua */
  couple:[{n:'Ica',r:'Mempelai Wanita'},{n:'Syamsul',r:'Mempelai Pria'}],
  ceremony:{place:'Masjid Kampus UPI Cibiru, Cibiru, Bandung',map:'https://maps.google.com/?q=Masjid+Kampus+UPI+Cibiru'},
  music:'musik/lagu.mp3', // taruh file lagu di folder "musik/"
  /* FIREBASE (pesan tamu tersinkron di semua perangkat). Isi dari Firebase Console > Project settings > Your apps > Web app.
     Kalau apiKey/projectId dikosongkan, pesan hanya tersimpan di perangkat masing-masing. */
  firebase:{apiKey:'AIzaSyAAp5gFSFzDbLkDbqwYSRhfACHoJ6-HLUo',authDomain:'AIzaSyAAp5gFSFzDbLkDbqwYSRhfACHoJ6-HLUo',projectId:'undangan-99c41',storageBucket:'undangan-99c41.firebasestorage.app',messagingSenderId:'166236902839',appId:'1:166236902839:web:86a160fc17412fc0174432',collection:'pesan'},
  /* FOTO: taruh file di folder "foto/" lalu samakan nama file di bawah.
     Kalau file belum ada, otomatis tampil kotak biru (tidak error). */
  heroCap:'Ica & Syamsul, bersama selamanya',
  photos:{
    cover:'foto/galeri-3.jpg', hero:'foto/hero.jpg', story:'foto/kisah.jpg', details:'foto/detail.jpg',
    ceremony:'foto/akad.jpg', gallery:'foto/galeri-banner.jpg', rsvp:'foto/pesan.jpg',
    /* Galeri: src = nama file, cap = caption yang tampil di bawah foto & saat diperbesar */
    g:[
      {src:'foto/galeri-1.jpg', cap:'Pertemuan pertama kami'},
      {src:'foto/galeri-2.jpg', cap:'Tawa yang selalu ada'},
      {src:'foto/galeri-3.jpg', cap:'Saling menggenggam'},
      {src:'foto/galeri-4.jpg', cap:'Perjalanan berdua'},
      {src:'foto/galeri-5.jpg', cap:'Hari lamaran'},
      {src:'foto/galeri-6.jpg', cap:'Menuju hari bahagia'}
    ]
  }
};
/* ===================================== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const D=new Date(C.date),B=C.bride,G=C.groom;
const fmt=(o)=>D.toLocaleDateString('id-ID',o);
$('#mono1').innerHTML=$('#mono2').innerHTML=B[0]+'&amp;'+G[0];
$('#names1').textContent=B+' & '+G;$('#names2').innerHTML=[...(B+' & '+G)].map((c,i)=>`<span class="${c=='&'?'amp':''}" style="--i:${i}">${c==' '?'&nbsp;':c}</span>`).join('');$('#mq').innerHTML=Array(8).fill(B+' & '+G+' ✦ '+fmt({day:'numeric',month:'long',year:'numeric'})+' ✦ ').join('');
$('#names3').textContent=B+' & '+G;
$('#wd').textContent=fmt({weekday:'long'}).toUpperCase();$('#dd').textContent=D.getDate();$('#mo').textContent=fmt({month:'long'}).toUpperCase()+' '+D.getFullYear();
$('#fDate').textContent=$('#cdate').textContent=fmt({day:'numeric',month:'long',year:'numeric'});
$('#verse').textContent=C.verse;$('#story').textContent=C.story;
const dl=fmt({weekday:'long',day:'numeric',month:'long',year:'numeric'});
$('#cDate').textContent=dl+' · pukul '+C.time+' WIB';
$('#cPlace').textContent=C.ceremony.place;
$('#cMap').href=C.ceremony.map;const z=d=>d.toISOString().replace(/[-:]|\.\d{3}/g,'');$('#cal').href='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('Pernikahan '+B+' & '+G)+'&dates='+z(D)+'/'+z(new Date(+D+108e5))+'&location='+encodeURIComponent(C.ceremony.place);
$('#prog').innerHTML=C.ayat.map(a=>`<li><p>“${a.t}”</p><small>${a.s}</small></li>`).join('');
$('#tl').innerHTML=C.couple.map((c,i)=>`${i?'<div class="and">&amp;</div>':''}<div class="mp"><span class="sans">${c.r}</span><div class="script">${c.n}</div>${c.p?`<p>${c.p}</p>`:''}</div>`).join('');
const gs=C.photos.g;
/* galeri perjalanan: foto + pesawat jalur titik-titik. Rasio bisa diganti per foto: {src,cap,r:'16/9'} */
const LAY=[{r:'4/3',w:100,s:'c'},{r:'3/4',w:62,s:'l'},{r:'3/4',w:62,s:'r'},{r:'1/1',w:78,s:'l'},{r:'4/3',w:100,s:'c'},{r:'4/5',w:68,s:'r'}];
const gx=l=>l.s=='l'?l.w/2:l.s=='r'?100-l.w/2:50;
const cl=i=>{const o=i%2,c=(x,y,s,dl)=>`<g transform="translate(${x} ${y}) scale(${s})"><g class="cl" style="animation-delay:${dl}s"><circle cx="0" cy="0" r="8"/><circle cx="10" cy="-5" r="10"/><circle cx="21" cy="0" r="8"/><rect x="-8" y="0" width="37" height="8" rx="4"/></g></g>`;return c(o?18:214,26,.8,-2)+c(o?196:40,112,.6,-5)};
const route=(a,b,i)=>{const sx=Math.round(gx(a)*3),ex=Math.round(gx(b)*3);let d;
 if(Math.abs(ex-sx)<40){const k=(i%2?-1:1)*85;d=`M${sx} 6C${sx+k} 45 ${ex-k} 105 ${ex} 144`}else d=`M${sx} 6C${sx} 85 ${ex} 65 ${ex} 144`;
 return `<div class="rt" aria-hidden="true"><svg viewBox="0 0 300 150"><defs><mask id="mk${i}" maskUnits="userSpaceOnUse" x="-20" y="-20" width="340" height="190"><path class="mk" d="${d}"/></mask></defs>${cl(i)}<path class="trk" d="${d}"/><path class="dots" d="${d}" mask="url(#mk${i})"/><g class="pl"><g class="bob"><path class="pw" d="M7-2.6L-7-20-12-20-5-2.6ZM7 2.6L-7 20-12 20-5 2.6Z"/><path class="pw" d="M-12-2L-19-9-22-9-18-1.5ZM-12 2L-19 9-22 9-18 1.5Z"/><path class="pfu" d="M21 0C21-2.4 15-3.4 9-3.4H-15C-19-3.4-22-1.6-22 0S-19 3.4-15 3.4H9C15 3.4 21 2.4 21 0Z"/><path class="pwn" d="M10 0H-12"/><path class="pk" d="M15-1.8C17-1.4 17.5-.5 17.5 0S17 1.4 15 1.8Z"/><circle class="pe" cx="-1" cy="-10.5" r="2.2"/><circle class="pe" cx="-1" cy="10.5" r="2.2"/></g></g></svg></div>`};
const gl=gs.map((s,i)=>({...LAY[i%LAY.length],...(s.r?{r:s.r}:{})}));
$('#grid').innerHTML=gs.map((s,i)=>{const l=gl[i],t=(i%2?1:-1)*(1+(i%3)*.5);
 return `<figure class="pic rv" data-s="${l.s}" tabindex="0" role="button" aria-label="Perbesar foto" style="--w:${l.w}%;--ar:${l.r};--tilt:${t}deg"><div class="ph" data-g="${i}"></div></figure>`+(i<gs.length-1?route(l,gl[i+1],i):'')}).join('')+'<div class="tend rv"><span>♥</span><div class="script">Dan perjalanan kami berlanjut…</div></div>';
const rts=$$('.rt').map(r=>{const sv=r.firstElementChild,dots=sv.querySelector('.dots'),L=dots.getTotalLength(),mk=sv.querySelector('.mk');mk.style.strokeDasharray=L;return{r,dots,mk,L,pl:sv.querySelector('.pl')}});
const fly=()=>rts.forEach(o=>{const b=o.r.getBoundingClientRect();let p=RM?1:Math.min(1,Math.max(0,(innerHeight*.8-b.top)/(b.height+innerHeight*.3)));
 const l=p*o.L,q=o.dots.getPointAtLength(l),a=o.dots.getPointAtLength(Math.max(0,l-3)),c=o.dots.getPointAtLength(Math.min(o.L,l+3)),ang=Math.atan2(c.y-a.y,c.x-a.x);
 const was=o.p;o.p=p;
 if(was!==undefined&&was<.97&&p>=.97&&b.bottom>0&&b.top<innerHeight){const r=o.pl.getBoundingClientRect();burst(r.left+r.width/2+Math.cos(ang)*14,r.top+r.height/2+Math.sin(ang)*14,28,1,ang+Math.PI)}
 o.mk.style.strokeDashoffset=o.L-l;
 o.pl.setAttribute('transform',`translate(${q.x} ${q.y}) rotate(${ang*180/Math.PI}) scale(.85)`);
 o.pl.style.opacity=p>.005&&p<.995?1:0});
$('#heroCap').textContent=C.heroCap;
/* guest name from #Nama-Tamu */
try{const h=decodeURIComponent(location.hash.slice(1)).replace(/-/g,' ').trim();if(h)$('#guest').textContent=h;$('#fn').value=h}catch(e){}
/* photos */
const setBg=(e,s)=>{if(!s){e.classList.add('miss');return}const i=new Image();i.decoding='async';i.onerror=()=>e.classList.add('miss');
 /* foto ditaruh di layer sendiri lalu di-crossfade di atas placeholder (tanpa lompatan) */
 i.onload=()=>{const show=()=>{const l=document.createElement('i');l.className='pi';l.style.backgroundImage=`url("${s}")`;e.appendChild(l);
  requestAnimationFrame(()=>requestAnimationFrame(()=>l.classList.add('on')));setTimeout(()=>e.classList.add('has'),RM?0:1500)};
  (i.decode?i.decode():Promise.resolve()).then(show,show)};i.src=s};
$$('.ph[data-k]').forEach(e=>setBg(e,C.photos[e.dataset.k]));
$$('.ph[data-g]').forEach(e=>setBg(e,gs[e.dataset.g].src));
/* torn paper edges */
function edge(top){const pts=[];for(let i=0;i<=24;i++){const y=Math.round(3+Math.random()*13);pts.push(`${(i/24*100).toFixed(1)}% ${top?y+'px':'calc(100% - '+y+'px)'}`)}return pts}
$$('.tear').forEach(e=>{const t=e.dataset.t||'b';let p=[];
 const T=edge(true),Bm=edge(false).reverse();
 p=(t.includes('t')?T:['0 0','100% 0']).concat(t.includes('b')?Bm:['100% 100%','0 100%']);
 e.style.clipPath=`polygon(${p.join(',')})`});
/* hearts */
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const burst=(x,y,n=8,big,dir)=>{if(RM)return;for(let i=0;i<n;i++){const h=document.createElement('i');h.className='bh';h.textContent=Math.random()<.8?'♥':'✿';const a=dir===undefined?Math.random()*6.28:dir+(Math.random()-.5)*1.5,d=60+Math.random()*(big?260:90),lift=dir===undefined?40:0;h.style.cssText=`left:${x}px;top:${y}px;color:${Math.random()<.5?'var(--blue)':'var(--sky)'};font-size:${12+Math.random()*(big?26:12)}px`;document.body.appendChild(h);h.animate([{transform:'translate(-50%,-50%) scale(.3)',opacity:1},{transform:`translate(calc(-50% + ${Math.cos(a)*d}px),calc(-50% + ${Math.sin(a)*d-lift}px)) scale(1) rotate(${Math.random()*80-40}deg)`,opacity:0}],{duration:1100+Math.random()*700,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>h.remove()}};
addEventListener('pointerdown',e=>{if(document.body.classList.contains('go')&&!e.target.closest('input,textarea,select'))burst(e.clientX,e.clientY,5)});
for(let i=0;i<16;i++){const h=document.createElement('i');h.className='hrt';h.textContent='♥';h.style.cssText=`left:${Math.random()*100}%;font-size:${10+Math.random()*18}px;--x:${Math.random()*80-40}px;--r:${Math.random()*60-30}deg;animation-duration:${6+Math.random()*7}s;animation-delay:${Math.random()*8}s`;$('#chr').appendChild(h)}
/* open invitation */
const petalsOn=()=>{for(let i=0;i<8;i++){const p=document.createElement('i');p.className='petal hz';p.textContent='✦';p.style.cssText=`left:${Math.random()*100}vw;--x:${(Math.random()*160-80)}px;animation-duration:${7+Math.random()*7}s;animation-delay:${Math.random()*6}s;transform:scale(${.6+Math.random()*.8})`;document.body.appendChild(p)}};
/* ===== BUKA UNDANGAN: Two Finger Touch =====
   HP: sentuh & tahan dengan dua jari (±1,5 detik). Desktop: tahan ← dan → bersamaan (atau tahan Spasi / tahan klik mouse). */
(()=>{
const cover=$('#cover'),cv=$('#fx'),g=cv.getContext('2d'),hi=$('#hi'),sub=$('#sub'),skip=$('#skip');
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const HOLD=3.2,TRACE=1.9,FILL=1.5,CLICK=1,OPEN=1.25,TAU=Math.PI*2;
const rnd=(a,b)=>a+Math.random()*(b-a),clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),lerp=(a,b,k)=>a+(b-a)*k;
const E={io:k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,out:k=>1-Math.pow(1-k,3),back:k=>{const c=1.70158;return 1+(c+1)*Math.pow(k-1,3)+c*Math.pow(k-1,2)}};
const vib=v=>{try{navigator.vibrate&&navigator.vibrate(v)}catch(_){}};

/* ---- SOUND (WebAudio): pad hangat + lonceng lembut + reverb, tanpa file ---- */
const AC=window.AudioContext||window.webkitAudioContext;
let ac=null,mix=null,wet=null,ch=null;
const mkVerb=()=>{const n=Math.floor(ac.sampleRate*3.2),b=ac.createBuffer(2,n,ac.sampleRate);
 for(let c=0;c<2;c++){const d=b.getChannelData(c);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2.6)}
 const cv=ac.createConvolver();cv.buffer=b;return cv};
const sfxInit=()=>{if(!AC)return;try{if(!ac){ac=new AC();const cp=ac.createDynamicsCompressor();cp.threshold.value=-18;cp.ratio.value=3;
 mix=ac.createGain();mix.gain.value=.75;const dry=ac.createGain();dry.gain.value=.8;wet=ac.createGain();wet.gain.value=.55;
 const vb=mkVerb(),lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=5200;
 mix.connect(dry);mix.connect(vb);vb.connect(wet);dry.connect(lp);wet.connect(lp);lp.connect(cp);cp.connect(ac.destination)}
 if(ac.state==='suspended')ac.resume()}catch(_){ac=null}};
const bell=(f,t,d,v)=>{if(!ac)return;const t0=ac.currentTime+t;
 [[1,1],[2,.28],[3,.08],[2.76,.05]].forEach(([m,a],i)=>{const o=ac.createOscillator(),gn=ac.createGain();o.type='sine';o.frequency.value=f*m;
  const dd=d/(1+i*.6);gn.gain.setValueAtTime(.0001,t0);gn.gain.linearRampToValueAtTime(v*a,t0+.03);gn.gain.exponentialRampToValueAtTime(.0001,t0+dd);
  o.connect(gn);gn.connect(mix);o.start(t0);o.stop(t0+dd+.1)})};
const pad=(fs,t,d,v,at)=>{if(!ac)return;const t0=ac.currentTime+t;at=at||d*.4;
 fs.forEach((f,i)=>{[-4,4].forEach(dt=>{const o=ac.createOscillator(),gn=ac.createGain();o.type=i?'sine':'triangle';o.frequency.value=f;o.detune.value=dt;
  gn.gain.setValueAtTime(.0001,t0);gn.gain.linearRampToValueAtTime(v/fs.length,t0+at);gn.gain.linearRampToValueAtTime(.0001,t0+d);
  o.connect(gn);gn.connect(mix);o.start(t0);o.stop(t0+d+.1)})})};
const chargeOn=()=>{if(!ac||ch)return;const lp=ac.createBiquadFilter(),og=ac.createGain(),os=[];
 lp.type='lowpass';lp.frequency.value=500;og.gain.value=0;
 [[196,'triangle',-5],[196,'sine',5],[293.66,'sine',0],[392,'sine',-3]].forEach(([f,ty,dt])=>{const o=ac.createOscillator();o.type=ty;o.frequency.value=f;o.detune.value=dt;o.connect(lp);o.start();os.push(o)});
 lp.connect(og);og.connect(mix);ch={os,og,lp}};
const chargeSet=k=>{if(!ch)return;const t0=ac.currentTime;ch.og.gain.setTargetAtTime(.1*Math.min(1,k*1.6),t0,.35);ch.lp.frequency.setTargetAtTime(500+2200*k,t0,.35)};
const chargeOff=()=>{if(!ch)return;const c=ch;ch=null;c.og.gain.setTargetAtTime(0,ac.currentTime,.4);setTimeout(()=>{try{c.os.forEach(o=>o.stop())}catch(_){}},2200)};
const sfx={
 tick:()=>bell(1568,0,1.4,.035),
 meet:()=>{pad([196,293.66,392],0,3.2,.16,.7);bell(523.25,0,3,.12);bell(783.99,.12,3.2,.09)},
 sparkle:()=>[659.25,783.99,987.77,1318.5].forEach((f,i)=>bell(f,.25+i*.34,2.8,.065)),
 riser:()=>{pad([261.63,329.63,392,523.25],0,FILL+1.2,.14,FILL*.9)},
 unlock:()=>{pad([196,261.63,329.63,392],0,CLICK+.8,.14,CLICK);
  bell(98,CLICK,1.6,.16);bell(196,CLICK,1.8,.1);bell(1046.5,CLICK,1.6,.07);
  [3951,3136,2637,3520].forEach((f,i)=>bell(f,CLICK+.02*i,.8,.025));
  [1318.5,1568,1760,2093,2349.3,2637].forEach((f,i)=>bell(f,CLICK+.1+i*.18,2.4,.045));
  pad([130.81,196,261.63,329.63,392],CLICK,4.5,.2,.6)},
 chime:()=>{bell(659.25,0,2.4,.1);bell(987.77,.18,2.8,.08);bell(1318.5,.38,3,.06)}
};
const idle=f=>window.requestIdleCallback?requestIdleCallback(f,{timeout:700}):setTimeout(f,80);
let opened=false,ph='idle';

/* ---- buka: cover terbelah jadi dua lembar ---- */
let prepd=0;
const prep=()=>{if(prepd)return;prepd=1;const cin=cover.querySelector(':scope > .cin'),w=cover.clientWidth+'px';
 const mk=()=>{const c=cin.cloneNode(true);c.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));c.removeAttribute('id');c.setAttribute('aria-hidden','true');c.setAttribute('inert','');c.style.width=w;c.style.visibility='hidden';return c};
 cover.querySelector('.pn.l').appendChild(mk());cover.querySelector('.pn.r').appendChild(mk())};
const openInvite=()=>{if(opened)return;opened=true;if(ph==='idle')ph='done';
 prep();const cin=cover.querySelector(':scope > .cin');
 cover.querySelectorAll('.pn .cin').forEach(n=>n.style.visibility='');
 cin.style.display='none';cover.classList.add('open');
 document.body.classList.remove('lock');document.body.classList.add('go');window.scrollTo(0,0);
 setTimeout(petalsOn,2600);setTimeout(startRv,1500);setTimeout(()=>cover.style.display='none',3800);
 $('#mus').style.display='block';
 if(C.music){a.play().then(()=>mus(true)).catch(()=>mus(false))}else mus(false);
 const T3=['pointerup','keyup','click'],again=e=>{T3.forEach(t=>removeEventListener(t,again,true));if(e.target.closest&&e.target.closest('#mus'))return;if(C.music&&a.paused)a.play().then(()=>mus(true)).catch(()=>{})};
 T3.forEach(t=>addEventListener(t,again,true))};
skip.onclick=()=>{sfxInit();sfx.chime();openInvite()};
let au=0;const unlock=()=>{sfxInit();if(au||!C.music)return;au=1;try{a.muted=true;const r=a.play();r&&r.then(()=>{if(!opened){a.pause();a.currentTime=0}a.muted=false}).catch(()=>{a.muted=false})}catch(_){a.muted=false}};

const SUBT=fine?'Tahan <kbd id="kL">←</kbd><kbd id="kR">→</kbd> bersamaan<br><em>atau tahan Spasi</em>':'Sentuh &amp; tahan layar dengan dua jari';
sub.innerHTML=SUBT;const kL=$('#kL'),kR=$('#kR');
if(RM){skip.classList.add('show');$('#hint').textContent='Ketuk tombol untuk membuka undangan.';sub.textContent='';cv.style.display='none';return}

/* ---- ukuran & bentuk hati ---- */
let W,H,DPR,u,cyD,hcx,hcy,mg;
const size=()=>{DPR=Math.min(1.25,devicePixelRatio||1);W=cv.clientWidth||innerWidth;H=cv.clientHeight||innerHeight;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);u=Math.min(W*.46,240)/32;cyD=H*.5-7.4*u;hcx=W/2;hcy=cyD+7.4*u;mg=Math.max(28,W*.075)};
size();addEventListener('resize',size);
const hx=(t,sc)=>{const s=Math.sin(t),b=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))+5;return[hcx+16*s*s*s*u*sc,hcy+(b-7.4)*u*sc]};
const hadd=(sc,t0,t1)=>{const n=Math.max(2,Math.ceil(Math.abs(t1-t0)*28));for(let i=0;i<=n;i++){const q=hx(lerp(t0,t1,i/n),sc);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])}};

/* ---- sprite cahaya ---- */
const spr=(...st)=>{const s=document.createElement('canvas');s.width=s.height=128;const x=s.getContext('2d'),r=x.createRadialGradient(64,64,0,64,64,64);st.forEach(q=>r.addColorStop(q[0],q[1]));x.fillStyle=r;x.fillRect(0,0,128,128);return s};
const SPR={
 w:spr([0,'rgba(255,255,255,1)'],[.18,'rgba(215,232,255,.85)'],[.45,'rgba(110,165,255,.32)'],[1,'rgba(40,100,255,0)']),
 b:spr([0,'rgba(170,205,255,.9)'],[.3,'rgba(70,130,255,.4)'],[1,'rgba(30,80,230,0)']),
 g:spr([0,'rgba(255,244,200,1)'],[.3,'rgba(255,205,100,.5)'],[1,'rgba(255,180,60,0)']),
 ink:spr([0,'rgba(26,75,181,.95)'],[.2,'rgba(40,100,220,.5)'],[1,'rgba(40,100,220,0)'])};
SPR.st=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d'),r=x.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,'rgba(255,255,255,.9)');r.addColorStop(.2,'rgba(190,215,255,.45)');r.addColorStop(1,'rgba(90,140,255,0)');x.fillStyle=r;x.fillRect(0,0,128,128);
 x.fillStyle='#fff';x.beginPath();x.moveTo(64,4);x.quadraticCurveTo(67,61,124,64);x.quadraticCurveTo(67,67,64,124);x.quadraticCurveTo(61,67,4,64);x.quadraticCurveTo(61,61,64,4);x.fill();return c})();
let night=0;
/* cahaya "ganda": biru pekat di atas kertas terang, putih menyala di atas layar gelap */
const glow=(x,y,r,al,hot)=>{
 if(night<.99){g.globalCompositeOperation='source-over';g.globalAlpha=clamp(al*(1-night));g.drawImage(SPR.ink,x-r,y-r,r*2,r*2)}
 if(night>.01){g.globalCompositeOperation='lighter';g.globalAlpha=clamp(al*night);g.drawImage(hot?SPR.w:SPR.b,x-r,y-r,r*2,r*2)}};
const core=(x,y,r,al)=>{g.globalCompositeOperation='source-over';g.globalAlpha=clamp(al);g.fillStyle=`rgb(${lerp(26,255,night)|0},${lerp(75,255,night)|0},${lerp(181,255,night)|0})`;g.beginPath();g.arc(x,y,Math.max(.1,r),0,TAU);g.fill()};

/* ---- input: 2 jari / ← → / Spasi / tahan klik ---- */
const ptrs=new Map(),keys=new Set(),KEYS=['ArrowLeft','ArrowRight','KeyA','KeyD','Space','Enter'];
const live=()=>ph==='idle'&&!opened;
cover.addEventListener('pointerdown',e=>{if(!live()||e.button>0||e.target.closest('button'))return;e.preventDefault();ptrs.set(e.pointerId,{x:e.clientX,m:e.pointerType==='mouse'});unlock()});
cover.addEventListener('pointermove',e=>{const q=ptrs.get(e.pointerId);if(q)q.x=e.clientX});
const rel=e=>ptrs.delete(e.pointerId);addEventListener('pointerup',rel);addEventListener('pointercancel',rel);
addEventListener('keydown',e=>{if(!live()||(e.target.closest&&e.target.closest('button,input,textarea,a,select')))return;if(KEYS.includes(e.code)){e.preventDefault();keys.add(e.code);unlock()}});
addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',()=>{keys.clear();ptrs.clear()});
cover.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('gesturestart',e=>{if(!opened)e.preventDefault()});
const inp=()=>{let L=0,R=0;const t=[];ptrs.forEach(q=>{if(q.m)L=R=1;else t.push(q)});
 if(t.length>1)L=R=1;else if(t.length===1){if(t[0].x<W/2)L=1;else R=1}
 const kl=keys.has('ArrowLeft')||keys.has('KeyA'),kr=keys.has('ArrowRight')||keys.has('KeyD'),ks=keys.has('Space')||keys.has('Enter');
 return{L:!!(L||kl||ks),R:!!(R||kr||ks),kl:kl||ks,kr:kr||ks}};

/* ---- partikel ---- */
const sp=[],pt=[],rg=[],stars=Array.from({length:44},()=>({x:Math.random(),y:Math.random(),r:rnd(1.6,4.6),p:rnd(0,TAU),vx:rnd(-.012,.012),vy:rnd(-.035,-.008),sw:rnd(4,16),sp:rnd(.4,1.2)}));
const spark=o=>{if(sp.length<130)sp.push({k:0,vx:0,vy:0,d:2,s:7,...o,L:o.l})};
const gather=(cx,cy,pe)=>{if(sp.length<130){const l=rnd(.5,.9);sp.push({k:2,a:rnd(0,TAU),w:rnd(2,4)*(Math.random()<.5?-1:1),r0:rnd(110,300)*(.7+.6*pe),cx,cy,l,L:l,s:rnd(4,8),x:-99,y:-99})}};
const PAL=['#1a4bb5','#2f6bd8','#4f8cff','#7aa6e0','#a9c8f5','#ffffff'];
const petal=(x,y,vx,vy,s)=>pt.push({x,y,vx,vy,s,rot:rnd(0,TAU),vr:rnd(-4,4),fp:rnd(0,TAU),fs:rnd(2,5),sw:rnd(20,50),sp:rnd(1,2.2),ph:rnd(0,TAU),c:PAL[(Math.random()*PAL.length)|0],h:Math.random()<.18,l:rnd(7,11),age:0});

/* ---- state ---- */
let fps=60,T=0,p=0,pe=0,eL=0,eR=0,dotsIn=0,tT=0,tF=0,tB=0,tb=0,msg=0,hv=1;
/* kedua titik MUTER-MUTER (spiral) mengelilingi pusat, makin lama makin dekat, lalu bergabung */
const SPIN=1.5,SPIN_AT=.58;
const dotPos=s=>{const q0=E.io(p),e=s<0?eL:eR,q=Math.min(1,q0+.05*e*(1-q0)),
 r=(W/2-mg)*(1-q),
 sw=E.io(clamp((q-SPIN_AT)/(1-SPIN_AT))),
 an=(s<0?Math.PI:0)+sw*TAU*SPIN,
 flt=Math.sin(T*1.1+(s<0?0:1.9))*5*(1-sw)*(1-p);
 return[W/2+Math.cos(an)*r,cyD+Math.sin(an)*r*.55+flt]};

const meet=()=>{ph='trace';tT=T;p=1;pe=1;vib([18,30,50]);chargeOff();sfx.meet();sfx.sparkle();idle(prep);
 for(let i=0;i<16;i++){const an=rnd(0,TAU),v=rnd(80,260);spark({x:W/2,y:cyD,vx:Math.cos(an)*v,vy:Math.sin(an)*v,l:rnd(.5,1),s:rnd(5,10),d:2.2})}
 rg.push({d:0,t:0,dur:.9,R:Math.min(W,H)*.5,w:3},{d:.12,t:0,dur:.8,R:Math.min(W,H)*.3,w:2})};
const blast=()=>{ph='blast';tB=T;tb=0;vib([20,40,30]);sfx.unlock();const k=fps<42?.5:1;
 setTimeout(()=>{if(ph!=='blast')return;vib(60);for(let i=0;i<Math.round(34*k);i++){const an=rnd(0,TAU),v=rnd(120,520);spark({x:hcx,y:hcy,vx:Math.cos(an)*v,vy:Math.sin(an)*v,l:rnd(.7,1.3),s:rnd(8,16),d:2,star:1,rot:rnd(0,TAU),vr:rnd(-4,4)})}},CLICK*1000);
 rg.push({d:CLICK,t:0,dur:1.2,R:Math.max(W,H)*.7,w:3},{d:CLICK+.12,t:0,dur:1,R:Math.max(W,H)*.4,w:1.5})};

const update=dt=>{T+=dt;
 {const cyN=cyD/H,rot=(ph==='idle'?pe:.6)*.3*dt,c=Math.cos(rot),sn=Math.sin(rot);stars.forEach(s=>{const px=(s.x-.5)*W,py=(s.y-cyN)*H;s.x=(px*c-py*sn)/W+.5+s.vx*dt;s.y=(px*sn+py*c)/H+cyN+s.vy*dt;if(s.y<-.05)s.y=1.05;if(s.y>1.05)s.y=-.05;if(s.x<-.05)s.x=1.05;if(s.x>1.05)s.x=-.05})}
 const I=inp();eL+=((I.L?1:0)-eL)*Math.min(1,dt*9);eR+=((I.R?1:0)-eR)*Math.min(1,dt*9);
 if(kL){kL.classList.toggle('on',I.kl);kR.classList.toggle('on',I.kr)}
 if(ph==='idle'){
  if(T>1.9)dotsIn=Math.min(1,dotsIn+dt/1.1);
  const both=I.L&&I.R&&dotsIn>.35,was=p;
  p=clamp(p+(both?dt/HOLD:-dt/1.4));pe=E.io(p);night=E.io(clamp(p*2.4));
  if((was<.34&&p>=.34)||(was<.67&&p>=.67)){vib(8);sfx.tick()}
  if(p>.03){chargeOn();chargeSet(p)}else if(ch&&p<=.004)chargeOff();
  if(was<.5&&p>=.5)idle(prep);
  const A=E.out(dotsIn);
  if(A>.05)[-1,1].forEach(s=>{const q=dotPos(s),e=s<0?eL:eR;if(Math.random()<dt*(7+90*pe+26*e)*A)spark({x:q[0]+rnd(-5,5),y:q[1]+rnd(-5,5),vx:rnd(-45,45),vy:rnd(-60,25),l:rnd(.6,1.2),s:rnd(5,11),d:1.6})});
  if(p>.22&&Math.random()<dt*(p-.2)*70)gather(W/2,cyD,pe);
  const h=1-clamp(p*5);if(Math.abs(h-hv)>.01){hv=h;hi.style.opacity=h}
  if(!fine){const m=(I.L!==I.R)?1:0;if(m!==msg){msg=m;sub.innerHTML=m?'Tambahkan satu jari lagi ✦':SUBT}}
  if(p>=1)meet();
 }else if(ph==='trace'){night=1;const tk=clamp((T-tT)/TRACE),s=E.io(tk)*Math.PI;
  [-1,1].forEach(d=>{const q=hx(d*s,1);if(Math.random()<dt*70)spark({x:q[0],y:q[1],vx:rnd(-60,60),vy:rnd(-60,60),l:rnd(.5,1),s:rnd(5,11),d:2})});
  if(Math.random()<dt*50)gather(hcx,hcy,1);
  if(tk>=1){ph='fill';tF=T;vib(14);sfx.riser()}
 }else if(ph==='fill'){night=1;if(Math.random()<dt*45)gather(hcx,hcy,1);if(T-tF>=FILL)blast()
 }else if(ph==='blast'){tb=T-tB;night=1-E.io(clamp((tb-OPEN)/1.8));
  if(!opened&&tb>=OPEN)openInvite();
  if(tb>CLICK+2&&!sp.length&&!pt.length&&!rg.length)ph='done'}
 for(let i=sp.length;i--;){const s=sp[i];s.l-=dt;if(s.l<=0){sp.splice(i,1);continue}
  if(s.k===2){s.a+=s.w*dt;const r=s.r0*Math.pow(s.l/s.L,1.5);s.x=s.cx+Math.cos(s.a)*r;s.y=s.cy+Math.sin(s.a)*r*.9}
  else{const f=Math.exp(-s.d*dt);s.vx*=f;s.vy*=f;s.x+=s.vx*dt;s.y+=s.vy*dt}}
 for(let i=pt.length;i--;){const q=pt[i];q.age+=dt;const f=Math.exp(-1.7*dt);q.vx*=f;q.vy=q.vy*f+170*dt;q.x+=(q.vx+Math.sin(T*q.sp+q.ph)*q.sw)*dt;q.y+=q.vy*dt;q.rot+=q.vr*dt;if(q.y>H+60||q.age>q.l)pt.splice(i,1)}
 for(let i=rg.length;i--;){const r=rg[i];if(r.d>0){r.d-=dt;continue}r.t+=dt;if(r.t>r.dur)rg.splice(i,1)}};

/* ---- gambar ---- */
const outline=(s,al,sc=1)=>{g.globalCompositeOperation='lighter';g.lineCap=g.lineJoin='round';
 [[18,.1,'80,140,255'],[8,.28,'120,175,255'],[2.6,1,'255,255,255']].forEach(q=>{g.strokeStyle=`rgba(${q[2]},${q[1]*al})`;g.lineWidth=q[0];g.beginPath();hadd(sc,0,s);hadd(sc,0,-s);g.stroke()})};
const tiny=(s)=>{g.beginPath();for(let i=0;i<=24;i++){const t=i/24*TAU,sn=Math.sin(t),x=16*sn*sn*sn,y=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))-1;i?g.lineTo(x*s/16,y*s/16):g.moveTo(x*s/16,y*s/16)}g.closePath()};

/* ---- hati dari bintik cahaya ---- */
const hu=t=>{const q=Math.sin(t),b=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))+5;return[16*q*q*q,b-7.4]};
const poly=Array.from({length:240},(_,i)=>hu(i/240*TAU));
const inside=(x,y)=>{let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c}return c};
const dots=[];while(dots.length<240){const x=rnd(-16.5,16.5),y=rnd(-14.5,15);if(!inside(x,y))continue;
 const r0=Math.random();dots.push({x,y,r:rnd(.22,.65),ph:rnd(0,TAU),fs:rnd(1.2,3.4),dl:Math.min(1,Math.hypot(x,y-1)/17+rnd(0,.25)),cl:r0<.14?2:r0<.55?0:1,sp:rnd(.3,1)})}
const dotFill=(sc,reveal,rel,al,boost=0)=>{g.globalCompositeOperation='lighter';
 for(const d of dots){const a0=clamp((reveal-d.dl*.6)/.4);if(a0<=0)continue;
  const tw=Math.min(1.5,(.4+.6*Math.abs(Math.sin(T*d.fs+d.ph)))*(1+boost));let x=d.x+Math.sin(T*d.fs*.7+d.ph)*.3,y=d.y+Math.cos(T*d.fs*.6+d.ph)*.3;
  if(rel>0){const dx=x,dy=y,dd=Math.hypot(dx,dy)||1,m=(1-Math.pow(1-rel,4))*(8+d.sp*34);x+=dx/dd*m;y+=dy/dd*m}
  const a=al*a0*tw*Math.pow(1-rel,1.3);if(a<.01)continue;const r=d.r*u*sc*(.8+.5*tw)*2.4;
  g.globalAlpha=clamp(a);g.drawImage(d.cl===2?SPR.g:d.cl?SPR.b:SPR.w,hcx+x*u*sc-r,hcy+y*u*sc-r,r*2,r*2)}};
/* garis hati dipecah jadi serpihan yang ikut terpental */
const shards=Array.from({length:72},(_,i)=>{const a=hu(-Math.PI+i/72*TAU),b=hu(-Math.PI+(i+1)/72*TAU),mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
 return{ax:a[0]-mx,ay:a[1]-my,bx:b[0]-mx,by:b[1]-my,mx,my,ang:Math.atan2(my,mx)+rnd(-.4,.4),sp:rnd(.5,1.25),spin:rnd(-5,5),dl:rnd(0,.07)}});
const shardsDraw=(sc,rel)=>{g.globalCompositeOperation='lighter';g.lineCap='round';const k=u*sc;
 for(const s of shards){const r=clamp((rel-s.dl)/(1-s.dl)),e=1-Math.pow(1-r,4),al=Math.pow(1-r,1.4);if(al<.02)continue;
  const dist=e*(10+s.sp*40),cx=s.mx+Math.cos(s.ang)*dist,cy=s.my+Math.sin(s.ang)*dist+r*r*5,rot=s.spin*e,co=Math.cos(rot),si=Math.sin(rot);
  const x0=hcx+(cx+s.ax*co-s.ay*si)*k,y0=hcy+(cy+s.ax*si+s.ay*co)*k,x1=hcx+(cx+s.bx*co-s.by*si)*k,y1=hcy+(cy+s.bx*si+s.by*co)*k;
  g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);
  g.strokeStyle=`rgba(120,175,255,${.2*al})`;g.lineWidth=9;g.stroke();g.strokeStyle=`rgba(255,255,255,${al})`;g.lineWidth=2.6;g.stroke()}};
const heartScene=(sc,al,rel,reveal,boost,glowA,osc)=>{if(rel<=0)outline(Math.PI,1,osc);else shardsDraw(sc,rel);
 const hr=18*u*sc;g.globalCompositeOperation='lighter';g.globalAlpha=al*glowA*.34;g.drawImage(SPR.b,hcx-hr*1.6,hcy-hr*1.6,hr*3.2,hr*3.2);
 dotFill(sc,reveal,rel,al,boost)};
const draw=()=>{
 g.setTransform(DPR,0,0,DPR,0,0);g.clearRect(0,0,W,H);g.globalAlpha=1;g.globalCompositeOperation='source-over';
 if(night>.003){const r=g.createRadialGradient(W/2,hcy,0,W/2,hcy,Math.hypot(W,H)*.62);r.addColorStop(0,`rgba(20,52,140,${.8*night})`);r.addColorStop(1,`rgba(4,10,38,${.92*night})`);g.fillStyle=r;g.fillRect(0,0,W,H);
  g.globalCompositeOperation='lighter';stars.forEach(s=>{const sx=s.x*W+Math.sin(T*s.sp+s.p)*s.sw,sy=s.y*H+Math.cos(T*s.sp*.8+s.p)*s.sw*.6;g.globalAlpha=night*(.25+.55*Math.abs(Math.sin(T*1.6+s.p)));g.drawImage(SPR.w,sx-s.r*2,sy-s.r*2,s.r*4,s.r*4)});g.globalCompositeOperation='source-over';g.globalAlpha=1}
 if(ph==='idle'){
  const A=E.out(dotsIn),a=dotPos(-1),b=dotPos(1);
  if(pe>.01){const R=60+pe*pe*Math.min(W,H)*.8;glow(W/2,cyD,R,clamp(.2+pe*.9),false);glow(W/2,cyD,R*.45,clamp(pe*pe*1.2),true)}
  if(A>.01){
   const col=`${lerp(26,150,night)|0},${lerp(75,200,night)|0},${lerp(181,255,night)|0}`;
   g.globalCompositeOperation='source-over';g.globalAlpha=1;g.lineCap='round';
   g.strokeStyle=`rgba(${col},${A*(.3+.5*pe)})`;g.lineWidth=2.4;g.setLineDash([.1,9]);g.lineDashOffset=-T*14;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke();g.setLineDash([]);
   [a,b].forEach((q,i)=>{for(let j=0;j<2;j++){const k=(T*.5+j*.5+i*.2)%1;g.strokeStyle=`rgba(${col},${A*(1-k)*.5*(1-pe)})`;g.lineWidth=1.5;g.beginPath();g.arc(q[0],q[1],10+48*E.out(k),0,TAU);g.stroke()}});
   [[a,eL],[b,eR]].forEach(q=>{const x=q[0][0],y=q[0][1],e=q[1],R=(40+60*pe+22*e)*(1+.1*Math.sin(T*4.2+x*.01));glow(x,y,R*1.5,A*.75,false);glow(x,y,R*.8,A,true);core(x,y,(4.5+5*pe+2*e)*A,A)})}
 }else{
  const bf=ph==='blast'?clamp((tb-OPEN)/1.6):0,ba=1-bf,R=Math.min(W,H)*(.7+.05*Math.sin(T*6));
  glow(hcx,hcy,R,ba*.8,false);glow(hcx,hcy,R*.5,ba*.7,true);
  if(ph==='trace'){const tk=clamp((T-tT)/TRACE),s=E.io(tk)*Math.PI;
   if(tk<.3)glow(W/2,cyD,150*(1-tk/.3),(1-tk/.3),true);
   outline(s,1);[-1,1].forEach(d=>{const q=hx(d*s,1);glow(q[0],q[1],46,1,true);core(q[0],q[1],5,1)})}
  else{const tt=ph==='fill'?T-tF:FILL+tb,fk=clamp(tt/.9),reveal=tt/(FILL*.9);
   let sc=(.88+.12*E.back(fk))+.06*Math.sin(clamp((tt-.9)/.6)*Math.PI),al=E.out(fk),rel=0,boost=0,glowA=1,jx=0,jy=0;
   if(ph==='blast'){const c=clamp(tb/CLICK),x=clamp((tb-CLICK)/.25);sc*=1-.07*(tb<CLICK?E.io(c):1-E.out(x));boost=tb<CLICK?c*1.1:1.1*(1-clamp((tb-CLICK)/.6));
    rel=clamp((tb-CLICK)/1.7);glowA=1-clamp((tb-CLICK)/.5);if(tb<CLICK){const j=c*c*2.2;jx=rnd(-j,j);jy=rnd(-j,j)}}
   g.save();g.translate(jx,jy);heartScene(sc,al,rel,reveal,boost,glowA,ph==='blast'?sc:1);g.restore();
   if(ph==='blast'){
    if(tb<CLICK){const c=clamp(tb/CLICK);glow(hcx,hcy,(30+90*c*c)*sc,.15+.55*c*c,true)}
    else{const r2=clamp((tb-CLICK)/1.4),kk=clamp((tb-CLICK)/.4);glow(hcx,hcy,(40+320*E.out(r2))*sc,(1-r2)*.8,true);if(kk<1)glow(hcx,hcy,(70+160*E.out(kk))*sc,1-kk,true)}}}
 }
 sp.forEach(s=>{const q=s.l/s.L,al=s.k===2?Math.sin(Math.PI*(1-q)):Math.pow(q,.8);
  if(s.star){const z=s.s*(.5+.7*q)*2.6*(.85+.15*Math.sin(T*18+s.x));g.globalCompositeOperation='lighter';g.globalAlpha=clamp(al);g.save();g.translate(s.x,s.y);g.rotate(s.rot+s.vr*(s.L-s.l));g.drawImage(SPR.st,-z,-z,z*2,z*2);g.restore()}else glow(s.x,s.y,s.s*(.5+.5*q)*2,al*.9,true)});
 rg.forEach(r=>{if(r.d>0)return;const k=r.t/r.dur;g.globalCompositeOperation='source-over';g.globalAlpha=1;g.strokeStyle=`rgba(120,175,255,${(1-k)*.9})`;g.lineWidth=r.w*(1-k)+1;g.beginPath();g.arc(hcx,hcy,Math.max(1,r.R*E.out(k)),0,TAU);g.stroke()});
 if(ph==='blast'){const f=clamp(1-Math.abs(tb-OPEN-.2)/.9),al=f*f*.4;if(al>.01){g.globalCompositeOperation='source-over';g.globalAlpha=al;g.fillStyle='#eaf3ff';g.fillRect(0,0,W,H)}}
 g.globalCompositeOperation='source-over';
 pt.forEach(q=>{g.save();g.translate(q.x,q.y);g.rotate(q.rot);g.scale(.2+.8*Math.abs(Math.cos(T*q.fs+q.fp)),1);g.globalAlpha=Math.min(1,(q.l-q.age)*1.2)*.95;g.fillStyle=q.c;
  if(q.h){tiny(q.s*.9);g.fill()}
  else{const s=q.s;g.beginPath();g.moveTo(0,-s);g.bezierCurveTo(s*.85,-s*.55,s*.65,s*.65,0,s);g.bezierCurveTo(-s*.65,s*.65,-s*.85,-s*.55,0,-s);g.fill()}
  g.restore()});
 g.globalAlpha=1};

let last=performance.now();
const frame=n=>{const raw=(n-last)/1000;fps+=(1/Math.max(.001,raw)-fps)*.08;const dt=Math.min(.05,raw);last=n;update(dt);draw();if(ph==='done'){cv.style.display='none';chargeOff();return}requestAnimationFrame(frame)};
requestAnimationFrame(n=>{last=n;requestAnimationFrame(frame)});
})();
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target)}),{threshold:.15});
const startRv=()=>$$('.rv').forEach(e=>io.observe(e));
/* parallax */
const par=$$('[data-par]');let tk=false;
addEventListener('scroll',()=>{if(tk)return;tk=true;requestAnimationFrame(()=>{par.forEach(e=>{const r=e.parentElement.getBoundingClientRect();e.style.backgroundPosition=`center ${50+(r.top/innerHeight-.5)*30}%`});tk=false})},{passive:true});
/* countdown */
const cd=$('#count');
function tick(){let s=Math.max(0,Math.floor((D-Date.now())/1000));const v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60],l=['Hari','Jam','Menit','Detik'];
 cd.innerHTML=v.map((n,i)=>`<div><b>${String(n).padStart(2,'0')}</b><small>${l[i]}</small></div>`).join('')}
tick();setInterval(tick,1000);
/* lightbox */
const lb=$('#lb');
$$('.pic').forEach(g=>{const p=g.querySelector('.ph'),o=()=>{if(!p.classList.contains('has'))return;const s=gs[p.dataset.g];lb.firstElementChild.style.backgroundImage=`url("${s.src}")`;lb.classList.add('on')};g.onclick=o;g.onkeydown=e=>{if(e.key==='Enter')o()}});
lb.onclick=()=>lb.classList.remove('on');
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
/* pesan tamu */
/* stiker lucu buatan sendiri (SVG beranimasi) */
const S='#1a4bb5',sv=x=>`<svg viewBox="0 0 80 80" aria-hidden="true">${x}</svg>`;
const face=(x,y,nm)=>`<g class="fc"><circle class="eye" cx="${x-9}" cy="${y}" r="2.6" fill="#173f9c"/><circle class="eye" cx="${x+9}" cy="${y}" r="2.6" fill="#173f9c"/><circle cx="${x-15}" cy="${y+6}" r="3.6" fill="#ff9fb8" opacity=".75"/><circle cx="${x+15}" cy="${y+6}" r="3.6" fill="#ff9fb8" opacity=".75"/>${nm?'':`<path d="M${x-4} ${y+5}Q${x} ${y+10} ${x+4} ${y+5}" fill="none" stroke="#173f9c" stroke-width="2" stroke-linecap="round"/>`}</g>`;
const STK={
 kucing:sv(`<g class="wob"><path d="M16 36L19 10 35 23Q40 22 45 23L61 10 64 36Q72 62 40 68 8 62 16 36Z" fill="#fff" stroke="${S}" stroke-width="3" stroke-linejoin="round"/><path d="M22 24L22 16 30 22ZM58 24L58 16 50 22Z" fill="#ff9fb8"/>${face(40,42)}<path d="M8 44H19M10 53L20 49M72 44H61M70 53L60 49" stroke="${S}" stroke-width="2" stroke-linecap="round"/></g>`),
 beruang:sv(`<g class="wob"><circle cx="18" cy="22" r="11" fill="#e9c9a0" stroke="${S}" stroke-width="3"/><circle cx="62" cy="22" r="11" fill="#e9c9a0" stroke="${S}" stroke-width="3"/><circle cx="18" cy="22" r="5" fill="#f4a9a0"/><circle cx="62" cy="22" r="5" fill="#f4a9a0"/><circle cx="40" cy="44" r="27" fill="#e9c9a0" stroke="${S}" stroke-width="3"/><ellipse cx="40" cy="53" rx="11" ry="8" fill="#fff4e0"/>${face(40,41,1)}<ellipse cx="40" cy="49" rx="3.6" ry="2.6" fill="#173f9c"/><path d="M36.5 54Q40 58 43.5 54" fill="none" stroke="#173f9c" stroke-width="2" stroke-linecap="round"/></g>`),
 hati:sv(`<g class="bt"><path d="M40 70C8 48 4 27 19 17 29 11 38 17 40 24 42 17 51 11 61 17 76 27 72 48 40 70Z" fill="#ff8fb1" stroke="#d94677" stroke-width="3" stroke-linejoin="round"/><path d="M20 27Q22 21 28 21" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".75"/>${face(40,40)}</g>`),
 cincin:sv(`<g class="wob"><circle cx="40" cy="52" r="17" fill="none" stroke="#e0a800" stroke-width="6"/><circle cx="40" cy="52" r="17" fill="none" stroke="#ffd54a" stroke-width="3"/><path d="M40 14L52 26 40 40 28 26Z" fill="#bcd8ff" stroke="${S}" stroke-width="3" stroke-linejoin="round"/><path d="M28 26H52M36 26L40 14 44 26 40 40Z" fill="none" stroke="${S}" stroke-width="1.5" stroke-linejoin="round"/></g><g transform="translate(66 16)"><path class="tw" d="M0-8Q1-1 8 0Q1 1 0 8Q-1 1-8 0Q-1-1 0-8Z" fill="#ffd54a"/></g><g transform="translate(13 38) scale(.7)"><path class="tw d2" d="M0-8Q1-1 8 0Q1 1 0 8Q-1 1-8 0Q-1-1 0-8Z" fill="#ffd54a"/></g>`),
 amplop:sv(`<g class="wob"><rect x="10" y="26" width="60" height="42" rx="6" fill="#fff" stroke="${S}" stroke-width="3"/><path d="M12 30L40 50 68 30" fill="none" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>${face(40,59)}</g><g class="pp"><path d="M40 22C28 14 28 6 35 6 38 6 40 9 40 11 40 9 42 6 45 6 52 6 52 14 40 22Z" fill="#ff8fb1" stroke="#d94677" stroke-width="2" stroke-linejoin="round"/></g>`),
 bintang:sv(`<g class="tw"><path d="M40 6L50 29 74 31 56 47 62 71 40 58 18 71 24 47 6 31 30 29Z" fill="#ffd54a" stroke="#e0a800" stroke-width="3" stroke-linejoin="round"/>${face(40,42)}</g>`),
 balon:sv(`<g class="fl"><path d="M28 50C28 58 30 66 26 76M52 48C52 58 50 66 54 76" fill="none" stroke="#3f507c" stroke-width="1.5"/><ellipse cx="28" cy="30" rx="16" ry="20" fill="#ff8fb1" stroke="#d94677" stroke-width="2.5"/><path d="M25 50L28 55 31 50Z" fill="#d94677"/><ellipse cx="52" cy="28" rx="16" ry="20" fill="#8fb8f2" stroke="${S}" stroke-width="2.5"/><path d="M49 48L52 53 55 48Z" fill="${S}"/><path d="M18 22Q19 16 25 14M42 20Q43 14 49 12" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".7"/></g>`),
 masjid:sv(`<g class="wob"><rect x="12" y="34" width="9" height="36" fill="#fff" stroke="${S}" stroke-width="2.5"/><rect x="59" y="34" width="9" height="36" fill="#fff" stroke="${S}" stroke-width="2.5"/><path d="M12 34L16.5 22 21 34ZM59 34L63.5 22 68 34Z" fill="#8fb8f2" stroke="${S}" stroke-width="2.5" stroke-linejoin="round"/><rect x="22" y="48" width="36" height="22" fill="#fff" stroke="${S}" stroke-width="2.5"/><path d="M22 48Q22 24 40 24 58 24 58 48Z" fill="#8fb8f2" stroke="${S}" stroke-width="2.5"/><path d="M44 5A8 8 0 1 0 44 21A6.5 6.5 0 1 1 44 5Z" fill="#ffd54a" stroke="#e0a800" stroke-width="1.5"/><path d="M6 70H74" stroke="${S}" stroke-width="3" stroke-linecap="round"/>${face(40,40)}</g>`)
};
const STL={kucing:'Kucing',beruang:'Beruang',hati:'Hati',cincin:'Cincin',amplop:'Amplop',bintang:'Bintang',balon:'Balon',masjid:'Masjid'};
let sel=null,fresh=0;
$('#stk').innerHTML=Object.keys(STK).map(k=>`<button type="button" class="sk" data-k="${k}" aria-pressed="false" aria-label="Stiker ${STL[k]}"><span class="stk">${STK[k]}</span></button>`).join('');
const clrSel=()=>{sel=null;$$('.sk').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-pressed','false')})};
$$('.sk').forEach(b=>b.onclick=()=>{const on=sel!==b.dataset.k;clrSel();if(on){sel=b.dataset.k;b.classList.add('on');b.setAttribute('aria-pressed','true');const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,7)}});
/* animasi kirim: stiker melayang naik + hujan hati */
const sendFx=(k,r)=>{if(RM)return;const e=document.createElement('div');e.className='stk stkfly';e.innerHTML=STK[k];e.style.cssText=`left:${r.left+r.width/2}px;top:${r.top+r.height/2}px`;document.body.appendChild(e);
 e.animate([{transform:'translate(-50%,-50%) scale(.2) rotate(-25deg)',opacity:0},{transform:'translate(-50%,-140%) scale(1.5) rotate(12deg)',opacity:1,offset:.3},{transform:'translate(-50%,-190%) scale(1.3) rotate(-10deg)',opacity:1,offset:.65},{transform:'translate(-50%,-420%) scale(.4) rotate(25deg)',opacity:0}],{duration:2000,easing:'ease-in-out'}).onfinish=()=>e.remove();
 setTimeout(()=>burst(r.left+r.width/2,r.top-90,26,1),500);setTimeout(()=>burst(r.left+r.width/2,r.top-110,14,1),1100)};
let W=[];try{W=JSON.parse(localStorage.getItem('wishes')||'[]')}catch(e){}
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ago=t=>{if(!t)return'';const m=Math.floor((Date.now()-t)/6e4);return m<1?'baru saja':m<60?m+' menit lalu':m<1440?Math.floor(m/60)+' jam lalu':Math.floor(m/1440)+' hari lalu'};
const draw=()=>{$('#wc').textContent=W.length?W.length+' pesan dari tamu undangan':'Jadilah yang pertama meninggalkan pesan.';$('#wishes').innerHTML=W.map((w,i)=>{const sk=typeof STK[w.s]==='string'?`<span class="stk big" style="--r:${i%2?7:-7}deg">${STK[w.s]}</span>`:'';return `<div class="wish${w.t===fresh?' new':''}" style="--d:${Math.min(i,8)*.07}s"><div class="av">${esc((w.n||'?')[0].toUpperCase())}</div><div class="bub">${sk}<b>${esc(w.n)}</b><small>${ago(w.t)}</small><p>${esc(w.m)}</p></div></div>`}).join('')};draw();
let DB=null;
(async()=>{const F=C.firebase;
 if(F&&F.apiKey&&F.projectId){try{
  const V='10.14.1',B='https://www.gstatic.com/firebasejs/'+V+'/';
  const[{initializeApp},{getFirestore,collection,addDoc,query,orderBy,limit,onSnapshot,serverTimestamp}]=await Promise.all([import(B+'firebase-app.js'),import(B+'firebase-firestore.js')]);
  const col=collection(getFirestore(initializeApp(F)),F.collection||'pesan');
  DB={add:x=>addDoc(col,{...x,ts:serverTimestamp()})};
  onSnapshot(query(col,orderBy('t','desc'),limit(100)),sn=>{W=sn.docs.map(d=>{const v=d.data();return{n:v.n,m:v.m,t:v.t,s:v.s}});draw()},()=>{DB=null});
  return}catch(e){DB=null}}
 try{const c=await window.claude?.use('db');if(!c)return;DB=c.collection('messages');DB.orderBy('t','desc').limit(100).onSnapshot(s=>{W=s.docs.map(d=>d.data());draw()},()=>{DB=null})}catch(e){DB=null}})();
$('#f').onsubmit=async e=>{e.preventDefault();const n=$('#fn').value.trim(),m=$('#fm').value.trim();if(!n||!m)return;const x={n,m,t:Date.now(),...(sel?{s:sel}:{})},b=$('#f .btn');b.disabled=true;fresh=x.t;sendFx(sel||'amplop',b.getBoundingClientRect());
 try{if(!DB)throw 0;await DB.add(x)}catch(_){W.unshift(x);try{localStorage.setItem('wishes',JSON.stringify(W.slice(0,50)))}catch(z){}draw()}
 b.disabled=false;$('#fm').value='';clrSel();$('#wishes').scrollTop=0;b.textContent='Terkirim ♥ Terima kasih!';const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top,18,1);setTimeout(()=>b.textContent='Kirim Pesan ♥',2600)};
/* menu bawah */
const secs=['hero','acara','galeri','rsvp'].map(i=>document.getElementById(i)),ls=$$('#dock a');
ls.forEach((a,i)=>a.onclick=e=>{e.preventDefault();secs[i].scrollIntoView({behavior:'smooth'})});
addEventListener('scroll',()=>{const h=document.documentElement;$('#bar').style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%';let k=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.5)k=i});ls.forEach((a,i)=>a.classList.toggle('on',i===k))},{passive:true});
/* musik */
const a=new Audio(C.music||'');a.loop=true;a.preload='auto';a.onerror=()=>mus(false);
const mus=on=>{const m=$('#mus');m.textContent=on?'♫':'♪';m.classList.toggle('on',on);m.setAttribute('aria-label',on?'Matikan musik':'Putar musik')};
$('#mus').onclick=()=>{if(!C.music){alert('Lagu belum ditambahkan.');return}if(a.paused){a.play().then(()=>mus(true)).catch(()=>{})}else{a.pause();mus(false)}};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&!a.paused){a.pause();a._h=1}else if(a._h&&!document.hidden){a.play().catch(()=>{});a._h=0}});
/* pesawat mengikuti scroll */
let fk=false;const reqFly=()=>{if(fk)return;fk=true;requestAnimationFrame(()=>{fly();fk=false})};
addEventListener('scroll',reqFly,{passive:true});addEventListener('resize',reqFly);fly();