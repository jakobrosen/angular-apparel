import type {
  DummyCategory,
  DummyBrand,
  DummyProduct,
  DummyImage,
} from "../types/DummyData.js";

export const dummyCategoryData: DummyCategory[] = [
  { name: "bags", type: "accessory" },
  { name: "belts", type: "accessory" },
  { name: "dresses", type: "clothing" },
  { name: "hats", type: "accessory" },
  { name: "hoodies", type: "clothing" },
  { name: "jackets", type: "clothing" },
  { name: "pants", type: "clothing" },
  { name: "shirts", type: "clothing" },
  { name: "shoes", type: "clothing" },
  { name: "shorts", type: "clothing" },
  { name: "socks", type: "accessory" },
  { name: "suits", type: "clothing" },
  { name: "tops", type: "clothing" },
];

export const dummyBrandData: DummyBrand[] = [
  { name: "adidas" },
  { name: "angular-apparel" },
  { name: "new-balance" },
  { name: "nike" },
  { name: "puma" },
  { name: "reebok" },
  { name: "the-north-face" },
];

export const dummyProductData: DummyProduct[] = [
  {
    gender: "men",
    categoryId: 8,
    title: "Classic Black Cotton Shirt",
    prevPrice: null,
    price: 700,
    description:
      "A stylish and comfortable black cotton shirt, perfect for casual and formal wear.",
    brandId: 3,
    sku: "ASJ354",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Black Vest",
    prevPrice: 300,
    price: 200,
    description:
      "A sleek vest top in ribbed fabric with a round neck. Made of stretch fabric for comfort.",
    brandId: 7,
    sku: "AYI305",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Washed Cargo Baggy Trousers",
    prevPrice: null,
    price: 1100,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 6,
    sku: "IPF184",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Blue Loose-Fit Jeans",
    prevPrice: 1200,
    price: 700,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 2,
    sku: "TUO195",
  },
  {
    gender: "women",
    categoryId: 12,
    title: "Basic Black Blazer",
    prevPrice: 3200,
    price: 2200,
    description: "A stylish suit designed for everyday comfort and style.",
    brandId: 2,
    sku: "XFM989",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Studded Mini Crossbody Bag",
    prevPrice: null,
    price: 5200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 2,
    sku: "SLB474",
  },
  {
    gender: "women",
    categoryId: 3,
    title: "Pure White Milk Dress",
    prevPrice: null,
    price: 900,
    description: "A stylish dress designed for everyday comfort and style.",
    brandId: 2,
    sku: "SOT537",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Navy Puffer Jacket",
    prevPrice: null,
    price: 3500,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 2,
    sku: "ZGE410",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Black Puffer Jacket",
    prevPrice: 3500,
    price: 3400,
    description:
      "A black puffer jacket designed for everyday comfort and style.",
    brandId: 1,
    sku: "TXR143",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Lightblue STWD Hoodie",
    prevPrice: null,
    price: 1800,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 2,
    sku: "DCE006",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Lightbrown Sambas",
    prevPrice: 4200,
    price: 3800,
    description:
      "Light brown Adidas Sambas designed for everyday comfort and style.",
    brandId: 1,
    sku: "ANN147",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Light Pink Shirt",
    prevPrice: null,
    price: 700,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 2,
    sku: "HYP038",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Fluffy Denim Jacket",
    prevPrice: null,
    price: 3200,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 2,
    sku: "QEP099",
  },
  {
    gender: "men",
    categoryId: 4,
    title: "Corduroy STWD Bucket Hat",
    prevPrice: null,
    price: 350,
    description: "A stylish hat designed for everyday comfort and style.",
    brandId: 2,
    sku: "LLL936",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Waffle-Knit Jumper",
    prevPrice: 1200,
    price: 1100,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 2,
    sku: "WIJ487",
  },
  {
    gender: "men",
    categoryId: 2,
    title: "Black Leather Belt",
    prevPrice: null,
    price: 499,
    description:
      "A high-quality black leather belt designed for everyday comfort and style.",
    brandId: 4,
    sku: "NEU951",
  },
  {
    gender: "men",
    categoryId: 11,
    title: "Pack Of 3 Pairs Of Socks",
    prevPrice: null,
    price: 850,
    description: "Comfortable socks designed for everyday wear.",
    brandId: 2,
    sku: "SXY841",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Wide-Leg Tracksuit Sweatpant",
    prevPrice: 1250,
    price: 1150,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 2,
    sku: "XHL885",
  },
  {
    gender: "women",
    categoryId: 13,
    title: "Navyblue Sil Top",
    prevPrice: null,
    price: 650,
    description: "A stylish top designed for everyday comfort and style.",
    brandId: 2,
    sku: "TQQ196",
  },
  {
    gender: "women",
    categoryId: 13,
    title: "Halter Top With Contrast Trims",
    prevPrice: 600,
    price: 500,
    description: "A stylish top designed for everyday comfort and style.",
    brandId: 2,
    sku: "JRE623",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "High-Heel Sandals",
    prevPrice: 3400,
    price: 3200,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 2,
    sku: "RIF172",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Knitted Woolen Bag",
    prevPrice: 7000,
    price: 6400,
    description:
      "A stylish knitted woolen bag designed for everyday comfort and style.",
    brandId: 2,
    sku: "LLG591",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Fringed Shopper Bag",
    prevPrice: null,
    price: 7200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 2,
    sku: "GAV418",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Straight-Leg High-Waist Jeans",
    prevPrice: null,
    price: 1050,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 2,
    sku: "ITX838",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Low-Rise Jorts",
    prevPrice: 2400,
    price: 1900,
    description: "Comfortable shorts designed for everyday casual wear.",
    brandId: 2,
    sku: "LZC576",
  },
  {
    gender: "women",
    categoryId: 2,
    title: "Wide Faux Suede Belt",
    prevPrice: null,
    price: 590,
    description: "A high-quality belt designed for everyday comfort and style.",
    brandId: 5,
    sku: "HXG502",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "Floatzig 1 Shoes",
    prevPrice: null,
    price: 3200,
    description:
      "Lightweight and durable sneakers designed for everyday comfort and style.",
    brandId: 6,
    sku: "MLK218",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Crossbody Bag With Flap",
    prevPrice: null,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 3,
    sku: "TIF969",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Distressed-Effect Shopper Bag",
    prevPrice: null,
    price: 2000,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 6,
    sku: "DJV478",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Nylon Belt Bag",
    prevPrice: 3200,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 5,
    sku: "KPV946",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Rubberised Backpack With Multiple Pockets",
    prevPrice: null,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 2,
    sku: "DSH570",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Nylon Shopper Bag",
    prevPrice: 3200,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 4,
    sku: "UAU772",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Nylon Backpack",
    prevPrice: 3200,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 7,
    sku: "ZJR374",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Multi-Pocket Shopper Bag",
    prevPrice: 3200,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 3,
    sku: "MPS991",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Contrast Belt Bag",
    prevPrice: null,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 1,
    sku: "VPQ300",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Nylon Maxi Shopper Bag",
    prevPrice: null,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 1,
    sku: "ZQU392",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Skater Trainers",
    prevPrice: null,
    price: 2750,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 1,
    sku: "YZV220",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Rubberised Sandals",
    prevPrice: null,
    price: 1200,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 2,
    sku: "MEK248",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Buckled Leather Clogs",
    prevPrice: 1800,
    price: 1350,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 2,
    sku: "LDY300",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Nike Air Force 1 '07 Easyon",
    prevPrice: null,
    price: 1500,
    description:
      "This version of the AF-1 features Nike EasyOn technology for a hands-free experience.",
    brandId: 4,
    sku: "UCZ143",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Air Jordan 1 Low",
    prevPrice: null,
    price: 2350,
    description:
      "Lightweight and durable sneakers designed for everyday comfort and style.",
    brandId: 4,
    sku: "ONW497",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Air Jordan 1 Mid",
    prevPrice: null,
    price: 3500,
    description:
      "Expect nothing less from the AJ1. Smooth leather and soft suede in neutral colours are combined with plush cushioning for a premium look and feel.",
    brandId: 4,
    sku: "UAG170",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "Strappy Heeled Sandals",
    prevPrice: null,
    price: 2350,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 2,
    sku: "CMI019",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "YEEZY Earth Brown Slides",
    prevPrice: 2000,
    price: 1850,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 1,
    sku: "IID182",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Jumpman MVP",
    prevPrice: null,
    price: 4750,
    description:
      "With leather, textile and nubuck details, these sneakers honour one legacy while encouraging you to cement your own.",
    brandId: 2,
    sku: "WWH603",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Classic White Shirt",
    prevPrice: 700,
    price: 550,
    description:
      "A stylish and comfortable white cotton shirt, perfect for casual and formal wear.",
    brandId: 1,
    sku: "PUC770",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Classic Cotton Shirt",
    prevPrice: 39.88,
    price: 25.99,
    description:
      "A stylish and comfortable cotton shirt, perfect for casual and formal wear.",
    brandId: 1,
    sku: "AYM542",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Everyday Cotton Shirt",
    prevPrice: 39.88,
    price: 25.99,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 1,
    sku: "XUB966",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Entrada 22 Shorts",
    prevPrice: null,
    price: 890,
    description:
      "Comfortable cotton shorts, perfect for casual and athletic wear.",
    brandId: 1,
    sku: "UGT926",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Club Tennis Short",
    prevPrice: 688,
    price: 540,
    description: "Comfortable tennis shorts designed for athletic performance.",
    brandId: 1,
    sku: "XBN836",
  },
  {
    gender: "women",
    categoryId: 10,
    title: "Classic Cargo Shorts",
    prevPrice: null,
    price: 650,
    description: "Comfortable cotton cargo shorts, perfect for casual wear.",
    brandId: 1,
    sku: "CSA749",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Crew Sweatshirt",
    prevPrice: null,
    price: 1250,
    description:
      "A comfortable crew sweatshirt designed for everyday casual wear.",
    brandId: 1,
    sku: "NIV620",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Warm-Up Track Top",
    prevPrice: 3950,
    price: 2599,
    description:
      "A stylish and comfortable warm-up track top, perfect for casual and formal wear.",
    brandId: 1,
    sku: "NOE925",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Neuclassics Hoodie",
    prevPrice: null,
    price: 2599,
    description:
      "A stylish and comfortable hoodie, perfect for casual and formal wear.",
    brandId: 1,
    sku: "DET264",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Nike Air Jordan 4 Retro",
    prevPrice: 4500,
    price: 3750,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 4,
    sku: "XXP481",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Loose Open-Hem Pants",
    prevPrice: null,
    price: 1300,
    description:
      "Lightweight and durable pants with an open hem design, perfect for everyday comfort.",
    brandId: 4,
    sku: "WSK512",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Therma-Fit Jacket",
    prevPrice: 3988,
    price: 2599,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 4,
    sku: "DYZ793",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Classic Flow Short",
    prevPrice: 988,
    price: 599,
    description: "Comfortable flow shorts designed for everyday casual wear.",
    brandId: 4,
    sku: "LYP754",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "Classic Cotton Hoodie",
    prevPrice: null,
    price: 1300,
    description:
      "A comfortable cotton hoodie designed for everyday comfort and style.",
    brandId: 4,
    sku: "INX880",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "White Cotton Shirt",
    prevPrice: 988,
    price: 599,
    description:
      "A crisp white cotton shirt, perfect for casual and formal wear.",
    brandId: 4,
    sku: "PAP943",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Dark Grey Cotton Shirt",
    prevPrice: null,
    price: 670,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 4,
    sku: "LOB845",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Blue Cotton Shirt",
    prevPrice: null,
    price: 550,
    description:
      "A classic blue cotton shirt, perfect for casual and formal wear.",
    brandId: 4,
    sku: "AMD578",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Men's Workout Ready Shorts 9",
    prevPrice: null,
    price: 700,
    description:
      "Performance shorts designed for workout and training sessions.",
    brandId: 6,
    sku: "YJT392",
  },
  {
    gender: "women",
    categoryId: 10,
    title: "Women's Speed Shorts 3",
    prevPrice: 1200,
    price: 850,
    description:
      "Lightweight performance shorts designed for speed and agility training.",
    brandId: 6,
    sku: "DFL313",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Workout Ready Shorts",
    prevPrice: null,
    price: 990,
    description:
      "Performance shorts designed for workout and training sessions.",
    brandId: 6,
    sku: "LOG182",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Nylon Satin Track Pants",
    prevPrice: null,
    price: 2100,
    description:
      "Lightweight and durable nylon satin track pants, perfect for everyday comfort.",
    brandId: 6,
    sku: "KVL801",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Pullover Hoodie",
    prevPrice: null,
    price: 2200,
    description:
      "A comfortable pullover hoodie designed for everyday comfort and style.",
    brandId: 6,
    sku: "REL198",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Campbell Backpack",
    prevPrice: null,
    price: 400,
    description:
      "A durable Campbell backpack designed for everyday comfort and style.",
    brandId: 6,
    sku: "RCW458",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Stitched Logo Jacket",
    prevPrice: null,
    price: 2500,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 6,
    sku: "NPO157",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Cityride Running Shoes",
    prevPrice: null,
    price: 1200,
    description:
      "Comfortable running shoes designed for everyday comfort and style.",
    brandId: 6,
    sku: "VGU956",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Pique Polo Shirt",
    prevPrice: 800,
    price: 700,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 6,
    sku: "VUZ897",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Classic Red Shirt",
    prevPrice: null,
    price: 1200,
    description:
      "A classic red cotton shirt, perfect for casual and formal wear.",
    brandId: 6,
    sku: "EPA126",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Classic Cotton Short",
    prevPrice: null,
    price: 1200,
    description: "Comfortable cotton shorts designed for everyday casual wear.",
    brandId: 3,
    sku: "RJC719",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "Crewneck Sweatshirt",
    prevPrice: null,
    price: 1150,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 3,
    sku: "UZL471",
  },
  {
    gender: "women",
    categoryId: 8,
    title: "Debut Sculpture T-Shirt",
    prevPrice: null,
    price: 900,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 3,
    sku: "SMM238",
  },
  {
    gender: "women",
    categoryId: 8,
    title: "Flower Cropped T-Shirt",
    prevPrice: 1200,
    price: 700,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 3,
    sku: "GXG888",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Shoe Schematics T-Shirt",
    prevPrice: null,
    price: 800,
    description:
      "A graphic t-shirt featuring shoe schematics, perfect for casual wear.",
    brandId: 3,
    sku: "BDL024",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Classic Crest Shirt",
    prevPrice: null,
    price: 1100,
    description:
      "A classic crest t-shirt, perfect for casual and everyday wear.",
    brandId: 3,
    sku: "TNI009",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "574 Photoreal T-Shirt",
    prevPrice: 800,
    price: 750,
    description:
      "A comfortable t-shirt featuring the 574 photoreal graphic, perfect for casual wear.",
    brandId: 3,
    sku: "OET636",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Essentials Logo T-Shirt",
    prevPrice: null,
    price: 800,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 3,
    sku: "IJF838",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Graphic Vintage T-Shirt",
    prevPrice: null,
    price: 1200,
    description:
      "A comfortable t-shirt with vintage graphic design, perfect for casual wear.",
    brandId: 3,
    sku: "IRB189",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Two Swords T-Shirt",
    prevPrice: null,
    price: 500,
    description:
      "A comfortable t-shirt with a two swords design, perfect for casual wear.",
    brandId: 3,
    sku: "OXH904",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Classic Jean Pant",
    prevPrice: 1345,
    price: 1230,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 5,
    sku: "EZZ343",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Men's Basketball Shoes",
    prevPrice: null,
    price: 1650,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 5,
    sku: "HTM682",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Black Puma Slides",
    prevPrice: null,
    price: 590,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 5,
    sku: "DZH339",
  },
  {
    gender: "women",
    categoryId: 8,
    title: "Relaxed Heavy Tee",
    prevPrice: 1200,
    price: 1100,
    description:
      "A relaxed fit heavy cotton tee, perfect for everyday comfort.",
    brandId: 5,
    sku: "QTN947",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Classic Purple Short",
    prevPrice: null,
    price: 2200,
    description: "Comfortable shorts designed for everyday casual wear.",
    brandId: 5,
    sku: "MHB378",
  },
  {
    gender: "women",
    categoryId: 3,
    title: "Ribbed Flared Short Dress",
    prevPrice: 1700,
    price: 1360,
    description:
      "A ribbed flared short dress designed for everyday comfort and style.",
    brandId: 5,
    sku: "YEJ246",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Grip Bag",
    prevPrice: null,
    price: 4900,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 5,
    sku: "FBE904",
  },
  {
    gender: "women",
    categoryId: 4,
    title: "Baseball Cap",
    prevPrice: null,
    price: 600,
    description:
      "A classic baseball cap designed for everyday comfort and style.",
    brandId: 5,
    sku: "JUN403",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "Soccer Hoodie",
    prevPrice: null,
    price: 2200,
    description:
      "A comfortable hoodie with soccer design, perfect for casual wear.",
    brandId: 5,
    sku: "HME844",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Dream Men's Sweatpants",
    prevPrice: null,
    price: 2200,
    description:
      "Comfortable sweatpants designed for men, perfect for everyday comfort.",
    brandId: 5,
    sku: "SVY512",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Mini Grip Bag",
    prevPrice: null,
    price: 2200,
    description: "A compact grip bag designed for everyday comfort and style.",
    brandId: 5,
    sku: "TQJ001",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Men’s Explore Camp Sandals",
    prevPrice: null,
    price: 950,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 7,
    sku: "EZB586",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Borealis Backpack",
    prevPrice: 9200,
    price: 8900,
    description:
      "A durable Borealis backpack designed for everyday comfort and style.",
    brandId: 7,
    sku: "SWZ798",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Men’s Wander Joggers",
    prevPrice: 1500,
    price: 1200,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 7,
    sku: "WEL465",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Women’s Evolution Pants",
    prevPrice: null,
    price: 2200,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 7,
    sku: "KUR578",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Paramount Convertible Pants",
    prevPrice: null,
    price: 2200,
    description:
      "Versatile convertible pants designed for everyday comfort and travel.",
    brandId: 7,
    sku: "JRJ247",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Isabella Sling",
    prevPrice: 3200,
    price: 2200,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 7,
    sku: "YDA670",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Green Cotton Short",
    prevPrice: null,
    price: 700,
    description: "Comfortable green cotton shorts, perfect for casual wear.",
    brandId: 7,
    sku: "YGL349",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Class V Shorts",
    prevPrice: null,
    price: 1200,
    description: "Comfortable shorts designed for everyday casual wear.",
    brandId: 7,
    sku: "JFQ387",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Oversize Trench Coat With Wide Sleeves",
    prevPrice: null,
    price: 3500,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 2,
    sku: "GRM882",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Reebok X HYMNE Jacket",
    prevPrice: null,
    price: 3500,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 6,
    sku: "ZDN024",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Numeric Coaches Jacket",
    prevPrice: null,
    price: 3450,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 3,
    sku: "WFK455",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Woven Full Zip Jacket",
    prevPrice: null,
    price: 3500,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 3,
    sku: "MVE575",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Men's Relaxed Track Jeans",
    prevPrice: 1100,
    price: 670,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 5,
    sku: "IZS634",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Black Loose-Fit Jeans",
    prevPrice: null,
    price: 730,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 5,
    sku: "WNG857",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Navy Blue Loose-Fit Jeans",
    prevPrice: 1100,
    price: 980,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 2,
    sku: "YZA823",
  },
  {
    gender: "men",
    categoryId: 2,
    title: "Sunriser Run Belt",
    prevPrice: 1100,
    price: 980,
    description:
      "A lightweight run belt designed for everyday comfort and style.",
    brandId: 2,
    sku: "VQZ326",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "Glenclyffe Urban Boots",
    prevPrice: null,
    price: 1230,
    description:
      "Stylish urban boots designed for everyday comfort and durability.",
    brandId: 7,
    sku: "XBU713",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Earth Brown Jacket",
    prevPrice: 2000,
    price: 1850,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 1,
    sku: "ZIA736",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Rain.rdy Jacket",
    prevPrice: null,
    price: 1250,
    description:
      "A rain-ready jacket designed for everyday comfort and protection.",
    brandId: 1,
    sku: "ZQQ718",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "Runfalcon 5 Shoes",
    prevPrice: null,
    price: 2150,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 1,
    sku: "CRY935",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Swift Run 1 Shoes",
    prevPrice: null,
    price: 1100,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 1,
    sku: "NEL714",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "Full-Zip Hoodie",
    prevPrice: null,
    price: 1230,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 1,
    sku: "MIG499",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Essentials Tee",
    prevPrice: null,
    price: 900,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 1,
    sku: "XHH458",
  },
  {
    gender: "women",
    categoryId: 8,
    title: "White Tshirt Top",
    prevPrice: null,
    price: 600,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 1,
    sku: "ERO271",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Firebird Track Pants",
    prevPrice: null,
    price: 980,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 1,
    sku: "IBC749",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Adicolor Baggy Pants",
    prevPrice: null,
    price: 700,
    description: "Baggy Adidas pants designed for everyday comfort and style.",
    brandId: 1,
    sku: "OZJ770",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Terrace Bag",
    prevPrice: null,
    price: 2250,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 1,
    sku: "UZL350",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Nike Therma-Fit Swift",
    prevPrice: 2300,
    price: 2250,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 4,
    sku: "TPO086",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Nike ACG Black Iguana",
    prevPrice: null,
    price: 2250,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 4,
    sku: "TNQ732",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "Nike Dunk Low Next Nature",
    prevPrice: null,
    price: 2150,
    description:
      "Lightweight and durable sneakers designed for everyday comfort and style.",
    brandId: 4,
    sku: "CZG429",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Nike Primary Fleece",
    prevPrice: null,
    price: 1250,
    description:
      "A comfortable Nike Primary fleece hoodie designed for everyday wear.",
    brandId: 4,
    sku: "TMX568",
  },
  {
    gender: "women",
    categoryId: 8,
    title: "Chain Print T-Shirt",
    prevPrice: null,
    price: 1250,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 4,
    sku: "MFE615",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Nature Embroidery T-Shirt",
    prevPrice: null,
    price: 1050,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 4,
    sku: "MPY148",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Nike Sportswear Pant",
    prevPrice: null,
    price: 1750,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 4,
    sku: "UOU935",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Nike Club Pants",
    prevPrice: null,
    price: 2250,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 4,
    sku: "HJM625",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Nike Varsity Backpack",
    prevPrice: null,
    price: 2250,
    description: "A stylish bag designed for everyday comfort and style.",
    brandId: 4,
    sku: "XJK547",
  },
  {
    gender: "men",
    categoryId: 1,
    title: "Card Wallet Bag",
    prevPrice: null,
    price: 750,
    description:
      "A compact card wallet bag designed for everyday comfort and style.",
    brandId: 4,
    sku: "QMW292",
  },
  {
    gender: "women",
    categoryId: 10,
    title: "Phoenix Fleece Short",
    prevPrice: null,
    price: 1150,
    description: "Comfortable fleece shorts designed for everyday casual wear.",
    brandId: 4,
    sku: "CIL452",
  },
  {
    gender: "women",
    categoryId: 10,
    title: "Black Cotton Short",
    prevPrice: null,
    price: 1250,
    description: "Comfortable black cotton shorts, perfect for casual wear.",
    brandId: 4,
    sku: "VZR097",
  },
  {
    gender: "women",
    categoryId: 8,
    title: "Identity Big Logo T-Shirt",
    prevPrice: null,
    price: 1250,
    description:
      "A comfortable t-shirt with a big logo design, perfect for casual wear.",
    brandId: 6,
    sku: "RBW317",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "High-Rise Colorblock Leggings",
    prevPrice: null,
    price: 1150,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 6,
    sku: "SQM625",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Med Duffel Bag",
    prevPrice: null,
    price: 2250,
    description:
      "A durable med duffel bag designed for everyday comfort and style.",
    brandId: 6,
    sku: "BUY040",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Blocked Woven Jacket",
    prevPrice: 2300,
    price: 2250,
    description:
      "A stylish woven jacket with blocked design, perfect for casual and formal wear.",
    brandId: 3,
    sku: "YRJ913",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Athletics Packable Jacket",
    prevPrice: 2700,
    price: 2450,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 3,
    sku: "LSE849",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "574 Core Shoe",
    prevPrice: null,
    price: 2250,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 3,
    sku: "DOE668",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Fresh Foam X",
    prevPrice: null,
    price: 2250,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 3,
    sku: "WJL373",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "French Terry Hoodie",
    prevPrice: null,
    price: 1250,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 3,
    sku: "SWX501",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Graphic Crew Hoodie",
    prevPrice: null,
    price: 2200,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 3,
    sku: "WOV507",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Piped Tapered Pant",
    prevPrice: null,
    price: 2250,
    description:
      "A tapered pant with piped detailing, designed for everyday comfort.",
    brandId: 3,
    sku: "YBV297",
  },
  {
    gender: "men",
    categoryId: 7,
    title: "Numeric Standard Pant",
    prevPrice: null,
    price: 1250,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 3,
    sku: "TTK257",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Performance Woven Pant",
    prevPrice: null,
    price: 550,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 3,
    sku: "FFP340",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Classic Canvas Tote",
    prevPrice: null,
    price: 2250,
    description:
      "A classic canvas tote bag designed for everyday comfort and style.",
    brandId: 3,
    sku: "YSC527",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Shohei Signature Fleece 9",
    prevPrice: null,
    price: 1250,
    description: "Comfortable shorts designed for everyday casual wear.",
    brandId: 3,
    sku: "LRQ360",
  },
  {
    gender: "women",
    categoryId: 10,
    title: "Cotton Nylon Short",
    prevPrice: null,
    price: 950,
    description:
      "Comfortable cotton nylon blend shorts, perfect for casual wear.",
    brandId: 7,
    sku: "COK318",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Studio Editorial Jacket",
    prevPrice: null,
    price: 2250,
    description:
      "A stylish editorial jacket designed for everyday comfort and style.",
    brandId: 6,
    sku: "PNG908",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Men’s Aconcagua Hoodie",
    prevPrice: null,
    price: 2250,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 7,
    sku: "DLO431",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Retro Nuptse Jacket",
    prevPrice: null,
    price: 3250,
    description:
      "A retro Nuptse jacket with classic down insulation, designed for everyday comfort.",
    brandId: 7,
    sku: "VXH528",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "Hydrenalite™ Down Hoodie",
    prevPrice: null,
    price: 2250,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 7,
    sku: "EDJ253",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Base Camp Mules",
    prevPrice: null,
    price: 1750,
    description: "Comfortable mules designed for everyday comfort and style.",
    brandId: 7,
    sku: "VMP059",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "Evolution Full-Zip",
    prevPrice: null,
    price: 1250,
    description:
      "An Evolution full-zip hoodie designed for everyday comfort and style.",
    brandId: 7,
    sku: "DFM744",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "NSE Pullover Hoodie",
    prevPrice: null,
    price: 2250,
    description:
      "An NSE pullover hoodie designed for everyday comfort and style.",
    brandId: 7,
    sku: "VMQ898",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Men’s AXYS Hoodie",
    prevPrice: null,
    price: 2250,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 7,
    sku: "SWM780",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "PUMA X KIDSUPER Hoodie",
    prevPrice: null,
    price: 2250,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 5,
    sku: "CZW702",
  },
  {
    gender: "men",
    categoryId: 6,
    title: "Lafrancé Black Jacket",
    prevPrice: null,
    price: 1950,
    description:
      "A stylish black jacket with French-inspired design, perfect for casual and formal wear.",
    brandId: 5,
    sku: "SWA405",
  },
  {
    gender: "men",
    categoryId: 9,
    title: "Voltaic Evo Shoes",
    prevPrice: null,
    price: 2250,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 5,
    sku: "ITL179",
  },
  {
    gender: "women",
    categoryId: 9,
    title: "Speedcat OG",
    prevPrice: null,
    price: 2250,
    description:
      "Lightweight and durable shoes designed for everyday comfort and style.",
    brandId: 5,
    sku: "FCD212",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Green Puma Hoodie",
    prevPrice: null,
    price: 1250,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 5,
    sku: "BOG213",
  },
  {
    gender: "men",
    categoryId: 5,
    title: "Neymar Creativity Hoodie",
    prevPrice: null,
    price: 1250,
    description:
      "A comfortable hoodie designed for everyday comfort and style.",
    brandId: 5,
    sku: "MTD454",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Black Label Shirt",
    prevPrice: null,
    price: 1050,
    description:
      "A premium black label shirt, perfect for formal and casual wear.",
    brandId: 5,
    sku: "SWE787",
  },
  {
    gender: "men",
    categoryId: 8,
    title: "Milkish White Shirt",
    prevPrice: null,
    price: 750,
    description:
      "A stylish and comfortable shirt designed for everyday comfort and style.",
    brandId: 5,
    sku: "TGQ292",
  },
  {
    gender: "women",
    categoryId: 6,
    title: "PUMA X KIDSUPER",
    prevPrice: null,
    price: 1650,
    description: "A stylish jacket designed for everyday comfort and style.",
    brandId: 5,
    sku: "VTG011",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Las Vegas T7",
    prevPrice: null,
    price: 1350,
    description: "Comfortable pants designed for everyday wear.",
    brandId: 5,
    sku: "GFI598",
  },
  {
    gender: "women",
    categoryId: 7,
    title: "Low Rise Track Pants",
    prevPrice: null,
    price: 1650,
    description:
      "Lightweight and durable pants designed for everyday comfort and style.",
    brandId: 5,
    sku: "IOX693",
  },
  {
    gender: "women",
    categoryId: 1,
    title: "Black Puma Bag",
    prevPrice: null,
    price: 1650,
    description:
      "A stylish black Puma bag designed for everyday comfort and style.",
    brandId: 5,
    sku: "FBJ763",
  },
  {
    gender: "women",
    categoryId: 10,
    title: "HARRY POTTER Shorts",
    prevPrice: null,
    price: 1650,
    description: "Comfortable shorts designed for everyday casual wear.",
    brandId: 5,
    sku: "ORA395",
  },
  {
    gender: "men",
    categoryId: 10,
    title: "Red Woven Shorts",
    prevPrice: null,
    price: 1650,
    description: "Comfortable shorts designed for everyday casual wear.",
    brandId: 5,
    sku: "AVN187",
  },
  {
    gender: "women",
    categoryId: 10,
    title: "Half RC Short",
    prevPrice: null,
    price: 1650,
    description:
      "The ultimate performance short, tailored for every run. Features four-way stretch fabric and a built-in brief for support.",
    brandId: 3,
    sku: "XQQ895",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "Lux Oversized Hoodie",
    prevPrice: null,
    price: 1450,
    description:
      "A luxury oversized hoodie designed for everyday comfort and style.",
    brandId: 6,
    sku: "RZZ740",
  },
  {
    gender: "women",
    categoryId: 5,
    title: "Mid-Layer Sweatshirt",
    prevPrice: null,
    price: 1250,
    description:
      "A mid-layer sweatshirt designed for everyday comfort and style.",
    brandId: 6,
    sku: "EXI253",
  },
];

