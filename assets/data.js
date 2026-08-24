/* ================= Glorious Hair — data & cart ================= */
window.GH = (function(){
  const WA = '27737752813';
  const WA_DISPLAY = '073 775 2813';
  const px = (id,w=900)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
  // Real studio shoot (optimised WebP). Shot specifically for Glorious Hair.
  const ph = f => `assets/photos/${f}.webp`;

  const FOUNDER = { name:'Philile Nduli', role:'Founder', img:'assets/images/Philile-removebg-preview.png', fallback:px(36338866,900) };

  // Colour options (image shown when the shade is selected)
  // Colour options. `img` (a wig product photo) is shown when the shade is picked;
  // shades without a dedicated wig photo keep the product's own wig image.
  const COLORS = [
    {id:'black',    name:'Natural Black',  hex:'#141013', img:ph('prod-frontal')},
    {id:'espresso', name:'Espresso Brown', hex:'#4A2C1A', img:ph('prod-glueless')},
    {id:'honey',    name:'Honey Blonde',   hex:'#C8894B', img:ph('prod-colourpop')},
    {id:'platinum', name:'Platinum',       hex:'#E7E1D8', img:px(11262176)},
    {id:'burgundy', name:'Burgundy',       hex:'#6E1226'},
    {id:'cherry',   name:'Cherry Red',     hex:'#C0143C'},
  ];
  const colorBy = n => COLORS.find(c=>c.name===n) || COLORS[0];

  // Real price list (official Glorious Hair flyer) + rich content
  const CATALOGUE = [
    { id:'frontal', name:'Full Frontal Wigs', cat:'frontal', badge:'Premium', img:ph('prod-frontal'),
      blurb:'Pre-plucked HD lace frontal, natural hairline, styled any way.',
      description:'Our signature full frontal wig gives you a flawless, undetectable hairline from ear to ear. Hand-tied on breathable HD lace and pre-plucked with baby hairs, it parts anywhere and styles into a sleek ponytail, half-up, or a bouncy blowout. 100% raw human hair that lasts season after season.',
      features:['13×4 HD transparent lace frontal','Pre-plucked natural hairline + baby hairs','200% density — full from root to tip','Bleached knots, ready to install','Can be washed, curled, straightened & dyed'],
      specs:{'Hair type':'100% raw human hair','Lace':'13×4 HD transparent','Density':'200%','Cap':'Medium, adjustable straps','Lengths':'20″ – 28″'},
      sizes:[{label:'20"',price:3300},{label:'22"',price:3600},{label:'24"',price:4100},{label:'26"',price:4400},{label:'28"',price:4700}] },

    { id:'glueless', name:'Glueless Wigs', cat:'glueless', badge:'Bestseller', img:ph('prod-glueless'),
      blurb:'Beginner-friendly, no glue needed. Secure, comfy, ready to wear.',
      description:'The everyday queen\'s favourite. This glueless wig clicks in with adjustable straps and combs — no glue, no gel, no stress. Pre-styled and ready to wear in minutes, it\'s the perfect grab-and-go for work, church or a night out, while still looking completely natural.',
      features:['Truly glueless — straps + combs, no adhesive','Pre-plucked & pre-styled, wear in minutes','Beginner friendly, gentle on your edges','Lightweight, breathable cap','Reusable daily — install & remove yourself'],
      specs:{'Hair type':'100% human hair','Lace':'4×4 closure','Install':'Glueless (straps & combs)','Cap':'Adjustable, elastic band','Lengths':'10″ – 16″'},
      sizes:[{label:'10"',price:2000},{label:'12"',price:2200},{label:'14"',price:2500},{label:'16"',price:2700}] },

    { id:'curly', name:'Curly Wigs', cat:'curly', badge:'Trending', img:ph('prod-curly'),
      blurb:'Bouncy defined curls with body and shine. Full, natural volume.',
      description:'Big, bouncy, unapologetic curls. Each unit holds a springy, defined curl pattern with incredible volume and shine that bounces back after every wash. Spritz with water to revive the curls — no heat needed. The showstopper that turns every head in the room.',
      features:['Defined, springy curl pattern','Huge natural volume & body','Water-activated — curls revive with a spritz','Soft, tangle-free & full to the ends','100% human hair, can be coloured'],
      specs:{'Hair type':'100% human hair','Texture':'Curly / afro-kinky','Density':'200%','Cap':'Adjustable, combs','Lengths':'10″ – 20″'},
      sizes:[{label:'10"',price:1900},{label:'12"',price:2300},{label:'14"',price:2700},{label:'16"',price:3000},{label:'18"',price:3500},{label:'20"',price:3800}] },

    { id:'bob', name:'Bob Wigs', cat:'bob', badge:'Chic', img:ph('prod-bob'),
      blurb:'Chic, timeless bob that frames the face. Light and easy to style.',
      description:'A chic, timeless bob that frames the face beautifully. Lightweight and effortlessly elegant, it\'s the low-maintenance everyday look that never goes out of style — sleek straight or with a soft inward curve.',
      features:['Face-framing blunt or C-curl bob','Lightweight & comfy all day','Pre-styled, minimal maintenance','Beginner-friendly to install','100% human hair — restyle any way'],
      specs:{'Hair type':'100% human hair','Style':'Straight bob','Density':'180%','Cap':'Adjustable, combs','Lengths':'8″ – 14″'},
      sizes:[{label:'8"',price:1500},{label:'10"',price:1700},{label:'12"',price:2000},{label:'14"',price:2400}] },

    { id:'lace', name:'HD Lace Wigs', cat:'lace', badge:'Undetectable', img:ph('prod-lace'),
      blurb:'Invisible HD melt lace for the most natural hairline yet.',
      description:'Our most natural hairline yet. Ultra-thin HD melt lace disappears into the skin for a truly invisible, undetectable finish. Pre-plucked with baby hairs and bleached knots — installed right, no one will ever know it\'s a wig.',
      features:['Ultra-thin HD melt lace','Invisible, skin-matching hairline','Pre-plucked + bleached knots','Baby hairs for a natural finish','100% human hair, glue or glueless'],
      specs:{'Hair type':'100% human hair','Lace':'HD melt lace','Density':'200%','Cap':'Adjustable straps','Lengths':'12″ – 20″'},
      sizes:[{label:'12"',price:2800},{label:'14"',price:3100},{label:'16"',price:3500},{label:'18"',price:3900},{label:'20"',price:4200}] },

    { id:'ponytail', name:'Ponytails', cat:'ponytail', badge:'Quick Glam', img:ph('prod-ponytail'),
      blurb:'Instant length & volume — a sleek drawstring pony in seconds.',
      description:'Instant length and glam in seconds. This drawstring ponytail wraps and clips over your own hair for a sleek, high pony or a bouncy blow-out finish — no salon, no fuss. The easiest way to switch up your look.',
      features:['Drawstring + clip-in, wear in seconds','Adds instant length & volume','Wrap-around natural finish','Great for gym-to-glam days','100% human hair — heat friendly'],
      specs:{'Hair type':'100% human hair','Attach':'Drawstring & clips','Style':'Wrap ponytail','Cap':'One size, adjustable','Lengths':'16″ – 26″'},
      sizes:[{label:'16"',price:650},{label:'20"',price:850},{label:'24"',price:1100},{label:'26"',price:1300}] },
  ];
  const byId = id => CATALOGUE.find(p=>p.id===id);
  const minPrice = p => Math.min(...p.sizes.map(s=>s.price));

  // Store-front products (cards + single product pages). `line` links to a CATALOGUE entry for pricing.
  const PRODUCTS = [
    { id:'full-frontal', line:'frontal', title:'Full Frontal Wig', color:'Natural Black', badge:'Premium', rating:4.9, sold:812,
      img:ph('prod-frontal'), gallery:[ph('prod-frontal'),ph('craft-2'),ph('model-hero'),ph('units-flatlay')] },
    { id:'glueless', line:'glueless', title:'Glueless Wig', color:'Espresso Brown', badge:'Bestseller', rating:4.8, sold:1240,
      img:ph('prod-glueless'), gallery:[ph('prod-glueless'),ph('prod-bob'),ph('craft-3'),ph('units-flatlay')] },
    { id:'curly', line:'curly', title:'Curly Wig', color:'Natural Black', badge:'Trending', rating:4.9, sold:960,
      img:ph('prod-curly'), gallery:[ph('prod-curly'),ph('craft-1'),ph('hero-card'),ph('promo')] },
    { id:'hd-lace', line:'lace', title:'HD Lace Wig', color:'Natural Black', badge:'Undetectable', rating:5.0, sold:410,
      img:ph('prod-lace'), gallery:[ph('prod-lace'),ph('prod-frontal'),ph('craft-2'),ph('model-hero')] },
    { id:'bob', line:'bob', title:'Bob Wig', color:'Natural Black', badge:'Chic', rating:4.8, sold:540,
      img:ph('prod-bob'), gallery:[ph('prod-bob'),ph('prod-lace'),ph('craft-4'),ph('units-flatlay')] },
    { id:'ponytail', line:'ponytail', title:'Sleek Ponytail', color:'Natural Black', badge:'Quick Glam', rating:4.7, sold:880,
      img:ph('prod-ponytail'), gallery:[ph('prod-ponytail'),ph('craft-2'),ph('units-flatlay')] },
    { id:'colour-pop', line:'curly', title:'Colour Pop Curly Wig', color:'Honey Blonde', badge:'Colour Pop', rating:4.6, sold:220,
      img:ph('prod-colourpop'), gallery:[ph('prod-colourpop'),ph('prod-curly'),ph('craft-1')] },
  ];
  const productBy = id => PRODUCTS.find(p=>p.id===id);
  const lineOf = p => byId(p.line);

  // Banking details — ⚠ PLACEHOLDER, replace with real account before going live
  const BANK = { bank:'First National Bank (FNB)', name:'Glorious Hair', account:'0000 0000 000',
    type:'Cheque / Current', branch:'250655', swift:'FIRNZAJJ',
    note:'Use your Order Reference as the payment reference.', placeholder:true };
  const DELIVERY = { fee:150, freeOver:3000 };
  const R = n => 'R' + Number(n).toLocaleString('en-ZA');

  /* ---------- cart (localStorage) ---------- */
  const KEY='gh_cart_v1';
  const loadC=()=>{try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return[]}};
  const saveC=c=>{localStorage.setItem(KEY,JSON.stringify(c));document.dispatchEvent(new Event('gh:cart'));};
  const cart={
    items:loadC,
    count:()=>loadC().reduce((n,i)=>n+i.qty,0),
    subtotal:()=>loadC().reduce((n,i)=>n+i.price*i.qty,0),
    add(item){const c=loadC();const k=i=>i.name+'|'+i.length+'|'+(i.color||'');const ex=c.find(i=>k(i)===k(item));if(ex)ex.qty+=item.qty||1;else c.push({...item,qty:item.qty||1});saveC(c);},
    setQty(idx,q){const c=loadC();if(!c[idx])return;c[idx].qty=Math.max(1,q);saveC(c);},
    remove(idx){const c=loadC();c.splice(idx,1);saveC(c);},
    clear(){saveC([]);},
  };

  return { WA, WA_DISPLAY, px, FOUNDER, COLORS, colorBy, CATALOGUE, byId, minPrice, PRODUCTS, productBy, lineOf, BANK, DELIVERY, R, cart,
           IMG:{ chestnut:px(36720012), honey:px(1850585), burgundy:px(91218), cherry:px(9862639), black:px(6923383) } };
})();
