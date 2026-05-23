const products = [

  // ── WESTERN ──
  { id: 1,  category: "western", name: "Floral Midi Dress",    price: 1299, discount: 20, cloth: "Cotton Blend",    image: "https://i.pinimg.com/1200x/b2/9a/73/b29a7341f6b5126496c4fb7d287fa913.jpg" },
  { id: 2,  category: "western", name: "Black Maxi Dress",     price: 1599, discount: 15, cloth: "Rayon",           image: "https://i.pinimg.com/1200x/65/70/c3/6570c3d23e6de4ec9cbbd1319aa808a6.jpg" },
  { id: 3,  category: "western", name: "Yellow Sundress",      price: 999,  discount: 10, cloth: "Chiffon",         image: "https://i.pinimg.com/736x/71/1c/d6/711cd61bae646c34ab52a2cc4fba6430.jpg" },
  { id: 4,  category: "western", name: "Denim Shirt Dress",    price: 1399, discount: 25, cloth: "Denim",           image: "https://i.pinimg.com/1200x/2a/4c/e0/2a4ce02cb05683825ed11625476543ef.jpg" },
  { id: 5,  category: "western", name: "Red Bodycon Dress",    price: 1199, discount: 18, cloth: "Spandex Blend",   image: "https://i.pinimg.com/736x/06/57/86/065786f9feb2a02da968612a0d4ed112.jpg" },
  { id: 6,  category: "western", name: "White Wrap Dress",     price: 1099, discount: 12, cloth: "Georgette",       image: "https://i.pinimg.com/1200x/57/32/2f/57322fb297dbb99ee7dd3a69bb4ee6df.jpg" },
  { id: 7,  category: "western", name: "Lavender Tier Dress",  price: 1349, discount: 22, cloth: "Cotton",          image: "https://i.pinimg.com/1200x/de/61/75/de61752c355c38bae5aac338832d29d9.jpg" },
  { id: 8,  category: "western", name: "Green Printed Dress",  price: 1249, discount: 16, cloth: "Crepe",           image: "https://i.pinimg.com/736x/1b/34/26/1b3426ab0ed4f3b3afad926ef6903496.jpg" },
  { id: 9,  category: "western", name: "Polka Dot Dress",      price: 1099, discount: 20, cloth: "Cotton Blend",    image: "https://i.pinimg.com/736x/96/2d/9f/962d9fa1c3e8119a386bd4867398790c.jpg" },
  { id: 10, category: "western", name: "Off-Shoulder Dress",   price: 1499, discount: 30, cloth: "Satin",           image: "https://i.pinimg.com/1200x/fa/81/d8/fa81d875f6bf9714f4f8c20a29e597bc.jpg" },
  { id: 11, category: "western", name: "Satin Slip Dress",     price: 1699, discount: 25, cloth: "Satin",           image: "https://i.pinimg.com/1200x/07/0b/03/070b03a10ab32a4d6ffcd179c33d7e84.jpg" },
  { id: 12, category: "western", name: "Blazer Dress",         price: 1899, discount: 15, cloth: "Polyester Blend", image: "https://i.pinimg.com/1200x/ed/aa/91/edaa91457be62b22b50e5634b9869a9e.jpg" },

  // ── PARTY ──
  { id: 13, category: "party", name: "Sequin Gown",           price: 2999, discount: 20, cloth: "Sequin Net",    image: "https://i.pinimg.com/736x/fd/6f/f7/fd6ff74baa8ea140f4f8fce76af139e6.jpg" },
  { id: 14, category: "party", name: "Velvet Bodycon",        price: 1999, discount: 15, cloth: "Velvet",        image: "https://i.pinimg.com/736x/40/66/28/406628f2f6dd3d9a53e1a6b6ffe0234a.jpg" },
  { id: 15, category: "party", name: "Shimmer Co-ord Set",    price: 2499, discount: 25, cloth: "Shimmer Fabric", image: "https://i.pinimg.com/736x/93/fd/05/93fd05b13382331f97e1f733c12bd926.jpg" },
  { id: 16, category: "party", name: "Glitter Blazer",        price: 2199, discount: 10, cloth: "Glitter Poly",  image: "https://i.pinimg.com/1200x/a8/ac/72/a8ac72afc92a76c442005d5e61c15038.jpg" },
  { id: 17, category: "party", name: "Satin Slip Gown",       price: 2799, discount: 30, cloth: "Satin",         image: "https://i.pinimg.com/1200x/59/f9/9d/59f99d8125873275b1dbd405db9a593f.jpg" },
  { id: 18, category: "party", name: "Feather Trim Top",      price: 1599, discount: 18, cloth: "Feather + Poly", image: "https://i.pinimg.com/1200x/8c/c3/f9/8cc3f9e48bce38365d8e339d16ebaa09.jpg" },
  { id: 19, category: "party", name: "Ruched Party Dress",    price: 1899, discount: 22, cloth: "Lycra Blend",   image: "https://i.pinimg.com/1200x/15/61/a8/1561a842b5d26abb996b115fd74e5d92.jpg" },
  { id: 20, category: "party", name: "Lace Bodysuit + Skirt", price: 2599, discount: 20, cloth: "Lace + Satin",  image: "https://i.pinimg.com/736x/02/dd/d6/02ddd68d350e5bbd532bfddecf0d72e9.jpg" },
  { id: 21, category: "party", name: "Cut-Out Midi Dress",    price: 2099, discount: 15, cloth: "Crepe",         image: "https://i.pinimg.com/1200x/1e/bc/0f/1ebc0f9395c7445adee5fd2c6c1fd158.jpg" },
  { id: 22, category: "party", name: "Halter Neck Gown",      price: 2899, discount: 25, cloth: "Georgette",     image: "https://i.pinimg.com/1200x/d5/ea/30/d5ea30bc76fff393d1c8db341cec0b0a.jpg" },
  { id: 23, category: "party", name: "Asymmetric Hem Dress",  price: 1999, discount: 12, cloth: "Chiffon",       image: "https://i.pinimg.com/1200x/96/8a/e5/968ae55a834cd0d9a0f543631a33e79c.jpg" },
  { id: 24, category: "party", name: "Plisse Pleated Gown",   price: 2699, discount: 28, cloth: "Plisse Fabric", image: "https://i.pinimg.com/736x/98/9d/07/989d07543c0d05666051a3ecc50fa75b.jpg" },

  // ── TRADITIONAL ──
  { id: 25, category: "traditional", name: "Kanjivaram Silk Saree",   price: 4999, discount: 10, cloth: "Pure Silk",          image: "https://i.pinimg.com/1200x/aa/ad/fb/aaadfb36451d2d05845c0631aac5d228.jpg" },
  { id: 26, category: "traditional", name: "Anarkali Suit",           price: 2499, discount: 20, cloth: "Georgette",          image: "https://i.pinimg.com/1200x/44/ea/b4/44eab441caa461aff86f777dbc9bf337.jpg" },
  { id: 27, category: "traditional", name: "Lehenga Choli",           price: 3999, discount: 15, cloth: "Velvet + Net",       image: "https://i.pinimg.com/1200x/4d/6b/55/4d6b552cb2d3297a1c1b4b4ceef1ebed.jpg" },
  { id: 28, category: "traditional", name: "Cotton Salwar Kameez",    price: 1299, discount: 25, cloth: "Pure Cotton",        image: "https://i.pinimg.com/736x/76/70/63/76706303488566180823ba266b3b05ae.jpg" },
  { id: 29, category: "traditional", name: "Langa Voni",              price: 2799, discount: 18, cloth: "Silk Cotton",        image: "https://i.pinimg.com/736x/2d/a2/57/2da25775dbb7c070c107fedec8e9e9a4.jpg" },
  { id: 30, category: "traditional", name: "Lucknowi Chikankari",     price: 1999, discount: 22, cloth: "Chikankari Cotton",  image:  "https://i.pinimg.com/736x/07/b4/c5/07b4c5d2c0d6840d50e7228c51478f6a.jpg" },
  { id: 31, category: "traditional", name: "Embroidered Dupatta Set", price: 2299, discount: 16, cloth: "Net + Thread",       image:  "https://i.pinimg.com/736x/87/66/bb/8766bb330c39ab21d0ad373b8892cb52.jpg" },
  { id: 32, category: "traditional", name: "Bandhani Saree",          price: 1799, discount: 20, cloth: "Cotton Bandhani",    image: "https://i.pinimg.com/1200x/c1/d4/d9/c1d4d9905a9d5766e29e18a61126c169.jpg" },
  { id: 33, category: "traditional", name: "Mirror Work Kurti",       price: 1199, discount: 30, cloth: "Rayon Mirror",       image: "https://i.pinimg.com/736x/79/7b/3c/797b3c9eb21b0c017066efc8083ae501.jpg" },
  { id: 34, category: "traditional", name: "Gharara Set",             price: 3499, discount: 12, cloth: "Muslin + Net",       image: "https://i.pinimg.com/736x/e0/17/a4/e017a4ffc9b52557b5838bf7318b364d.jpg" },
  { id: 35, category: "traditional", name: "Mundum Neriyathum",       price: 2199, discount: 15, cloth: "Kerala Cotton",      image: "https://i.pinimg.com/1200x/3e/f0/d2/3ef0d227bf47a71c5eab6899cc3d4483.jpg" },
  { id: 36, category: "traditional", name: "Chaniya Choli",           price: 3199, discount: 25, cloth: "Silk + Mirror",      image: "https://i.pinimg.com/1200x/0c/90/3c/0c903c37ce4e9f1794a5a51fd08bfc02.jpg" },

  // ── SAREES ──
  { id: 37, category: "sarees", name: "Kanjivaram Gold Saree",   price: 5999, discount: 10, cloth: "Pure Silk",       image: "https://i.pinimg.com/1200x/20/09/b0/2009b038ab57f8b255684f542f5764c6.jpg" },
  { id: 38, category: "sarees", name: "Banarasi Silk Saree",     price: 4499, discount: 15, cloth: "Banarasi Silk",   image: "https://i.pinimg.com/736x/89/14/a0/8914a0fca1385316b9eb097f2e829c85.jpg" },
  { id: 39, category: "sarees", name: "Designer Net Saree",      price: 2999, discount: 20, cloth: "Net + Sequin",    image: "https://i.pinimg.com/736x/39/8c/ac/398cac114848440083f28dc49330ef06.jpg" },
  { id: 40, category: "sarees", name: "Organza Ruffle Saree",    price: 3499, discount: 18, cloth: "Organza",         image: "https://i.pinimg.com/736x/d8/20/76/d820763d06e0bd4a37e3caff5a47352e.jpg" },
  { id: 41, category: "sarees", name: "Soft Georgette Saree",    price: 1999, discount: 25, cloth: "Georgette",       image: "https://i.pinimg.com/736x/ab/b1/c4/abb1c48c394213c51c4be50e557fd7d5.jpg" },
  { id: 42, category: "sarees", name: "Linen Handloom Saree",    price: 2299, discount: 12, cloth: "Linen Handloom",  image: "https://i.pinimg.com/736x/e1/0b/ba/e10bba0a43d34c201b51b8cfcfb1fc1a.jpg" },
  { id: 43, category: "sarees", name: "Mysore Crepe Silk Saree", price: 3799, discount: 20, cloth: "Crepe Silk",      image: "https://i.pinimg.com/1200x/7d/ee/6b/7dee6b38b5ad5318c321578fbe89fee9.jpg" },
  { id: 44, category: "sarees", name: "Patola Silk Saree",       price: 6499, discount: 10, cloth: "Pure Patola Silk", image: "https://i.pinimg.com/1200x/f8/f7/5f/f8f75f2d6be912135ae009fbe06576e6.jpg" },

  // ── CASUAL ──
  { id: 45, category: "casual", name: "Oversized Graphic Tee",   price: 699,  discount: 20, cloth: "100% Cotton",  image: "https://i.pinimg.com/1200x/17/bb/40/17bb4008f8f31fd4462a3809d4e2c6fe.jpg" },
  { id: 46, category: "casual", name: "Jogger Co-ord Set",       price: 1199, discount: 25, cloth: "Terry Cotton",  image: "https://i.pinimg.com/736x/b5/0d/d9/b50dd9a944717c80d8443b8f2b6ff592.jpg" },
  { id: 47, category: "casual", name: "Flowy Palazzo Set",       price: 999,  discount: 15, cloth: "Rayon",         image: "https://i.pinimg.com/736x/0c/dd/f7/0cddf7b98ebc54208ed9f59332b4177c.jpg" },
  { id: 48, category: "casual", name: "Striped Shirt + Shorts",  price: 1099, discount: 18, cloth: "Cotton Linen",  image: "https://i.pinimg.com/1200x/ea/9a/79/ea9a79c3d1f79603f5cc7a5027c834f5.jpg" },
  { id: 49, category: "casual", name: "Crop Top + Skirt Set",    price: 1299, discount: 22, cloth: "Jersey Knit",   image: "https://i.pinimg.com/1200x/f3/38/84/f338848a57e258ebb6958a5183ae1c41.jpg" },
  { id: 50, category: "casual", name: "Linen Shirt Dress",       price: 1199, discount: 12, cloth: "Pure Linen",    image: "https://i.pinimg.com/1200x/8d/44/fc/8d44fc6506fe97a5902d349293328b45.jpg" },
  { id: 51, category: "casual", name: "Knit Cardigan + Pants",   price: 1499, discount: 20, cloth: "Knit Fabric",   image: "https://i.pinimg.com/1200x/85/94/d5/8594d50163ee814be41f3214a70b4696.jpg" },
  { id: 52, category: "casual", name: "Dungaree Dress",          price: 1399, discount: 16, cloth: "Denim",         image: "https://i.pinimg.com/1200x/1b/7d/43/1b7d4323b0d1b71f3c1112888841c81c.jpg" },

];

export default products;