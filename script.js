const IMAGE_LIBRARY = {
  rose: 'https://images.unsplash.com/photo-1623071281935-c778d4a6dd0c?auto=format&fit=crop&w=1400&q=86',
  pink: 'https://images.unsplash.com/photo-1613521140785-e85e427f8002?auto=format&fit=crop&w=1400&q=86',
  amber: 'https://images.unsplash.com/photo-1733660227083-12b78ad0073d?auto=format&fit=crop&w=1400&q=86',
  blue: 'https://images.unsplash.com/photo-1642867737971-b965d45b0c68?auto=format&fit=crop&w=1400&q=86',
  white: 'https://images.unsplash.com/photo-1690828877746-053e2fe9bb0a?auto=format&fit=crop&w=1400&q=86',
  gold: 'https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1400&q=86',
  woods: 'https://images.unsplash.com/photo-1635796342460-368cf1927238?auto=format&fit=crop&w=1400&q=86',
  black: 'https://images.unsplash.com/photo-1624811742200-69166e7b7bcc?auto=format&fit=crop&w=1400&q=86',
  orange: 'https://images.unsplash.com/photo-1766362366600-3bc8835c404a?auto=format&fit=crop&w=1400&q=86',
  editorial: 'https://images.unsplash.com/photo-1646032048829-5377b5c0feba?auto=format&fit=crop&w=1400&q=86',
  lifestyle: 'https://images.unsplash.com/photo-1727264374334-258e5e2f3f7a?auto=format&fit=crop&w=1400&q=86',
  oldRose: 'https://images.unsplash.com/photo-1708265500552-c256df13d3ca?auto=format&fit=crop&w=1400&q=86'
};

