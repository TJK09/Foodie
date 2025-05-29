import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/Recipes.css';
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

const recipes = [
  { id: 1, name: "Pizza", image: Pizza },
  { id: 2, name: "Pasta", image: Pasta },
  { id: 3, name: "Risotto", image: Risotto },
  { id: 4, name: "Gelato", image: Gelato },
  { id: 5, name: "Biryani", image: Biryani },
  { id: 6, name: "Mutton Karahi", image: Mutton },
  { id: 7, name: "Nihari", image: Nihari },
  { id: 8, name: "Paneer Tikka", image: Paneer },
  { id: 9, name: "Sushi", image: Sushi },
  { id: 10, name: "Ramen", image: Ramen },
  { id: 11, name: "Tempura", image: Tempura },
  { id: 12, name: "Tacos", image: Tacos },
  { id: 13, name: "Enchiladas", image: Enchiladas },
  { id: 14, name: "ButterChicken", image: ButterChicken },
  { id: 15, name: "Dosa", image: Dosa },
  { id: 16, name: "Kung Pao Chicken", image: KungPao },
  { id: 17, name: "Sweet and Sour Pork", image: Sweet },
  { id: 18, name: "Dumplings", image: Dumplings },
  // Add other recipes similarly
];

const Recipes = () => {
  return (
    <>
      <Navbar />
      <div className="recipe-container">
        <h1 className="text-center text-light text">Our Recipes</h1>
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
