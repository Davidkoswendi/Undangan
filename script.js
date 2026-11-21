/* ===== ISI DATA UNDANGAN DI SINI ===== */
const C={
  bride:'Ica', groom:'Syamsul',
  date:'2026-12-01T14:00:00+07:00',
  verse:'“Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).” (QS. Adz-Dzariyat: 49)',
  story:'Assalamu’alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridha Allah SWT, kami mengundang Anda untuk menyaksikan akad pernikahan kami.',
  time:'14.00',
  /* Ayat pernikahan (bagian "Ayat Pernikahan"): t = isi ayat, s = sumber. Tambah/ubah sesuka hati */
  ayat:[
    {t:'Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan juga orang-orang yang layak (menikah) dari hamba-hamba sahayamu yang laki-laki dan perempuan. Jika mereka miskin, Allah akan memberi kemampuan kepada mereka dengan karunia-Nya. Dan Allah Maha Luas (pemberian-Nya), Maha Mengetahui.',s:'QS. An-Nur: 32'}
  ],
  /* Mempelai: tambahkan p:'Putra dari Bapak ... & Ibu ...' kalau mau menampilkan orang tua */
  couple:[{n:'Ica',r:'Mempelai Wanita'},{n:'Syamsul',r:'Mempelai Pria'}],
  ceremony:{place:'Masjid Kampus UPI Cibiru, Cibiru, Bandung',map:'https://maps.google.com/?q=Masjid+Kampus+UPI+Cibiru'},
  music:'musik/lagu.mp3', // taruh file lagu di folder "musik/"
  /* FOTO: taruh file di folder "foto/" lalu samakan nama file di bawah.
     Kalau file belum ada, otomatis tampil kotak biru (tidak error). */
  heroCap:'Ica & Syamsul, bersama selamanya',
  photos:{
    cover:'foto/cover.jpg', hero:'foto/hero.jpg', story:'foto/kisah.jpg', details:'foto/detail.jpg',
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
const setBg=(e,s)=>{if(!s)return;const i=new Image();i.onload=()=>{e.style.backgroundImage=`url("${s}")`;e.classList.add('has')};i.src=s};
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
const petalsOn=()=>{for(let i=0;i<22;i++){const p=document.createElement('i');p.className='petal';if(i%2){p.className='petal hz';p.textContent='♥'}p.style.cssText=`left:${Math.random()*100}vw;--x:${(Math.random()*160-80)}px;animation-duration:${7+Math.random()*7}s;animation-delay:${Math.random()*6}s;transform:scale(${.6+Math.random()*.8})`;document.body.appendChild(p)}};
/* ===== BUKA UNDANGAN: Two Finger Touch =====
   HP: sentuh & tahan dengan dua jari (±1,5 detik). Desktop: tahan ← dan → bersamaan (atau tahan Spasi / tahan klik mouse). */
(()=>{
const cover=$('#cover'),cv=$('#fx'),g=cv.getContext('2d'),hi=$('#hi'),sub=$('#sub'),skip=$('#skip');
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const HOLD=1.5,TRACE=.95,FILL=.82,TAU=Math.PI*2;
const rnd=(a,b)=>a+Math.random()*(b-a),clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),lerp=(a,b,k)=>a+(b-a)*k;
const E={io:k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,out:k=>1-Math.pow(1-k,3),back:k=>{const c=1.70158;return 1+(c+1)*Math.pow(k-1,3)+c*Math.pow(k-1,2)}};
const vib=v=>{try{navigator.vibrate&&navigator.vibrate(v)}catch(_){}};
let opened=false,ph='idle';

/* ---- buka: cover terbelah jadi dua lembar ---- */
const openInvite=()=>{if(opened)return;opened=true;if(ph==='idle')ph='done';
 cover.style.setProperty('--p',0);cover.style.setProperty('--sx','0px');cover.style.setProperty('--sy','0px');
 const cin=cover.querySelector('.cin'),w=cover.clientWidth+'px';
 const mk=()=>{const c=cin.cloneNode(true);c.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));c.removeAttribute('id');c.setAttribute('aria-hidden','true');c.setAttribute('inert','');c.style.width=w;return c};
 cover.querySelector('.pn.l').appendChild(mk());cover.querySelector('.pn.r').appendChild(mk());
 cin.style.display='none';cover.classList.add('open');
 document.body.classList.remove('lock');document.body.classList.add('go');window.scrollTo(0,0);
 petalsOn();setTimeout(startRv,900);setTimeout(()=>cover.style.display='none',2400);
 $('#mus').style.display='block';
 if(C.music){a.play().then(()=>mus(true)).catch(()=>mus(false))}else mus(false);
 const T3=['pointerup','keyup','click'],again=e=>{T3.forEach(t=>removeEventListener(t,again,true));if(e.target.closest&&e.target.closest('#mus'))return;if(C.music&&a.paused)a.play().then(()=>mus(true)).catch(()=>{})};
 T3.forEach(t=>addEventListener(t,again,true))};
skip.onclick=openInvite;
let au=0;const unlock=()=>{if(au||!C.music)return;au=1;try{a.muted=true;const r=a.play();r&&r.then(()=>{if(!opened){a.pause();a.currentTime=0}a.muted=false}).catch(()=>{a.muted=false})}catch(_){a.muted=false}};

const SUBT=fine?'Tahan <kbd id="kL">←</kbd><kbd id="kR">→</kbd> bersamaan<br><em>atau tahan Spasi</em>':'Sentuh &amp; tahan layar dengan dua jari';
sub.innerHTML=SUBT;const kL=$('#kL'),kR=$('#kR');
if(RM){skip.classList.add('show');$('#hint').textContent='Ketuk tombol untuk membuka undangan.';sub.textContent='';cv.style.display='none';return}

/* ---- ukuran & bentuk hati ---- */
let W,H,DPR,u,cyD,hcx,hcy,mg;
const size=()=>{DPR=Math.min(2,devicePixelRatio||1);W=cv.clientWidth||innerWidth;H=cv.clientHeight||innerHeight;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);u=Math.min(W*.46,240)/32;cyD=H*.5-7.4*u;hcx=W/2;hcy=cyD+7.4*u;mg=Math.max(28,W*.075)};
size();addEventListener('resize',size);
const hx=(t,sc)=>{const s=Math.sin(t),b=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))+5;return[hcx+16*s*s*s*u*sc,hcy+(b-7.4)*u*sc]};
const hadd=(sc,t0,t1)=>{const n=Math.max(2,Math.ceil(Math.abs(t1-t0)*28));for(let i=0;i<=n;i++){const q=hx(lerp(t0,t1,i/n),sc);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])}};

