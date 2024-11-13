const menu_list = [
    {
      "image_url": "./images/scallops_risotto.png",
      "name": "Scallops & Garden Risotto",
      "price": "24.50",
      "description": "Perfectly seared scallops on a creamy vegetable risotto with roasted seasonal vegetables, finished with herb-infused oil and microgreens for a refined seafood experience.",
      "type": "main"
    },
    {
      "image_url": "./images/bisque.png",
      "name": "Langoustine Bisque with Lobster Ravioli",
      "price": "28.00",
      "description": "Luxurious langoustine bisque with lobster-stuffed ravioli in a creamy broth, garnished with fresh herbs and cherry tomatoes for a touch of elegance.",
      "type": "main"
    },
    {
      "image_url": "./images/hummus_bowl.png",
      "name": "Garden Pesto Hummus Bowl",
      "price": "14.00",
      "description": "A vibrant hummus bowl with basil pesto, heirloom tomatoes, pine nuts, and edible flowers, offering creamy textures and fresh, herbaceous flavors.",
      "type": "main"
    },
    {
      "image_url": "./images/thai_curry.png",
      "name": "Spicy Thai Red Curry",
      "price": "16.00",
      "description": "Aromatic Thai red curry with tender chicken, bell peppers, and kaffir lime leaves in a creamy coconut broth for a spicy, savory taste.",
      "type": "main"
    },
    {
      "image_url": "./images/ceviche.png",
      "name": "Scallop Ceviche with Citrus Marinade",
      "price": "18.00",
      "description": "Fresh scallop ceviche in citrus marinade, topped with red onions, mint, and red chili for a light, flavorful appetizer with a hint of heat.",
      "type": "main"
    },
    {
      "image_url": "./images/vietnamese_pho.png",
      "name": "Spicy Vietnamese Pho",
      "price": "12.00",
      "description": "A fragrant Vietnamese pho with rice noodles, tender chicken, fresh herbs, and a touch of chili, delivering bold, warming flavors in every spoonful. Perfect for a comforting and aromatic meal.",
      "type": "main"
    },
    {
      "image_url": "./images/nigiri_platter.png",
      "name": "Assorted Nigiri Platter",
      "price": "18.00",
      "description": "A selection of fresh nigiri sushi, featuring salmon, tuna, white fish, and shrimp, served with soy sauce for a classic, delicate taste of Japan. Perfect for sushi lovers seeking a variety of flavors and textures.",
      "type": "main"
    },
    {
      "image_url": "./images/pumpkin_soup.png",
      "name": "Creamy Pumpkin Soup",
      "price": "8.50",
      "description": "Rich and creamy pumpkin soup, seasoned with a hint of spices and topped with fresh herbs. A comforting, warm dish perfect for cozy days. Ideal for fans of smooth, savory flavors.",
      "type": "main"
    },
    {
      "image_url": "./images/baby_squid.png",
      "name": "Sautéed Baby Squid",
      "price": "12.00",
      "description": "Tender baby squid drizzled with rich squid ink, bringing a bold, briny flavor that’s both unique and satisfying. Perfect for seafood enthusiasts seeking something different.",
      "type": "main"
    },
    {
      "image_url": "./images/caesar_salad.png",
      "name": "Caesar salad",
      "price": "10.00",
      "description": "Fresh Caesar salad with grilled chicken, crisp lettuce, cherry tomatoes, shaved Parmesan, and creamy dressing. A satisfying, light choice for any meal.",
      "type": "salad"
    },
    {
      "image_url": "./images/breakfast_sandwich.png",
      "name": "Open-faced Breakfast Sandwich",
      "price": "6.00",
      "description": "Open-faced breakfast toast with fresh tomato, greens, and a perfectly cooked sunny-side-up egg. A simple yet flavorful start to the day.",
      "type": "main"
    },
    {
      "image_url": "./images/tomato_salad.png",
      "name": "Mediterranean Tomato Salad",
      "price": "7.50",
      "description": "Fresh tomato and basil salad with creamy cheese, red onion, and a balsamic drizzle. A light, flavorful dish with a Mediterranean twist.",
      "type": "salad"
    },
    {
      "image_url": "./images/cherry_tart.png",
      "name": "Cherry Tart",
      "price": "5.00",
      "description": "Delicious cherry tart with a buttery crust, creamy filling, and juicy cherry topping. A perfect balance of sweet and tangy flavors.",
      "type": "dessert"
    },
    {
      "image_url": "./images/muffin_icecream.png",
      "name": "Muffin Ice Cream",
      "price": "7.00",
      "description": "Indulgent sundae with creamy ice cream atop a moist cupcake, drizzled with chocolate and topped with fresh strawberries. A dessert lover’s dream.",
      "type": "dessert"
    },
    {
      "image_url": "./images/brownie_icecream.png",
      "name": "Brownie Vanilla Ice Cream",
      "price": "8.00",
      "description": "Decadent brownie sundae with a scoop of vanilla ice cream, topped with chocolate and caramel drizzle, and a crisp wafer. A perfect blend of warm and cold delights.",
      "type": "dessert"
    },
    {
      "image_url": "./images/fruit_tart.png",
      "name": "Mini Fruit Tart with a Creamy Filling",
      "price": "6.50",
      "description": "Delightful mini fruit tarts with a creamy filling, topped with fresh orange slices, blackberries, and a hint of rosemary. A refreshing and elegant treat.",
      "type": "dessert"
    },
    {
      "image_url": "./images/french_toast.png",
      "name": "French toast with bananas and chocolate",
      "price": "5.50",
      "description": "Caramelized French toast topped with fresh banana slices and a drizzle of chocolate syrup. A sweet and satisfying treat to start the day.",
      "type": "dessert"
    },
    {
      "image_url": "./images/blueberry_mojito.png",
      "name": "Blueberry Mojito",
      "price": "6.00",
      "description": "Chilled blueberry cocktail with fresh blueberries, lime, and a splash of soda. A refreshing blend of flavors, ideal for a warm day.",
      "type": "drink"
    },
    {
      "image_url": "./images/tropical_cocktail.png",
      "name": "Spicy Tropical Cocktail",
      "price": "7.50",
      "description": "Tropical chili-infused cocktail with a hint of pineapple, fresh herbs, and a spicy kick from red chili. A bold mix of sweet and heat for adventurous palates.",
      "type": "drink"
    },
    {
      "image_url": "./images/strawberry_mojito.png",
      "name": "Strawberry Mojito",
      "price": "6.50",
      "description": "Refreshing strawberry mojito with muddled strawberries, fresh mint, and a hint of lime. A bright and fruity cocktail, ideal for warm days.",
      "type": "drink"
    },
    {
      "image_url": "./images/lemon_spritzer.png",
      "name": "Lemon Spritzer",
      "price": "7.00",
      "description": "Light and refreshing citrus spritzer with a hint of rosemary and a dried lemon garnish. A zesty and herbal delight.",
      "type": "drink"
    },
    {
      "image_url": "./images/cherry_orange.png",
      "name": "Cherry-Orange Cocktail",
      "price": "7.50",
      "description": "Bright and fruity cherry-orange cocktail with a refreshing blend of citrus and cherry flavors. A visually stunning drink perfect for any occasion.",
      "type": "drink"
    },
    {
      "image_url": "./images/gin_fizz.png",
      "name": "Gin Fizz",
      "price": "8.50",
      "description": "Elegant frothy cocktail with a smooth, balanced flavor, topped with a delicate floral garnish. A refined choice for a special evening.",
      "type": "drink"
    }
  ]