const products = [{"id":"rose-silk","name":"Rose Silk","gender":"Women","scent":"Floral","tags":["Soft","Date Night"],"price":560,"oldPrice":null,"volume":"50 ml","rating":4.9,"reviews":68,"new":true,"popular":true,"feel":"Soft and close at first, then warmer as it sits. Easy for a date, dinner or days when you want something pretty without too much sweetness.","notes":{"top":"Pink pepper, pear","heart":"Rose, peony","base":"White musk, sandalwood"},"story":"A clean rose that feels more like fresh fabric than a big bouquet.","images":["https://images.unsplash.com/photo-1622916132646-50a2a6fe9b9a?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&w=1200&q=85"],"tag":"New"},{"id":"amber-hour","name":"Amber Hour","gender":"Unisex","scent":"Gourmand","tags":["Warm","Date Night","Special"],"price":680,"oldPrice":null,"volume":"50 ml","rating":4.8,"reviews":112,"new":true,"popular":true,"feel":"Warm amber with a soft sweet edge. The kind of scent that works when the sun goes down and you want a little more presence.","notes":{"top":"Mandarin, saffron","heart":"Amber, rose","base":"Vanilla, cedar"},"story":"Warm, golden and a little sweet. Made for late plans.","images":["https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85"],"tag":"New"},{"id":"cedar-room","name":"Cedar Room","gender":"Men","scent":"Woody","tags":["Deep","Special","Office"],"price":720,"oldPrice":null,"volume":"100 ml","rating":4.9,"reviews":91,"new":true,"popular":true,"feel":"Dry cedar over a smooth amber base. Clean enough for daytime but deep enough to carry into the night.","notes":{"top":"Bergamot, cardamom","heart":"Cedar, iris","base":"Amber, vetiver"},"story":"A dry woody scent with a soft landing.","images":["https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85"],"tag":"New"},{"id":"blue-hour","name":"Blue Hour","gender":"Unisex","scent":"Fresh","tags":["Fresh","Everyday","Office"],"price":510,"oldPrice":null,"volume":"50 ml","rating":4.7,"reviews":84,"new":true,"popular":false,"feel":"A cool, airy opening with clean woods underneath. Easy to wear when you want to smell fresh for a long time.","notes":{"top":"Lemon, mint","heart":"Lavender, tea","base":"Musk, cedar"},"story":"Clean air after sunset. Fresh, simple and very easy to wear.","images":["https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85"],"tag":"New"},{"id":"vanilla-cloud","name":"Vanilla Cloud","gender":"Women","scent":"Gourmand","tags":["Sweet","Soft","Date Night"],"price":490,"oldPrice":null,"volume":"50 ml","rating":4.8,"reviews":74,"new":true,"popular":true,"feel":"Creamy vanilla without becoming heavy. Sweet, soft and made for close conversations.","notes":{"top":"Coconut, pear","heart":"Vanilla, jasmine","base":"Tonka, musk"},"story":"A soft vanilla that keeps a little air around it.","images":["https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1590580463662-88d585eda98f?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85"],"tag":"New"},{"id":"citrus-sunday","name":"Citrus Sunday","gender":"Unisex","scent":"Citrus","tags":["Fresh","Weekend","Everyday"],"price":430,"oldPrice":null,"volume":"50 ml","rating":4.6,"reviews":59,"new":false,"popular":true,"feel":"Bright citrus, green leaves and a light woody finish. It feels like a clean shirt and a slow morning.","notes":{"top":"Bergamot, lemon","heart":"Neroli, green tea","base":"Cedar, musk"},"story":"Bright and easy. The bottle to reach for when you want a fresh start.","images":["https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1611268622894-2ae2cff570bb?auto=format&fit=crop&w=1200&q=85"],"tag":"Best seller"},{"id":"oud-after-dark","name":"Oud After Dark","gender":"Men","scent":"Woody","tags":["Bold","Special","Date Night"],"price":820,"oldPrice":null,"volume":"100 ml","rating":4.9,"reviews":136,"new":false,"popular":true,"feel":"Rich oud, dry wood and a warm amber base. Stronger than the daily scents but still smooth on the skin.","notes":{"top":"Saffron, black pepper","heart":"Oud, rose","base":"Amber, leather"},"story":"Dark wood, warm skin and plans that run late.","images":["https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85"],"tag":"Best seller"},{"id":"clean-linen","name":"Clean Linen","gender":"Unisex","scent":"Fresh","tags":["Soft","Office","Everyday"],"price":390,"oldPrice":null,"volume":"50 ml","rating":4.7,"reviews":101,"new":false,"popular":true,"feel":"A fresh clean scent with soft musk. Quiet, easy and good for everyday wear.","notes":{"top":"Aldehydes, bergamot","heart":"Linen accord, iris","base":"Musk, sandalwood"},"story":"Fresh sheets, open windows and a very clean start.","images":["https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1611268622894-2ae2cff570bb?auto=format&fit=crop&w=1200&q=85"],"tag":"Best seller"},{"id":"peach-glass","name":"Peach Glass","gender":"Women","scent":"Floral","tags":["Soft","Weekend"],"price":540,"oldPrice":null,"volume":"50 ml","rating":4.7,"reviews":43,"new":false,"popular":false,"feel":"Juicy peach and petals with a clean skin-like dry down.","notes":{"top":"Peach, mandarin","heart":"Rose, orange blossom","base":"Musk, amber"},"story":"A soft peach scent that stays clean instead of syrupy.","images":["https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1622916132646-50a2a6fe9b9a?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85"]},{"id":"santal-sunday","name":"Santal Sunday","gender":"Unisex","scent":"Woody","tags":["Soft","Weekend","Everyday"],"price":620,"oldPrice":null,"volume":"50 ml","rating":4.8,"reviews":63,"new":false,"popular":true,"feel":"Creamy sandalwood, a little spice and a soft musk base.","notes":{"top":"Pink pepper, bergamot","heart":"Sandalwood, fig","base":"Musk, amber"},"story":"A warm wood scent with a calm feel.","images":["https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85"]},{"id":"rose-noir","name":"Rose Noir","gender":"Women","scent":"Floral","tags":["Bold","Date Night","Special"],"price":660,"oldPrice":null,"volume":"50 ml","rating":4.8,"reviews":79,"new":false,"popular":true,"feel":"Rose gets darker here with spice, amber and a touch of smoke.","notes":{"top":"Pink pepper, plum","heart":"Rose, violet","base":"Amber, patchouli"},"story":"A rose for the night, not the garden.","images":["https://images.unsplash.com/photo-1611268622894-2ae2cff570bb?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85"],"tag":"Best seller"},{"id":"green-day","name":"Green Day","gender":"Unisex","scent":"Fresh","tags":["Fresh","Office","Weekend"],"price":420,"oldPrice":null,"volume":"50 ml","rating":4.6,"reviews":38,"new":false,"popular":false,"feel":"Green tea, crisp citrus and a clean mineral finish.","notes":{"top":"Lime, mint","heart":"Green tea, basil","base":"Musk, vetiver"},"story":"A green, clean scent for bright days.","images":["https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85"]},{"id":"sugar-skin","name":"Sugar Skin","gender":"Women","scent":"Gourmand","tags":["Sweet","Soft","Everyday"],"price":470,"oldPrice":null,"volume":"50 ml","rating":4.7,"reviews":56,"new":false,"popular":false,"feel":"Soft vanilla sugar with clean musk. Sweet but not sticky.","notes":{"top":"Pear, orange","heart":"Vanilla, jasmine","base":"Sugar, musk"},"story":"A skin-close sweet scent.","images":["https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85"]},{"id":"cashmere-01","name":"Cashmere 01","gender":"Unisex","scent":"Woody","tags":["Soft","Office","Everyday"],"price":590,"oldPrice":null,"volume":"50 ml","rating":4.8,"reviews":46,"new":false,"popular":false,"feel":"Warm cashmere woods with soft musk. Easy to wear close to the skin.","notes":{"top":"Bergamot, cardamom","heart":"Cashmere wood, violet","base":"Musk, amber"},"story":"Soft texture in perfume form.","images":["https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85"]},{"id":"midnight-musk","name":"Midnight Musk","gender":"Men","scent":"Woody","tags":["Bold","Date Night","Special"],"price":750,"oldPrice":null,"volume":"100 ml","rating":4.7,"reviews":88,"new":false,"popular":true,"feel":"Clean musk with dark woods and amber. Smooth and easy to notice.","notes":{"top":"Bergamot, juniper","heart":"Musk, cedar","base":"Amber, tonka"},"story":"A darker musk for after hours.","images":["https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85"]},{"id":"fig-tonic","name":"Fig Tonic","gender":"Unisex","scent":"Fresh","tags":["Fresh","Weekend","Everyday"],"price":515,"oldPrice":null,"volume":"50 ml","rating":4.6,"reviews":31,"new":false,"popular":false,"feel":"Fig leaf, citrus and a little green wood. Fresh with a soft fruit edge.","notes":{"top":"Lime, fig leaf","heart":"Fig, tea","base":"Cedar, musk"},"story":"Green fig with a bright start.","images":["https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85"]},{"id":"soft-peony","name":"Soft Peony","gender":"Women","scent":"Floral","tags":["Soft","Everyday","Office"],"price":530,"oldPrice":null,"volume":"50 ml","rating":4.8,"reviews":52,"new":false,"popular":false,"feel":"Fresh flowers, clean musk and a light powdery feel.","notes":{"top":"Pear, bergamot","heart":"Peony, rose","base":"Musk, amber"},"story":"Light flowers and clean skin.","images":["https://images.unsplash.com/photo-1622916132646-50a2a6fe9b9a?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1590580463662-88d585eda98f?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1611268622894-2ae2cff570bb?auto=format&fit=crop&w=1200&q=85"]},{"id":"spice-club","name":"Spice Club","gender":"Men","scent":"Gourmand","tags":["Bold","Date Night","Special"],"price":690,"oldPrice":null,"volume":"100 ml","rating":4.7,"reviews":70,"new":false,"popular":false,"feel":"Warm spice, dry woods and a smooth sweet base.","notes":{"top":"Black pepper, orange","heart":"Cinnamon, cedar","base":"Vanilla, amber"},"story":"Spice without the heavy feeling.","images":["https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85"]},{"id":"neroli-clean","name":"Neroli Clean","gender":"Unisex","scent":"Citrus","tags":["Fresh","Office","Everyday"],"price":455,"oldPrice":null,"volume":"50 ml","rating":4.7,"reviews":35,"new":false,"popular":false,"feel":"Neroli and citrus over a clean green base.","notes":{"top":"Bergamot, neroli","heart":"Orange blossom, green tea","base":"Musk, cedar"},"story":"Fresh citrus with a soft floral middle.","images":["https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1622916132646-50a2a6fe9b9a?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85"]},{"id":"dark-vanilla","name":"Dark Vanilla","gender":"Unisex","scent":"Gourmand","tags":["Bold","Date Night","Special"],"price":735,"oldPrice":null,"volume":"100 ml","rating":4.9,"reviews":115,"new":false,"popular":true,"feel":"Vanilla with amber, dark woods and a little spice. Sweet but grown.","notes":{"top":"Saffron, orange","heart":"Vanilla, rose","base":"Amber, sandalwood"},"story":"The warmest bottle in the room.","images":["https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85"],"tag":"Best seller"},{"id":"white-tea","name":"White Tea","gender":"Unisex","scent":"Fresh","tags":["Soft","Office","Everyday"],"price":440,"oldPrice":null,"volume":"50 ml","rating":4.5,"reviews":26,"new":false,"popular":false,"feel":"Clean tea, soft citrus and light musk. Quiet and easy.","notes":{"top":"Lemon, petitgrain","heart":"White tea, jasmine","base":"Musk, cedar"},"story":"Quiet freshness for every day.","images":["https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1611268622894-2ae2cff570bb?auto=format&fit=crop&w=1200&q=85"]},{"id":"amber-rose","name":"Amber Rose","gender":"Women","scent":"Floral","tags":["Warm","Date Night","Special"],"price":610,"oldPrice":null,"volume":"50 ml","rating":4.8,"reviews":49,"new":false,"popular":false,"feel":"Soft rose wrapped in warm amber and musk.","notes":{"top":"Pear, pink pepper","heart":"Rose, jasmine","base":"Amber, musk"},"story":"Rose with a warmer finish.","images":["https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1622916132646-50a2a6fe9b9a?auto=format&fit=crop&w=1200&q=85"]},{"id":"coastal-air","name":"Coastal Air","gender":"Men","scent":"Citrus","tags":["Fresh","Everyday","Weekend"],"price":480,"oldPrice":null,"volume":"100 ml","rating":4.6,"reviews":34,"new":false,"popular":false,"feel":"Bright citrus with mineral air and clean woods.","notes":{"top":"Grapefruit, lemon","heart":"Sea salt, lavender","base":"Cedar, musk"},"story":"Fresh air, clean skin and open space.","images":["https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85"]},{"id":"velvet-musk","name":"Velvet Musk","gender":"Unisex","scent":"Floral","tags":["Soft","Date Night","Everyday"],"price":575,"oldPrice":null,"volume":"50 ml","rating":4.7,"reviews":42,"new":false,"popular":false,"feel":"Soft floral notes over a musky skin-like base. Smooth without being loud.","notes":{"top":"Pear, pink pepper","heart":"Rose, iris","base":"Musk, sandalwood"},"story":"A soft scent that stays close.","images":["https://images.unsplash.com/photo-1590580463662-88d585eda98f?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85"]},{"id":"ember-wood","name":"Ember Wood","gender":"Men","scent":"Woody","tags":["Deep","Special","Date Night"],"price":780,"oldPrice":null,"volume":"100 ml","rating":4.8,"reviews":93,"new":false,"popular":true,"feel":"Smoky wood, amber and a soft sweet base. Deep but not harsh.","notes":{"top":"Black pepper, bergamot","heart":"Cedar, incense","base":"Amber, vetiver"},"story":"Warm wood with a little smoke.","images":["https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85"],"tag":"Best seller"},{"id":"petal-water","name":"Petal Water","gender":"Women","scent":"Floral","tags":["Fresh","Soft","Weekend"],"price":505,"oldPrice":null,"volume":"50 ml","rating":4.6,"reviews":28,"new":false,"popular":false,"feel":"Airy floral notes with watery freshness and clean musk.","notes":{"top":"Pear, bergamot","heart":"Peony, rose","base":"Musk, cedar"},"story":"A light floral with plenty of air.","images":["https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1611268622894-2ae2cff570bb?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1590580463662-88d585eda98f?auto=format&fit=crop&w=1200&q=85"]},{"id":"tonka-night","name":"Tonka Night","gender":"Men","scent":"Gourmand","tags":["Warm","Date Night","Special"],"price":665,"oldPrice":null,"volume":"100 ml","rating":4.8,"reviews":61,"new":false,"popular":false,"feel":"Tonka, vanilla and dry woods with a warm finish.","notes":{"top":"Mandarin, pepper","heart":"Tonka, cardamom","base":"Vanilla, cedar"},"story":"A warm sweet scent for after dark.","images":["https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1672848812581-f6e71ffa6839?auto=format&fit=crop&w=1200&q=85"]},{"id":"moss-shirt","name":"Moss Shirt","gender":"Unisex","scent":"Fresh","tags":["Fresh","Office","Everyday"],"price":460,"oldPrice":null,"volume":"50 ml","rating":4.5,"reviews":24,"new":false,"popular":false,"feel":"Green moss and citrus with a dry clean finish.","notes":{"top":"Lemon, basil","heart":"Moss, tea","base":"Cedar, musk"},"story":"A crisp green scent that feels put together.","images":["https://images.unsplash.com/photo-1587304431894-c7daa9d17556?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615634260830-85d92cd1b769?auto=format&fit=crop&w=1200&q=85"]},{"id":"soft-saffron","name":"Soft Saffron","gender":"Unisex","scent":"Gourmand","tags":["Warm","Special","Date Night"],"price":645,"oldPrice":null,"volume":"50 ml","rating":4.7,"reviews":39,"new":false,"popular":false,"feel":"Saffron, soft amber and vanilla. Warm without getting heavy.","notes":{"top":"Saffron, bergamot","heart":"Rose, amber","base":"Vanilla, musk"},"story":"Golden spice softened with vanilla.","images":["https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618436624013-b4d65f4142d2?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1709662369957-0cbf9f8452fc?auto=format&fit=crop&w=1200&q=85"],"tag":"New"}];

