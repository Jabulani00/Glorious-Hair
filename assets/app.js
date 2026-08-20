/* ================= Glorious Hair — shared app ================= */
(function(){
  const { WA, WA_DISPLAY, R, cart } = window.GH;
  const page = document.body.dataset.page || 'home';
  const wa = (txt) => `https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;

  /* ---------- NAV + CHROME injection ---------- */
  const NAV = [
    {label:'Home',      href:'index.html',      key:'home'},
    {label:'Shop',      href:'shop.html',       key:'shop'},
    {label:'Customise', href:'index.html#build',key:'build'},
    {label:'About',     href:'about.html',      key:'about'},
    {label:'Contact',   href:'contact.html',    key:'contact'},
  ];
  const navLinks = (cls) => NAV.map(n=>`<a href="${n.href}" class="${cls} nav-link ${n.key===page?'active text-glory-600':''}">${n.label}</a>`).join('');

  const header = `
  <div id="promobar" class="fixed top-0 inset-x-0 z-[60] bg-ink text-white text-[13px]">
    <div class="max-w-7xl mx-auto px-4 h-9 flex items-center justify-center gap-3 font-body">
      <span class="hidden sm:inline text-glory-300">✦</span>
      <span class="uppercase text-center">Winter Glam Sale — <b class="text-glory-400">3-month Lay-By</b> available · code <b class="bg-glory-600 px-2 py-0.5 rounded">GLOW40</b></span>
      <span class="hidden md:flex items-center gap-1 tabular-nums text-glory-200">ends in <span id="cd" class="font-semibold text-white">--</span></span>
    </div>
  </div>
  <header id="header" class="fixed top-11 inset-x-0 z-50 flex justify-center px-4 transition-all duration-500">
    <nav class="w-full max-w-5xl backdrop-blur-xl bg-white/75 border border-white/60 shadow-soft rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
      <div class="hidden lg:flex items-center gap-1 text-[15px] font-body text-ink/80 flex-1">
        ${navLinks('px-3 py-1.5 rounded-full hover:text-glory-600 transition')}
      </div>
      <a href="index.html" class="flex flex-col items-center leading-none px-2">
        <span class="font-script text-2xl sm:text-[28px] text-glory-600">Glorious</span>
        <span class="font-display font-semibold tracking-[0.35em] text-[10px] sm:text-[11px] text-ink uppercase -mt-1">Hair</span>
      </a>
      <div class="flex items-center gap-1 justify-end flex-1">
        <a href="checkout.html" class="relative ml-1 grid place-items-center w-10 h-10 rounded-full bg-glory-50 hover:bg-glory-100 transition" aria-label="Cart">
          <i class="fa-solid fa-bag-shopping text-glory-700 text-[17px]"></i>
          <span id="cartCount" class="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 grid place-items-center text-[10px] font-semibold text-white bg-glory-600 rounded-full scale-0 transition">0</span>
        </a>
        <a href="${wa("Hi Glorious Hair, I'd like to order 💕")}" target="_blank" rel="noopener" class="hidden sm:inline-flex items-center gap-2 ml-1 px-4 py-2 rounded-full bg-ink text-white text-sm font-body hover:bg-glory-600 transition shadow-glow"><i class="fa-brands fa-whatsapp text-base"></i> Order <span class="hidden md:inline">on WhatsApp</span></a>
        <button id="menuBtn" class="lg:hidden grid place-items-center w-10 h-10 rounded-full bg-glory-50" aria-label="Menu"><i class="fa-solid fa-bars text-glory-700 text-lg"></i></button>
      </div>
    </nav>
  </header>
  <div id="mobileMenu" class="fixed inset-0 z-[55] bg-ink/95 backdrop-blur-lg text-white flex-col items-center justify-center gap-6 text-2xl font-display hidden">
    <button id="menuClose" class="absolute top-6 right-6 w-11 h-11 grid place-items-center rounded-full bg-white/10" aria-label="Close"><i class="fa-solid fa-xmark text-xl"></i></button>
    ${navLinks('mobile-link hover:text-glory-400 transition')}
    <a href="checkout.html" class="mobile-link hover:text-glory-400 transition">Cart / Checkout</a>
    <a href="${wa("Hi Glorious Hair!")}" target="_blank" rel="noopener" class="mt-4 px-6 py-3 rounded-full bg-glory-600 text-white text-lg">Order on WhatsApp</a>
  </div>`;

  const footer = `
  <footer class="relative text-white overflow-hidden mt-0">
    <video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline poster="https://images.pexels.com/photos/23349912/pexels-photo-23349912.jpeg?auto=compress&cs=tinysrgb&w=1200">
      <source src="https://videos.pexels.com/video-files/7253934/7253934-hd_1366_720_25fps.mp4" type="video/mp4"></video>
    <div class="absolute inset-0 bg-ink/90"></div>
    <div class="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
      <div class="grid md:grid-cols-4 gap-10">
        <div class="md:col-span-2">
          <div class="flex flex-col leading-none"><span class="font-script text-4xl text-glory-400">Glorious</span><span class="font-display tracking-[0.4em] text-sm uppercase -mt-1">Hair · We Serve Quality</span></div>
          <p class="mt-5 text-white/60 font-body max-w-sm">Premium human-hair wigs, frontals &amp; curls, handmade for the modern queen. Proudly South African. Nationwide delivery &amp; 3-month lay-by.</p>
          <div class="flex gap-3 mt-6">
            <a href="${wa('Hi Glorious Hair!')}" target="_blank" rel="noopener" aria-label="WhatsApp" class="w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-glory-600 transition"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="#" aria-label="Instagram" class="w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-glory-600 transition"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="TikTok" class="w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-glory-600 transition"><i class="fa-brands fa-tiktok"></i></a>
            <a href="#" aria-label="Facebook" class="w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-glory-600 transition"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>
        <div><h4 class="font-display text-xl mb-4">Shop</h4><ul class="space-y-2 text-white/60 font-body text-sm">
          <li><a href="shop.html#frontal" class="hover:text-glory-300 transition">Full Frontal Wigs</a></li>
          <li><a href="shop.html#glueless" class="hover:text-glory-300 transition">Glueless Wigs</a></li>
          <li><a href="shop.html#curly" class="hover:text-glory-300 transition">Curly Wigs</a></li>
          <li><a href="index.html#build" class="hover:text-glory-300 transition">Customise</a></li></ul></div>
        <div><h4 class="font-display text-xl mb-4">Help</h4><ul class="space-y-2 text-white/60 font-body text-sm">
          <li><a href="about.html" class="hover:text-glory-300 transition">Our Story</a></li>
          <li><a href="contact.html" class="hover:text-glory-300 transition">Contact &amp; FAQ</a></li>
          <li><a href="checkout.html" class="hover:text-glory-300 transition">Pay by bank transfer</a></li>
          <li><a href="${wa('Hi Glorious Hair!')}" target="_blank" rel="noopener" class="hover:text-glory-300 transition">${WA_DISPLAY}</a></li></ul></div>
      </div>
      <div class="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 font-body text-sm">
        <p>© 2026 Glorious Hair. All rights reserved.</p>
        <div class="flex items-center gap-3 opacity-80"><span>We accept</span><span class="bg-white/10 px-2 py-1 rounded">EFT / Bank</span><span class="bg-white/10 px-2 py-1 rounded">Lay-By</span><span class="bg-white/10 px-2 py-1 rounded">WhatsApp</span></div>
      </div>
    </div>
  </footer>`;

  const floats = `
  <a href="${wa('Hi Glorious Hair!')}" target="_blank" rel="noopener" class="fixed bottom-6 right-6 z-[60] w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-glow hover:scale-110 transition float" aria-label="Chat on WhatsApp">
    <i class="fa-brands fa-whatsapp text-3xl"></i></a>
  <button id="toTop" class="fixed bottom-6 left-6 z-[60] w-11 h-11 grid place-items-center rounded-full bg-ink text-white shadow-soft opacity-0 pointer-events-none transition hover:bg-glory-600" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
  <div id="gh-toast"></div>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer + floats);

  /* ---------- toast ---------- */
  const toastEl = document.getElementById('gh-toast'); let toastT;
  window.ghToast = (msg)=>{ toastEl.textContent=msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>toastEl.classList.remove('show'),2200); };

  /* ---------- cart badge ---------- */
  const badge = document.getElementById('cartCount');
  function paintBadge(){ const n=cart.count(); badge.textContent=n; badge.classList.toggle('scale-0', n===0);
    if(n>0) badge.animate([{transform:'scale(1.5)'},{transform:'scale(1)'}],{duration:280,easing:'ease-out'}); }
  document.addEventListener('gh:cart', paintBadge); paintBadge();

  /* ---------- header scroll / mobile menu / toTop ---------- */
  const headerEl=document.getElementById('header'), navEl=headerEl.querySelector('nav'), toTop=document.getElementById('toTop');
  addEventListener('scroll',()=>{ const y=scrollY;
    headerEl.classList.toggle('top-3', y>60); headerEl.classList.toggle('top-11', y<=60);
    navEl.classList.toggle('shadow-glow', y>60);
    toTop.classList.toggle('opacity-0', y<400); toTop.classList.toggle('pointer-events-none', y<400);
  });
  const mm=document.getElementById('mobileMenu');
  document.getElementById('menuBtn').onclick=()=>{mm.classList.remove('hidden');mm.classList.add('flex');};
  document.getElementById('menuClose').onclick=()=>{mm.classList.add('hidden');mm.classList.remove('flex');};
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mm.classList.add('hidden');mm.classList.remove('flex');}));
  toTop.onclick=()=>scrollTo({top:0,behavior:'smooth'});

  /* ---------- countdown ---------- */
  const cd=document.getElementById('cd');
  if(cd){ const t=new Date(); t.setDate(t.getDate()+3); t.setHours(23,59,59,0);
    setInterval(()=>{ const d=t-new Date(); if(d<0)return;
      const days=Math.floor(d/864e5), h=Math.floor(d%864e5/36e5), m=Math.floor(d%36e5/6e4), s=Math.floor(d%6e4/1e3);
      cd.textContent=`${String(days*24+h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`; },1000); }

  /* ---------- promo code copy (buttons with data-code) ---------- */
  document.addEventListener('click',e=>{ const b=e.target.closest('[data-code]'); if(!b)return;
    navigator.clipboard?.writeText(b.dataset.code); window.ghToast('✓ '+b.dataset.code+' copied to clipboard'); });

  /* ---------- GSAP ---------- */
  window.addEventListener('load',()=>{
    document.documentElement.classList.add('gsap-ready');
    if(!window.gsap) return;
    gsap.registerPlugin(ScrollTrigger);
    const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
    if(rm){
      document.querySelectorAll('.reveal,[data-hero]').forEach(el=>el.style.opacity=1);
      document.querySelectorAll('[data-count]').forEach(el=>el.textContent=el.dataset.count);
      return;
    }
    gsap.fromTo('[data-hero]',{opacity:0,y:24},{opacity:1,y:0,duration:.9,stagger:.12,ease:'power3.out'});
    gsap.utils.toArray('.reveal').forEach(el=>gsap.fromTo(el,{opacity:0,y:28},{opacity:1,y:0,duration:.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none reverse'}}));
    gsap.utils.toArray('[data-count]').forEach(el=>{ const end=+el.dataset.count,o={v:0};
      gsap.to(o,{v:end,duration:1.6,ease:'power1.out',onUpdate(){el.textContent=Math.round(o.v);},scrollTrigger:{trigger:el,start:'top 95%',once:true}}); });
    const px=document.getElementById('parallaxImg');
    if(px) gsap.to(px,{yPercent:12,ease:'none',scrollTrigger:{trigger:px,scrub:.5}});
  });

  /* ---------- shared premium product card ---------- */
  function colorDots(max){
    return GH.COLORS.slice(0,max||5).map(c=>`<span class="w-4 h-4 rounded-full border border-black/10 ring-1 ring-white" style="background:${c.hex}" title="${c.name}"></span>`).join('');
  }
  function productCard(p){
    const line = GH.lineOf(p), from = GH.minPrice(line);
    return `<article class="group reveal">
      <a href="product.html?id=${p.id}" class="block relative rounded-3xl overflow-hidden shadow-soft sheen bg-white">
        <img src="${p.img}" alt="${p.title}" loading="lazy" class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-700">
        <span class="absolute top-3 left-3 bg-glory-600 text-white text-[11px] px-3 py-1 rounded-full font-body tracking-wide">${p.badge}</span>
        <span class="absolute top-3 right-3 bg-white/90 backdrop-blur text-ink text-[11px] px-2.5 py-1 rounded-full font-body">★ ${p.rating}</span>
        <span class="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition"></span>
        <span class="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition bg-white text-ink text-sm px-5 py-2 rounded-full font-body shadow-soft whitespace-nowrap">View product →</span>
      </a>
      <div class="mt-4">
        <h3 class="font-display text-lg sm:text-xl leading-tight">${p.title}</h3>
        <div class="flex items-center gap-1.5 mt-2">${colorDots(6)}</div>
        <div class="mt-2 font-display text-xl sm:text-2xl text-glory-600">from ${GH.R(from)}</div>
        <div class="text-ink/40 text-[11px] sm:text-xs font-body mt-0.5">${p.sold.toLocaleString('en-ZA')}+ sold · ${line.sizes.length} lengths</div>
      </div>
      <div class="mt-3 flex gap-2">
        <a href="product.html?id=${p.id}" class="flex-1 text-center px-3 py-2.5 rounded-full bg-ink text-white text-sm font-body hover:bg-glory-600 transition">View</a>
        <button data-qadd="${p.id}" class="px-3 sm:px-4 py-2.5 rounded-full border border-ink/15 text-ink text-sm font-body hover:border-glory-500 hover:text-glory-600 transition whitespace-nowrap" aria-label="Quick add">+ Add</button>
      </div>
    </article>`;
  }
  // quick-add handler (delegated)
  document.addEventListener('click',e=>{ const b=e.target.closest('[data-qadd]'); if(!b)return;
    const p=GH.productBy(b.dataset.qadd), line=GH.lineOf(p), s=line.sizes[0], col=GH.colorBy(p.color);
    GH.cart.add({name:p.title, cat:line.cat, length:s.label, color:col.name, price:s.price, img:p.img});
    window.ghToast(`Added ${p.title} · ${s.label} 💕`);
  });

  /* expose helpers for page scripts */
  window.GHUI = { wa, page, productCard, colorDots };
})();