export const dummyImageData: DummyImage[] = [
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%201",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%202",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%203",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%204",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%205",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%206",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%207",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Black%20Cotton%20Shirt%208",
    sku: "ASJ354",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Vest%201",
    sku: "AYI305",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Vest%202",
    sku: "AYI305",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Vest%203",
    sku: "AYI305",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Vest%204",
    sku: "AYI305",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Vest%205",
    sku: "AYI305",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Vest%206",
    sku: "AYI305",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%201",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%202",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%203",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%204",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%205",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%206",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%207",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Washed%20Cargo%20Baggy%20Trousers%208",
    sku: "IPF184",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%201",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%202",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%203",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%204",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%205",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%206",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%207",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Loose-Fit%20Jeans%208",
    sku: "TUO195",
  },
  {
    url: "https://placehold.co/800x800?text=Basic%20Black%20Blazer%201",
    sku: "XFM989",
  },
  {
    url: "https://placehold.co/800x800?text=Basic%20Black%20Blazer%202",
    sku: "XFM989",
  },
  {
    url: "https://placehold.co/800x800?text=Basic%20Black%20Blazer%203",
    sku: "XFM989",
  },
  {
    url: "https://placehold.co/800x800?text=Basic%20Black%20Blazer%204",
    sku: "XFM989",
  },
  {
    url: "https://placehold.co/800x800?text=Basic%20Black%20Blazer%205",
    sku: "XFM989",
  },
  {
    url: "https://placehold.co/800x800?text=Basic%20Black%20Blazer%206",
    sku: "XFM989",
  },
  {
    url: "https://placehold.co/800x800?text=Basic%20Black%20Blazer%207",
    sku: "XFM989",
  },
  {
    url: "https://placehold.co/800x800?text=Studded%20Mini%20Crossbody%20Bag%201",
    sku: "SLB474",
  },
  {
    url: "https://placehold.co/800x800?text=Studded%20Mini%20Crossbody%20Bag%202",
    sku: "SLB474",
  },
  {
    url: "https://placehold.co/800x800?text=Studded%20Mini%20Crossbody%20Bag%203",
    sku: "SLB474",
  },
  {
    url: "https://placehold.co/800x800?text=Studded%20Mini%20Crossbody%20Bag%204",
    sku: "SLB474",
  },
  {
    url: "https://placehold.co/800x800?text=Studded%20Mini%20Crossbody%20Bag%205",
    sku: "SLB474",
  },
  {
    url: "https://placehold.co/800x800?text=Studded%20Mini%20Crossbody%20Bag%206",
    sku: "SLB474",
  },
  {
    url: "https://placehold.co/800x800?text=Pure%20White%20Milk%20Dress%201",
    sku: "SOT537",
  },
  {
    url: "https://placehold.co/800x800?text=Pure%20White%20Milk%20Dress%202",
    sku: "SOT537",
  },
  {
    url: "https://placehold.co/800x800?text=Pure%20White%20Milk%20Dress%203",
    sku: "SOT537",
  },
  {
    url: "https://placehold.co/800x800?text=Pure%20White%20Milk%20Dress%204",
    sku: "SOT537",
  },
  {
    url: "https://placehold.co/800x800?text=Pure%20White%20Milk%20Dress%205",
    sku: "SOT537",
  },
  {
    url: "https://placehold.co/800x800?text=Pure%20White%20Milk%20Dress%206",
    sku: "SOT537",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Puffer%20Jacket%201",
    sku: "ZGE410",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Puffer%20Jacket%202",
    sku: "ZGE410",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Puffer%20Jacket%203",
    sku: "ZGE410",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Puffer%20Jacket%204",
    sku: "ZGE410",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Puffer%20Jacket%205",
    sku: "ZGE410",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Puffer%20Jacket%206",
    sku: "ZGE410",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puffer%20Jacket%201",
    sku: "TXR143",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puffer%20Jacket%202",
    sku: "TXR143",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puffer%20Jacket%203",
    sku: "TXR143",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puffer%20Jacket%204",
    sku: "TXR143",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puffer%20Jacket%205",
    sku: "TXR143",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puffer%20Jacket%206",
    sku: "TXR143",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%201",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%202",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%203",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%204",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%205",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%206",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%207",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightblue%20STWD%20Hoodie%208",
    sku: "DCE006",
  },
  {
    url: "https://placehold.co/800x800?text=Lightbrown%20Sambas%201",
    sku: "ANN147",
  },
  {
    url: "https://placehold.co/800x800?text=Lightbrown%20Sambas%202",
    sku: "ANN147",
  },
  {
    url: "https://placehold.co/800x800?text=Lightbrown%20Sambas%203",
    sku: "ANN147",
  },
  {
    url: "https://placehold.co/800x800?text=Lightbrown%20Sambas%204",
    sku: "ANN147",
  },
  {
    url: "https://placehold.co/800x800?text=Lightbrown%20Sambas%205",
    sku: "ANN147",
  },
  {
    url: "https://placehold.co/800x800?text=Lightbrown%20Sambas%206",
    sku: "ANN147",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%201",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%202",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%203",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%204",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%205",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%206",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%207",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Light%20Pink%20Shirt%208",
    sku: "HYP038",
  },
  {
    url: "https://placehold.co/800x800?text=Fluffy%20Denim%20Jacket%201",
    sku: "QEP099",
  },
  {
    url: "https://placehold.co/800x800?text=Fluffy%20Denim%20Jacket%202",
    sku: "QEP099",
  },
  {
    url: "https://placehold.co/800x800?text=Fluffy%20Denim%20Jacket%203",
    sku: "QEP099",
  },
  {
    url: "https://placehold.co/800x800?text=Fluffy%20Denim%20Jacket%204",
    sku: "QEP099",
  },
  {
    url: "https://placehold.co/800x800?text=Fluffy%20Denim%20Jacket%205",
    sku: "QEP099",
  },
  {
    url: "https://placehold.co/800x800?text=Fluffy%20Denim%20Jacket%206",
    sku: "QEP099",
  },
  {
    url: "https://placehold.co/800x800?text=Fluffy%20Denim%20Jacket%207",
    sku: "QEP099",
  },
  {
    url: "https://placehold.co/800x800?text=Corduroy%20STWD%20Bucket%20Hat%201",
    sku: "LLL936",
  },
  {
    url: "https://placehold.co/800x800?text=Corduroy%20STWD%20Bucket%20Hat%202",
    sku: "LLL936",
  },
  {
    url: "https://placehold.co/800x800?text=Corduroy%20STWD%20Bucket%20Hat%203",
    sku: "LLL936",
  },
  {
    url: "https://placehold.co/800x800?text=Corduroy%20STWD%20Bucket%20Hat%204",
    sku: "LLL936",
  },
  {
    url: "https://placehold.co/800x800?text=Waffle-Knit%20Jumper%201",
    sku: "WIJ487",
  },
  {
    url: "https://placehold.co/800x800?text=Waffle-Knit%20Jumper%202",
    sku: "WIJ487",
  },
  {
    url: "https://placehold.co/800x800?text=Waffle-Knit%20Jumper%203",
    sku: "WIJ487",
  },
  {
    url: "https://placehold.co/800x800?text=Waffle-Knit%20Jumper%204",
    sku: "WIJ487",
  },
  {
    url: "https://placehold.co/800x800?text=Waffle-Knit%20Jumper%205",
    sku: "WIJ487",
  },
  {
    url: "https://placehold.co/800x800?text=Waffle-Knit%20Jumper%206",
    sku: "WIJ487",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Leather%20Belt%201",
    sku: "NEU951",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Leather%20Belt%202",
    sku: "NEU951",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Leather%20Belt%203",
    sku: "NEU951",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Leather%20Belt%204",
    sku: "NEU951",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Leather%20Belt%205",
    sku: "NEU951",
  },
  {
    url: "https://placehold.co/800x800?text=Pack%20Of%203%20Pairs%20Of%20Socks%201",
    sku: "SXY841",
  },
  {
    url: "https://placehold.co/800x800?text=Pack%20Of%203%20Pairs%20Of%20Socks%202",
    sku: "SXY841",
  },
  {
    url: "https://placehold.co/800x800?text=Pack%20Of%203%20Pairs%20Of%20Socks%203",
    sku: "SXY841",
  },
  {
    url: "https://placehold.co/800x800?text=Pack%20Of%203%20Pairs%20Of%20Socks%204",
    sku: "SXY841",
  },
  {
    url: "https://placehold.co/800x800?text=Wide-Leg%20Tracksuit%20Sweatpant%201",
    sku: "XHL885",
  },
  {
    url: "https://placehold.co/800x800?text=Wide-Leg%20Tracksuit%20Sweatpant%202",
    sku: "XHL885",
  },
  {
    url: "https://placehold.co/800x800?text=Wide-Leg%20Tracksuit%20Sweatpant%203",
    sku: "XHL885",
  },
  {
    url: "https://placehold.co/800x800?text=Wide-Leg%20Tracksuit%20Sweatpant%204",
    sku: "XHL885",
  },
  {
    url: "https://placehold.co/800x800?text=Wide-Leg%20Tracksuit%20Sweatpant%205",
    sku: "XHL885",
  },
  {
    url: "https://placehold.co/800x800?text=Wide-Leg%20Tracksuit%20Sweatpant%206",
    sku: "XHL885",
  },
  {
    url: "https://placehold.co/800x800?text=Navyblue%20Sil%20Top%201",
    sku: "TQQ196",
  },
  {
    url: "https://placehold.co/800x800?text=Navyblue%20Sil%20Top%202",
    sku: "TQQ196",
  },
  {
    url: "https://placehold.co/800x800?text=Navyblue%20Sil%20Top%203",
    sku: "TQQ196",
  },
  {
    url: "https://placehold.co/800x800?text=Navyblue%20Sil%20Top%204",
    sku: "TQQ196",
  },
  {
    url: "https://placehold.co/800x800?text=Navyblue%20Sil%20Top%205",
    sku: "TQQ196",
  },
  {
    url: "https://placehold.co/800x800?text=Navyblue%20Sil%20Top%206",
    sku: "TQQ196",
  },
  {
    url: "https://placehold.co/800x800?text=Navyblue%20Sil%20Top%207",
    sku: "TQQ196",
  },
  {
    url: "https://placehold.co/800x800?text=Halter%20Top%20With%20Contrast%20Trims%201",
    sku: "JRE623",
  },
  {
    url: "https://placehold.co/800x800?text=Halter%20Top%20With%20Contrast%20Trims%202",
    sku: "JRE623",
  },
  {
    url: "https://placehold.co/800x800?text=Halter%20Top%20With%20Contrast%20Trims%203",
    sku: "JRE623",
  },
  {
    url: "https://placehold.co/800x800?text=Halter%20Top%20With%20Contrast%20Trims%204",
    sku: "JRE623",
  },
  {
    url: "https://placehold.co/800x800?text=Halter%20Top%20With%20Contrast%20Trims%205",
    sku: "JRE623",
  },
  {
    url: "https://placehold.co/800x800?text=High-Heel%20Sandals%201",
    sku: "RIF172",
  },
  {
    url: "https://placehold.co/800x800?text=High-Heel%20Sandals%202",
    sku: "RIF172",
  },
  {
    url: "https://placehold.co/800x800?text=High-Heel%20Sandals%203",
    sku: "RIF172",
  },
  {
    url: "https://placehold.co/800x800?text=High-Heel%20Sandals%204",
    sku: "RIF172",
  },
  {
    url: "https://placehold.co/800x800?text=High-Heel%20Sandals%205",
    sku: "RIF172",
  },
  {
    url: "https://placehold.co/800x800?text=Knitted%20Woolen%20Bag%201",
    sku: "LLG591",
  },
  {
    url: "https://placehold.co/800x800?text=Knitted%20Woolen%20Bag%202",
    sku: "LLG591",
  },
  {
    url: "https://placehold.co/800x800?text=Knitted%20Woolen%20Bag%203",
    sku: "LLG591",
  },
  {
    url: "https://placehold.co/800x800?text=Fringed%20Shopper%20Bag%201",
    sku: "GAV418",
  },
  {
    url: "https://placehold.co/800x800?text=Fringed%20Shopper%20Bag%202",
    sku: "GAV418",
  },
  {
    url: "https://placehold.co/800x800?text=Fringed%20Shopper%20Bag%203",
    sku: "GAV418",
  },
  {
    url: "https://placehold.co/800x800?text=Fringed%20Shopper%20Bag%204",
    sku: "GAV418",
  },
  {
    url: "https://placehold.co/800x800?text=Fringed%20Shopper%20Bag%205",
    sku: "GAV418",
  },
  {
    url: "https://placehold.co/800x800?text=Straight-Leg%20High-Waist%20Jeans%201",
    sku: "ITX838",
  },
  {
    url: "https://placehold.co/800x800?text=Straight-Leg%20High-Waist%20Jeans%202",
    sku: "ITX838",
  },
  {
    url: "https://placehold.co/800x800?text=Straight-Leg%20High-Waist%20Jeans%203",
    sku: "ITX838",
  },
  {
    url: "https://placehold.co/800x800?text=Straight-Leg%20High-Waist%20Jeans%204",
    sku: "ITX838",
  },
  {
    url: "https://placehold.co/800x800?text=Straight-Leg%20High-Waist%20Jeans%205",
    sku: "ITX838",
  },
  {
    url: "https://placehold.co/800x800?text=Straight-Leg%20High-Waist%20Jeans%206",
    sku: "ITX838",
  },
  {
    url: "https://placehold.co/800x800?text=Low-Rise%20Jorts%201",
    sku: "LZC576",
  },
  {
    url: "https://placehold.co/800x800?text=Low-Rise%20Jorts%202",
    sku: "LZC576",
  },
  {
    url: "https://placehold.co/800x800?text=Low-Rise%20Jorts%203",
    sku: "LZC576",
  },
  {
    url: "https://placehold.co/800x800?text=Low-Rise%20Jorts%204",
    sku: "LZC576",
  },
  {
    url: "https://placehold.co/800x800?text=Low-Rise%20Jorts%205",
    sku: "LZC576",
  },
  {
    url: "https://placehold.co/800x800?text=Low-Rise%20Jorts%206",
    sku: "LZC576",
  },
  {
    url: "https://placehold.co/800x800?text=Wide%20Faux%20Suede%20Belt%201",
    sku: "HXG502",
  },
  {
    url: "https://placehold.co/800x800?text=Wide%20Faux%20Suede%20Belt%202",
    sku: "HXG502",
  },
  {
    url: "https://placehold.co/800x800?text=Wide%20Faux%20Suede%20Belt%203",
    sku: "HXG502",
  },
  {
    url: "https://placehold.co/800x800?text=Floatzig%201%20Shoes%201",
    sku: "MLK218",
  },
  {
    url: "https://placehold.co/800x800?text=Floatzig%201%20Shoes%202",
    sku: "MLK218",
  },
  {
    url: "https://placehold.co/800x800?text=Floatzig%201%20Shoes%203",
    sku: "MLK218",
  },
  {
    url: "https://placehold.co/800x800?text=Floatzig%201%20Shoes%204",
    sku: "MLK218",
  },
  {
    url: "https://placehold.co/800x800?text=Floatzig%201%20Shoes%205",
    sku: "MLK218",
  },
  {
    url: "https://placehold.co/800x800?text=Floatzig%201%20Shoes%206",
    sku: "MLK218",
  },
  {
    url: "https://placehold.co/800x800?text=Floatzig%201%20Shoes%207",
    sku: "MLK218",
  },
  {
    url: "https://placehold.co/800x800?text=Crossbody%20Bag%20With%20Flap%201",
    sku: "TIF969",
  },
  {
    url: "https://placehold.co/800x800?text=Crossbody%20Bag%20With%20Flap%202",
    sku: "TIF969",
  },
  {
    url: "https://placehold.co/800x800?text=Crossbody%20Bag%20With%20Flap%203",
    sku: "TIF969",
  },
  {
    url: "https://placehold.co/800x800?text=Crossbody%20Bag%20With%20Flap%204",
    sku: "TIF969",
  },
  {
    url: "https://placehold.co/800x800?text=Distressed-Effect%20Shopper%20Bag%201",
    sku: "DJV478",
  },
  {
    url: "https://placehold.co/800x800?text=Distressed-Effect%20Shopper%20Bag%202",
    sku: "DJV478",
  },
  {
    url: "https://placehold.co/800x800?text=Distressed-Effect%20Shopper%20Bag%203",
    sku: "DJV478",
  },
  {
    url: "https://placehold.co/800x800?text=Distressed-Effect%20Shopper%20Bag%204",
    sku: "DJV478",
  },
  {
    url: "https://placehold.co/800x800?text=Distressed-Effect%20Shopper%20Bag%205",
    sku: "DJV478",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Belt%20Bag%201",
    sku: "KPV946",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Belt%20Bag%202",
    sku: "KPV946",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Belt%20Bag%203",
    sku: "KPV946",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Belt%20Bag%204",
    sku: "KPV946",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Backpack%20With%20Multiple%20Pockets%201",
    sku: "DSH570",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Backpack%20With%20Multiple%20Pockets%202",
    sku: "DSH570",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Backpack%20With%20Multiple%20Pockets%203",
    sku: "DSH570",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Backpack%20With%20Multiple%20Pockets%204",
    sku: "DSH570",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Backpack%20With%20Multiple%20Pockets%205",
    sku: "DSH570",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Backpack%20With%20Multiple%20Pockets%206",
    sku: "DSH570",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Shopper%20Bag%201",
    sku: "UAU772",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Shopper%20Bag%202",
    sku: "UAU772",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Shopper%20Bag%203",
    sku: "UAU772",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Shopper%20Bag%204",
    sku: "UAU772",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Backpack%201",
    sku: "ZJR374",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Backpack%202",
    sku: "ZJR374",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Backpack%203",
    sku: "ZJR374",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Backpack%204",
    sku: "ZJR374",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Backpack%205",
    sku: "ZJR374",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Backpack%206",
    sku: "ZJR374",
  },
  {
    url: "https://placehold.co/800x800?text=Multi-Pocket%20Shopper%20Bag%201",
    sku: "MPS991",
  },
  {
    url: "https://placehold.co/800x800?text=Multi-Pocket%20Shopper%20Bag%202",
    sku: "MPS991",
  },
  {
    url: "https://placehold.co/800x800?text=Multi-Pocket%20Shopper%20Bag%203",
    sku: "MPS991",
  },
  {
    url: "https://placehold.co/800x800?text=Multi-Pocket%20Shopper%20Bag%204",
    sku: "MPS991",
  },
  {
    url: "https://placehold.co/800x800?text=Multi-Pocket%20Shopper%20Bag%205",
    sku: "MPS991",
  },
  {
    url: "https://placehold.co/800x800?text=Contrast%20Belt%20Bag%201",
    sku: "VPQ300",
  },
  {
    url: "https://placehold.co/800x800?text=Contrast%20Belt%20Bag%202",
    sku: "VPQ300",
  },
  {
    url: "https://placehold.co/800x800?text=Contrast%20Belt%20Bag%203",
    sku: "VPQ300",
  },
  {
    url: "https://placehold.co/800x800?text=Contrast%20Belt%20Bag%204",
    sku: "VPQ300",
  },
  {
    url: "https://placehold.co/800x800?text=Contrast%20Belt%20Bag%205",
    sku: "VPQ300",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Maxi%20Shopper%20Bag%201",
    sku: "ZQU392",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Maxi%20Shopper%20Bag%202",
    sku: "ZQU392",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Maxi%20Shopper%20Bag%203",
    sku: "ZQU392",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Maxi%20Shopper%20Bag%204",
    sku: "ZQU392",
  },
  {
    url: "https://placehold.co/800x800?text=Skater%20Trainers%201",
    sku: "YZV220",
  },
  {
    url: "https://placehold.co/800x800?text=Skater%20Trainers%202",
    sku: "YZV220",
  },
  {
    url: "https://placehold.co/800x800?text=Skater%20Trainers%203",
    sku: "YZV220",
  },
  {
    url: "https://placehold.co/800x800?text=Skater%20Trainers%204",
    sku: "YZV220",
  },
  {
    url: "https://placehold.co/800x800?text=Skater%20Trainers%205",
    sku: "YZV220",
  },
  {
    url: "https://placehold.co/800x800?text=Skater%20Trainers%206",
    sku: "YZV220",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Sandals%201",
    sku: "MEK248",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Sandals%202",
    sku: "MEK248",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Sandals%203",
    sku: "MEK248",
  },
  {
    url: "https://placehold.co/800x800?text=Rubberised%20Sandals%204",
    sku: "MEK248",
  },
  {
    url: "https://placehold.co/800x800?text=Buckled%20Leather%20Clogs%201",
    sku: "LDY300",
  },
  {
    url: "https://placehold.co/800x800?text=Buckled%20Leather%20Clogs%202",
    sku: "LDY300",
  },
  {
    url: "https://placehold.co/800x800?text=Buckled%20Leather%20Clogs%203",
    sku: "LDY300",
  },
  {
    url: "https://placehold.co/800x800?text=Buckled%20Leather%20Clogs%204",
    sku: "LDY300",
  },
  {
    url: "https://placehold.co/800x800?text=Buckled%20Leather%20Clogs%205",
    sku: "LDY300",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Force%201%20'07%20Easyon%201",
    sku: "UCZ143",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Force%201%20'07%20Easyon%202",
    sku: "UCZ143",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Force%201%20'07%20Easyon%203",
    sku: "UCZ143",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Force%201%20'07%20Easyon%204",
    sku: "UCZ143",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Force%201%20'07%20Easyon%205",
    sku: "UCZ143",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Force%201%20'07%20Easyon%206",
    sku: "UCZ143",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Force%201%20'07%20Easyon%207",
    sku: "UCZ143",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Low%201",
    sku: "ONW497",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Low%202",
    sku: "ONW497",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Low%203",
    sku: "ONW497",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Low%204",
    sku: "ONW497",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Low%205",
    sku: "ONW497",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Low%206",
    sku: "ONW497",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Low%207",
    sku: "ONW497",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Mid%201",
    sku: "UAG170",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Mid%202",
    sku: "UAG170",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Mid%203",
    sku: "UAG170",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Mid%204",
    sku: "UAG170",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Mid%205",
    sku: "UAG170",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Mid%206",
    sku: "UAG170",
  },
  {
    url: "https://placehold.co/800x800?text=Air%20Jordan%201%20Mid%207",
    sku: "UAG170",
  },
  {
    url: "https://placehold.co/800x800?text=Strappy%20Heeled%20Sandals%201",
    sku: "CMI019",
  },
  {
    url: "https://placehold.co/800x800?text=Strappy%20Heeled%20Sandals%202",
    sku: "CMI019",
  },
  {
    url: "https://placehold.co/800x800?text=Strappy%20Heeled%20Sandals%203",
    sku: "CMI019",
  },
  {
    url: "https://placehold.co/800x800?text=Strappy%20Heeled%20Sandals%204",
    sku: "CMI019",
  },
  {
    url: "https://placehold.co/800x800?text=Strappy%20Heeled%20Sandals%205",
    sku: "CMI019",
  },
  {
    url: "https://placehold.co/800x800?text=YEEZY%20Earth%20Brown%20Slides%201",
    sku: "IID182",
  },
  {
    url: "https://placehold.co/800x800?text=YEEZY%20Earth%20Brown%20Slides%202",
    sku: "IID182",
  },
  {
    url: "https://placehold.co/800x800?text=YEEZY%20Earth%20Brown%20Slides%203",
    sku: "IID182",
  },
  {
    url: "https://placehold.co/800x800?text=YEEZY%20Earth%20Brown%20Slides%204",
    sku: "IID182",
  },
  {
    url: "https://placehold.co/800x800?text=Jumpman%20MVP%201",
    sku: "WWH603",
  },
  {
    url: "https://placehold.co/800x800?text=Jumpman%20MVP%202",
    sku: "WWH603",
  },
  {
    url: "https://placehold.co/800x800?text=Jumpman%20MVP%203",
    sku: "WWH603",
  },
  {
    url: "https://placehold.co/800x800?text=Jumpman%20MVP%204",
    sku: "WWH603",
  },
  {
    url: "https://placehold.co/800x800?text=Jumpman%20MVP%205",
    sku: "WWH603",
  },
  {
    url: "https://placehold.co/800x800?text=Jumpman%20MVP%206",
    sku: "WWH603",
  },
  {
    url: "https://placehold.co/800x800?text=Jumpman%20MVP%207",
    sku: "WWH603",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20White%20Shirt%201",
    sku: "PUC770",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20White%20Shirt%202",
    sku: "PUC770",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20White%20Shirt%203",
    sku: "PUC770",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20White%20Shirt%204",
    sku: "PUC770",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20White%20Shirt%205",
    sku: "PUC770",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20White%20Shirt%206",
    sku: "PUC770",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20White%20Shirt%207",
    sku: "PUC770",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Shirt%201",
    sku: "AYM542",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Shirt%202",
    sku: "AYM542",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Shirt%203",
    sku: "AYM542",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Shirt%204",
    sku: "AYM542",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Shirt%205",
    sku: "AYM542",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Shirt%206",
    sku: "AYM542",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Shirt%207",
    sku: "AYM542",
  },
  {
    url: "https://placehold.co/800x800?text=Everyday%20Cotton%20Shirt%201",
    sku: "XUB966",
  },
  {
    url: "https://placehold.co/800x800?text=Everyday%20Cotton%20Shirt%202",
    sku: "XUB966",
  },
  {
    url: "https://placehold.co/800x800?text=Everyday%20Cotton%20Shirt%203",
    sku: "XUB966",
  },
  {
    url: "https://placehold.co/800x800?text=Everyday%20Cotton%20Shirt%204",
    sku: "XUB966",
  },
  {
    url: "https://placehold.co/800x800?text=Everyday%20Cotton%20Shirt%205",
    sku: "XUB966",
  },
  {
    url: "https://placehold.co/800x800?text=Everyday%20Cotton%20Shirt%206",
    sku: "XUB966",
  },
  {
    url: "https://placehold.co/800x800?text=Everyday%20Cotton%20Shirt%207",
    sku: "XUB966",
  },
  {
    url: "https://placehold.co/800x800?text=Entrada%2022%20Shorts%201",
    sku: "UGT926",
  },
  {
    url: "https://placehold.co/800x800?text=Entrada%2022%20Shorts%202",
    sku: "UGT926",
  },
  {
    url: "https://placehold.co/800x800?text=Entrada%2022%20Shorts%203",
    sku: "UGT926",
  },
  {
    url: "https://placehold.co/800x800?text=Entrada%2022%20Shorts%204",
    sku: "UGT926",
  },
  {
    url: "https://placehold.co/800x800?text=Entrada%2022%20Shorts%205",
    sku: "UGT926",
  },
  {
    url: "https://placehold.co/800x800?text=Club%20Tennis%20Short%201",
    sku: "XBN836",
  },
  {
    url: "https://placehold.co/800x800?text=Club%20Tennis%20Short%202",
    sku: "XBN836",
  },
  {
    url: "https://placehold.co/800x800?text=Club%20Tennis%20Short%203",
    sku: "XBN836",
  },
  {
    url: "https://placehold.co/800x800?text=Club%20Tennis%20Short%204",
    sku: "XBN836",
  },
  {
    url: "https://placehold.co/800x800?text=Club%20Tennis%20Short%205",
    sku: "XBN836",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cargo%20Shorts%201",
    sku: "CSA749",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cargo%20Shorts%202",
    sku: "CSA749",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cargo%20Shorts%203",
    sku: "CSA749",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cargo%20Shorts%204",
    sku: "CSA749",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cargo%20Shorts%205",
    sku: "CSA749",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cargo%20Shorts%206",
    sku: "CSA749",
  },
  {
    url: "https://placehold.co/800x800?text=Crew%20Sweatshirt%201",
    sku: "NIV620",
  },
  {
    url: "https://placehold.co/800x800?text=Crew%20Sweatshirt%202",
    sku: "NIV620",
  },
  {
    url: "https://placehold.co/800x800?text=Crew%20Sweatshirt%203",
    sku: "NIV620",
  },
  {
    url: "https://placehold.co/800x800?text=Crew%20Sweatshirt%204",
    sku: "NIV620",
  },
  {
    url: "https://placehold.co/800x800?text=Crew%20Sweatshirt%205",
    sku: "NIV620",
  },
  {
    url: "https://placehold.co/800x800?text=Crew%20Sweatshirt%206",
    sku: "NIV620",
  },
  {
    url: "https://placehold.co/800x800?text=Warm-Up%20Track%20Top%201",
    sku: "NOE925",
  },
  {
    url: "https://placehold.co/800x800?text=Warm-Up%20Track%20Top%202",
    sku: "NOE925",
  },
  {
    url: "https://placehold.co/800x800?text=Warm-Up%20Track%20Top%203",
    sku: "NOE925",
  },
  {
    url: "https://placehold.co/800x800?text=Warm-Up%20Track%20Top%204",
    sku: "NOE925",
  },
  {
    url: "https://placehold.co/800x800?text=Warm-Up%20Track%20Top%205",
    sku: "NOE925",
  },
  {
    url: "https://placehold.co/800x800?text=Neuclassics%20Hoodie%201",
    sku: "DET264",
  },
  {
    url: "https://placehold.co/800x800?text=Neuclassics%20Hoodie%202",
    sku: "DET264",
  },
  {
    url: "https://placehold.co/800x800?text=Neuclassics%20Hoodie%203",
    sku: "DET264",
  },
  {
    url: "https://placehold.co/800x800?text=Neuclassics%20Hoodie%204",
    sku: "DET264",
  },
  {
    url: "https://placehold.co/800x800?text=Neuclassics%20Hoodie%205",
    sku: "DET264",
  },
  {
    url: "https://placehold.co/800x800?text=Neuclassics%20Hoodie%206",
    sku: "DET264",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Jordan%204%20Retro%201",
    sku: "XXP481",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Jordan%204%20Retro%202",
    sku: "XXP481",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Jordan%204%20Retro%203",
    sku: "XXP481",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Jordan%204%20Retro%204",
    sku: "XXP481",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Jordan%204%20Retro%205",
    sku: "XXP481",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Air%20Jordan%204%20Retro%206",
    sku: "XXP481",
  },
  {
    url: "https://placehold.co/800x800?text=Loose%20Open-Hem%20Pants%201",
    sku: "WSK512",
  },
  {
    url: "https://placehold.co/800x800?text=Loose%20Open-Hem%20Pants%202",
    sku: "WSK512",
  },
  {
    url: "https://placehold.co/800x800?text=Loose%20Open-Hem%20Pants%203",
    sku: "WSK512",
  },
  {
    url: "https://placehold.co/800x800?text=Loose%20Open-Hem%20Pants%204",
    sku: "WSK512",
  },
  {
    url: "https://placehold.co/800x800?text=Loose%20Open-Hem%20Pants%205",
    sku: "WSK512",
  },
  {
    url: "https://placehold.co/800x800?text=Therma-Fit%20Jacket%201",
    sku: "DYZ793",
  },
  {
    url: "https://placehold.co/800x800?text=Therma-Fit%20Jacket%202",
    sku: "DYZ793",
  },
  {
    url: "https://placehold.co/800x800?text=Therma-Fit%20Jacket%203",
    sku: "DYZ793",
  },
  {
    url: "https://placehold.co/800x800?text=Therma-Fit%20Jacket%204",
    sku: "DYZ793",
  },
  {
    url: "https://placehold.co/800x800?text=Therma-Fit%20Jacket%205",
    sku: "DYZ793",
  },
  {
    url: "https://placehold.co/800x800?text=Therma-Fit%20Jacket%206",
    sku: "DYZ793",
  },
  {
    url: "https://placehold.co/800x800?text=Therma-Fit%20Jacket%207",
    sku: "DYZ793",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Flow%20Short%201",
    sku: "LYP754",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Flow%20Short%202",
    sku: "LYP754",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Flow%20Short%203",
    sku: "LYP754",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Flow%20Short%204",
    sku: "LYP754",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Flow%20Short%205",
    sku: "LYP754",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Flow%20Short%206",
    sku: "LYP754",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Hoodie%201",
    sku: "INX880",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Hoodie%202",
    sku: "INX880",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Hoodie%203",
    sku: "INX880",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Hoodie%204",
    sku: "INX880",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Cotton%20Shirt%201",
    sku: "PAP943",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Cotton%20Shirt%202",
    sku: "PAP943",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Cotton%20Shirt%203",
    sku: "PAP943",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Cotton%20Shirt%204",
    sku: "PAP943",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Cotton%20Shirt%205",
    sku: "PAP943",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Cotton%20Shirt%206",
    sku: "PAP943",
  },
  {
    url: "https://placehold.co/800x800?text=Dark%20Grey%20Cotton%20Shirt%201",
    sku: "LOB845",
  },
  {
    url: "https://placehold.co/800x800?text=Dark%20Grey%20Cotton%20Shirt%202",
    sku: "LOB845",
  },
  {
    url: "https://placehold.co/800x800?text=Dark%20Grey%20Cotton%20Shirt%203",
    sku: "LOB845",
  },
  {
    url: "https://placehold.co/800x800?text=Dark%20Grey%20Cotton%20Shirt%204",
    sku: "LOB845",
  },
  {
    url: "https://placehold.co/800x800?text=Dark%20Grey%20Cotton%20Shirt%205",
    sku: "LOB845",
  },
  {
    url: "https://placehold.co/800x800?text=Dark%20Grey%20Cotton%20Shirt%206",
    sku: "LOB845",
  },
  {
    url: "https://placehold.co/800x800?text=Dark%20Grey%20Cotton%20Shirt%207",
    sku: "LOB845",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Cotton%20Shirt%201",
    sku: "AMD578",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Cotton%20Shirt%202",
    sku: "AMD578",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Cotton%20Shirt%203",
    sku: "AMD578",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Cotton%20Shirt%204",
    sku: "AMD578",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Cotton%20Shirt%205",
    sku: "AMD578",
  },
  {
    url: "https://placehold.co/800x800?text=Blue%20Cotton%20Shirt%206",
    sku: "AMD578",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Workout%20Ready%20Shorts%209%201",
    sku: "YJT392",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Workout%20Ready%20Shorts%209%202",
    sku: "YJT392",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Workout%20Ready%20Shorts%209%203",
    sku: "YJT392",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Workout%20Ready%20Shorts%209%204",
    sku: "YJT392",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Workout%20Ready%20Shorts%209%205",
    sku: "YJT392",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Workout%20Ready%20Shorts%209%206",
    sku: "YJT392",
  },
  {
    url: "https://placehold.co/800x800?text=Women's%20Speed%20Shorts%203%201",
    sku: "DFL313",
  },
  {
    url: "https://placehold.co/800x800?text=Women's%20Speed%20Shorts%203%202",
    sku: "DFL313",
  },
  {
    url: "https://placehold.co/800x800?text=Women's%20Speed%20Shorts%203%203",
    sku: "DFL313",
  },
  {
    url: "https://placehold.co/800x800?text=Women's%20Speed%20Shorts%203%204",
    sku: "DFL313",
  },
  {
    url: "https://placehold.co/800x800?text=Women's%20Speed%20Shorts%203%205",
    sku: "DFL313",
  },
  {
    url: "https://placehold.co/800x800?text=Workout%20Ready%20Shorts%201",
    sku: "LOG182",
  },
  {
    url: "https://placehold.co/800x800?text=Workout%20Ready%20Shorts%202",
    sku: "LOG182",
  },
  {
    url: "https://placehold.co/800x800?text=Workout%20Ready%20Shorts%203",
    sku: "LOG182",
  },
  {
    url: "https://placehold.co/800x800?text=Workout%20Ready%20Shorts%204",
    sku: "LOG182",
  },
  {
    url: "https://placehold.co/800x800?text=Workout%20Ready%20Shorts%205",
    sku: "LOG182",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Satin%20Track%20Pants%201",
    sku: "KVL801",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Satin%20Track%20Pants%202",
    sku: "KVL801",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Satin%20Track%20Pants%203",
    sku: "KVL801",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Satin%20Track%20Pants%204",
    sku: "KVL801",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Satin%20Track%20Pants%205",
    sku: "KVL801",
  },
  {
    url: "https://placehold.co/800x800?text=Nylon%20Satin%20Track%20Pants%206",
    sku: "KVL801",
  },
  {
    url: "https://placehold.co/800x800?text=Pullover%20Hoodie%201",
    sku: "REL198",
  },
  {
    url: "https://placehold.co/800x800?text=Pullover%20Hoodie%202",
    sku: "REL198",
  },
  {
    url: "https://placehold.co/800x800?text=Pullover%20Hoodie%203",
    sku: "REL198",
  },
  {
    url: "https://placehold.co/800x800?text=Pullover%20Hoodie%204",
    sku: "REL198",
  },
  {
    url: "https://placehold.co/800x800?text=Pullover%20Hoodie%205",
    sku: "REL198",
  },
  {
    url: "https://placehold.co/800x800?text=Campbell%20Backpack%201",
    sku: "RCW458",
  },
  {
    url: "https://placehold.co/800x800?text=Campbell%20Backpack%202",
    sku: "RCW458",
  },
  {
    url: "https://placehold.co/800x800?text=Stitched%20Logo%20Jacket%201",
    sku: "NPO157",
  },
  {
    url: "https://placehold.co/800x800?text=Stitched%20Logo%20Jacket%202",
    sku: "NPO157",
  },
  {
    url: "https://placehold.co/800x800?text=Stitched%20Logo%20Jacket%203",
    sku: "NPO157",
  },
  {
    url: "https://placehold.co/800x800?text=Stitched%20Logo%20Jacket%204",
    sku: "NPO157",
  },
  {
    url: "https://placehold.co/800x800?text=Stitched%20Logo%20Jacket%205",
    sku: "NPO157",
  },
  {
    url: "https://placehold.co/800x800?text=Stitched%20Logo%20Jacket%206",
    sku: "NPO157",
  },
  {
    url: "https://placehold.co/800x800?text=Stitched%20Logo%20Jacket%207",
    sku: "NPO157",
  },
  {
    url: "https://placehold.co/800x800?text=Cityride%20Running%20Shoes%201",
    sku: "VGU956",
  },
  {
    url: "https://placehold.co/800x800?text=Cityride%20Running%20Shoes%202",
    sku: "VGU956",
  },
  {
    url: "https://placehold.co/800x800?text=Cityride%20Running%20Shoes%203",
    sku: "VGU956",
  },
  {
    url: "https://placehold.co/800x800?text=Cityride%20Running%20Shoes%204",
    sku: "VGU956",
  },
  {
    url: "https://placehold.co/800x800?text=Cityride%20Running%20Shoes%205",
    sku: "VGU956",
  },
  {
    url: "https://placehold.co/800x800?text=Pique%20Polo%20Shirt%201",
    sku: "VUZ897",
  },
  {
    url: "https://placehold.co/800x800?text=Pique%20Polo%20Shirt%202",
    sku: "VUZ897",
  },
  {
    url: "https://placehold.co/800x800?text=Pique%20Polo%20Shirt%203",
    sku: "VUZ897",
  },
  {
    url: "https://placehold.co/800x800?text=Pique%20Polo%20Shirt%204",
    sku: "VUZ897",
  },
  {
    url: "https://placehold.co/800x800?text=Pique%20Polo%20Shirt%205",
    sku: "VUZ897",
  },
  {
    url: "https://placehold.co/800x800?text=Pique%20Polo%20Shirt%206",
    sku: "VUZ897",
  },
  {
    url: "https://placehold.co/800x800?text=Pique%20Polo%20Shirt%207",
    sku: "VUZ897",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Red%20Shirt%201",
    sku: "EPA126",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Red%20Shirt%202",
    sku: "EPA126",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Red%20Shirt%203",
    sku: "EPA126",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Red%20Shirt%204",
    sku: "EPA126",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Red%20Shirt%205",
    sku: "EPA126",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Short%201",
    sku: "RJC719",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Short%202",
    sku: "RJC719",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Short%203",
    sku: "RJC719",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Short%204",
    sku: "RJC719",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Short%205",
    sku: "RJC719",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Cotton%20Short%206",
    sku: "RJC719",
  },
  {
    url: "https://placehold.co/800x800?text=Crewneck%20Sweatshirt%201",
    sku: "UZL471",
  },
  {
    url: "https://placehold.co/800x800?text=Crewneck%20Sweatshirt%202",
    sku: "UZL471",
  },
  {
    url: "https://placehold.co/800x800?text=Crewneck%20Sweatshirt%203",
    sku: "UZL471",
  },
  {
    url: "https://placehold.co/800x800?text=Crewneck%20Sweatshirt%204",
    sku: "UZL471",
  },
  {
    url: "https://placehold.co/800x800?text=Debut%20Sculpture%20T-Shirt%201",
    sku: "SMM238",
  },
  {
    url: "https://placehold.co/800x800?text=Debut%20Sculpture%20T-Shirt%202",
    sku: "SMM238",
  },
  {
    url: "https://placehold.co/800x800?text=Debut%20Sculpture%20T-Shirt%203",
    sku: "SMM238",
  },
  {
    url: "https://placehold.co/800x800?text=Debut%20Sculpture%20T-Shirt%204",
    sku: "SMM238",
  },
  {
    url: "https://placehold.co/800x800?text=Debut%20Sculpture%20T-Shirt%205",
    sku: "SMM238",
  },
  {
    url: "https://placehold.co/800x800?text=Debut%20Sculpture%20T-Shirt%206",
    sku: "SMM238",
  },
  {
    url: "https://placehold.co/800x800?text=Flower%20Cropped%20T-Shirt%201",
    sku: "GXG888",
  },
  {
    url: "https://placehold.co/800x800?text=Flower%20Cropped%20T-Shirt%202",
    sku: "GXG888",
  },
  {
    url: "https://placehold.co/800x800?text=Flower%20Cropped%20T-Shirt%203",
    sku: "GXG888",
  },
  {
    url: "https://placehold.co/800x800?text=Flower%20Cropped%20T-Shirt%204",
    sku: "GXG888",
  },
  {
    url: "https://placehold.co/800x800?text=Flower%20Cropped%20T-Shirt%205",
    sku: "GXG888",
  },
  {
    url: "https://placehold.co/800x800?text=Flower%20Cropped%20T-Shirt%206",
    sku: "GXG888",
  },
  {
    url: "https://placehold.co/800x800?text=Flower%20Cropped%20T-Shirt%207",
    sku: "GXG888",
  },
  {
    url: "https://placehold.co/800x800?text=Shoe%20Schematics%20T-Shirt%201",
    sku: "BDL024",
  },
  {
    url: "https://placehold.co/800x800?text=Shoe%20Schematics%20T-Shirt%202",
    sku: "BDL024",
  },
  {
    url: "https://placehold.co/800x800?text=Shoe%20Schematics%20T-Shirt%203",
    sku: "BDL024",
  },
  {
    url: "https://placehold.co/800x800?text=Shoe%20Schematics%20T-Shirt%204",
    sku: "BDL024",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Crest%20Shirt%201",
    sku: "TNI009",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Crest%20Shirt%202",
    sku: "TNI009",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Crest%20Shirt%203",
    sku: "TNI009",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Crest%20Shirt%204",
    sku: "TNI009",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Photoreal%20T-Shirt%201",
    sku: "OET636",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Photoreal%20T-Shirt%202",
    sku: "OET636",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Photoreal%20T-Shirt%203",
    sku: "OET636",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Logo%20T-Shirt%201",
    sku: "IJF838",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Logo%20T-Shirt%202",
    sku: "IJF838",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Logo%20T-Shirt%203",
    sku: "IJF838",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Logo%20T-Shirt%204",
    sku: "IJF838",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Logo%20T-Shirt%205",
    sku: "IJF838",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Logo%20T-Shirt%206",
    sku: "IJF838",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Vintage%20T-Shirt%201",
    sku: "IRB189",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Vintage%20T-Shirt%202",
    sku: "IRB189",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Vintage%20T-Shirt%203",
    sku: "IRB189",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Vintage%20T-Shirt%204",
    sku: "IRB189",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Vintage%20T-Shirt%205",
    sku: "IRB189",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Vintage%20T-Shirt%206",
    sku: "IRB189",
  },
  {
    url: "https://placehold.co/800x800?text=Two%20Swords%20T-Shirt%201",
    sku: "OXH904",
  },
  {
    url: "https://placehold.co/800x800?text=Two%20Swords%20T-Shirt%202",
    sku: "OXH904",
  },
  {
    url: "https://placehold.co/800x800?text=Two%20Swords%20T-Shirt%203",
    sku: "OXH904",
  },
  {
    url: "https://placehold.co/800x800?text=Two%20Swords%20T-Shirt%204",
    sku: "OXH904",
  },
  {
    url: "https://placehold.co/800x800?text=Two%20Swords%20T-Shirt%205",
    sku: "OXH904",
  },
  {
    url: "https://placehold.co/800x800?text=Two%20Swords%20T-Shirt%206",
    sku: "OXH904",
  },
  {
    url: "https://placehold.co/800x800?text=Two%20Swords%20T-Shirt%207",
    sku: "OXH904",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Jean%20Pant%201",
    sku: "EZZ343",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Jean%20Pant%202",
    sku: "EZZ343",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Jean%20Pant%203",
    sku: "EZZ343",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Jean%20Pant%204",
    sku: "EZZ343",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Jean%20Pant%205",
    sku: "EZZ343",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Jean%20Pant%206",
    sku: "EZZ343",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Basketball%20Shoes%201",
    sku: "HTM682",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Basketball%20Shoes%202",
    sku: "HTM682",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Basketball%20Shoes%203",
    sku: "HTM682",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Basketball%20Shoes%204",
    sku: "HTM682",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Basketball%20Shoes%205",
    sku: "HTM682",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Basketball%20Shoes%206",
    sku: "HTM682",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Slides%201",
    sku: "DZH339",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Slides%202",
    sku: "DZH339",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Slides%203",
    sku: "DZH339",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Slides%204",
    sku: "DZH339",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Slides%205",
    sku: "DZH339",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Slides%206",
    sku: "DZH339",
  },
  {
    url: "https://placehold.co/800x800?text=Relaxed%20Heavy%20Tee%201",
    sku: "QTN947",
  },
  {
    url: "https://placehold.co/800x800?text=Relaxed%20Heavy%20Tee%202",
    sku: "QTN947",
  },
  {
    url: "https://placehold.co/800x800?text=Relaxed%20Heavy%20Tee%203",
    sku: "QTN947",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Purple%20Short%201",
    sku: "MHB378",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Purple%20Short%202",
    sku: "MHB378",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Purple%20Short%203",
    sku: "MHB378",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Purple%20Short%204",
    sku: "MHB378",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Purple%20Short%205",
    sku: "MHB378",
  },
  {
    url: "https://placehold.co/800x800?text=Ribbed%20Flared%20Short%20Dress%201",
    sku: "YEJ246",
  },
  {
    url: "https://placehold.co/800x800?text=Ribbed%20Flared%20Short%20Dress%202",
    sku: "YEJ246",
  },
  {
    url: "https://placehold.co/800x800?text=Ribbed%20Flared%20Short%20Dress%203",
    sku: "YEJ246",
  },
  {
    url: "https://placehold.co/800x800?text=Ribbed%20Flared%20Short%20Dress%204",
    sku: "YEJ246",
  },
  {
    url: "https://placehold.co/800x800?text=Ribbed%20Flared%20Short%20Dress%205",
    sku: "YEJ246",
  },
  {
    url: "https://placehold.co/800x800?text=Grip%20Bag%201",
    sku: "FBE904",
  },
  {
    url: "https://placehold.co/800x800?text=Grip%20Bag%202",
    sku: "FBE904",
  },
  {
    url: "https://placehold.co/800x800?text=Grip%20Bag%203",
    sku: "FBE904",
  },
  {
    url: "https://placehold.co/800x800?text=Grip%20Bag%204",
    sku: "FBE904",
  },
  {
    url: "https://placehold.co/800x800?text=Grip%20Bag%205",
    sku: "FBE904",
  },
  {
    url: "https://placehold.co/800x800?text=Grip%20Bag%206",
    sku: "FBE904",
  },
  {
    url: "https://placehold.co/800x800?text=Baseball%20Cap%201",
    sku: "JUN403",
  },
  {
    url: "https://placehold.co/800x800?text=Baseball%20Cap%202",
    sku: "JUN403",
  },
  {
    url: "https://placehold.co/800x800?text=Baseball%20Cap%203",
    sku: "JUN403",
  },
  {
    url: "https://placehold.co/800x800?text=Soccer%20Hoodie%201",
    sku: "HME844",
  },
  {
    url: "https://placehold.co/800x800?text=Soccer%20Hoodie%202",
    sku: "HME844",
  },
  {
    url: "https://placehold.co/800x800?text=Dream%20Men's%20Sweatpants%201",
    sku: "SVY512",
  },
  {
    url: "https://placehold.co/800x800?text=Dream%20Men's%20Sweatpants%202",
    sku: "SVY512",
  },
  {
    url: "https://placehold.co/800x800?text=Mini%20Grip%20Bag%201",
    sku: "TQJ001",
  },
  {
    url: "https://placehold.co/800x800?text=Mini%20Grip%20Bag%202",
    sku: "TQJ001",
  },
  {
    url: "https://placehold.co/800x800?text=Mini%20Grip%20Bag%203",
    sku: "TQJ001",
  },
  {
    url: "https://placehold.co/800x800?text=Mini%20Grip%20Bag%204",
    sku: "TQJ001",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Explore%20Camp%20Sandals%201",
    sku: "EZB586",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Explore%20Camp%20Sandals%202",
    sku: "EZB586",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Explore%20Camp%20Sandals%203",
    sku: "EZB586",
  },
  {
    url: "https://placehold.co/800x800?text=Borealis%20Backpack%201",
    sku: "SWZ798",
  },
  {
    url: "https://placehold.co/800x800?text=Borealis%20Backpack%202",
    sku: "SWZ798",
  },
  {
    url: "https://placehold.co/800x800?text=Borealis%20Backpack%203",
    sku: "SWZ798",
  },
  {
    url: "https://placehold.co/800x800?text=Borealis%20Backpack%204",
    sku: "SWZ798",
  },
  {
    url: "https://placehold.co/800x800?text=Borealis%20Backpack%205",
    sku: "SWZ798",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Wander%20Joggers%201",
    sku: "WEL465",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Wander%20Joggers%202",
    sku: "WEL465",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Wander%20Joggers%203",
    sku: "WEL465",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Wander%20Joggers%204",
    sku: "WEL465",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Wander%20Joggers%205",
    sku: "WEL465",
  },
  {
    url: "https://placehold.co/800x800?text=Women%E2%80%99s%20Evolution%20Pants%201",
    sku: "KUR578",
  },
  {
    url: "https://placehold.co/800x800?text=Women%E2%80%99s%20Evolution%20Pants%202",
    sku: "KUR578",
  },
  {
    url: "https://placehold.co/800x800?text=Women%E2%80%99s%20Evolution%20Pants%203",
    sku: "KUR578",
  },
  {
    url: "https://placehold.co/800x800?text=Women%E2%80%99s%20Evolution%20Pants%204",
    sku: "KUR578",
  },
  {
    url: "https://placehold.co/800x800?text=Women%E2%80%99s%20Evolution%20Pants%205",
    sku: "KUR578",
  },
  {
    url: "https://placehold.co/800x800?text=Paramount%20Convertible%20Pants%201",
    sku: "JRJ247",
  },
  {
    url: "https://placehold.co/800x800?text=Paramount%20Convertible%20Pants%202",
    sku: "JRJ247",
  },
  {
    url: "https://placehold.co/800x800?text=Paramount%20Convertible%20Pants%203",
    sku: "JRJ247",
  },
  {
    url: "https://placehold.co/800x800?text=Isabella%20Sling%201",
    sku: "YDA670",
  },
  {
    url: "https://placehold.co/800x800?text=Isabella%20Sling%202",
    sku: "YDA670",
  },
  {
    url: "https://placehold.co/800x800?text=Isabella%20Sling%203",
    sku: "YDA670",
  },
  {
    url: "https://placehold.co/800x800?text=Isabella%20Sling%204",
    sku: "YDA670",
  },
  {
    url: "https://placehold.co/800x800?text=Isabella%20Sling%205",
    sku: "YDA670",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Cotton%20Short%201",
    sku: "YGL349",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Cotton%20Short%202",
    sku: "YGL349",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Cotton%20Short%203",
    sku: "YGL349",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Cotton%20Short%204",
    sku: "YGL349",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Cotton%20Short%205",
    sku: "YGL349",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Cotton%20Short%206",
    sku: "YGL349",
  },
  {
    url: "https://placehold.co/800x800?text=Class%20V%20Shorts%201",
    sku: "JFQ387",
  },
  {
    url: "https://placehold.co/800x800?text=Class%20V%20Shorts%202",
    sku: "JFQ387",
  },
  {
    url: "https://placehold.co/800x800?text=Class%20V%20Shorts%203",
    sku: "JFQ387",
  },
  {
    url: "https://placehold.co/800x800?text=Class%20V%20Shorts%204",
    sku: "JFQ387",
  },
  {
    url: "https://placehold.co/800x800?text=Class%20V%20Shorts%205",
    sku: "JFQ387",
  },
  {
    url: "https://placehold.co/800x800?text=Class%20V%20Shorts%206",
    sku: "JFQ387",
  },
  {
    url: "https://placehold.co/800x800?text=Class%20V%20Shorts%207",
    sku: "JFQ387",
  },
  {
    url: "https://placehold.co/800x800?text=Oversize%20Trench%20Coat%20With%20Wide%20Sleeves%201",
    sku: "GRM882",
  },
  {
    url: "https://placehold.co/800x800?text=Oversize%20Trench%20Coat%20With%20Wide%20Sleeves%202",
    sku: "GRM882",
  },
  {
    url: "https://placehold.co/800x800?text=Oversize%20Trench%20Coat%20With%20Wide%20Sleeves%203",
    sku: "GRM882",
  },
  {
    url: "https://placehold.co/800x800?text=Oversize%20Trench%20Coat%20With%20Wide%20Sleeves%204",
    sku: "GRM882",
  },
  {
    url: "https://placehold.co/800x800?text=Oversize%20Trench%20Coat%20With%20Wide%20Sleeves%205",
    sku: "GRM882",
  },
  {
    url: "https://placehold.co/800x800?text=Oversize%20Trench%20Coat%20With%20Wide%20Sleeves%206",
    sku: "GRM882",
  },
  {
    url: "https://placehold.co/800x800?text=Reebok%20X%20HYMNE%20Jacket%201",
    sku: "ZDN024",
  },
  {
    url: "https://placehold.co/800x800?text=Reebok%20X%20HYMNE%20Jacket%202",
    sku: "ZDN024",
  },
  {
    url: "https://placehold.co/800x800?text=Reebok%20X%20HYMNE%20Jacket%203",
    sku: "ZDN024",
  },
  {
    url: "https://placehold.co/800x800?text=Reebok%20X%20HYMNE%20Jacket%204",
    sku: "ZDN024",
  },
  {
    url: "https://placehold.co/800x800?text=Reebok%20X%20HYMNE%20Jacket%205",
    sku: "ZDN024",
  },
  {
    url: "https://placehold.co/800x800?text=Reebok%20X%20HYMNE%20Jacket%206",
    sku: "ZDN024",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Coaches%20Jacket%201",
    sku: "WFK455",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Coaches%20Jacket%202",
    sku: "WFK455",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Coaches%20Jacket%203",
    sku: "WFK455",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Coaches%20Jacket%204",
    sku: "WFK455",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Coaches%20Jacket%205",
    sku: "WFK455",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Coaches%20Jacket%206",
    sku: "WFK455",
  },
  {
    url: "https://placehold.co/800x800?text=Woven%20Full%20Zip%20Jacket%201",
    sku: "MVE575",
  },
  {
    url: "https://placehold.co/800x800?text=Woven%20Full%20Zip%20Jacket%202",
    sku: "MVE575",
  },
  {
    url: "https://placehold.co/800x800?text=Woven%20Full%20Zip%20Jacket%203",
    sku: "MVE575",
  },
  {
    url: "https://placehold.co/800x800?text=Woven%20Full%20Zip%20Jacket%204",
    sku: "MVE575",
  },
  {
    url: "https://placehold.co/800x800?text=Woven%20Full%20Zip%20Jacket%205",
    sku: "MVE575",
  },
  {
    url: "https://placehold.co/800x800?text=Woven%20Full%20Zip%20Jacket%206",
    sku: "MVE575",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Relaxed%20Track%20Jeans%201",
    sku: "IZS634",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Relaxed%20Track%20Jeans%202",
    sku: "IZS634",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Relaxed%20Track%20Jeans%203",
    sku: "IZS634",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Relaxed%20Track%20Jeans%204",
    sku: "IZS634",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Relaxed%20Track%20Jeans%205",
    sku: "IZS634",
  },
  {
    url: "https://placehold.co/800x800?text=Men's%20Relaxed%20Track%20Jeans%206",
    sku: "IZS634",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Loose-Fit%20Jeans%201",
    sku: "WNG857",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Loose-Fit%20Jeans%202",
    sku: "WNG857",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Loose-Fit%20Jeans%203",
    sku: "WNG857",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Loose-Fit%20Jeans%204",
    sku: "WNG857",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Loose-Fit%20Jeans%205",
    sku: "WNG857",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Loose-Fit%20Jeans%206",
    sku: "WNG857",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Blue%20Loose-Fit%20Jeans%201",
    sku: "YZA823",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Blue%20Loose-Fit%20Jeans%202",
    sku: "YZA823",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Blue%20Loose-Fit%20Jeans%203",
    sku: "YZA823",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Blue%20Loose-Fit%20Jeans%204",
    sku: "YZA823",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Blue%20Loose-Fit%20Jeans%205",
    sku: "YZA823",
  },
  {
    url: "https://placehold.co/800x800?text=Navy%20Blue%20Loose-Fit%20Jeans%206",
    sku: "YZA823",
  },
  {
    url: "https://placehold.co/800x800?text=Sunriser%20Run%20Belt%201",
    sku: "VQZ326",
  },
  {
    url: "https://placehold.co/800x800?text=Sunriser%20Run%20Belt%202",
    sku: "VQZ326",
  },
  {
    url: "https://placehold.co/800x800?text=Sunriser%20Run%20Belt%203",
    sku: "VQZ326",
  },
  {
    url: "https://placehold.co/800x800?text=Glenclyffe%20Urban%20Boots%201",
    sku: "XBU713",
  },
  {
    url: "https://placehold.co/800x800?text=Glenclyffe%20Urban%20Boots%202",
    sku: "XBU713",
  },
  {
    url: "https://placehold.co/800x800?text=Glenclyffe%20Urban%20Boots%203",
    sku: "XBU713",
  },
  {
    url: "https://placehold.co/800x800?text=Glenclyffe%20Urban%20Boots%204",
    sku: "XBU713",
  },
  {
    url: "https://placehold.co/800x800?text=Earth%20Brown%20Jacket%201",
    sku: "ZIA736",
  },
  {
    url: "https://placehold.co/800x800?text=Earth%20Brown%20Jacket%202",
    sku: "ZIA736",
  },
  {
    url: "https://placehold.co/800x800?text=Earth%20Brown%20Jacket%203",
    sku: "ZIA736",
  },
  {
    url: "https://placehold.co/800x800?text=Earth%20Brown%20Jacket%204",
    sku: "ZIA736",
  },
  {
    url: "https://placehold.co/800x800?text=Earth%20Brown%20Jacket%205",
    sku: "ZIA736",
  },
  {
    url: "https://placehold.co/800x800?text=Earth%20Brown%20Jacket%206",
    sku: "ZIA736",
  },
  {
    url: "https://placehold.co/800x800?text=Earth%20Brown%20Jacket%207",
    sku: "ZIA736",
  },
  {
    url: "https://placehold.co/800x800?text=Rain.rdy%20Jacket%201",
    sku: "ZQQ718",
  },
  {
    url: "https://placehold.co/800x800?text=Rain.rdy%20Jacket%202",
    sku: "ZQQ718",
  },
  {
    url: "https://placehold.co/800x800?text=Rain.rdy%20Jacket%203",
    sku: "ZQQ718",
  },
  {
    url: "https://placehold.co/800x800?text=Rain.rdy%20Jacket%204",
    sku: "ZQQ718",
  },
  {
    url: "https://placehold.co/800x800?text=Rain.rdy%20Jacket%205",
    sku: "ZQQ718",
  },
  {
    url: "https://placehold.co/800x800?text=Runfalcon%205%20Shoes%201",
    sku: "CRY935",
  },
  {
    url: "https://placehold.co/800x800?text=Runfalcon%205%20Shoes%202",
    sku: "CRY935",
  },
  {
    url: "https://placehold.co/800x800?text=Runfalcon%205%20Shoes%203",
    sku: "CRY935",
  },
  {
    url: "https://placehold.co/800x800?text=Runfalcon%205%20Shoes%204",
    sku: "CRY935",
  },
  {
    url: "https://placehold.co/800x800?text=Runfalcon%205%20Shoes%205",
    sku: "CRY935",
  },
  {
    url: "https://placehold.co/800x800?text=Runfalcon%205%20Shoes%206",
    sku: "CRY935",
  },
  {
    url: "https://placehold.co/800x800?text=Runfalcon%205%20Shoes%207",
    sku: "CRY935",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%201",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%202",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%203",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%204",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%205",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%206",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%207",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Swift%20Run%201%20Shoes%208",
    sku: "NEL714",
  },
  {
    url: "https://placehold.co/800x800?text=Full-Zip%20Hoodie%201",
    sku: "MIG499",
  },
  {
    url: "https://placehold.co/800x800?text=Full-Zip%20Hoodie%202",
    sku: "MIG499",
  },
  {
    url: "https://placehold.co/800x800?text=Full-Zip%20Hoodie%203",
    sku: "MIG499",
  },
  {
    url: "https://placehold.co/800x800?text=Full-Zip%20Hoodie%204",
    sku: "MIG499",
  },
  {
    url: "https://placehold.co/800x800?text=Full-Zip%20Hoodie%205",
    sku: "MIG499",
  },
  {
    url: "https://placehold.co/800x800?text=Full-Zip%20Hoodie%206",
    sku: "MIG499",
  },
  {
    url: "https://placehold.co/800x800?text=Full-Zip%20Hoodie%207",
    sku: "MIG499",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Tee%201",
    sku: "XHH458",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Tee%202",
    sku: "XHH458",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Tee%203",
    sku: "XHH458",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Tee%204",
    sku: "XHH458",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Tee%205",
    sku: "XHH458",
  },
  {
    url: "https://placehold.co/800x800?text=Essentials%20Tee%206",
    sku: "XHH458",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Tshirt%20Top%201",
    sku: "ERO271",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Tshirt%20Top%202",
    sku: "ERO271",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Tshirt%20Top%203",
    sku: "ERO271",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Tshirt%20Top%204",
    sku: "ERO271",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Tshirt%20Top%205",
    sku: "ERO271",
  },
  {
    url: "https://placehold.co/800x800?text=White%20Tshirt%20Top%206",
    sku: "ERO271",
  },
  {
    url: "https://placehold.co/800x800?text=Firebird%20Track%20Pants%201",
    sku: "IBC749",
  },
  {
    url: "https://placehold.co/800x800?text=Firebird%20Track%20Pants%202",
    sku: "IBC749",
  },
  {
    url: "https://placehold.co/800x800?text=Firebird%20Track%20Pants%203",
    sku: "IBC749",
  },
  {
    url: "https://placehold.co/800x800?text=Firebird%20Track%20Pants%204",
    sku: "IBC749",
  },
  {
    url: "https://placehold.co/800x800?text=Firebird%20Track%20Pants%205",
    sku: "IBC749",
  },
  {
    url: "https://placehold.co/800x800?text=Firebird%20Track%20Pants%206",
    sku: "IBC749",
  },
  {
    url: "https://placehold.co/800x800?text=Adicolor%20Baggy%20Pants%201",
    sku: "OZJ770",
  },
  {
    url: "https://placehold.co/800x800?text=Adicolor%20Baggy%20Pants%202",
    sku: "OZJ770",
  },
  {
    url: "https://placehold.co/800x800?text=Adicolor%20Baggy%20Pants%203",
    sku: "OZJ770",
  },
  {
    url: "https://placehold.co/800x800?text=Adicolor%20Baggy%20Pants%204",
    sku: "OZJ770",
  },
  {
    url: "https://placehold.co/800x800?text=Adicolor%20Baggy%20Pants%205",
    sku: "OZJ770",
  },
  {
    url: "https://placehold.co/800x800?text=Adicolor%20Baggy%20Pants%206",
    sku: "OZJ770",
  },
  {
    url: "https://placehold.co/800x800?text=Terrace%20Bag%201",
    sku: "UZL350",
  },
  {
    url: "https://placehold.co/800x800?text=Terrace%20Bag%202",
    sku: "UZL350",
  },
  {
    url: "https://placehold.co/800x800?text=Terrace%20Bag%203",
    sku: "UZL350",
  },
  {
    url: "https://placehold.co/800x800?text=Terrace%20Bag%204",
    sku: "UZL350",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Therma-Fit%20Swift%201",
    sku: "TPO086",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Therma-Fit%20Swift%202",
    sku: "TPO086",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Therma-Fit%20Swift%203",
    sku: "TPO086",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Therma-Fit%20Swift%204",
    sku: "TPO086",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Therma-Fit%20Swift%205",
    sku: "TPO086",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Therma-Fit%20Swift%206",
    sku: "TPO086",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20ACG%20Black%20Iguana%201",
    sku: "TNQ732",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20ACG%20Black%20Iguana%202",
    sku: "TNQ732",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20ACG%20Black%20Iguana%203",
    sku: "TNQ732",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20ACG%20Black%20Iguana%204",
    sku: "TNQ732",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20ACG%20Black%20Iguana%205",
    sku: "TNQ732",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20ACG%20Black%20Iguana%206",
    sku: "TNQ732",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%201",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%202",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%203",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%204",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%205",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%206",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%207",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Dunk%20Low%20Next%20Nature%208",
    sku: "CZG429",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Primary%20Fleece%201",
    sku: "TMX568",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Primary%20Fleece%202",
    sku: "TMX568",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Primary%20Fleece%203",
    sku: "TMX568",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Primary%20Fleece%204",
    sku: "TMX568",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Primary%20Fleece%205",
    sku: "TMX568",
  },
  {
    url: "https://placehold.co/800x800?text=Chain%20Print%20T-Shirt%201",
    sku: "MFE615",
  },
  {
    url: "https://placehold.co/800x800?text=Chain%20Print%20T-Shirt%202",
    sku: "MFE615",
  },
  {
    url: "https://placehold.co/800x800?text=Chain%20Print%20T-Shirt%203",
    sku: "MFE615",
  },
  {
    url: "https://placehold.co/800x800?text=Nature%20Embroidery%20T-Shirt%201",
    sku: "MPY148",
  },
  {
    url: "https://placehold.co/800x800?text=Nature%20Embroidery%20T-Shirt%202",
    sku: "MPY148",
  },
  {
    url: "https://placehold.co/800x800?text=Nature%20Embroidery%20T-Shirt%203",
    sku: "MPY148",
  },
  {
    url: "https://placehold.co/800x800?text=Nature%20Embroidery%20T-Shirt%204",
    sku: "MPY148",
  },
  {
    url: "https://placehold.co/800x800?text=Nature%20Embroidery%20T-Shirt%205",
    sku: "MPY148",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Sportswear%20Pant%201",
    sku: "UOU935",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Sportswear%20Pant%202",
    sku: "UOU935",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Sportswear%20Pant%203",
    sku: "UOU935",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Sportswear%20Pant%204",
    sku: "UOU935",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Club%20Pants%201",
    sku: "HJM625",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Club%20Pants%202",
    sku: "HJM625",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Club%20Pants%203",
    sku: "HJM625",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Club%20Pants%204",
    sku: "HJM625",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Club%20Pants%205",
    sku: "HJM625",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Club%20Pants%206",
    sku: "HJM625",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Varsity%20Backpack%201",
    sku: "XJK547",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Varsity%20Backpack%202",
    sku: "XJK547",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Varsity%20Backpack%203",
    sku: "XJK547",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Varsity%20Backpack%204",
    sku: "XJK547",
  },
  {
    url: "https://placehold.co/800x800?text=Nike%20Varsity%20Backpack%205",
    sku: "XJK547",
  },
  {
    url: "https://placehold.co/800x800?text=Card%20Wallet%20Bag%201",
    sku: "QMW292",
  },
  {
    url: "https://placehold.co/800x800?text=Card%20Wallet%20Bag%202",
    sku: "QMW292",
  },
  {
    url: "https://placehold.co/800x800?text=Phoenix%20Fleece%20Short%201",
    sku: "CIL452",
  },
  {
    url: "https://placehold.co/800x800?text=Phoenix%20Fleece%20Short%202",
    sku: "CIL452",
  },
  {
    url: "https://placehold.co/800x800?text=Phoenix%20Fleece%20Short%203",
    sku: "CIL452",
  },
  {
    url: "https://placehold.co/800x800?text=Phoenix%20Fleece%20Short%204",
    sku: "CIL452",
  },
  {
    url: "https://placehold.co/800x800?text=Phoenix%20Fleece%20Short%205",
    sku: "CIL452",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Cotton%20Short%201",
    sku: "VZR097",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Cotton%20Short%202",
    sku: "VZR097",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Cotton%20Short%203",
    sku: "VZR097",
  },
  {
    url: "https://placehold.co/800x800?text=Identity%20Big%20Logo%20T-Shirt%201",
    sku: "RBW317",
  },
  {
    url: "https://placehold.co/800x800?text=Identity%20Big%20Logo%20T-Shirt%202",
    sku: "RBW317",
  },
  {
    url: "https://placehold.co/800x800?text=Identity%20Big%20Logo%20T-Shirt%203",
    sku: "RBW317",
  },
  {
    url: "https://placehold.co/800x800?text=Identity%20Big%20Logo%20T-Shirt%204",
    sku: "RBW317",
  },
  {
    url: "https://placehold.co/800x800?text=Identity%20Big%20Logo%20T-Shirt%205",
    sku: "RBW317",
  },
  {
    url: "https://placehold.co/800x800?text=High-Rise%20Colorblock%20Leggings%201",
    sku: "SQM625",
  },
  {
    url: "https://placehold.co/800x800?text=High-Rise%20Colorblock%20Leggings%202",
    sku: "SQM625",
  },
  {
    url: "https://placehold.co/800x800?text=High-Rise%20Colorblock%20Leggings%203",
    sku: "SQM625",
  },
  {
    url: "https://placehold.co/800x800?text=High-Rise%20Colorblock%20Leggings%204",
    sku: "SQM625",
  },
  {
    url: "https://placehold.co/800x800?text=High-Rise%20Colorblock%20Leggings%205",
    sku: "SQM625",
  },
  {
    url: "https://placehold.co/800x800?text=High-Rise%20Colorblock%20Leggings%206",
    sku: "SQM625",
  },
  {
    url: "https://placehold.co/800x800?text=Med%20Duffel%20Bag%201",
    sku: "BUY040",
  },
  {
    url: "https://placehold.co/800x800?text=Med%20Duffel%20Bag%202",
    sku: "BUY040",
  },
  {
    url: "https://placehold.co/800x800?text=Blocked%20Woven%20Jacket%201",
    sku: "YRJ913",
  },
  {
    url: "https://placehold.co/800x800?text=Blocked%20Woven%20Jacket%202",
    sku: "YRJ913",
  },
  {
    url: "https://placehold.co/800x800?text=Blocked%20Woven%20Jacket%203",
    sku: "YRJ913",
  },
  {
    url: "https://placehold.co/800x800?text=Blocked%20Woven%20Jacket%204",
    sku: "YRJ913",
  },
  {
    url: "https://placehold.co/800x800?text=Blocked%20Woven%20Jacket%205",
    sku: "YRJ913",
  },
  {
    url: "https://placehold.co/800x800?text=Athletics%20Packable%20Jacket%201",
    sku: "LSE849",
  },
  {
    url: "https://placehold.co/800x800?text=Athletics%20Packable%20Jacket%202",
    sku: "LSE849",
  },
  {
    url: "https://placehold.co/800x800?text=Athletics%20Packable%20Jacket%203",
    sku: "LSE849",
  },
  {
    url: "https://placehold.co/800x800?text=Athletics%20Packable%20Jacket%204",
    sku: "LSE849",
  },
  {
    url: "https://placehold.co/800x800?text=Athletics%20Packable%20Jacket%205",
    sku: "LSE849",
  },
  {
    url: "https://placehold.co/800x800?text=Athletics%20Packable%20Jacket%206",
    sku: "LSE849",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Core%20Shoe%201",
    sku: "DOE668",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Core%20Shoe%202",
    sku: "DOE668",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Core%20Shoe%203",
    sku: "DOE668",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Core%20Shoe%204",
    sku: "DOE668",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Core%20Shoe%205",
    sku: "DOE668",
  },
  {
    url: "https://placehold.co/800x800?text=574%20Core%20Shoe%206",
    sku: "DOE668",
  },
  {
    url: "https://placehold.co/800x800?text=Fresh%20Foam%20X%201",
    sku: "WJL373",
  },
  {
    url: "https://placehold.co/800x800?text=Fresh%20Foam%20X%202",
    sku: "WJL373",
  },
  {
    url: "https://placehold.co/800x800?text=Fresh%20Foam%20X%203",
    sku: "WJL373",
  },
  {
    url: "https://placehold.co/800x800?text=Fresh%20Foam%20X%204",
    sku: "WJL373",
  },
  {
    url: "https://placehold.co/800x800?text=Fresh%20Foam%20X%205",
    sku: "WJL373",
  },
  {
    url: "https://placehold.co/800x800?text=Fresh%20Foam%20X%206",
    sku: "WJL373",
  },
  {
    url: "https://placehold.co/800x800?text=French%20Terry%20Hoodie%201",
    sku: "SWX501",
  },
  {
    url: "https://placehold.co/800x800?text=French%20Terry%20Hoodie%202",
    sku: "SWX501",
  },
  {
    url: "https://placehold.co/800x800?text=French%20Terry%20Hoodie%203",
    sku: "SWX501",
  },
  {
    url: "https://placehold.co/800x800?text=French%20Terry%20Hoodie%204",
    sku: "SWX501",
  },
  {
    url: "https://placehold.co/800x800?text=French%20Terry%20Hoodie%205",
    sku: "SWX501",
  },
  {
    url: "https://placehold.co/800x800?text=French%20Terry%20Hoodie%206",
    sku: "SWX501",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Crew%20Hoodie%201",
    sku: "WOV507",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Crew%20Hoodie%202",
    sku: "WOV507",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Crew%20Hoodie%203",
    sku: "WOV507",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Crew%20Hoodie%204",
    sku: "WOV507",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Crew%20Hoodie%205",
    sku: "WOV507",
  },
  {
    url: "https://placehold.co/800x800?text=Graphic%20Crew%20Hoodie%206",
    sku: "WOV507",
  },
  {
    url: "https://placehold.co/800x800?text=Piped%20Tapered%20Pant%201",
    sku: "YBV297",
  },
  {
    url: "https://placehold.co/800x800?text=Piped%20Tapered%20Pant%202",
    sku: "YBV297",
  },
  {
    url: "https://placehold.co/800x800?text=Piped%20Tapered%20Pant%203",
    sku: "YBV297",
  },
  {
    url: "https://placehold.co/800x800?text=Piped%20Tapered%20Pant%204",
    sku: "YBV297",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Standard%20Pant%201",
    sku: "TTK257",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Standard%20Pant%202",
    sku: "TTK257",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Standard%20Pant%203",
    sku: "TTK257",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Standard%20Pant%204",
    sku: "TTK257",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Standard%20Pant%205",
    sku: "TTK257",
  },
  {
    url: "https://placehold.co/800x800?text=Numeric%20Standard%20Pant%206",
    sku: "TTK257",
  },
  {
    url: "https://placehold.co/800x800?text=Performance%20Woven%20Pant%201",
    sku: "FFP340",
  },
  {
    url: "https://placehold.co/800x800?text=Performance%20Woven%20Pant%202",
    sku: "FFP340",
  },
  {
    url: "https://placehold.co/800x800?text=Performance%20Woven%20Pant%203",
    sku: "FFP340",
  },
  {
    url: "https://placehold.co/800x800?text=Performance%20Woven%20Pant%204",
    sku: "FFP340",
  },
  {
    url: "https://placehold.co/800x800?text=Performance%20Woven%20Pant%205",
    sku: "FFP340",
  },
  {
    url: "https://placehold.co/800x800?text=Performance%20Woven%20Pant%206",
    sku: "FFP340",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Canvas%20Tote%201",
    sku: "YSC527",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Canvas%20Tote%202",
    sku: "YSC527",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Canvas%20Tote%203",
    sku: "YSC527",
  },
  {
    url: "https://placehold.co/800x800?text=Classic%20Canvas%20Tote%204",
    sku: "YSC527",
  },
  {
    url: "https://placehold.co/800x800?text=Shohei%20Signature%20Fleece%209%201",
    sku: "LRQ360",
  },
  {
    url: "https://placehold.co/800x800?text=Shohei%20Signature%20Fleece%209%202",
    sku: "LRQ360",
  },
  {
    url: "https://placehold.co/800x800?text=Shohei%20Signature%20Fleece%209%203",
    sku: "LRQ360",
  },
  {
    url: "https://placehold.co/800x800?text=Shohei%20Signature%20Fleece%209%204",
    sku: "LRQ360",
  },
  {
    url: "https://placehold.co/800x800?text=Shohei%20Signature%20Fleece%209%205",
    sku: "LRQ360",
  },
  {
    url: "https://placehold.co/800x800?text=Shohei%20Signature%20Fleece%209%206",
    sku: "LRQ360",
  },
  {
    url: "https://placehold.co/800x800?text=Cotton%20Nylon%20Short%201",
    sku: "COK318",
  },
  {
    url: "https://placehold.co/800x800?text=Cotton%20Nylon%20Short%202",
    sku: "COK318",
  },
  {
    url: "https://placehold.co/800x800?text=Cotton%20Nylon%20Short%203",
    sku: "COK318",
  },
  {
    url: "https://placehold.co/800x800?text=Cotton%20Nylon%20Short%204",
    sku: "COK318",
  },
  {
    url: "https://placehold.co/800x800?text=Cotton%20Nylon%20Short%205",
    sku: "COK318",
  },
  {
    url: "https://placehold.co/800x800?text=Studio%20Editorial%20Jacket%201",
    sku: "PNG908",
  },
  {
    url: "https://placehold.co/800x800?text=Studio%20Editorial%20Jacket%202",
    sku: "PNG908",
  },
  {
    url: "https://placehold.co/800x800?text=Studio%20Editorial%20Jacket%203",
    sku: "PNG908",
  },
  {
    url: "https://placehold.co/800x800?text=Studio%20Editorial%20Jacket%204",
    sku: "PNG908",
  },
  {
    url: "https://placehold.co/800x800?text=Studio%20Editorial%20Jacket%205",
    sku: "PNG908",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Aconcagua%20Hoodie%201",
    sku: "DLO431",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Aconcagua%20Hoodie%202",
    sku: "DLO431",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Aconcagua%20Hoodie%203",
    sku: "DLO431",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Aconcagua%20Hoodie%204",
    sku: "DLO431",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Aconcagua%20Hoodie%205",
    sku: "DLO431",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20Aconcagua%20Hoodie%206",
    sku: "DLO431",
  },
  {
    url: "https://placehold.co/800x800?text=Retro%20Nuptse%20Jacket%201",
    sku: "VXH528",
  },
  {
    url: "https://placehold.co/800x800?text=Retro%20Nuptse%20Jacket%202",
    sku: "VXH528",
  },
  {
    url: "https://placehold.co/800x800?text=Retro%20Nuptse%20Jacket%203",
    sku: "VXH528",
  },
  {
    url: "https://placehold.co/800x800?text=Retro%20Nuptse%20Jacket%204",
    sku: "VXH528",
  },
  {
    url: "https://placehold.co/800x800?text=Retro%20Nuptse%20Jacket%205",
    sku: "VXH528",
  },
  {
    url: "https://placehold.co/800x800?text=Retro%20Nuptse%20Jacket%206",
    sku: "VXH528",
  },
  {
    url: "https://placehold.co/800x800?text=Hydrenalite%E2%84%A2%20Down%20Hoodie%201",
    sku: "EDJ253",
  },
  {
    url: "https://placehold.co/800x800?text=Hydrenalite%E2%84%A2%20Down%20Hoodie%202",
    sku: "EDJ253",
  },
  {
    url: "https://placehold.co/800x800?text=Hydrenalite%E2%84%A2%20Down%20Hoodie%203",
    sku: "EDJ253",
  },
  {
    url: "https://placehold.co/800x800?text=Hydrenalite%E2%84%A2%20Down%20Hoodie%204",
    sku: "EDJ253",
  },
  {
    url: "https://placehold.co/800x800?text=Hydrenalite%E2%84%A2%20Down%20Hoodie%205",
    sku: "EDJ253",
  },
  {
    url: "https://placehold.co/800x800?text=Hydrenalite%E2%84%A2%20Down%20Hoodie%206",
    sku: "EDJ253",
  },
  {
    url: "https://placehold.co/800x800?text=Base%20Camp%20Mules%201",
    sku: "VMP059",
  },
  {
    url: "https://placehold.co/800x800?text=Base%20Camp%20Mules%202",
    sku: "VMP059",
  },
  {
    url: "https://placehold.co/800x800?text=Base%20Camp%20Mules%203",
    sku: "VMP059",
  },
  {
    url: "https://placehold.co/800x800?text=Base%20Camp%20Mules%204",
    sku: "VMP059",
  },
  {
    url: "https://placehold.co/800x800?text=Evolution%20Full-Zip%201",
    sku: "DFM744",
  },
  {
    url: "https://placehold.co/800x800?text=Evolution%20Full-Zip%202",
    sku: "DFM744",
  },
  {
    url: "https://placehold.co/800x800?text=Evolution%20Full-Zip%203",
    sku: "DFM744",
  },
  {
    url: "https://placehold.co/800x800?text=Evolution%20Full-Zip%204",
    sku: "DFM744",
  },
  {
    url: "https://placehold.co/800x800?text=Evolution%20Full-Zip%205",
    sku: "DFM744",
  },
  {
    url: "https://placehold.co/800x800?text=NSE%20Pullover%20Hoodie%201",
    sku: "VMQ898",
  },
  {
    url: "https://placehold.co/800x800?text=NSE%20Pullover%20Hoodie%202",
    sku: "VMQ898",
  },
  {
    url: "https://placehold.co/800x800?text=NSE%20Pullover%20Hoodie%203",
    sku: "VMQ898",
  },
  {
    url: "https://placehold.co/800x800?text=NSE%20Pullover%20Hoodie%204",
    sku: "VMQ898",
  },
  {
    url: "https://placehold.co/800x800?text=NSE%20Pullover%20Hoodie%205",
    sku: "VMQ898",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20AXYS%20Hoodie%201",
    sku: "SWM780",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20AXYS%20Hoodie%202",
    sku: "SWM780",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20AXYS%20Hoodie%203",
    sku: "SWM780",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20AXYS%20Hoodie%204",
    sku: "SWM780",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20AXYS%20Hoodie%205",
    sku: "SWM780",
  },
  {
    url: "https://placehold.co/800x800?text=Men%E2%80%99s%20AXYS%20Hoodie%206",
    sku: "SWM780",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%20Hoodie%201",
    sku: "CZW702",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%20Hoodie%202",
    sku: "CZW702",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%20Hoodie%203",
    sku: "CZW702",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%20Hoodie%204",
    sku: "CZW702",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%20Hoodie%205",
    sku: "CZW702",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%20Hoodie%206",
    sku: "CZW702",
  },
  {
    url: "https://placehold.co/800x800?text=Lafranc%C3%A9%20Black%20Jacket%201",
    sku: "SWA405",
  },
  {
    url: "https://placehold.co/800x800?text=Lafranc%C3%A9%20Black%20Jacket%202",
    sku: "SWA405",
  },
  {
    url: "https://placehold.co/800x800?text=Lafranc%C3%A9%20Black%20Jacket%203",
    sku: "SWA405",
  },
  {
    url: "https://placehold.co/800x800?text=Lafranc%C3%A9%20Black%20Jacket%204",
    sku: "SWA405",
  },
  {
    url: "https://placehold.co/800x800?text=Lafranc%C3%A9%20Black%20Jacket%205",
    sku: "SWA405",
  },
  {
    url: "https://placehold.co/800x800?text=Lafranc%C3%A9%20Black%20Jacket%206",
    sku: "SWA405",
  },
  {
    url: "https://placehold.co/800x800?text=Voltaic%20Evo%20Shoes%201",
    sku: "ITL179",
  },
  {
    url: "https://placehold.co/800x800?text=Voltaic%20Evo%20Shoes%202",
    sku: "ITL179",
  },
  {
    url: "https://placehold.co/800x800?text=Voltaic%20Evo%20Shoes%203",
    sku: "ITL179",
  },
  {
    url: "https://placehold.co/800x800?text=Voltaic%20Evo%20Shoes%204",
    sku: "ITL179",
  },
  {
    url: "https://placehold.co/800x800?text=Voltaic%20Evo%20Shoes%205",
    sku: "ITL179",
  },
  {
    url: "https://placehold.co/800x800?text=Voltaic%20Evo%20Shoes%206",
    sku: "ITL179",
  },
  {
    url: "https://placehold.co/800x800?text=Speedcat%20OG%201",
    sku: "FCD212",
  },
  {
    url: "https://placehold.co/800x800?text=Speedcat%20OG%202",
    sku: "FCD212",
  },
  {
    url: "https://placehold.co/800x800?text=Speedcat%20OG%203",
    sku: "FCD212",
  },
  {
    url: "https://placehold.co/800x800?text=Speedcat%20OG%204",
    sku: "FCD212",
  },
  {
    url: "https://placehold.co/800x800?text=Speedcat%20OG%205",
    sku: "FCD212",
  },
  {
    url: "https://placehold.co/800x800?text=Speedcat%20OG%206",
    sku: "FCD212",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Puma%20Hoodie%201",
    sku: "BOG213",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Puma%20Hoodie%202",
    sku: "BOG213",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Puma%20Hoodie%203",
    sku: "BOG213",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Puma%20Hoodie%204",
    sku: "BOG213",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Puma%20Hoodie%205",
    sku: "BOG213",
  },
  {
    url: "https://placehold.co/800x800?text=Green%20Puma%20Hoodie%206",
    sku: "BOG213",
  },
  {
    url: "https://placehold.co/800x800?text=Neymar%20Creativity%20Hoodie%201",
    sku: "MTD454",
  },
  {
    url: "https://placehold.co/800x800?text=Neymar%20Creativity%20Hoodie%202",
    sku: "MTD454",
  },
  {
    url: "https://placehold.co/800x800?text=Neymar%20Creativity%20Hoodie%203",
    sku: "MTD454",
  },
  {
    url: "https://placehold.co/800x800?text=Neymar%20Creativity%20Hoodie%204",
    sku: "MTD454",
  },
  {
    url: "https://placehold.co/800x800?text=Neymar%20Creativity%20Hoodie%205",
    sku: "MTD454",
  },
  {
    url: "https://placehold.co/800x800?text=Neymar%20Creativity%20Hoodie%206",
    sku: "MTD454",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Label%20Shirt%201",
    sku: "SWE787",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Label%20Shirt%202",
    sku: "SWE787",
  },
  {
    url: "https://placehold.co/800x800?text=Milkish%20White%20Shirt%201",
    sku: "TGQ292",
  },
  {
    url: "https://placehold.co/800x800?text=Milkish%20White%20Shirt%202",
    sku: "TGQ292",
  },
  {
    url: "https://placehold.co/800x800?text=Milkish%20White%20Shirt%203",
    sku: "TGQ292",
  },
  {
    url: "https://placehold.co/800x800?text=Milkish%20White%20Shirt%204",
    sku: "TGQ292",
  },
  {
    url: "https://placehold.co/800x800?text=Milkish%20White%20Shirt%205",
    sku: "TGQ292",
  },
  {
    url: "https://placehold.co/800x800?text=Milkish%20White%20Shirt%206",
    sku: "TGQ292",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%201",
    sku: "VTG011",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%202",
    sku: "VTG011",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%203",
    sku: "VTG011",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%204",
    sku: "VTG011",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%205",
    sku: "VTG011",
  },
  {
    url: "https://placehold.co/800x800?text=PUMA%20X%20KIDSUPER%206",
    sku: "VTG011",
  },
  {
    url: "https://placehold.co/800x800?text=Las%20Vegas%20T7%201",
    sku: "GFI598",
  },
  {
    url: "https://placehold.co/800x800?text=Las%20Vegas%20T7%202",
    sku: "GFI598",
  },
  {
    url: "https://placehold.co/800x800?text=Las%20Vegas%20T7%203",
    sku: "GFI598",
  },
  {
    url: "https://placehold.co/800x800?text=Las%20Vegas%20T7%204",
    sku: "GFI598",
  },
  {
    url: "https://placehold.co/800x800?text=Las%20Vegas%20T7%205",
    sku: "GFI598",
  },
  {
    url: "https://placehold.co/800x800?text=Low%20Rise%20Track%20Pants%201",
    sku: "IOX693",
  },
  {
    url: "https://placehold.co/800x800?text=Low%20Rise%20Track%20Pants%202",
    sku: "IOX693",
  },
  {
    url: "https://placehold.co/800x800?text=Low%20Rise%20Track%20Pants%203",
    sku: "IOX693",
  },
  {
    url: "https://placehold.co/800x800?text=Low%20Rise%20Track%20Pants%204",
    sku: "IOX693",
  },
  {
    url: "https://placehold.co/800x800?text=Low%20Rise%20Track%20Pants%205",
    sku: "IOX693",
  },
  {
    url: "https://placehold.co/800x800?text=Low%20Rise%20Track%20Pants%206",
    sku: "IOX693",
  },
  {
    url: "https://placehold.co/800x800?text=Low%20Rise%20Track%20Pants%207",
    sku: "IOX693",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Bag%201",
    sku: "FBJ763",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Bag%202",
    sku: "FBJ763",
  },
  {
    url: "https://placehold.co/800x800?text=Black%20Puma%20Bag%203",
    sku: "FBJ763",
  },
  {
    url: "https://placehold.co/800x800?text=HARRY%20POTTER%20Shorts%201",
    sku: "ORA395",
  },
  {
    url: "https://placehold.co/800x800?text=HARRY%20POTTER%20Shorts%202",
    sku: "ORA395",
  },
  {
    url: "https://placehold.co/800x800?text=HARRY%20POTTER%20Shorts%203",
    sku: "ORA395",
  },
  {
    url: "https://placehold.co/800x800?text=HARRY%20POTTER%20Shorts%204",
    sku: "ORA395",
  },
  {
    url: "https://placehold.co/800x800?text=HARRY%20POTTER%20Shorts%205",
    sku: "ORA395",
  },
  {
    url: "https://placehold.co/800x800?text=HARRY%20POTTER%20Shorts%206",
    sku: "ORA395",
  },
  {
    url: "https://placehold.co/800x800?text=HARRY%20POTTER%20Shorts%207",
    sku: "ORA395",
  },
  {
    url: "https://placehold.co/800x800?text=Red%20Woven%20Shorts%201",
    sku: "AVN187",
  },
  {
    url: "https://placehold.co/800x800?text=Red%20Woven%20Shorts%202",
    sku: "AVN187",
  },
  {
    url: "https://placehold.co/800x800?text=Red%20Woven%20Shorts%203",
    sku: "AVN187",
  },
  {
    url: "https://placehold.co/800x800?text=Red%20Woven%20Shorts%204",
    sku: "AVN187",
  },
  {
    url: "https://placehold.co/800x800?text=Red%20Woven%20Shorts%205",
    sku: "AVN187",
  },
  {
    url: "https://placehold.co/800x800?text=Half%20RC%20Short%201",
    sku: "XQQ895",
  },
  {
    url: "https://placehold.co/800x800?text=Half%20RC%20Short%202",
    sku: "XQQ895",
  },
  {
    url: "https://placehold.co/800x800?text=Half%20RC%20Short%203",
    sku: "XQQ895",
  },
  {
    url: "https://placehold.co/800x800?text=Half%20RC%20Short%204",
    sku: "XQQ895",
  },
  {
    url: "https://placehold.co/800x800?text=Half%20RC%20Short%205",
    sku: "XQQ895",
  },
  {
    url: "https://placehold.co/800x800?text=Half%20RC%20Short%206",
    sku: "XQQ895",
  },
  {
    url: "https://placehold.co/800x800?text=Lux%20Oversized%20Hoodie%201",
    sku: "RZZ740",
  },
  {
    url: "https://placehold.co/800x800?text=Lux%20Oversized%20Hoodie%202",
    sku: "RZZ740",
  },
  {
    url: "https://placehold.co/800x800?text=Lux%20Oversized%20Hoodie%203",
    sku: "RZZ740",
  },
  {
    url: "https://placehold.co/800x800?text=Lux%20Oversized%20Hoodie%204",
    sku: "RZZ740",
  },
  {
    url: "https://placehold.co/800x800?text=Lux%20Oversized%20Hoodie%205",
    sku: "RZZ740",
  },
  {
    url: "https://placehold.co/800x800?text=Lux%20Oversized%20Hoodie%206",
    sku: "RZZ740",
  },
  {
    url: "https://placehold.co/800x800?text=Lux%20Oversized%20Hoodie%207",
    sku: "RZZ740",
  },
  {
    url: "https://placehold.co/800x800?text=Mid-Layer%20Sweatshirt%201",
    sku: "EXI253",
  },
  {
    url: "https://placehold.co/800x800?text=Mid-Layer%20Sweatshirt%202",
    sku: "EXI253",
  },
  {
    url: "https://placehold.co/800x800?text=Mid-Layer%20Sweatshirt%203",
    sku: "EXI253",
  },
  {
    url: "https://placehold.co/800x800?text=Mid-Layer%20Sweatshirt%204",
    sku: "EXI253",
  },
  {
    url: "https://placehold.co/800x800?text=Mid-Layer%20Sweatshirt%205",
    sku: "EXI253",
  },
  {
    url: "https://placehold.co/800x800?text=Mid-Layer%20Sweatshirt%206",
    sku: "EXI253",
  },
  {
    url: "https://placehold.co/800x800?text=Mid-Layer%20Sweatshirt%207",
    sku: "EXI253",
  },
];