const FAMILY_IMAGES = {
  Floral: [IMAGE_LIBRARY.rose, IMAGE_LIBRARY.pink, IMAGE_LIBRARY.oldRose, IMAGE_LIBRARY.editorial],
  Woody: [IMAGE_LIBRARY.woods, IMAGE_LIBRARY.black, IMAGE_LIBRARY.amber, IMAGE_LIBRARY.gold],
  Citrus: [IMAGE_LIBRARY.orange, IMAGE_LIBRARY.blue, IMAGE_LIBRARY.white, IMAGE_LIBRARY.editorial],
  Gourmand: [IMAGE_LIBRARY.amber, IMAGE_LIBRARY.gold, IMAGE_LIBRARY.pink, IMAGE_LIBRARY.oldRose],
  Fresh: [IMAGE_LIBRARY.blue, IMAGE_LIBRARY.white, IMAGE_LIBRARY.orange, IMAGE_LIBRARY.lifestyle]
};

function hydrateProductImages() {
  products.forEach((p, i) => {
    const set = FAMILY_IMAGES[p.scent] || FAMILY_IMAGES.Fresh;
    const offset = i % set.length;
    p.images = [set[offset], set[(offset + 1) % set.length], set[(offset + 2) % set.length]];
  });
}
hydrateProductImages();

