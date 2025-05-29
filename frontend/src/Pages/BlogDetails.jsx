import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/blogDetails.css';
import Spaghetti from '../assets/Spaghetti.jpg';
import Samosa from '../assets/Samosa.jpg';
import Miso from '../assets/Miso.jpg';
import Biryani from '../assets/Biryani.jpg';
import Taco from '../assets/Tacos.jpg';
import Sweet from '../assets/Sweet.jpg';

const dummyBlogData = {
  1: {
    title: 'Spaghetti Carbonara: Creamy Italian Classic',
    author: 'Chef Mario',
    image: Spaghetti,
    content: `
      Spaghetti Carbonara is a classic Roman pasta dish with rich roots in mid-20th-century Italy.
      Unlike many modern interpretations, traditional Carbonara doesn't include cream. Instead,
      it relies on the creamy emulsion of eggs, Pecorino Romano cheese, and starchy pasta water.

      Pancetta or guanciale adds a salty, umami punch, while freshly cracked black pepper balances the richness.
      It's best served immediately for peak silkiness and flavor.

      Fun Fact: The name "Carbonara" is said to come from "carbonaro," meaning charcoal burner—implying this was a hearty meal for workers.
    `
  },
  2: {
    title: 'Secrets of the Perfect Samosa',
    author: 'Nisha Gupta',
    image: Samosa,
    content: `
      The samosa, now a staple of South Asian street food, originated in the Middle East as 'sambosa.'
      Brought to India by traders, it evolved into the triangular, crispy pastry filled with spiced potatoes, peas, and sometimes meat.

      A perfect samosa boasts a flaky golden crust and a flavorful filling spiced with cumin, coriander, and garam masala.

      Pro Tip: Mix a little semolina into your dough for extra crunch, and always fry on medium heat to avoid bubbles.

      Try it with mint chutney or tangy tamarind dip for the full experience.
    `
  },
  3: {
    title: 'Miso Ramen: Japan’s Comfort in a Bowl',
    author: 'Takashi Yamamoto',
    image: Miso,
    content: `
      Miso ramen is a soul-warming noodle soup that hails from Hokkaido, Japan's northernmost island.
      It features a rich broth made with fermented miso paste, often combined with chicken or pork stock.

      Toppings like sweet corn, butter, bean sprouts, and chashu pork slices elevate this hearty bowl.

      Ramen Fact: Hokkaido winters inspired the creation of miso ramen to offer warmth and sustenance.

      Don’t forget the ajitsuke tamago—marinated soft-boiled eggs that add an umami bomb to every bite.
    `
  },
  4: {
    title: 'Biryani Battles: Karachi vs. Lahore',
    author: 'Zara Ahmed',
    image: Biryani,
    content: `
      Biryani is more than just food in Pakistan—it's a passion. The two major contenders are Karachi and Lahore styles.

      Karachi biryani is bold and spicy with layered masalas and potatoes, while Lahori biryani is aromatic, less fiery,
      and often features a yogurt-based marinade.

      Both versions use basmati rice, saffron, and slow-cooked meat, usually chicken or mutton.

      Regional Tip: Karachi biryani fans insist on the "aloos" (potatoes), while Lahoris prefer it meat-forward with fragrant spices.
    `
  },
  5: {
    title: 'Taco Traditions of Mexico',
    author: 'Carlos Hernández',
    image: Taco,
    content: `
      Tacos are Mexico's most beloved street food, representing regional diversity from Baja to Oaxaca.

      Whether it’s carnitas, al pastor, barbacoa, or grilled fish, the heart of a taco lies in its fresh corn tortilla and bold fillings.

      Add onion, cilantro, salsa verde or roja, and a squeeze of lime for an authentic touch.

      Did You Know? Tacos date back to indigenous times, long before Spanish colonization.

      Explore breakfast tacos in the north or mole-filled varieties in southern regions for a full culinary journey.
    `
  },
  6: {
    title: 'Sweet and Sour Secrets: Mastering Chinese Stir-Fry',
    author: 'Mei Lin',
    image: Sweet,
    content: `
      Stir-frying is the cornerstone of Chinese home cooking—fast, flavorful, and flexible.

      The sweet and sour stir-fry is one of the most beloved versions, blending sugar, vinegar, soy sauce, and ketchup
      with vegetables, pineapple chunks, and crispy chicken or tofu.

      Use a wok over high heat, prep all ingredients ahead of time, and stir continuously.

      Stir-Fry Hack: Cornstarch slurry thickens your sauce to restaurant-level gloss and cling.

      Regional Touch: Add ginger and bell peppers for a Szechuan-style punch.
    `
  }
};



const BlogDetails = () => {
  const { id } = useParams();
  const blog = dummyBlogData[id];

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="container my-5 text-center text-white">
          <h2>Blog not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container my-5 blog-details">
        <h1 className="text-warning mb-3">{blog.title}</h1>
        <p className="text-muted mb-4 blog-head">Written by {blog.author}</p>
        <img src={blog.image} alt={blog.title} className="img-fluid rounded mb-4 blog-image" />
        <p className="blog-content">{blog.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
