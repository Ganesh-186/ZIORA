// product.js
document.addEventListener("DOMContentLoaded", () => {
  // Get product ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  // Complete product database
  const products = [
    {
      id: 1,
      name: "Sandal T-shirt",
      price: 299,
      img: "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "High-quality sandal colored t-shirt made from 100% cotton. Perfect for casual wear and comfortable throughout the day."
    },
    {
      id: 2,
      name: "Black T-shirt",
      price: 299,
      img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Classic black t-shirt made from premium cotton. Goes with everything in your wardrobe."
    },
    {
      id: 3,
      name: "White T-shirt",
      price: 299,
      img: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Crisp white t-shirt that never goes out of style. Perfect for layering or wearing on its own."
    },
    {
      id: 4,
      name: "Grey T-shirt",
      price: 299,
      img: "https://images.unsplash.com/photo-1516442443906-71605254b628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Soft grey t-shirt made from comfortable cotton blend. Ideal for everyday wear."
    },
    {
      id: 5,
      name: "3 T-shirts Combo",
      price: 699,
      img: "https://images.unsplash.com/photo-1716951848908-8907bb6c655b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Value pack of 3 high-quality t-shirts in assorted colors. Perfect for building your basic wardrobe."
    },
    {
      id: 6,
      name: "4 T-shirts Combo",
      price: 799,
      img: "https://images.unsplash.com/photo-1716951923523-0c76b14d4852?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Get 4 premium t-shirts at a great price. Mix of basic colors that complement any outfit."
    },
    {
      id: 7,
      name: "Blue dotted Shirt",
      price: 599,
      img: "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stylish blue shirt with subtle dot pattern. Perfect for both casual and semi-formal occasions."
    },
    {
      id: 8,
      name: "2 Shirt Combo",
      price: 799,
      img: "https://images.unsplash.com/photo-1602810319250-a663f0af2f75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      description: "Two high-quality shirts at a special combo price. Great value for your wardrobe essentials."
    },
    {
      id: 9,
      name: "3 Shirt Combo",
      price: 999,
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      description: "Premium pack of 3 stylish shirts. Perfect for building a versatile professional wardrobe."
    },
    {
      id: 10,
      name: "Blue Shirt",
      price: 499,
      img: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
      description: "Classic blue shirt made from comfortable cotton. Suitable for both office and casual wear."
    },
    {
      id: 11,
      name: "White Shirt",
      price: 499,
      img: "https://images.unsplash.com/photo-1602810317536-5d5e8a552d15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Crisp white formal shirt. Essential for every wardrobe, perfect for formal occasions."
    },
    {
      id: 12,
      name: "White T-shirt for womens",
      price: 299,
      img: "https://plus.unsplash.com/premium_photo-1690349404248-3ddd9be40eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Comfortable white t-shirt designed specifically for women. Perfect fit and soft fabric."
    },
    {
      id: 13,
      name: "Black T-shirt for womens",
      price: 299,
      img: "https://images.unsplash.com/photo-1609616399839-46fb4e90c560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Slim-fit black t-shirt for women. Versatile and stylish for any casual occasion."
    },
    {
      id: 14,
      name: "Pink Shirt for womens",
      price: 499,
      img: "https://plus.unsplash.com/premium_photo-1671641797133-1e487350dfae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Elegant pink shirt designed for women. Perfect for office wear or special occasions."
    },
    {
      id: 15,
      name: "Navy Blue Shirt for womens",
      price: 499,
      img: "https://plus.unsplash.com/premium_photo-1691622500878-15ee2528ab38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMzfHxzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Professional navy blue shirt for women. Classic style with modern fit."
    },
    {
      id: 16,
      name: "Marron T-shirt for womens",
      price: 299,
      img: "https://plus.unsplash.com/premium_photo-1691367279675-0e466cfb5135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxzaGlydHN8ZW58MHx8MHx8fDA%3D",
      description: "Trendy maroon t-shirt for women. Soft fabric with a comfortable fit."
    },
    {
      id: 17,
      name: "Light Blue Jean for men",
      price: 799,
      img: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Classic light blue jeans for men. Comfortable denim with perfect fit."
    },
    {
      id: 18,
      name: "Dark Blue faded jean for men",
      price: 799,
      img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHxlbnwwfHx8fDA%3D",
      description: "Fashionable dark blue faded jeans for men. Trendy distressed look."
    },
    {
      id: 19,
      name: "Gray Track for womens",
      price: 299,
      img: "https://images.unsplash.com/photo-1602573991155-21f0143bb45c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbnR8ZW58MHx8MHx8fDA%3D",
      description: "Comfortable gray track pants for women. Perfect for workouts or casual wear."
    },
    {
      id: 20,
      name: "Black cotton jean for men",
      price: 699,
      img: "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbnT8ZW58MHx8MHx8fDA%3D",
      description: "Stylish black cotton jeans for men. Versatile and comfortable for all-day wear."
    },
    {
      id: 21,
      name: "Black faded jean for men",
      price: 699,
      img: "https://images.unsplash.com/photo-1724627561744-6350067436ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBhbnR8ZW58MHx8MHx8fDA%3D",
      description: "Trendy black faded jeans for men. Modern style with comfortable fit."
    },
    {
      id: 22,
      name: "Black tracks for mens",
      price: 299,
      img: "https://plus.unsplash.com/premium_photo-1663036703748-fc4133bd54eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Comfortable black track pants for men. Perfect for athletic activities or lounging."
    },
    {
      id: 23,
      name: "Gray Tracks for men",
      price: 299,
      img: "https://images.unsplash.com/photo-1753381686374-47ebeb5771b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Classic gray track pants for men. Comfortable and versatile for various activities."
    },
    {
      id: 24,
      name: "Blue jean for women",
      price: 499,
      img: "https://images.unsplash.com/photo-1603268543147-e27145103706?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWNrJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
      description: "Stylish blue jeans for women. Perfect fit and comfortable denim material."
    },
    {
      id: 25,
      name: "Marron colour Track",
      price: 299,
      img: "https://images.unsplash.com/photo-1595187975449-38c186282ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWNrJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
      description: "Fashionable maroon track pants. Comfortable and stylish for casual wear."
    },
    {
      id: 26,
      name: "Beige Colour Track",
      price: 299,
      img: "https://images.unsplash.com/photo-1711175017307-bbacf7c2ca13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWNrJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
      description: "Light beige track pants. Versatile color that matches with any top."
    },
    {
      id: 27,
      name: "Brown Track for women",
      price: 299,
      img: "https://images.unsplash.com/photo-1641808887823-b3201916a57d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyYWNrJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
      description: "Comfortable brown track pants for women. Perfect for athletic activities or casual wear."
    },
    {
      id: 28,
      name: "Red Nike Shoes",
      price: 699,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Stylish red Nike shoes. Comfortable for everyday wear with great support."
    },
    {
      id: 29,
      name: "Red Sneakers",
      price: 599,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Vibrant red sneakers. Perfect for adding a pop of color to your outfit."
    },
    {
      id: 30,
      name: "White Sneakers",
      price: 499,
      img: "https://plus.unsplash.com/premium_photo-1665413642308-c5c1ed052d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Classic white sneakers. Goes with everything in your wardrobe."
    },
    {
      id: 31,
      name: "Blue sports Shoes",
      price: 599,
      img: "https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Comfortable blue sports shoes. Perfect for athletic activities and casual wear."
    },
    {
      id: 32,
      name: "Black sports Shoes",
      price: 699,
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Versatile black sports shoes. Suitable for various activities and occasions."
    },
    {
      id: 33,
      name: "Brown Sneakers",
      price: 699,
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Classic brown sneakers. Timeless style that never goes out of fashion."
    },
    {
      id: 34,
      name: "Black sneakers",
      price: 599,
      img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Stylish black sneakers. Perfect for everyday wear with any outfit."
    },
    {
      id: 35,
      name: "Green Sports Shoes",
      price: 699,
      img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww",
      description: "Vibrant green sports shoes. Great for athletic activities and casual style."
    },
    {
      id: 36,
      name: "Black Boots",
      price: 799,
      img: "https://plus.unsplash.com/premium_photo-1671718111684-9142a70a5fe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNob2VzfGVufDB8fDB8fHww",
      description: "Stylish black boots. Perfect for cooler weather and casual outfits."
    },
    {
      id: 37,
      name: "Red Shoes",
      price: 699,
      img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzfGVufDB8fDB8fHww",
      description: "Bold red shoes. Make a statement with these vibrant shoes."
    },
    {
      id: 38,
      name: "Funcky Shoes",
      price: 699,
      img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNob2VzfGVufDB8fDB8fHww",
      description: "Unique funky shoes. Stand out from the crowd with these distinctive designs."
    },
    {
      id: 39,
      name: "White Sneaker From Nike",
      price: 699,
      img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8fDB8fHww",
      description: "Classic white Nike sneakers. Iconic design with comfortable fit."
    },
    {
      id: 40,
      name: "Green Sneaker",
      price: 699,
      img: "https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNob2VzfGVufDB8fDB8fHww",
      description: "Fresh green sneakers. Add color to your footwear collection with these stylish shoes."
    },
    // Add the remaining 8 products to complete your 48 products
    {
      id: 41,
      name: "Classic Denim Jacket",
      price: 899,
      img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
      description: "Timeless denim jacket for all seasons. Perfect for layering over any outfit."
    },
    {
      id: 42,
      name: "Leather Crossbody Bag",
      price: 799,
      img: "https://images.unsplash.com/photo-1510783891783-80cda42ebfd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGxlYXRoZXIlMjBiYWd8ZW58MHx8MHx8fDA%3D",
      description: "Elegant leather crossbody bag. Perfect for everyday use with ample storage space."
    },
    {
      id: 43,
      name: "Wool Winter Scarf",
      price: 399,
      img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D",
      description: "Warm wool scarf for winter. Soft and comfortable with stylish pattern."
    },
    {
      id: 44,
      name: "Sports Watch",
      price: 599,
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      description: "Durable sports watch with multiple functions. Water resistant and built to last."
    },
    {
      id: 45,
      name: "Sunglasses",
      price: 499,
      img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHx8MHx8fDA%3D",
      description: "Stylish sunglasses with UV protection. Perfect for sunny days and fashion statements."
    },
    {
      id: 46,
      name: "Beanie Hat",
      price: 299,
      img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0fGVufDB8fDB8fHww",
      description: "Warm beanie hat for cold weather. Soft material with comfortable fit."
    },
    {
      id: 47,
      name: "Canvas Backpack",
      price: 699,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
      description: "Durable canvas backpack with multiple compartments. Perfect for school or travel."
    },
    {
      id: 48,
      name: "Formal Leather Shoes",
      price: 899,
      img: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ybWFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
      description: "Elegant formal leather shoes. Perfect for business occasions and formal events."
    }
  ];
  
  const product = products.find(p => p.id === productId);
  
  if (product) {
    // Display product details
    document.getElementById("product-img").src = product.img;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `₹${product.price}`;
    document.getElementById("product-description").textContent = product.description;
    
    // Update page title
    document.title = `ZIORA - ${product.name}`;
    
    // Add to cart functionality
    document.getElementById("add-to-cart-btn").addEventListener("click", () => {
      const currentUser = localStorage.getItem("currentUser");
      if (!currentUser) {
        window.location.href = "login.html";
        return;
      }
      
      const quantity = parseInt(document.getElementById("quantity").value);
      const size = document.getElementById("size").value;
      
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find(u => u.email === currentUser);
      
      if (user) {
        // Ensure user.cart exists
        if (!user.cart) user.cart = [];

        // Check if same product with same size is already in cart
        const existingItemIndex = user.cart.findIndex(item => 
          item.name === product.name && item.size === size
        );
        
        if (existingItemIndex !== -1) {
          // Update quantity if product already in cart
          user.cart[existingItemIndex].quantity += quantity;
        } else {
          // Add new item to cart
          user.cart.push({
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: quantity,
            size: size
          });
        }
        
        // ✅ Ensure localStorage.setItem is called after any cart modification
        localStorage.setItem("users", JSON.stringify(users));
        showToast(`${product.name} added to cart!`, "success");
        
        // Update cart count
        const cartCountSpan = document.getElementById("cart-count");
        if (cartCountSpan) {
          cartCountSpan.textContent = user.cart.reduce((acc, item) => acc + item.quantity, 0);
        }
      }
    });
  } else {
    // Product not found, display message instead of redirecting
    const productDetailContainer = document.querySelector(".product-detail-container");
    if (productDetailContainer) {
      productDetailContainer.innerHTML = `
        <div style="text-align: center; width: 100%; padding: 50px;">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
          <a href="collection.html" class="shop-more-button" style="margin-top: 20px;">Continue Shopping</a>
        </div>
      `;
    }
    document.title = "ZIORA - Product Not Found";
  }
});