const queryParams = () => new URLSearchParams(window.location.search);
const formatMoney = value => `GH₵${Number(value).toLocaleString('en-GH')}`;
const productById = id => products.find(p => p.id === id);
const getCart = () => {
  try { return JSON.parse(localStorage.getItem('sweets-cart') || '[]'); }
  catch { return []; }
};
const saveCart = cart => {
  localStorage.setItem('sweets-cart', JSON.stringify(cart));
  updateCartCount();
};
const arrow = () => '<span class="arrow-icon" aria-hidden="true"></span>';
const safe = value => String(value).replace(/[&<>'"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[s]));

function starsMarkup(rating) {
  const full = Math.round(rating);
  return `<span class="rating-stars" aria-hidden="true">${Array.from({length:5},(_,i)=>`<i class="fa-solid fa-star ${i<full?'is-on':''}"></i>`).join('')}</span>`;
}

function productCardMarkup(p, options = {}) {
  const wide = options.wide ? ' is-wide' : '';
  const index = options.index ?? 0;
  return `<article class="product-card${wide}" data-product-card>
    <a class="product-media" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${safe(p.name)}">
      <img src="${p.images[0]}" alt="${safe(p.name)} perfume bottle" loading="lazy" decoding="async" style="--card-shift:${(index%3)*10}px">
      ${p.tag ? `<span class="product-tag">${safe(p.tag)}</span>` : ''}
      <span class="product-view">View scent ${arrow()}</span>
    </a>
    <div class="product-info">
      <a class="product-copy" href="product.html?id=${encodeURIComponent(p.id)}">
        <div class="product-line"><span>${safe(p.gender)}</span><span>${safe(p.scent)}</span></div>
        <h3 class="product-name">${safe(p.name)}</h3>
        <div class="product-rating">${starsMarkup(p.rating)}<span>${p.rating.toFixed(1)} · ${p.reviews} reviews</span></div>
      </a>
      <div class="product-buy"><strong class="product-price">${formatMoney(p.price)}</strong><button class="mini-add" type="button" data-mini-add="${safe(p.id)}">Add ${arrow()}</button></div>
    </div>
  </article>`;
}

function galleryMarkup(p, index) {
  const classes = ['gallery-tall','gallery-wide','gallery-small','gallery-tall','gallery-small','gallery-wide'];
  const label = p.tags?.[0] || p.scent;
  return `<a class="gallery-tile ${classes[index % classes.length]}" href="product.html?id=${encodeURIComponent(p.id)}">
    <img src="${p.images[index % p.images.length]}" alt="${safe(p.name)}" loading="lazy">
    <span class="gallery-shade"></span><span class="gallery-copy"><small>${safe(label)}</small><strong>${safe(p.name)}</strong>${arrow()}</span>
  </a>`;
}

function updateCartCount() {
  const count = getCart().reduce((sum,item)=>sum + Number(item.qty||0),0);
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = count);
}

function initShared() {
  updateCartCount();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  menuToggle?.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    header?.classList.remove('menu-open'); mobileMenu?.classList.remove('open'); menuToggle?.setAttribute('aria-expanded','false');
  }));

  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchDrawer = document.querySelector('[data-search-drawer]');
  const searchInput = document.querySelector('#site-search');
  searchToggle?.addEventListener('click', () => {
    const open = searchDrawer.classList.toggle('open');
    searchToggle.setAttribute('aria-expanded', String(open));
    if (open) setTimeout(()=>searchInput?.focus(),100);
  });

  document.querySelectorAll('[data-mini-add]').forEach(button => button.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    const p = productById(button.dataset.miniAdd); if (!p) return;
    const cart = getCart(); const size = p.volume.includes('100') ? 100 : 50;
    const key = `${p.id}-${size}`; const found = cart.find(x => x.key === key);
    if (found) found.qty += 1; else cart.push({key,id:p.id,qty:1,size});
    saveCart(cart);
    const original = button.innerHTML; button.innerHTML = `Added ${arrow()}`;
    button.classList.add('is-added'); setTimeout(()=>{button.innerHTML=original;button.classList.remove('is-added')},1100);
  }));

  document.querySelectorAll('[data-newsletter-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault(); const email = form.querySelector('input'); if(!email.checkValidity()) return;
    form.innerHTML = '<p class="form-success">You are on the list. We will keep it light.</p>';
  }));
  document.querySelectorAll('[data-contact-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault(); if(!form.checkValidity()) return;
    const success = form.querySelector('[data-contact-success]'); if(success) success.hidden = false;
    form.reset();
  }));

  document.querySelectorAll('[data-carousel-prev],[data-carousel-next]').forEach(button => button.addEventListener('click',()=>{
    const target = document.querySelector(button.dataset.carouselTarget); if(!target) return;
    const amount = Math.max(240, target.clientWidth * .72) * (button.hasAttribute('data-carousel-next') ? 1 : -1);
    target.scrollBy({left:amount,behavior:'smooth'});
  }));
}

