import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/cuisines.css';

import italian from '../assets/Italian.jpg';
import chinese from '../assets/Chinese.avif';
import pakistani from '../assets/Pakistani.jpg';
import indian from '../assets/Indian.jpg';
import mexican from '../assets/Mexican.jpg';
import japanese from '../assets/Japanese.jpg';

const cuisines = [
  {
    id: 1,
    name: "Italian",
    image: italian,
    ethnicity: "European (Italian)",
    culture: "Family-centric with strong regional influences; emphasis on simplicity, fresh herbs, olive oil, and shared meals.",
    history: "Roots in ancient Roman and Etruscan traditions; became globally influential during the Renaissance and beyond.",
    popularDishes: ["Pizza", "Pasta", "Risotto", "Gelato"]
  },
  {
    id: 2,
    name: "Pakistani",
    image: pakistani,
    ethnicity: "South Asian (Pakistani)",
    culture: "Deeply tied to hospitality and religious traditions; often communal and festive with rich spices.",
    history: "Derives from Mughal, Persian, Afghan, and Indian cuisines; deeply regional with Punjabi, Sindhi, Balochi, and Pashtun influences.",
    popularDishes: ["Biryani", "Nihari", "Chapli Kebab", "Halwa Puri"]
  },
  {
    id: 3,
    name: "Mexican",
    image: mexican,
    ethnicity: "Latin American (Mexican)",
    culture: "Celebratory and communal; full of color, bold flavors, and indigenous influences.",
    history: "Blend of Aztec, Mayan, and Spanish cuisines; rich in corn, beans, chili, and native herbs.",
    popularDishes: ["Tacos", "Enchiladas", "Guacamole", "Tamales"]
  },
  {
    id: 4,
    name: "Chinese",
    image: chinese,
    ethnicity: "East Asian (Chinese)",
    culture: "Philosophical balance of yin-yang, five flavors, and harmony in texture and temperature.",
    history: "Thousands of years of dynastic and regional evolution; known for Cantonese, Sichuan, Hunan, and Shandong styles.",
    popularDishes: ["Dumplings", "Sweet and Sour Pork", "Kung Pao Chicken", "Fried Rice"]
  },
  {
    id: 5,
    name: "Japanese",
    image: japanese,
    ethnicity: "East Asian (Japanese)",
    culture: "Focused on seasonality (shun), visual presentation, and respectful eating customs.",
    history: "Refined over centuries with influences from Chinese and Korean cuisines; emphasizes minimalism and purity.",
    popularDishes: ["Sushi", "Ramen", "Tempura", "Miso Soup"]
  },
  {
    id: 6,
    name: "Indian",
    image: indian,
    ethnicity: "South Asian (Indian)",
    culture: "Rich in diversity, festivals, and spices; varies by region, religion, and caste traditions.",
    history: "Spans millennia from Vedic to Mughal to colonial influences; incredibly varied from north to south.",
    popularDishes: ["Butter Chicken", "Paneer Tikka", "Dosa", "Biryani"]
  }
];

const MenuPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4 text-center">Explore World Cuisines</h1>
        <div className="row">
          {cuisines.map((cuisine) => {
            const isExpanded = expandedId === cuisine.id;
            return (
              <div className="col-md-4 mb-4" key={cuisine.id}>
                <div className="card h-100 shadow-sm cuisine-card">
                  <img
                    src={cuisine.image}
                    className="card-img-top cuisine-img"
                    alt={`${cuisine.name} cuisine`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{cuisine.name}</h5>
                    <p className={`card-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
                      <strong>Ethnicity:</strong> {cuisine.ethnicity}
                      {isExpanded && (
                        <>
                          <br />
                          <strong>Culture:</strong> {cuisine.culture}
                          <br />
                          <strong>History:</strong> {cuisine.history}
                          <br />
                          <strong>Popular Dishes:</strong> {cuisine.popularDishes.join(', ')}
                        </>
                      )}
                    </p>
                    <button
                      className="read-more-btn mt-auto"
                      onClick={() => toggleExpand(cuisine.id)}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