/* ---- sprite cahaya ---- */
const spr=(...st)=>{const s=document.createElement('canvas');s.width=s.height=128;const x=s.getContext('2d'),r=x.createRadialGradient(64,64,0,64,64,64);st.forEach(q=>r.addColorStop(q[0],q[1]));x.fillStyle=r;x.fillRect(0,0,128,128);return s};
const SPR={
 w:spr([0,'rgba(255,255,255,1)'],[.18,'rgba(215,232,255,.85)'],[.45,'rgba(110,165,255,.32)'],[1,'rgba(40,100,255,0)']),
 b:spr([0,'rgba(170,205,255,.9)'],[.3,'rgba(70,130,255,.4)'],[1,'rgba(30,80,230,0)']),
 ink:spr([0,'rgba(26,75,181,.95)'],[.2,'rgba(40,100,220,.5)'],[1,'rgba(40,100,220,0)'])};
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
const tr=[[],[]],trk=(i,x,y)=>{const a=tr[i];a.push([x,y]);if(a.length>28)a.shift()};
const sp=[],pt=[],rg=[],stars=Array.from({length:44},()=>({x:Math.random(),y:Math.random(),r:rnd(2,5),p:rnd(0,TAU)}));
const spark=o=>{if(sp.length<520)sp.push({k:0,vx:0,vy:0,d:2,s:7,...o,L:o.l})};
const gather=(cx,cy,pe)=>{if(sp.length<520){const l=rnd(.5,.9);sp.push({k:2,a:rnd(0,TAU),w:rnd(2,4)*(Math.random()<.5?-1:1),r0:rnd(110,300)*(.7+.6*pe),cx,cy,l,L:l,s:rnd(4,8),x:-99,y:-99})}};
const PAL=['#1a4bb5','#2f6bd8','#4f8cff','#7aa6e0','#a9c8f5','#ffffff'];
const petal=(x,y,vx,vy,s)=>pt.push({x,y,vx,vy,s,rot:rnd(0,TAU),vr:rnd(-4,4),fp:rnd(0,TAU),fs:rnd(2,5),sw:rnd(20,50),sp:rnd(1,2.2),ph:rnd(0,TAU),c:PAL[(Math.random()*PAL.length)|0],h:Math.random()<.14,f:Math.random()<.16,l:rnd(7,11),age:0});