function initHome() {
  const newWrap = document.querySelector('[data-home-new-products]');
  if (newWrap) newWrap.innerHTML = products.filter(p=>p.new).map((p,i)=>productCardMarkup(p,{index:i})).join('');
  const gallery = document.querySelector('[data-home-gallery]');
  if (gallery) gallery.innerHTML = products.filter(p=>p.popular).slice(0,6).map(galleryMarkup).join('');

  const hero = document.querySelector('[data-home-hero]');
  if (hero) {
    let last = 0;
    const setHero = (url) => hero.style.backgroundImage = `url('${url}')`;
    setHero(IMAGE_LIBRARY.lifestyle);
    const mobile = window.matchMedia('(max-width: 780px)');
    const sync = () => {
      if (mobile.matches && last !== 1) { setHero(IMAGE_LIBRARY.oldRose); last = 1; }
      if (!mobile.matches && last !== 2) { setHero(IMAGE_LIBRARY.lifestyle); last = 2; }
    };
    sync(); mobile.addEventListener?.('change', sync);
  }
}

function initShop() {
  const grid = document.querySelector('[data-shop-grid]'); if(!grid) return;
  const state = {
    q: queryParams().get('q') || '',
    gender: (queryParams().get('gender') || '').split(',').filter(Boolean),
    scent: (queryParams().get('scent') || '').split(',').filter(Boolean),
    price: (queryParams().get('price') || '').split(',').filter(Boolean),
    sort: queryParams().get('sort') || 'featured'
  };
  const checkboxes = [...document.querySelectorAll('[data-filter]')];
  checkboxes.forEach(c => { if(state[c.dataset.filter]?.includes(c.value)) c.checked=true; });
  document.querySelector('[data-sort-select]')?.setAttribute('value',state.sort);
  const sortSelect = document.querySelector('[data-sort-select]'); if(sortSelect) sortSelect.value=state.sort;

  const filterPanel = document.querySelector('[data-filter-panel]');
  document.querySelector('[data-filter-toggle]')?.addEventListener('click',()=>{const open=filterPanel.classList.toggle('open'); filterPanel.setAttribute('aria-hidden',String(!open));});
  document.querySelectorAll('[data-filter-clear],[data-filter-empty-clear]').forEach(btn=>btn.addEventListener('click',()=>{checkboxes.forEach(c=>c.checked=false);state.gender=[];state.scent=[];state.price=[];state.q='';syncUrl();render();}));
  sortSelect?.addEventListener('change',()=>{state.sort=sortSelect.value;syncUrl();render();});
  checkboxes.forEach(c => c.addEventListener('change',()=>{syncState();syncUrl();render();}));

  function syncState(){
    state.gender=checkboxes.filter(c=>c.dataset.filter==='gender'&&c.checked).map(c=>c.value);
    state.scent=checkboxes.filter(c=>c.dataset.filter==='scent'&&c.checked).map(c=>c.value);
    state.price=checkboxes.filter(c=>c.dataset.filter==='price'&&c.checked).map(c=>c.value);
  }
  function syncUrl(){
    const params = new URLSearchParams();
    if(state.q) params.set('q',state.q);
    if(state.gender.length) params.set('gender',state.gender.join(','));
    if(state.scent.length) params.set('scent',state.scent.join(','));
    if(state.price.length) params.set('price',state.price.join(','));
    if(state.sort && state.sort!=='featured') params.set('sort',state.sort);
    history.replaceState({},'',`${location.pathname}${params.toString()?`?${params}`:''}`);
  }
  function render(){
    syncState(); let result=[...products]; const q=state.q.toLowerCase().trim();
    if(q) result=result.filter(p=>`${p.name} ${p.gender} ${p.scent} ${p.tags.join(' ')} ${p.notes.top} ${p.notes.heart} ${p.notes.base}`.toLowerCase().includes(q));
    if(state.gender.length) result=result.filter(p=>state.gender.includes(p.gender));
    if(state.scent.length) result=result.filter(p=>state.scent.includes(p.scent));
    if(state.price.length) result=result.filter(p=>state.price.some(range=>{const [min,max]=range.split('-').map(Number);return p.price>=min&&p.price<max;}));
    if(state.sort==='newest') result.sort((a,b)=>Number(b.new)-Number(a.new)||b.rating-a.rating);
    if(state.sort==='popular') result.sort((a,b)=>Number(b.popular)-Number(a.popular)||b.rating-a.rating);
    if(state.sort==='price-low') result.sort((a,b)=>a.price-b.price);
    if(state.sort==='price-high') result.sort((a,b)=>b.price-a.price);
    grid.innerHTML=result.map((p,i)=>productCardMarkup(p,{index:i,wide:[3,10,17,24].includes(i)})).join('');
    document.querySelector('[data-product-count]').textContent=`${result.length} results`;
    const count=state.gender.length+state.scent.length+state.price.length+(q?1:0); const countEl=document.querySelector('[data-filter-count]'); countEl.textContent=count; countEl.classList.toggle('visible',count>0);
    const active=document.querySelector('[data-active-filters]');
    const values=[...state.gender,...state.scent,...state.price.map(x=>x==='0-450'?'Under GH₵450':x==='450-700'?'GH₵450 to GH₵700':'GH₵700+')]; if(q) values.unshift(`Search: ${q}`);
    active.innerHTML=values.map(v=>`<span class="active-filter">${safe(v)}</span>`).join('');
    document.querySelector('[data-empty-state]').hidden=result.length!==0;
  }
  render();
}

