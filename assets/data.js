/* ================= Glorious Hair — data & cart ================= */
window.GH = (function(){
  const WA = '27737752813';
  const WA_DISPLAY = '073 775 2813';
  const px = (id,w=900)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

  const FOUNDER = { name:'Philile Nduli', role:'Founder', img:'assets/founder.jpg', fallback:px(36338866,900) };

  // Colour options (image shown when the shade is selected)
  const COLORS = [
    {id:'black',    name:'Natural Black',  hex:'#141013', img:px(6923383)},
    {id:'espresso', name:'Espresso Brown', hex:'#4A2C1A', img:px(36720012)},
    {id:'honey',    name:'Honey Blonde',   hex:'#C8894B', img:px(1850585)},
    {id:'burgundy', name:'Burgundy',       hex:'#6E1226', img:px(91218)},
    {id:'cherry',   name:'Cherry Red',     hex:'#C0143C', img:px(9862639)},
    {id:'platinum', name:'Platinum',       hex:'#E7E1D8', img:px(13221799)},
  ];
  const colorBy = n => COLORS.find(c=>c.name===n) || COLORS[0];

  // Real price list (official Glorious Hair flyer) + rich content
  const CATALOGUE = [
    { id:'frontal', name:'Full Frontal Wigs', cat:'frontal', badge:'Premium', img:px(6923383),
      blurb:'Pre-plucked HD lace frontal, natural hairline, styled any way.',
      description:'Our signature full frontal wig gives you a flawless, undetectable hairline from ear to ear. Hand-tied on breathable HD lace and pre-plucked with baby hairs, it parts anywhere and styles into a sleek ponytail, half-up, or a bouncy blowout. 100% raw human hair that lasts season after season.',
      features:['13×4 HD transparent lace frontal','Pre-plucked natural hairline + baby hairs','200% density — full from root to tip','Bleached knots, ready to install','Can be washed, curled, straightened & dyed'],
      specs:{'Hair type':'100% raw human hair','Lace':'13×4 HD transparent','Density':'200%','Cap':'Medium, adjustable straps','Lengths':'20″ – 28″'},
      sizes:[{label:'20"',price:3300},{label:'22"',price:3600},{label:'24"',price:4100},{label:'26"',price:4400},{label:'28"',price:4700}] },

    { id:'glueless', name:'Glueless Wigs', cat:'glueless', badge:'Bestseller', img:px(36720012),
      blurb:'Beginner-friendly, no glue needed. Secure, comfy, ready to wear.',
      description:'The everyday queen\'s favourite. This glueless wig clicks in with adjustable straps and combs — no glue, no gel, no stress. Pre-styled and ready to wear in minutes, it\'s the perfect grab-and-go for work, church or a night out, while still looking completely natural.',
      features:['Truly glueless — straps + combs, no adhesive','Pre-plucked & pre-styled, wear in minutes','Beginner friendly, gentle on your edges','Lightweight, breathable cap','Reusable daily — install & remove yourself'],
      specs:{'Hair type':'100% human hair','Lace':'4×4 closure','Install':'Glueless (straps & combs)','Cap':'Adjustable, elastic band','Lengths':'10″ – 16″'},
      sizes:[{label:'10"',price:2000},{label:'12"',price:2200},{label:'14"',price:2500},{label:'16"',price:2700}] },

    { id:'curly', name:'Curly Wigs', cat:'curly', badge:'Trending', img:px(33930153),
      blurb:'Bouncy defined curls with body and shine. Full, natural volume.',
      description:'Big, bouncy, unapologetic curls. Each unit holds a springy, defined curl pattern with incredible volume and shine that bounces back after every wash. Spritz with water to revive the curls — no heat needed. The showstopper that turns every head in the room.',
      features:['Defined, springy curl pattern','Huge natural volume & body','Water-activated — curls revive with a spritz','Soft, tangle-free & full to the ends','100% human hair, can be coloured'],
      specs:{'Hair type':'100% human hair','Texture':'Curly / afro-kinky','Density':'200%','Cap':'Adjustable, combs','Lengths':'10″ – 20″'},
      sizes:[{label:'10"',price:1900},{label:'12"',price:2300},{label:'14"',price:2700},{label:'16"',price:3000},{label:'18"',price:3500},{label:'20"',price:3800}] },
  ];
  const byId = id => CATALOGUE.find(p=>p.id===id);
  const minPrice = p => Math.min(...p.sizes.map(s=>s.price));

  // Store-front products (cards + single product pages). `line` links to a CATALOGUE entry for pricing.
  const PRODUCTS = [
    { id:'full-frontal', line:'frontal', title:'Full Frontal Wig',  color:'Natural Black',  badge:'Premium',   rating:4.9, sold:812,
      img:px(6923383), gallery:[px(6923383),px(720358),px(13871638),px(29204263)] },
    { id:'glueless',     line:'glueless', title:'Glueless Wig',      color:'Espresso Brown', badge:'Bestseller',rating:4.8, sold:1240,
      img:px(36720012), gallery:[px(36720012),px(6923266),px(36338866),px(34786943)] },
    { id:'curly',        line:'curly',   title:'Curly Wig',          color:'Natural Black',  badge:'Trending',  rating:4.9, sold:960,
      img:px(33930153), gallery:[px(33930153),px(6923450),px(6923266),px(6923437)] },
    { id:'cherry-curly', line:'curly',   title:'Cherry Red Curly Wig',color:'Cherry Red',    badge:'Colour Pop',rating:4.7, sold:318,
      img:px(9862639), gallery:[px(9862639),px(33930153),px(6923266)] },
    { id:'platinum-afro',line:'curly',   title:'Platinum Afro Wig',  color:'Platinum',       badge:'Editorial', rating:4.9, sold:274,
      img:px(13221799), gallery:[px(13221799),px(13221796),px(13221800),px(13221802)] },
    { id:'copper-glam',  line:'glueless',title:'Copper Glam Glueless',color:'Espresso Brown',badge:'New',       rating:4.8, sold:190,
      img:px(36338866), gallery:[px(36338866),px(36720012),px(29204263)] },
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