/* ---- state ---- */
let T=0,p=0,pe=0,eL=0,eR=0,dotsIn=0,tT=0,tF=0,tB=0,tb=0,msg=0,hv=1;
const dotPos=s=>{const q0=E.io(p),e=s<0?eL:eR,tz=(p<.02&&!eL&&!eR&&T>3.5)?.045*Math.pow(Math.max(0,Math.sin(T*1.3)),2):0,q=Math.min(1,q0+.07*e*(1-q0)+tz);return[lerp(s<0?mg:W-mg,W/2,q),cyD+Math.sin(T*1.7+(s<0?0:1.9))*7*(1-p)]};

const meet=()=>{ph='trace';tT=T;p=1;pe=1;vib([18,30,50]);
 for(let i=0;i<30;i++)spark({x:W/2,y:cyD,vx:rnd(-240,240),vy:rnd(-240,240),l:rnd(.5,1),s:rnd(5,10),d:2.2});
 rg.push({d:0,t:0,dur:.9,R:Math.min(W,H)*.5,w:3})};
const blast=()=>{ph='blast';tB=T;tb=0;vib(70);
 for(let i=0;i<240;i++){const q=hx(rnd(0,TAU),1),dx=q[0]-hcx,dy=q[1]-hcy,d=Math.hypot(dx,dy)||1,v=rnd(160,820);spark({x:q[0],y:q[1],vx:dx/d*v,vy:dy/d*v,l:rnd(.9,2.1),s:rnd(5,15),d:1.9})}
 for(let i=0;i<60;i++){const an=rnd(0,TAU),v=rnd(80,520);spark({x:hcx,y:hcy,vx:Math.cos(an)*v,vy:Math.sin(an)*v,l:rnd(.8,1.8),s:rnd(6,16),d:2})}
 for(let i=0;i<150;i++){const an=rnd(0,TAU),v=Math.pow(Math.random(),.6)*rnd(200,820);petal(hcx+Math.cos(an)*10,hcy+Math.sin(an)*10,Math.cos(an)*v,Math.sin(an)*v-60,rnd(9,19))}
 rg.push({d:0,t:0,dur:1.3,R:Math.max(W,H)*.95,w:6},{d:.1,t:0,dur:1.4,R:Math.max(W,H)*1.1,w:4,h:1},{d:.24,t:0,dur:1.5,R:Math.max(W,H)*1.25,w:3,h:1},{d:.4,t:0,dur:1.6,R:Math.max(W,H)*1.4,w:2,h:1})};

