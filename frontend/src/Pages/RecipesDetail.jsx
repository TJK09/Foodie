import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/RecipesDetail.css';
import Pizza from '../assets/pizza.jpg';
import Pasta from '../assets/Pasta.jpg';
import Risotto from '../assets/Risotto.jpg';
import Gelato from '../assets/Gelato.jpg';
import Biryani from '../assets/Biryani2.jpg';
import ButterChicken from '../assets/ButterChicken2.jpg';
import Dosa from '../assets/Dosa.jpg';
import Dumplings from '../assets/Dumplings.jpg';
import Enchiladas from '../assets/Enchiladas.jpg';
import KungPao from '../assets/Kung Pao.jpeg';
import Mutton from '../assets/Mutton.jpg';
import Nihari from '../assets/Nihari.jpg';
import Ramen from '../assets/Ramen.jpg';
import Sushi from '../assets/Sushi2.jpg';
import Sweet from '../assets/Sweet.jpg';
import Tacos from '../assets/Tacos2.jpg';
import Tempura from '../assets/Tempura.jpeg';
import Paneer from '../assets/Paneer.jpg';

const recipeData = {
  1: {
    name: "Pizza",
    image: Pizza,
    article: `
### Origin/History
Pizza originated from Naples, Italy, in the 18th century as a humble street food for the working class, later gaining worldwide fame.

### Key Ingredients
- Wheat dough
- Tomato sauce
- Mozzarella cheese
- Olive oil
- Fresh basil leaves

### Cooking Method
Dough is rolled thin, topped with sauce, cheese, and basil, then baked in a wood-fired oven at high temperature for a short time.

### Flavor Profile and Texture
Crispy, chewy crust with tangy tomato, creamy cheese, and fragrant basil.

### Serving Suggestions
Typically served hot and enjoyed plain or with toppings like pepperoni, mushrooms, or vegetables.

### Interesting Facts
The Margherita pizza was named in honor of Queen Margherita of Savoy and features colors representing the Italian flag.
`
  },
  2: {
    name: "Pasta",
    image: Pasta,
    article: `
### Origin/History
Pasta has ancient origins in Italy, becoming a staple food by the 13th century, loved worldwide for its versatility.

### Key Ingredients
- Durum wheat semolina
- Water
- Various sauces (tomato, cream, pesto)

### Cooking Method
Dried or fresh pasta is boiled until al dente and then mixed with sauces.

### Flavor Profile and Texture
Soft yet firm noodles combined with rich, flavorful sauces.

### Serving Suggestions
Served hot with grated cheese and herbs; often paired with meat or vegetables.

### Interesting Facts
Italy has over 350 types of pasta shapes, each suited to different sauces.
`
  },
  3: {
    name: "Risotto",
    image: Risotto,
    article: `
### Origin/History
Risotto originated in Northern Italy, especially Milan, during the Renaissance period.

### Key Ingredients
- Arborio or Carnaroli rice
- Broth (vegetable or meat)
- Butter and Parmesan cheese
- Onions and white wine

### Cooking Method
Rice is slowly cooked by gradually adding warm broth while stirring constantly until creamy.

### Flavor Profile and Texture
Creamy, rich texture with delicate flavors of cheese and broth.

### Serving Suggestions
Served as a main or side dish, often paired with mushrooms, seafood, or vegetables.

### Interesting Facts
The constant stirring helps release the rice's starch, creating the creamy texture.
`
  },
  4: {
    name: "Gelato",
    image: Gelato,
    article: `
### Origin/History
Gelato originated in Italy during the Renaissance, evolving from ancient frozen desserts.

### Key Ingredients
- Milk and cream
- Sugar
- Natural flavorings (fruit, nuts, chocolate)

### Cooking Method
Churned at a slower speed than ice cream, incorporating less air for dense texture.

### Flavor Profile and Texture
Smoother, denser, and more intense flavors than traditional ice cream.

### Serving Suggestions
Served in cones or cups, often garnished with fresh fruit or nuts.

### Interesting Facts
Gelato is typically served at a slightly warmer temperature than ice cream.
`
  },
  5: {
    name: "Biryani",
    image: Biryani,
    article: `
### Origin/History
Biryani originated in the Indian subcontinent, brought by Persian travelers and developed by Mughal royalty.

### Key Ingredients
- Basmati rice
- Meat (chicken, mutton, beef)
- Yogurt and spices (cardamom, cloves, cinnamon)
- Saffron and fried onions

### Cooking Method
Layered cooking of spiced meat and partially cooked rice, steamed together (dum method).

### Flavor Profile and Texture
Rich, aromatic, spicy, with tender meat and fluffy rice.

### Serving Suggestions
Served with raita (yogurt sauce), salad, and boiled eggs.

### Interesting Facts
There are many regional biryani styles, including Hyderabadi, Lucknowi, and Karachi biryanis.
`
  },
  6: {
    name: "Mutton Karahi",
    image: Mutton,
    article: `
### Origin/History
Mutton Karahi is a popular Pakistani dish named after the wok-like karahi pot it’s cooked in.

### Key Ingredients
- Mutton chunks
- Tomatoes
- Ginger, garlic, green chilies
- Spices (red chili, coriander, cumin)

### Cooking Method
Slow-cooked meat in a thick tomato-based sauce, often finished with fresh ginger and coriander.

### Flavor Profile and Texture
Spicy, rich, and slightly tangy with tender meat.

### Serving Suggestions
Typically served with naan or roti.

### Interesting Facts
It's a festive dish commonly served at special occasions and weddings.
`
  },
  7: {
    name: "Nihari",
    image: Nihari,
    article: `
### Origin/History
Nihari originated in Mughal India as a slow-cooked stew traditionally eaten as a hearty breakfast.

### Key Ingredients
- Beef or lamb shanks
- Bone marrow
- Spices (fennel, ginger, chili powder)

### Cooking Method
Slow-cooked overnight to tenderize meat and infuse flavors.

### Flavor Profile and Texture
Deep, spicy, and rich with melt-in-the-mouth meat.

### Serving Suggestions
Served with naan or paratha and garnished with ginger and lemon.

### Interesting Facts
The word "Nihari" comes from the Arabic "Nahar" meaning "day," referring to its morning consumption.
`
  },
  8: {
    name: "Paneer Tikka",
    image: Paneer,
    article: `
### Origin/History
Paneer Tikka is a North Indian vegetarian dish, a popular starter in Indian cuisine.

### Key Ingredients
- Paneer (Indian cottage cheese)
- Yogurt
- Spices (turmeric, garam masala, chili powder)

### Cooking Method
Paneer cubes marinated in spiced yogurt and grilled or baked.

### Flavor Profile and Texture
Smoky, spicy, with a crispy exterior and soft interior.

### Serving Suggestions
Served with mint chutney and onion rings.

### Interesting Facts
Paneer tikka is often cooked in a traditional clay oven called a tandoor.
`
  },
  9: {
    name: "Sushi",
    image: Sushi,
    article: `
### Origin/History
Sushi originated in Japan as a method of preserving fish with fermented rice.

### Key Ingredients
- Sushi rice (vinegared rice)
- Fresh raw fish or seafood
- Seaweed (nori)
- Wasabi and soy sauce

### Cooking Method
Rice is seasoned, and fish is either raw or cooked, then rolled or shaped.

### Flavor Profile and Texture
Light, fresh, slightly tangy rice with delicate seafood flavors.

### Serving Suggestions
Served with soy sauce, pickled ginger, and wasabi.

### Interesting Facts
Sushi is more about the quality and balance of ingredients than heavy seasoning.
`
  },
  10: {
    name: "Ramen",
    image: Ramen,
    article: `
### Origin/History
Ramen is a Japanese noodle soup influenced by Chinese cuisine, becoming popular post-WWII.

### Key Ingredients
- Wheat noodles
- Broth (pork, chicken, miso, or soy-based)
- Toppings like pork slices, boiled eggs, and scallions

### Cooking Method
Noodles are cooked separately and served in rich, flavorful broth with toppings.

### Flavor Profile and Texture
Savory, umami-rich broth with chewy noodles.

### Serving Suggestions
Served hot, often accompanied by pickled vegetables.

### Interesting Facts
Ramen shops in Japan often specialize in a single broth type or style.
`
  },
  11: {
    name: "Tempura",
    image: Tempura,
    article: `
### Origin/History
Tempura was introduced to Japan by Portuguese missionaries in the 16th century.

### Key Ingredients
- Seafood and vegetables
- Light batter of flour, egg, and cold water

### Cooking Method
Ingredients are dipped in batter and quickly deep-fried until crispy.

### Flavor Profile and Texture
Light, crispy coating with tender vegetables or seafood inside.

### Serving Suggestions
Served with dipping sauce and steamed rice.

### Interesting Facts
Tempura is often part of Japanese bento boxes and seasonal menus.
`
  },
  12: {
    name: "Tacos",
    image: Tacos,
    article: `
### Origin/History
Tacos originated from Mexico, originally simple food for laborers.

### Key Ingredients
- Corn or flour tortillas
- Meat or beans
- Fresh salsa, onions, and cilantro

### Cooking Method
Fillings are cooked and placed inside warm tortillas.

### Flavor Profile and Texture
Savory, spicy, and fresh with soft tortillas.

### Serving Suggestions
Served with lime wedges and hot sauce.

### Interesting Facts
Taco varieties differ by region, including al pastor, barbacoa, and carnitas.
`
  },
  13: {
    name: "Enchiladas",
    image: Enchiladas,
    article: `
### Origin/History
Enchiladas date back to Aztec times, evolving into a popular Mexican comfort food.

### Key Ingredients
- Corn tortillas
- Meat or cheese filling
- Chili sauce

### Cooking Method
Tortillas are filled, rolled, covered in sauce, and baked.

### Flavor Profile and Texture
Spicy, tangy sauce with soft, baked tortillas.

### Serving Suggestions
Served with sour cream and guacamole.

### Interesting Facts
The name comes from the Spanish word “enchilar,” meaning “to add chili pepper to.”
`
  },
  14: {
    name: "Butter Chicken",
    image: ButterChicken,
    article: `
### Origin/History
Butter chicken was developed in Delhi in the 1950s as a way to reuse leftover tandoori chicken.

### Key Ingredients
- Chicken cooked in tandoor
- Tomato-based creamy sauce
- Butter, cream, and spices

### Cooking Method
Grilled chicken pieces are simmered in rich tomato and butter sauce.

### Flavor Profile and Texture
Mild, creamy, and slightly sweet with tender chicken.

### Serving Suggestions
Served with naan or basmati rice.

### Interesting Facts
Butter chicken is one of the most popular Indian dishes globally.
`
  },
  15: {
    name: "Dosa",
    image: Dosa,
    article: `
### Origin/History
Dosa is a South Indian fermented crepe made from rice and urad dal, dating back centuries.

### Key Ingredients
- Rice
- Urad dal (black gram)
- Fenugreek seeds

### Cooking Method
Batter is fermented overnight, then spread thin and cooked on a hot griddle.

### Flavor Profile and Texture
Crispy, slightly tangy exterior with soft interior.

### Serving Suggestions
Served with sambar (lentil stew) and coconut chutney.

### Interesting Facts
Dosa has many regional varieties, including masala dosa filled with spiced potatoes.
`
  },
  16: {
    name: "Kung Pao Chicken",
    image: KungPao,
    article: `
### Origin/History
Kung Pao chicken is a Sichuan dish named after a Qing dynasty official.

### Key Ingredients
- Diced chicken
- Peanuts
- Dried chili peppers
- Sichuan peppercorns

### Cooking Method
Chicken is stir-fried with peppers and peanuts in a spicy, tangy sauce.

### Flavor Profile and Texture
Spicy, numbing, and crunchy from peanuts.

### Serving Suggestions
Served with steamed rice.

### Interesting Facts
The numbing sensation comes from Sichuan peppercorns, unique to the region.
`
  },
  17: {
    name: "Sweet and Sour Pork",
    image: Sweet,
    article: `
### Origin/History
Sweet and sour pork is a classic Cantonese dish that became popular internationally.

### Key Ingredients
- Pork pieces
- Pineapple chunks
- Bell peppers
- Sweet and sour sauce (vinegar, sugar, ketchup)

### Cooking Method
Pork is battered and fried, then tossed with sweet and tangy sauce and vegetables.

### Flavor Profile and Texture
Crispy exterior with a sticky, sweet, and tangy glaze.

### Serving Suggestions
Served hot with steamed rice.

### Interesting Facts
The balance of sweet and sour flavors is key to this dish's appeal.
`
  },
  18: {
    name: "Dumplings",
    image: Dumplings,
    article: `
### Origin/History
Dumplings are a traditional food across many cultures, with origins in China over 1800 years ago.

### Key Ingredients
- Dough wrappers
- Meat or vegetable fillings
- Ginger, garlic, soy sauce

### Cooking Method
Dumplings are steamed, boiled, or pan-fried.

### Flavor Profile and Texture
Tender wrapper with juicy, flavorful filling.

### Serving Suggestions
Served with soy-based dipping sauce.

### Interesting Facts
Dumplings are often eaten during Lunar New Year for good luck.
`
  },
};


const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) return <h2 className="text-center text-light">Recipe Not Found</h2>;

  return (
    <>
      <Navbar />
      <div className="recipe-detail-container">
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} />
        {/* Render markdown here */}
        <ReactMarkdown>{recipe.article}</ReactMarkdown>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetail;