function initProduct(){
  const detail=document.querySelector('[data-product-detail]'); if(!detail) return;
  const p=productById(queryParams().get('id'))||products[0]; document.title=`${p.name} | Sweets`;
  const main=document.querySelector('[data-product-main-image]'); main.style.backgroundImage=`url('${p.images[0]}')`;
  const thumbs=document.querySelector('[data-product-thumbs]');
  thumbs.innerHTML=p.images.map((src,i)=>`<button type="button" class="product-thumb ${i===0?'active':''}" style="background-image:url('${src}')" aria-label="View product image ${i+1}"></button>`).join('');
  thumbs.querySelectorAll('.product-thumb').forEach((btn,i)=>btn.addEventListener('click',()=>{main.style.backgroundImage=`url('${p.images[i]}')`;thumbs.querySelectorAll('.product-thumb').forEach(x=>x.classList.remove('active'));btn.classList.add('active');}));
  const set=(sel,val)=>{const el=document.querySelector(sel);if(el)el.textContent=val;};
  set('[data-product-gender]',`${p.gender} / ${p.scent}`); set('[data-product-name]',p.name); set('[data-product-price]',formatMoney(p.price)); set('[data-product-reviews]',`${p.rating.toFixed(1)} · ${p.reviews} reviews`); set('[data-product-description]',p.feel); set('[data-product-feel]',p.feel); set('[data-note-top]',p.notes.top); set('[data-note-heart]',p.notes.heart); set('[data-note-base]',p.notes.base); set('[data-story-title]',p.story); set('[data-story-copy]',p.feel); set('[data-product-size]',p.volume);
  document.querySelector('[data-product-rating]').innerHTML=starsMarkup(p.rating);
  let qty=1; let size=Number((p.volume.match(/\d+/)||['50'])[0]);
  document.querySelectorAll('[data-size]').forEach(btn=>btn.addEventListener('click',()=>{size=Number(btn.dataset.size);document.querySelectorAll('[data-size]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.querySelector('[data-size-value]').textContent=`${size} ml`;}));
  document.querySelector('[data-qty-minus]')?.addEventListener('click',()=>{qty=Math.max(1,qty-1);set('[data-product-qty]',qty);}); document.querySelector('[data-qty-plus]')?.addEventListener('click',()=>{qty=Math.min(9,qty+1);set('[data-product-qty]',qty);});
  document.querySelector('[data-add-product]')?.addEventListener('click',()=>{const cart=getCart(),key=`${p.id}-${size}`,found=cart.find(x=>x.key===key);if(found)found.qty+=qty;else cart.push({key,id:p.id,qty,size});saveCart(cart);const btn=document.querySelector('[data-add-product]');btn.innerHTML=`Added ${arrow()}`;setTimeout(()=>btn.innerHTML=`Add to bag ${arrow()}`,1200);});
  const related=document.querySelector('[data-related-products]'); if(related) related.innerHTML=products.filter(x=>x.id!==p.id&&(x.scent===p.scent||x.gender===p.gender)).slice(0,4).map((x,i)=>productCardMarkup(x,{index:i})).join('');
}

function initFinder(){
  const form=document.querySelector('[data-finder-form]'); if(!form) return;
  let step=1; const steps=[...document.querySelectorAll('[data-step]')]; const flow=document.querySelector('.finder-flow');
  const show=()=>{steps.forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===step));document.querySelectorAll('[data-progress]').forEach(x=>x.classList.toggle('active',Number(x.dataset.progress)<=step));flow.style.setProperty('--finder-step',step);};
  const canContinue=()=>{const current=steps.find(s=>Number(s.dataset.step)===step);return !!current?.querySelector('input:checked');};
  document.querySelectorAll('[data-finder-next]').forEach(btn=>btn.addEventListener('click',()=>{if(!canContinue()){btn.classList.add('shake');setTimeout(()=>btn.classList.remove('shake'),400);return;}step=Math.min(4,step+1);show();}));
  document.querySelectorAll('[data-finder-back]').forEach(btn=>btn.addEventListener('click',()=>{step=Math.max(1,step-1);show();}));
  form.addEventListener('submit',e=>{e.preventDefault();if(!canContinue())return;const data=new FormData(form);const family=data.get('family'),occasion=data.get('occasion'),strength=data.get('strength'),gender=data.get('gender');let matches=products.filter(p=>p.scent===family);if(gender)matches=matches.filter(p=>p.gender===gender||p.gender==='Unisex');if(matches.length<4)matches=products.filter(p=>p.scent===family);matches.sort((a,b)=>((b.tags.includes(occasion)?2:0)+(b.tags.includes(strength)?1:0)+(b.popular?1:0))-((a.tags.includes(occasion)?2:0)+(a.tags.includes(strength)?1:0)+(a.popular?1:0)));matches=matches.slice(0,4);form.hidden=true;document.querySelector('.finder-progress').hidden=true;const results=document.querySelector('[data-finder-results]');results.hidden=false;document.querySelector('[data-finder-summary]').textContent=`${family} scents for ${occasion.toLowerCase()} wear with a ${strength.toLowerCase()} feel.`;document.querySelector('[data-finder-grid]').innerHTML=matches.map((p,i)=>productCardMarkup(p,{index:i})).join('');window.scrollTo({top:results.offsetTop-20,behavior:'smooth'});});
  document.querySelector('[data-finder-restart]')?.addEventListener('click',()=>{form.reset();form.hidden=false;document.querySelector('.finder-progress').hidden=false;document.querySelector('[data-finder-results]').hidden=true;step=1;show();});
  show();
}

function initCart(){
  const itemsWrap=document.querySelector('[data-cart-items]');if(!itemsWrap)return;
  const empty=document.querySelector('[data-cart-empty]'),layout=document.querySelector('.cart-layout');
  const render=()=>{const cart=getCart();if(!cart.length){itemsWrap.innerHTML='';empty.hidden=false;layout.hidden=true;return;}empty.hidden=true;layout.hidden=false;itemsWrap.innerHTML=cart.map(item=>{const p=productById(item.id);if(!p)return '';return `<article class="cart-item"><div class="cart-item-image" style="background-image:url('${p.images[0]}')"></div><div class="cart-item-info"><p class="eyebrow">${safe(p.gender)} / ${safe(p.scent)}</p><h3>${safe(p.name)}</h3><p>${item.size} ml</p><strong>${formatMoney(p.price*item.qty)}</strong></div><div class="cart-item-actions"><div class="cart-qty"><button type="button" data-cart-minus="${item.key}" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button type="button" data-cart-plus="${item.key}" aria-label="Increase quantity">+</button></div><button type="button" class="cart-remove" data-cart-remove="${item.key}">Remove</button></div></article>`;}).join('');const subtotal=cart.reduce((sum,item)=>{const p=productById(item.id);return sum+(p?p.price*item.qty:0)},0);document.querySelector('[data-subtotal]').textContent=formatMoney(subtotal);document.querySelector('[data-total]').textContent=formatMoney(subtotal);itemsWrap.querySelectorAll('[data-cart-minus]').forEach(btn=>btn.addEventListener('click',()=>changeQty(btn.dataset.cartMinus,-1)));itemsWrap.querySelectorAll('[data-cart-plus]').forEach(btn=>btn.addEventListener('click',()=>changeQty(btn.dataset.cartPlus,1)));itemsWrap.querySelectorAll('[data-cart-remove]').forEach(btn=>btn.addEventListener('click',()=>removeItem(btn.dataset.cartRemove)));};
  function changeQty(key,delta){const cart=getCart(),item=cart.find(x=>x.key===key);if(item){item.qty=Math.max(0,item.qty+delta);saveCart(cart.filter(x=>x.qty>0));render();}}
  function removeItem(key){saveCart(getCart().filter(x=>x.key!==key));render();}
  document.querySelector('[data-checkout-demo]')?.addEventListener('click',()=>{layout.hidden=true;document.querySelector('[data-checkout-message]').hidden=false;});document.querySelector('[data-checkout-close]')?.addEventListener('click',()=>{document.querySelector('[data-checkout-message]').hidden=true;render();});
  render();
}

document.addEventListener('DOMContentLoaded',()=>{initShared();initHome();initShop();initProduct();initFinder();initCart();});