const update=dt=>{T+=dt;
 const I=inp();eL+=((I.L?1:0)-eL)*Math.min(1,dt*9);eR+=((I.R?1:0)-eR)*Math.min(1,dt*9);
 if(kL){kL.classList.toggle('on',I.kl);kR.classList.toggle('on',I.kr)}
 if(ph==='idle'){
  if(T>1.9)dotsIn=Math.min(1,dotsIn+dt/1.1);
  const both=I.L&&I.R&&dotsIn>.35,was=p;
  p=clamp(p+(both?dt/HOLD:-dt/.55));pe=E.io(p);night=E.io(clamp(p*2.4));
  if((was<.34&&p>=.34)||(was<.67&&p>=.67))vib(8);
  const A=E.out(dotsIn);
  [-1,1].forEach((s,i)=>{const q=dotPos(s);trk(i,q[0],q[1])});
  cover.style.setProperty('--p',pe.toFixed(3));{const sh=Math.max(0,p-.6)*5;cover.style.setProperty('--sx',rnd(-sh,sh).toFixed(1)+'px');cover.style.setProperty('--sy',rnd(-sh,sh).toFixed(1)+'px')}
  if(A>.05)[-1,1].forEach(s=>{const q=dotPos(s),e=s<0?eL:eR;if(Math.random()<dt*(7+90*pe+26*e)*A)spark({x:q[0]+rnd(-5,5),y:q[1]+rnd(-5,5),vx:rnd(-45,45),vy:rnd(-60,25),l:rnd(.6,1.2),s:rnd(5,11),d:1.6})});
  if(p>.22&&Math.random()<dt*(p-.2)*120)gather(W/2,cyD,pe);
  const h=1-clamp(p*5);if(Math.abs(h-hv)>.01){hv=h;hi.style.opacity=h}
  if(!fine){const m=(I.L!==I.R)?1:0;if(m!==msg){msg=m;sub.innerHTML=m?'Tambahkan satu jari lagi ✦':SUBT}}
  if(p>=1)meet();
 }else if(ph==='trace'){night=1;const tk=clamp((T-tT)/TRACE),s=E.io(tk)*Math.PI;
  [-1,1].forEach((d,i)=>{const q=hx(d*s,1);trk(i,q[0],q[1]);if(Math.random()<dt*130)spark({x:q[0],y:q[1],vx:rnd(-60,60),vy:rnd(-60,60),l:rnd(.5,1),s:rnd(5,11),d:2})});
  if(Math.random()<dt*90)gather(hcx,hcy,1);
  if(tk>=1){ph='fill';tF=T;vib(14)}
 }else if(ph==='fill'){night=1;if(Math.random()<dt*80)gather(hcx,hcy,1);if(T-tF>=FILL)blast()
 }else if(ph==='blast'){tb=T-tB;night=1-E.out(clamp(tb/.32));
  if(!opened&&tb>=.06)openInvite();
  if(tb>.5&&tb<3&&Math.random()<dt*14)petal(rnd(0,W),-20,rnd(-30,30),rnd(40,100),rnd(8,15));
  if(tb>3.2&&!sp.length&&!pt.length&&!rg.length)ph='done'}
 if(ph==='fill'||ph==='blast')tr.forEach(a=>a.shift());
 for(let i=sp.length;i--;){const s=sp[i];s.l-=dt;if(s.l<=0){sp.splice(i,1);continue}
  if(s.k===2){s.a+=s.w*dt;const r=s.r0*Math.pow(s.l/s.L,1.5);s.x=s.cx+Math.cos(s.a)*r;s.y=s.cy+Math.sin(s.a)*r*.9}
  else{const f=Math.exp(-s.d*dt);s.vx*=f;s.vy*=f;s.x+=s.vx*dt;s.y+=s.vy*dt}}
 for(let i=pt.length;i--;){const q=pt[i];q.age+=dt;const f=Math.exp(-1.7*dt);q.vx*=f;q.vy=q.vy*f+170*dt;q.x+=(q.vx+Math.sin(T*q.sp+q.ph)*q.sw)*dt;q.y+=q.vy*dt;q.rot+=q.vr*dt;if(q.y>H+60||q.age>q.l)pt.splice(i,1)}
 for(let i=rg.length;i--;){const r=rg[i];if(r.d>0){r.d-=dt;continue}r.t+=dt;if(r.t>r.dur)rg.splice(i,1)}};

/* ---- gambar ---- */
const outline=(s,al)=>{g.globalCompositeOperation='lighter';g.lineCap=g.lineJoin='round';
 [[18,.1,'80,140,255'],[8,.28,'120,175,255'],[2.6,1,'255,255,255']].forEach(q=>{g.strokeStyle=`rgba(${q[2]},${q[1]*al})`;g.lineWidth=q[0];g.beginPath();hadd(1,0,s);hadd(1,0,-s);g.stroke()})};
const hfill=(sc,al)=>{g.globalCompositeOperation='source-over';g.globalAlpha=al;g.beginPath();hadd(sc,0,TAU);g.closePath();
 const gr=g.createLinearGradient(0,hcy-14*u*sc,0,hcy+15*u*sc);gr.addColorStop(0,'#f2f8ff');gr.addColorStop(.3,'#9cc4ff');gr.addColorStop(.7,'#3f7ef2');gr.addColorStop(1,'#1a4bb5');
 g.shadowColor='rgba(120,175,255,.95)';g.shadowBlur=34;g.fillStyle=gr;g.fill();g.shadowBlur=0;
 g.globalCompositeOperation='lighter';g.globalAlpha=al*.55;g.fillStyle='#fff';g.beginPath();g.ellipse(hcx-8*u*sc,hcy-8*u*sc,3.2*u*sc,1.4*u*sc,-.6,0,TAU);g.fill()};
const tiny=(s)=>{g.beginPath();for(let i=0;i<=24;i++){const t=i/24*TAU,sn=Math.sin(t),x=16*sn*sn*sn,y=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))-1;i?g.lineTo(x*s/16,y*s/16):g.moveTo(x*s/16,y*s/16)}g.closePath()};

