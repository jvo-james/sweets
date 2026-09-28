const image = (id, options = "") => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85${options ? `&${options}` : ""}`;

const products = [
  {id:"rose-silk",name:"Rose Silk",gender:"Women",scent:"Floral",tags:["Soft","Date Night"],price:560,oldPrice:null,volume:"50 ml",rating:4.9,reviews:68,new:true,popular:true,feel:"Soft and close at first, then warmer as it sits. Easy for a date, dinner or days when you want something pretty without too much sweetness.",notes:{top:"Pink pepper, pear",heart:"Rose, peony",base:"White musk, sandalwood"},story:"A clean rose that feels more like fresh fabric than a big bouquet.",images:[image("photo-1622916132646-50a2a6fe9b9a"),image("photo-1618436624013-b4d65f4142d2"),image("photo-1595425959632-34f2822322ce")],tag:"New"},
  {id:"amber-hour",name:"Amber Hour",gender:"Unisex",scent:"Gourmand",tags:["Warm","Date Night","Special"],price:680,oldPrice:null,volume:"50 ml",rating:4.8,reviews:112,new:true,popular:true,feel:"Warm amber with a soft sweet edge. The kind of scent that works when the sun goes down and you want a little more presence.",notes:{top:"Mandarin, saffron",heart:"Amber, rose",base:"Vanilla, cedar"},story:"Warm, golden and a little sweet. Made for late plans.",images:[image("photo-1733660227163-01bc46e0d7d7"),image("photo-1709662369957-0cbf9f8452fc"),image("photo-1615634260830-85d92cd1b769")],tag:"New"},
  {id:"cedar-room",name:"Cedar Room",gender:"Men",scent:"Woody",tags:["Deep","Special","Office"],price:720,oldPrice:null,volume:"100 ml",rating:4.9,reviews:91,new:true,popular:true,feel:"Dry cedar over a smooth amber base. Clean enough for daytime but deep enough to carry into the night.",notes:{top:"Bergamot, cardamom",heart:"Cedar, iris",base:"Amber, vetiver"},story:"A dry woody scent with a soft landing.",images:[image("photo-1672848812581-f6e71ffa6839"),image("photo-1705936119413-bdd48ac9699c"),image("photo-1709662369957-0cbf9f8452fc")],tag:"New"},
  {id:"blue-hour",name:"Blue Hour",gender:"Unisex",scent:"Fresh",tags:["Fresh","Everyday","Office"],price:510,oldPrice:null,volume:"50 ml",rating:4.7,reviews:84,new:true,popular:false,feel:"A cool, airy opening with clean woods underneath. Easy to wear when you want to smell fresh for a long time.",notes:{top:"Lemon, mint",heart:"Lavender, tea",base:"Musk, cedar"},story:"Clean air after sunset. Fresh, simple and very easy to wear.",images:[image("photo-1705936119413-bdd48ac9699c"),image("photo-1615634260830-85d92cd1b769"),image("photo-1587304431894-c7daa9d17556")],tag:"New"},
  {id:"vanilla-cloud",name:"Vanilla Cloud",gender:"Women",scent:"Gourmand",tags:["Sweet","Soft","Date Night"],price:490,oldPrice:null,volume:"50 ml",rating:4.8,reviews:74,new:true,popular:true,feel:"Creamy vanilla without becoming heavy. Sweet, soft and made for close conversations.",notes:{top:"Coconut, pear",heart:"Vanilla, jasmine",base:"Tonka, musk"},story:"A soft vanilla that keeps a little air around it.",images:[image("photo-1618436624013-b4d65f4142d2"),image("photo-1590580463662-88d585eda98f"),image("photo-1733660227163-01bc46e0d7d7")],tag:"New"},
  {id:"citrus-sunday",name:"Citrus Sunday",gender:"Unisex",scent:"Citrus",tags:["Fresh","Weekend","Everyday"],price:430,oldPrice:null,volume:"50 ml",rating:4.6,reviews:59,new:false,popular:true,feel:"Bright citrus, green leaves and a light woody finish. It feels like a clean shirt and a slow morning.",notes:{top:"Bergamot, lemon",heart:"Neroli, green tea",base:"Cedar, musk"},story:"Bright and easy. The bottle to reach for when you want a fresh start.",images:[image("photo-1615634260830-85d92cd1b769"),image("photo-1587304431894-c7daa9d17556"),image("photo-1611268622894-2ae2cff570bb")],tag:"Best seller"},
  {id:"oud-after-dark",name:"Oud After Dark",gender:"Men",scent:"Woody",tags:["Bold","Special","Date Night"],price:820,oldPrice:null,volume:"100 ml",rating:4.9,reviews:136,new:false,popular:true,feel:"Rich oud, dry wood and a warm amber base. Stronger than the daily scents but still smooth on the skin.",notes:{top:"Saffron, black pepper",heart:"Oud, rose",base:"Amber, leather"},story:"Dark wood, warm skin and plans that run late.",images:[image("photo-1705936119413-bdd48ac9699c"),image("photo-1672848812581-f6e71ffa6839"),image("photo-1709662369957-0cbf9f8452fc")],tag:"Best seller"},
  {id:"clean-linen",name:"Clean Linen",gender:"Unisex",scent:"Fresh",tags:["Soft","Office","Everyday"],price:390,oldPrice:null,volume:"50 ml",rating:4.7,reviews:101,new:false,popular:true,feel:"A fresh clean scent with soft musk. Quiet, easy and good for everyday wear.",notes:{top:"Aldehydes, bergamot",heart:"Linen accord, iris",base:"Musk, sandalwood"},story:"Fresh sheets, open windows and a very clean start.",images:[image("photo-1587304431894-c7daa9d17556"),image("photo-1615634260830-85d92cd1b769"),image("photo-1611268622894-2ae2cff570bb")],tag:"Best seller"},
  {id:"peach-glass",name:"Peach Glass",gender:"Women",scent:"Floral",tags:["Soft","Weekend"],price:540,oldPrice:null,volume:"50 ml",rating:4.7,reviews:43,new:false,popular:false,feel:"Juicy peach and petals with a clean skin-like dry down.",notes:{top:"Peach, mandarin",heart:"Rose, orange blossom",base:"Musk, amber"},story:"A soft peach scent that stays clean instead of syrupy.",images:[image("photo-1595425959632-34f2822322ce"),image("photo-1622916132646-50a2a6fe9b9a"),image("photo-1618436624013-b4d65f4142d2")]},
  {id:"santal-sunday",name:"Santal Sunday",gender:"Unisex",scent:"Woody",tags:["Soft","Weekend","Everyday"],price:620,oldPrice:null,volume:"50 ml",rating:4.8,reviews:63,new:false,popular:true,feel:"Creamy sandalwood, a little spice and a soft musk base.",notes:{top:"Pink pepper, bergamot",heart:"Sandalwood, fig",base:"Musk, amber"},story:"A warm wood scent with a calm feel.",images:[image("photo-1672848812581-f6e71ffa6839"),image("photo-1705936119413-bdd48ac9699c"),image("photo-1587304431894-c7daa9d17556")]},
  {id:"rose-noir",name:"Rose Noir",gender:"Women",scent:"Floral",tags:["Bold","Date Night","Special"],price:660,oldPrice:null,volume:"50 ml",rating:4.8,reviews:79,new:false,popular:true,feel:"Rose gets darker here with spice, amber and a touch of smoke.",notes:{top:"Pink pepper, plum",heart:"Rose, violet",base:"Amber, patchouli"},story:"A rose for the night, not the garden.",images:[image("photo-1611268622894-2ae2cff570bb"),image("photo-1618436624013-b4d65f4142d2"),image("photo-1733660227163-01bc46e0d7d7")],tag:"Best seller"},
  {id:"green-day",name:"Green Day",gender:"Unisex",scent:"Fresh",tags:["Fresh","Office","Weekend"],price:420,oldPrice:null,volume:"50 ml",rating:4.6,reviews:38,new:false,popular:false,feel:"Green tea, crisp citrus and a clean mineral finish.",notes:{top:"Lime, mint",heart:"Green tea, basil",base:"Musk, vetiver"},story:"A green, clean scent for bright days.",images:[image("photo-1615634260830-85d92cd1b769"),image("photo-1587304431894-c7daa9d17556"),image("photo-1705936119413-bdd48ac9699c")]},
  {id:"sugar-skin",name:"Sugar Skin",gender:"Women",scent:"Gourmand",tags:["Sweet","Soft","Everyday"],price:470,oldPrice:null,volume:"50 ml",rating:4.7,reviews:56,new:false,popular:false,feel:"Soft vanilla sugar with clean musk. Sweet but not sticky.",notes:{top:"Pear, orange",heart:"Vanilla, jasmine",base:"Sugar, musk"},story:"A skin-close sweet scent.",images:[image("photo-1618436624013-b4d65f4142d2"),image("photo-1595425959632-34f2822322ce"),image("photo-1733660227163-01bc46e0d7d7")]},
  {id:"cashmere-01",name:"Cashmere 01",gender:"Unisex",scent:"Woody",tags:["Soft","Office","Everyday"],price:590,oldPrice:null,volume:"50 ml",rating:4.8,reviews:46,new:false,popular:false,feel:"Warm cashmere woods with soft musk. Easy to wear close to the skin.",notes:{top:"Bergamot, cardamom",heart:"Cashmere wood, violet",base:"Musk, amber"},story:"Soft texture in perfume form.",images:[image("photo-1709662369957-0cbf9f8452fc"),image("photo-1672848812581-f6e71ffa6839"),image("photo-1615634260830-85d92cd1b769")]},
  {id:"midnight-musk",name:"Midnight Musk",gender:"Men",scent:"Woody",tags:["Bold","Date Night","Special"],price:750,oldPrice:null,volume:"100 ml",rating:4.7,reviews:88,new:false,popular:true,feel:"Clean musk with dark woods and amber. Smooth and easy to notice.",notes:{top:"Bergamot, juniper",heart:"Musk, cedar",base:"Amber, tonka"},story:"A darker musk for after hours.",images:[image("photo-1672848812581-f6e71ffa6839"),image("photo-1709662369957-0cbf9f8452fc"),image("photo-1705936119413-bdd48ac9699c")]},
  {id:"fig-tonic",name:"Fig Tonic",gender:"Unisex",scent:"Fresh",tags:["Fresh","Weekend","Everyday"],price:515,oldPrice:null,volume:"50 ml",rating:4.6,reviews:31,new:false,popular:false,feel:"Fig leaf, citrus and a little green wood. Fresh with a soft fruit edge.",notes:{top:"Lime, fig leaf",heart:"Fig, tea",base:"Cedar, musk"},story:"Green fig with a bright start.",images:[image("photo-1615634260830-85d92cd1b769"),image("photo-1587304431894-c7daa9d17556"),image("photo-1709662369957-0cbf9f8452fc")]},
  {id:"soft-peony",name:"Soft Peony",gender:"Women",scent:"Floral",tags:["Soft","Everyday","Office"],price:530,oldPrice:null,volume:"50 ml",rating:4.8,reviews:52,new:false,popular:false,feel:"Fresh flowers, clean musk and a light powdery feel.",notes:{top:"Pear, bergamot",heart:"Peony, rose",base:"Musk, amber"},story:"Light flowers and clean skin.",images:[image("photo-1622916132646-50a2a6fe9b9a"),image("photo-1590580463662-88d585eda98f"),image("photo-1611268622894-2ae2cff570bb")]},
  {id:"spice-club",name:"Spice Club",gender:"Men",scent:"Gourmand",tags:["Bold","Date Night","Special"],price:690,oldPrice:null,volume:"100 ml",rating:4.7,reviews:70,new:false,popular:false,feel:"Warm spice, dry woods and a smooth sweet base.",notes:{top:"Black pepper, orange",heart:"Cinnamon, cedar",base:"Vanilla, amber"},story:"Spice without the heavy feeling.",images:[image("photo-1709662369957-0cbf9f8452fc"),image("photo-1705936119413-bdd48ac9699c"),image("photo-1672848812581-f6e71ffa6839")]},
  {id:"neroli-clean",name:"Neroli Clean",gender:"Unisex",scent:"Citrus",tags:["Fresh","Office","Everyday"],price:455,oldPrice:null,volume:"50 ml",rating:4.7,reviews:35,new:false,popular:false,feel:"Neroli and citrus over a clean green base.",notes:{top:"Bergamot, neroli",heart:"Orange blossom, green tea",base:"Musk, cedar"},story:"Fresh citrus with a soft floral middle.",images:[image("photo-1615634260830-85d92cd1b769"),image("photo-1622916132646-50a2a6fe9b9a"),image("photo-1587304431894-c7daa9d17556")]},
  {id:"dark-vanilla",name:"Dark Vanilla",gender:"Unisex",scent:"Gourmand",tags:["Bold","Date Night","Special"],price:735,oldPrice:null,volume:"100 ml",rating:4.9,reviews:115,new:false,popular:true,feel:"Vanilla with amber, dark woods and a little spice. Sweet but grown.",notes:{top:"Saffron, orange",heart:"Vanilla, rose",base:"Amber, sandalwood"},story:"The warmest bottle in the room.",images:[image("photo-1733660227163-01bc46e0d7d7"),image("photo-1709662369957-0cbf9f8452fc"),image("photo-1672848812581-f6e71ffa6839")],tag:"Best seller"},
  {id:"white-tea",name:"White Tea",gender:"Unisex",scent:"Fresh",tags:["Soft","Office","Everyday"],price:440,oldPrice:null,volume:"50 ml",rating:4.5,reviews:26,new:false,popular:false,feel:"Clean tea, soft citrus and light musk. Quiet and easy.",notes:{top:"Lemon, petitgrain",heart:"White tea, jasmine",base:"Musk, cedar"},story:"Quiet freshness for every day.",images:[image("photo-1587304431894-c7daa9d17556"),image("photo-1615634260830-85d92cd1b769"),image("photo-1611268622894-2ae2cff570bb")]},
  {id:"amber-rose",name:"Amber Rose",gender:"Women",scent:"Floral",tags:["Warm","Date Night","Special"],price:610,oldPrice:null,volume:"50 ml",rating:4.8,reviews:49,new:false,popular:false,feel:"Soft rose wrapped in warm amber and musk.",notes:{top:"Pear, pink pepper",heart:"Rose, jasmine",base:"Amber, musk"},story:"Rose with a warmer finish.",images:[image("photo-1618436624013-b4d65f4142d2"),image("photo-1733660227163-01bc46e0d7d7"),image("photo-1622916132646-50a2a6fe9b9a")]},
  {id:"coastal-air",name:"Coastal Air",gender:"Men",scent:"Citrus",tags:["Fresh","Everyday","Weekend"],price:480,oldPrice:null,volume:"100 ml",rating:4.6,reviews:34,new:false,popular:false,feel:"Bright citrus with mineral air and clean woods.",notes:{top:"Grapefruit, lemon",heart:"Sea salt, lavender",base:"Cedar, musk"},story:"Fresh air, clean skin and open space.",images:[image("photo-1615634260830-85d92cd1b769"),image("photo-1705936119413-bdd48ac9699c"),image("photo-1587304431894-c7daa9d17556")]},
  {id:"velvet-musk",name:"Velvet Musk",gender:"Unisex",scent:"Floral",tags:["Soft","Date Night","Everyday"],price:575,oldPrice:null,volume:"50 ml",rating:4.7,reviews:42,new:false,popular:false,feel:"Soft floral notes over a musky skin-like base. Smooth without being loud.",notes:{top:"Pear, pink pepper",heart:"Rose, iris",base:"Musk, sandalwood"},story:"A soft scent that stays close.",images:[image("photo-1590580463662-88d585eda98f"),image("photo-1618436624013-b4d65f4142d2"),image("photo-1587304431894-c7daa9d17556")]},
  {id:"ember-wood",name:"Ember Wood",gender:"Men",scent:"Woody",tags:["Deep","Special","Date Night"],price:780,oldPrice:null,volume:"100 ml",rating:4.8,reviews:93,new:false,popular:true,feel:"Smoky wood, amber and a soft sweet base. Deep but not harsh.",notes:{top:"Black pepper, bergamot",heart:"Cedar, incense",base:"Amber, vetiver"},story:"Warm wood with a little smoke.",images:[image("photo-1672848812581-f6e71ffa6839"),image("photo-1709662369957-0cbf9f8452fc"),image("photo-1705936119413-bdd48ac9699c")],tag:"Best seller"},
  {id:"petal-water",name:"Petal Water",gender:"Women",scent:"Floral",tags:["Fresh","Soft","Weekend"],price:505,oldPrice:null,volume:"50 ml",rating:4.6,reviews:28,new:false,popular:false,feel:"Airy floral notes with watery freshness and clean musk.",notes:{top:"Pear, bergamot",heart:"Peony, rose",base:"Musk, cedar"},story:"A light floral with plenty of air.",images:[image("photo-1595425959632-34f2822322ce"),image("photo-1611268622894-2ae2cff570bb"),image("photo-1590580463662-88d585eda98f")]},
  {id:"tonka-night",name:"Tonka Night",gender:"Men",scent:"Gourmand",tags:["Warm","Date Night","Special"],price:665,oldPrice:null,volume:"100 ml",rating:4.8,reviews:61,new:false,popular:false,feel:"Tonka, vanilla and dry woods with a warm finish.",notes:{top:"Mandarin, pepper",heart:"Tonka, cardamom",base:"Vanilla, cedar"},story:"A warm sweet scent for after dark.",images:[image("photo-1709662369957-0cbf9f8452fc"),image("photo-1733660227163-01bc46e0d7d7"),image("photo-1672848812581-f6e71ffa6839")]},
  {id:"moss-shirt",name:"Moss Shirt",gender:"Unisex",scent:"Fresh",tags:["Fresh","Office","Everyday"],price:460,oldPrice:null,volume:"50 ml",rating:4.5,reviews:24,new:false,popular:false,feel:"Green moss and citrus with a dry clean finish.",notes:{top:"Lemon, basil",heart:"Moss, tea",base:"Cedar, musk"},story:"A crisp green scent that feels put together.",images:[image("photo-1587304431894-c7daa9d17556"),image("photo-1705936119413-bdd48ac9699c"),image("photo-1615634260830-85d92cd1b769")]},
  {id:"soft-saffron",name:"Soft Saffron",gender:"Unisex",scent:"Gourmand",tags:["Warm","Special","Date Night"],price:645,oldPrice:null,volume:"50 ml",rating:4.7,reviews:39,new:false,popular:false,feel:"Saffron, soft amber and vanilla. Warm without getting heavy.",notes:{top:"Saffron, bergamot",heart:"Rose, amber",base:"Vanilla, musk"},story:"Golden spice softened with vanilla.",images:[image("photo-1733660227163-01bc46e0d7d7"),image("photo-1618436624013-b4d65f4142d2"),image("photo-1709662369957-0cbf9f8452fc")],tag:"New"}
];

const cartKey = "sweets-cart";

function getCart(){
  try{return JSON.parse(localStorage.getItem(cartKey) || "[]");}catch{return []}
}
function saveCart(cart){localStorage.setItem(cartKey, JSON.stringify(cart)); updateCartCount();}
function productById(id){return products.find(p=>p.id===id)}
function formatMoney(value){return `GH₵${value.toLocaleString("en-GH")}`}
function updateCartCount(){
  const count=getCart().reduce((sum,item)=>sum+item.qty,0);
  document.querySelectorAll("[data-cart-count]").forEach(el=>el.textContent=count);
}
function productCardMarkup(p){
  return `<article class="product-card">
    <a href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${p.name}">
      <div class="product-media">
        <img src="${p.images[0]}&w=1000" alt="${p.name} fragrance bottle" loading="lazy">
        ${p.tag?`<span class="product-tag">${p.tag}</span>`:""}
        <span class="product-quick">View scent <span class="arrow-icon" aria-hidden="true"></span></span>
      </div>
      <div class="product-info">
        <div class="product-info-top">
          <span class="product-category">${p.scent}</span>
          <p class="product-price">${formatMoney(p.price)}</p>
        </div>
        <div class="product-title-row">
          <h3 class="product-name">${p.name}</h3>
          <span class="product-card-arrow arrow-icon" aria-hidden="true"></span>
        </div>
        <p class="product-sub"><span>${p.gender}</span><span class="product-sub-separator"></span><span>${p.volume}</span></p>
        <p class="product-rating">${p.rating.toFixed(1)} / 5 / ${p.reviews} reviews</p>
      </div>
    </a>
  </article>`;
}
function queryParams(){return new URLSearchParams(window.location.search)}

function initShared(){
  updateCartCount();
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  const header=document.querySelector(".site-header");
  const mobileMenu=document.querySelector("[data-mobile-menu]");
  const closeMenu=()=>{
    if(!header)return;
    header.classList.remove("menu-open");
    mobileMenu?.classList.remove("open");
    document.querySelectorAll("[data-menu-toggle]").forEach(btn=>btn.setAttribute("aria-expanded","false"));
  };
  document.querySelectorAll("[data-search-toggle]").forEach(btn=>btn.addEventListener("click",()=>{
    const drawer=document.querySelector("[data-search-drawer]");
    drawer?.classList.toggle("open");
    closeMenu();
  }));
  document.querySelectorAll("[data-menu-toggle]").forEach(btn=>btn.addEventListener("click",()=>{
    if(!header)return;
    const open=header.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", String(open));
    mobileMenu?.classList.toggle("open",open);
    if(open) document.querySelector("[data-search-drawer]")?.classList.remove("open");
  }));
  mobileMenu?.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
  document.querySelectorAll("[data-newsletter-form]").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault();
    const btn=form.querySelector("button");
    btn.innerHTML='You are in <span class="arrow-icon" aria-hidden="true"></span>';
    btn.disabled=true;
  }));
  document.querySelectorAll("[data-contact-form]").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault();
    form.reset();
    const msg=form.querySelector("[data-contact-success]");
    if(msg) msg.hidden=false;
  }));
}

function initHome(){
  const newWrap=document.querySelector("[data-home-new-products]");
  if(newWrap){
    const items=products.filter(p=>p.new).slice(0,8);
    newWrap.innerHTML=items.map(productCardMarkup).join("");
    const slider=newWrap.closest("[data-new-slider]");
    const prev=slider?.querySelector("[data-new-prev]");
    const next=slider?.querySelector("[data-new-next]");
    let index=0;
    const visible=()=>window.matchMedia("(max-width:1120px)").matches?2:4;
    const step=()=> {
      const card=newWrap.querySelector(".product-card");
      if(!card)return 0;
      const styles=getComputedStyle(newWrap);
      return card.getBoundingClientRect().width + parseFloat(styles.columnGap || styles.gap || 0);
    };
    const refresh=()=>{
      const maxIndex=Math.max(0,items.length-visible());
      index=Math.min(index,maxIndex);
      const distance=step()*index;
      newWrap.style.transform=`translate3d(${-distance}px,0,0)`;
      if(prev)prev.disabled=index<=0;
      if(next)next.disabled=index>=maxIndex;
    };
    prev?.addEventListener("click",()=>{index=Math.max(0,index-1);refresh()});
    next?.addEventListener("click",()=>{index=Math.min(Math.max(0,items.length-visible()),index+1);refresh()});
    window.addEventListener("resize",refresh,{passive:true});
    requestAnimationFrame(refresh);
  }

  const bestWrap=document.querySelector("[data-home-best-gallery]");
  if(bestWrap){
    const items=products.filter(p=>p.popular).slice(0,6);
    bestWrap.innerHTML=items.map(p=>`
      <a class="gallery-tile" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${p.name}">
        <img src="${p.images[0]}&w=1400" alt="${p.name} fragrance bottle" loading="lazy">
        <div class="gallery-caption">
          <span>${p.name}</span>
          <span>View scent <span class="arrow-icon" aria-hidden="true"></span></span>
        </div>
      </a>`).join("");
  }
}

function initShop(){
  const grid=document.querySelector("[data-shop-grid]"); if(!grid)return;
  const params=queryParams();
  const state={gender:params.get("gender")?[params.get("gender")]:[],scent:params.get("scent")?[params.get("scent")]:[],price:[],q:params.get("q")||"",sort:params.get("sort")||"featured"};
  const checkboxes=[...document.querySelectorAll("[data-filter]")];
  checkboxes.forEach(cb=>{
    if(state[cb.dataset.filter]?.includes(cb.value))cb.checked=true;
    cb.addEventListener("change",render);
  });
  const sortSelect=document.querySelector("[data-sort-select]");
  if(sortSelect){sortSelect.value=state.sort;sortSelect.addEventListener("change",()=>{state.sort=sortSelect.value;render();});}
  const filterPanel=document.querySelector("[data-filter-panel]");
  document.querySelector("[data-filter-toggle]")?.addEventListener("click",()=>{filterPanel.classList.toggle("open");filterPanel.setAttribute("aria-hidden",String(!filterPanel.classList.contains("open")))});
  document.querySelector("[data-filter-clear]")?.addEventListener("click",()=>{checkboxes.forEach(c=>c.checked=false);state.gender=[];state.scent=[];state.price=[];render();});
  document.querySelector("[data-filter-empty-clear]")?.addEventListener("click",()=>{checkboxes.forEach(c=>c.checked=false);state.gender=[];state.scent=[];state.price=[];render();});
  const syncState=()=>{state.gender=checkboxes.filter(c=>c.dataset.filter==="gender"&&c.checked).map(c=>c.value);state.scent=checkboxes.filter(c=>c.dataset.filter==="scent"&&c.checked).map(c=>c.value);state.price=checkboxes.filter(c=>c.dataset.filter==="price"&&c.checked).map(c=>c.value)};
  function render(){
    syncState(); let result=[...products];
    if(state.q) {const q=state.q.toLowerCase();result=result.filter(p=>`${p.name} ${p.gender} ${p.scent} ${p.tags.join(" ")}`.toLowerCase().includes(q));}
    if(state.gender.length)result=result.filter(p=>state.gender.includes(p.gender));
    if(state.scent.length)result=result.filter(p=>state.scent.includes(p.scent));
    if(state.price.length)result=result.filter(p=>state.price.some(range=>{const [min,max]=range.split("-").map(Number);return p.price>=min&&p.price<max}));
    if(state.sort==="newest")result.sort((a,b)=>Number(b.new)-Number(a.new));
    if(state.sort==="popular")result.sort((a,b)=>Number(b.popular)-Number(a.popular)||b.rating-a.rating);
    if(state.sort==="price-low")result.sort((a,b)=>a.price-b.price);
    if(state.sort==="price-high")result.sort((a,b)=>b.price-a.price);
    grid.innerHTML=result.map(productCardMarkup).join("");
    const hasFilters=state.gender.length+state.scent.length+state.price.length+(state.q?1:0);
    const countEl=document.querySelector("[data-filter-count]");countEl.textContent=hasFilters;countEl.classList.toggle("visible",hasFilters>0);
    const active=document.querySelector("[data-active-filters]");
    const activeValues=[...state.gender,...state.scent,...state.price.map(x=>x.replace("0-450","Under GH₵450").replace("450-700","GH₵450 to GH₵700").replace("700-9999","GH₵700+"))];
    if(state.q)activeValues.unshift(`Search: ${state.q}`);
    active.innerHTML=activeValues.map(v=>`<span class="active-filter">${v}</span>`).join("");
    document.querySelector("[data-empty-state]").hidden=result.length!==0;
  }
  render();
}

function initProduct(){
  const detail=document.querySelector("[data-product-detail]");if(!detail)return;
  const id=queryParams().get("id")||products[0].id;const p=productById(id)||products[0];
  const title=p.name;document.title=`${title} | Sweets`;
  const main=document.querySelector("[data-product-main-image]");main.style.backgroundImage=`url('${p.images[0]}&w=1500')`;main.setAttribute("role","img");main.setAttribute("aria-label",`${p.name} fragrance bottle`);
  document.querySelector("[data-product-thumbs]").innerHTML=p.images.map((src,i)=>`<button type="button" class="product-thumb ${i===0?"active":""}" style="background-image:url('${src}&w=400')" aria-label="View image ${i+1}"></button>`).join("");
  document.querySelectorAll(".product-thumb").forEach((btn,i)=>btn.addEventListener("click",()=>{main.style.backgroundImage=`url('${p.images[i]}&w=1500')`;document.querySelectorAll(".product-thumb").forEach(x=>x.classList.remove("active"));btn.classList.add("active")}));
  const set=(sel,val)=>{const el=document.querySelector(sel);if(el)el.textContent=val};
  set("[data-product-gender]",`${p.gender} / ${p.scent}`);set("[data-product-name]",title);set("[data-product-price]",formatMoney(p.price));set("[data-product-rating]",`${p.rating.toFixed(1)} / 5`);set("[data-product-reviews]",`${p.reviews} reviews`);set("[data-product-description]",p.feel);set("[data-product-feel]",p.feel);set("[data-note-top]",p.notes.top);set("[data-note-heart]",p.notes.heart);set("[data-note-base]",p.notes.base);set("[data-note-top-short]",p.notes.top.split(",")[0]);set("[data-note-heart-short]",p.notes.heart.split(",")[0]);set("[data-note-base-short]",p.notes.base.split(",")[0]);set("[data-story-title]",p.story);set("[data-story-copy]",p.feel);
  let qty=1, size=50;
  document.querySelectorAll("[data-size]").forEach(btn=>btn.addEventListener("click",()=>{size=Number(btn.dataset.size);document.querySelectorAll("[data-size]").forEach(x=>x.classList.remove("active"));btn.classList.add("active");set("[data-size-value]",`${size} ml`)}));
  document.querySelector("[data-qty-minus]")?.addEventListener("click",()=>{qty=Math.max(1,qty-1);set("[data-product-qty]",qty)});
  document.querySelector("[data-qty-plus]")?.addEventListener("click",()=>{qty=Math.min(9,qty+1);set("[data-product-qty]",qty)});
  document.querySelector("[data-add-product]")?.addEventListener("click",()=>{
    const cart=getCart();const key=`${p.id}-${size}`;const found=cart.find(x=>x.key===key);if(found)found.qty+=qty;else cart.push({key,id:p.id,qty,size});saveCart(cart);
    const btn=document.querySelector("[data-add-product]");btn.innerHTML='Added';setTimeout(()=>btn.innerHTML='Add to bag <span class="arrow-icon" aria-hidden="true"></span>',1300);
  });
  const related=document.querySelector("[data-related-products]");if(related)related.innerHTML=products.filter(x=>x.id!==p.id && (x.scent===p.scent||x.gender===p.gender)).slice(0,4).map(productCardMarkup).join("");
}

function initFinder(){
  const form=document.querySelector("[data-finder-form]");if(!form)return;
  let step=1;const steps=[...document.querySelectorAll("[data-step]")];
  const show=()=>{steps.forEach(s=>s.classList.toggle("active",Number(s.dataset.step)===step));document.querySelectorAll("[data-progress]").forEach(x=>x.classList.toggle("active",Number(x.dataset.progress)<=step));window.scrollTo({top:document.querySelector(".finder-flow").offsetTop-40,behavior:"smooth"});};
  const canContinue=()=>{const current=steps.find(s=>Number(s.dataset.step)===step);return current.querySelector("input:checked")!==null};
  document.querySelectorAll("[data-finder-next]").forEach(btn=>btn.addEventListener("click",()=>{if(!canContinue()){btn.classList.add("shake");setTimeout(()=>btn.classList.remove("shake"),450);return}step=Math.min(4,step+1);show()}));
  document.querySelectorAll("[data-finder-back]").forEach(btn=>btn.addEventListener("click",()=>{step=Math.max(1,step-1);show()}));
  form.addEventListener("submit",e=>{e.preventDefault();if(!canContinue())return;const data=new FormData(form);const family=data.get("family"),occasion=data.get("occasion"),strength=data.get("strength"),gender=data.get("gender");let matches=products.filter(p=>p.scent===family);if(gender)matches=matches.filter(p=>p.gender===gender || p.gender==="Unisex");if(matches.length<3)matches=products.filter(p=>p.scent===family);matches.sort((a,b)=>{const aScore=(a.tags.includes(occasion)?2:0)+(a.tags.includes(strength)?1:0)+(a.popular?1:0);const bScore=(b.tags.includes(occasion)?2:0)+(b.tags.includes(strength)?1:0)+(b.popular?1:0);return bScore-aScore});matches=matches.slice(0,3);const results=document.querySelector("[data-finder-results]");form.hidden=true;document.querySelector(".finder-progress").hidden=true;results.hidden=false;document.querySelector("[data-finder-summary]").textContent=`You picked ${family.toLowerCase()} for ${occasion.toLowerCase()} wear with a ${strength.toLowerCase()} feel. Here are three to start with.`;document.querySelector("[data-finder-grid]").innerHTML=matches.map(productCardMarkup).join("");window.scrollTo({top:results.offsetTop-50,behavior:"smooth"});});
}

function initCart(){
  const itemsWrap=document.querySelector("[data-cart-items]");if(!itemsWrap)return;
  const empty=document.querySelector("[data-cart-empty]"),layout=document.querySelector(".cart-layout");
  const render=()=>{
    const cart=getCart();if(!cart.length){itemsWrap.innerHTML="";empty.hidden=false;layout.hidden=true;return}empty.hidden=true;layout.hidden=false;
    itemsWrap.innerHTML=cart.map(item=>{const p=productById(item.id);return `<article class="cart-item"><div class="cart-item-image" style="background-image:url('${p.images[0]}&w=700')"></div><div class="cart-item-info"><h3>${p.name}</h3><p>${p.gender} · ${item.size} ml</p><p class="cart-item-price">${formatMoney(p.price * item.qty)}</p></div><div class="cart-item-actions"><div class="cart-qty"><button type="button" data-cart-minus="${item.key}" aria-label="Decrease ${p.name}">−</button><span>${item.qty}</span><button type="button" data-cart-plus="${item.key}" aria-label="Increase ${p.name}">+</button></div><button type="button" class="cart-remove" data-cart-remove="${item.key}">Remove</button></div></article>`}).join("");
    const subtotal=cart.reduce((sum,item)=>{const p=productById(item.id);return sum+p.price*item.qty},0);document.querySelector("[data-subtotal]").textContent=formatMoney(subtotal);document.querySelector("[data-total]").textContent=formatMoney(subtotal);
    itemsWrap.querySelectorAll("[data-cart-minus]").forEach(btn=>btn.addEventListener("click",()=>changeQty(btn.dataset.cartMinus,-1)));itemsWrap.querySelectorAll("[data-cart-plus]").forEach(btn=>btn.addEventListener("click",()=>changeQty(btn.dataset.cartPlus,1)));itemsWrap.querySelectorAll("[data-cart-remove]").forEach(btn=>btn.addEventListener("click",()=>removeItem(btn.dataset.cartRemove)));
  };
  function changeQty(key,delta){const cart=getCart();const item=cart.find(x=>x.key===key);if(item){item.qty=Math.max(0,item.qty+delta);saveCart(cart.filter(x=>x.qty>0));render()}}
  function removeItem(key){saveCart(getCart().filter(x=>x.key!==key));render()}
  document.querySelector("[data-checkout-demo]")?.addEventListener("click",()=>{document.querySelector(".cart-layout").hidden=true;document.querySelector("[data-checkout-message]").hidden=false});
  document.querySelector("[data-checkout-close]")?.addEventListener("click",()=>{document.querySelector("[data-checkout-message]").hidden=true;render()});
  render();
}

document.addEventListener("DOMContentLoaded",()=>{initShared();initHome();initShop();initProduct();initFinder();initCart();});