const trail=al=>{const c=night>.5,col=c?'150,200,255':'26,75,181';g.globalCompositeOperation=c?'lighter':'source-over';g.lineCap='round';
 tr.forEach(a=>{for(let i=1;i<a.length;i++){const k=i/a.length;g.strokeStyle=`rgba(${col},${k*.75*al})`;g.lineWidth=1+k*7*(.4+.6*pe);g.beginPath();g.moveTo(a[i-1][0],a[i-1][1]);g.lineTo(a[i][0],a[i][1]);g.stroke()}})};
const draw=()=>{
 g.setTransform(DPR,0,0,DPR,0,0);g.clearRect(0,0,W,H);g.globalAlpha=1;g.globalCompositeOperation='source-over';
 if(night>.003){const r=g.createRadialGradient(W/2,hcy,0,W/2,hcy,Math.hypot(W,H)*.62);r.addColorStop(0,`rgba(20,52,140,${.8*night})`);r.addColorStop(1,`rgba(4,10,38,${.92*night})`);g.fillStyle=r;g.fillRect(0,0,W,H);
  g.globalCompositeOperation='lighter';stars.forEach(s=>{g.globalAlpha=night*(.25+.55*Math.abs(Math.sin(T*1.6+s.p)));g.drawImage(SPR.w,s.x*W-s.r*2,s.y*H-s.r*2,s.r*4,s.r*4)});g.globalCompositeOperation='source-over';g.globalAlpha=1}
 if(ph==='idle'){
  const A=E.out(dotsIn),a=dotPos(-1),b=dotPos(1);
  if(pe>.01){const R=60+pe*pe*Math.min(W,H)*.8;glow(W/2,cyD,R,clamp(.2+pe*.9),false);glow(W/2,cyD,R*.45,clamp(pe*pe*1.2),true)}
  if(p>.05)outline(pe*Math.PI,.45*night);
  if(A>.01){
   const col=`${lerp(26,150,night)|0},${lerp(75,200,night)|0},${lerp(181,255,night)|0}`;
   g.globalCompositeOperation='source-over';g.globalAlpha=1;g.lineCap='round';
   g.strokeStyle=`rgba(${col},${A*(.3+.5*pe)})`;g.lineWidth=2.4;g.setLineDash([.1,9]);g.lineDashOffset=-T*14;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke();g.setLineDash([]);trail(A);
   [a,b].forEach((q,i)=>{for(let j=0;j<2;j++){const k=(T*.5+j*.5+i*.2)%1;g.strokeStyle=`rgba(${col},${A*(1-k)*.5*(1-pe)})`;g.lineWidth=1.5;g.beginPath();g.arc(q[0],q[1],10+48*E.out(k),0,TAU);g.stroke()}});
   [[a,eL],[b,eR]].forEach(q=>{const x=q[0][0],y=q[0][1],e=q[1],R=(40+60*pe+22*e)*(1+.1*Math.sin(T*4.2+x*.01));glow(x,y,R*1.5,A*.75,false);glow(x,y,R*.8,A,true);core(x,y,(4.5+5*pe+2*e)*A,A)})}
 }else{
  const ba=ph==='blast'?1-clamp(tb/.8):1,R=Math.min(W,H)*(.7+.05*Math.sin(T*6));
  glow(hcx,hcy,R,ba*.8,false);glow(hcx,hcy,R*.5,ba*.7,true);trail(1);
  if(ph==='trace'){const tk=clamp((T-tT)/TRACE),s=E.io(tk)*Math.PI;
   if(tk<.3)glow(W/2,cyD,150*(1-tk/.3),(1-tk/.3),true);
   outline(s,1);[-1,1].forEach(d=>{const q=hx(d*s,1);glow(q[0],q[1],46,1,true);core(q[0],q[1],5,1)})}
  else{outline(Math.PI,ph==='blast'?1-clamp(tb/.4):1);
   const tt=ph==='fill'?T-tF:FILL+tb,fk=clamp(tt/.4),bt=clamp((tt-.4)/.4);
   let sc=(.88+.12*E.back(fk))+.1*Math.sin(bt*Math.PI),al=E.out(fk);
   if(ph==='blast'){const k=clamp(tb/.5);al*=1-k;sc=1.02+E.out(k)*.9}
   if(al>.01)hfill(sc,al)}
 }
 sp.forEach(s=>{const q=s.l/s.L,al=s.k===2?Math.sin(Math.PI*(1-q)):Math.pow(q,.8);glow(s.x,s.y,s.s*(.5+.5*q)*2,al*.9,true)});
 rg.forEach(r=>{if(r.d>0)return;const k=r.t/r.dur;g.globalCompositeOperation='source-over';g.globalAlpha=1;g.strokeStyle=`rgba(120,175,255,${(1-k)*.9})`;g.lineWidth=r.w*(1-k)+1;g.beginPath();if(r.h)hadd(Math.max(.05,r.R*E.out(k)/(16*u)),0,TAU);else g.arc(hcx,hcy,Math.max(1,r.R*E.out(k)),0,TAU);g.stroke()});
 if(ph==='blast'){
  if(tb<1.2){const k=tb/1.2,al=(1-k)*.5*Math.min(1,tb*8),Rr=Math.hypot(W,H),gr=g.createRadialGradient(hcx,hcy,0,hcx,hcy,Rr*.75);gr.addColorStop(0,`rgba(255,255,255,${al})`);gr.addColorStop(1,'rgba(120,175,255,0)');g.globalCompositeOperation='source-over';g.globalAlpha=1;g.fillStyle=gr;g.beginPath();
   for(let i=0;i<16;i++){const an=i/16*TAU+tb*.3,w=.055+.03*Math.sin(i*2.1);g.moveTo(hcx,hcy);g.lineTo(hcx+Math.cos(an-w)*Rr,hcy+Math.sin(an-w)*Rr);g.lineTo(hcx+Math.cos(an+w)*Rr,hcy+Math.sin(an+w)*Rr);g.closePath()}g.fill()}
  {const fl=1-clamp(tb/.9);if(fl>0){g.globalCompositeOperation='source-over';g.globalAlpha=1;g.save();g.translate(hcx,hcy);g.scale(1,.04);const r=g.createRadialGradient(0,0,0,0,0,W*.95);r.addColorStop(0,`rgba(255,255,255,${fl})`);r.addColorStop(1,'rgba(120,175,255,0)');g.fillStyle=r;g.beginPath();g.arc(0,0,W*.95,0,TAU);g.fill();g.restore()}}
  const f=tb<.07?tb/.07:Math.max(0,1-(tb-.07)/.75),al=Math.pow(f,1.3);
  if(al>.01){const r=g.createRadialGradient(hcx,hcy,0,hcx,hcy,Math.hypot(W,H)*.7);r.addColorStop(0,`rgba(255,255,255,${al})`);r.addColorStop(.45,`rgba(225,238,255,${al*.96})`);r.addColorStop(1,`rgba(150,195,255,${al*.85})`);g.globalCompositeOperation='source-over';g.globalAlpha=1;g.fillStyle=r;g.fillRect(0,0,W,H)}
 }
 g.globalCompositeOperation='source-over';
 pt.forEach(q=>{g.save();g.translate(q.x,q.y);g.rotate(q.rot);g.scale(.2+.8*Math.abs(Math.cos(T*q.fs+q.fp)),1);g.globalAlpha=Math.min(1,(q.l-q.age)*1.2)*.95;g.fillStyle=q.c;g.strokeStyle='rgba(20,60,160,.35)';g.lineWidth=1;
  if(q.h){tiny(q.s*.9);g.fill();g.stroke()}
  else if(q.f){const s=q.s;g.fillStyle='#fff';for(let k=0;k<8;k++){g.save();g.rotate(k*TAU/8);g.beginPath();g.ellipse(0,-s*.55,s*.2,s*.5,0,0,TAU);g.fill();g.stroke();g.restore()}g.fillStyle='#ffd978';g.beginPath();g.arc(0,0,s*.22,0,TAU);g.fill()}
  else{const s=q.s;g.beginPath();g.moveTo(0,-s);g.bezierCurveTo(s*.85,-s*.55,s*.65,s*.65,0,s);g.bezierCurveTo(-s*.65,s*.65,-s*.85,-s*.55,0,-s);g.fill();g.stroke();g.strokeStyle='rgba(255,255,255,.35)';g.beginPath();g.moveTo(0,-s*.8);g.lineTo(0,s*.8);g.stroke()}
  g.restore()});
 g.globalAlpha=1};

let last=performance.now();
const frame=n=>{const dt=Math.min(.05,(n-last)/1000);last=n;update(dt*(ph==='blast'&&tb<.55?.25+.75*E.io(tb/.55):1));draw();if(ph==='done'){cv.style.display='none';return}requestAnimationFrame(frame)};
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
(async()=>{try{const c=await window.claude?.use('db');if(!c)return;DB=c.collection('messages');DB.orderBy('t','desc').limit(100).onSnapshot(s=>{W=s.docs.map(d=>d.data());draw()},()=>{DB=null})}catch(e){DB=null}})();
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