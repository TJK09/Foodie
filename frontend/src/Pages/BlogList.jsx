import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/blogList.css'; // Custom CSS
import { Link } from 'react-router-dom';
import Spaghetti from '../assets/Spaghetti.jpg';
import Samosa from '../assets/Samosa.jpg';
import Miso from '../assets/Miso.jpg';
import Biryani from '../assets/Biryani.jpg';
import Taco from '../assets/Tacos.jpg';
import Sweet from '../assets/Sweet.jpg';

const blogs = [
  {
    id: 1,
    title: 'Spaghetti Carbonara: Creamy Italian Classic',
    author: 'Chef Mario',
    image: Spaghetti,
    excerpt: 'Explore the history and recipe behind this creamy Roman delicacy made with eggs, cheese, and pancetta...',
  },
  {
    id: 2,
    title: 'Secrets of the Perfect Samosa',
    author: 'Nisha Gupta',
    image: Samosa,
    excerpt: 'Crispy, spicy, and irresistibly flaky. Here’s how to master the street-favorite samosa at home...',
  },
  {
    id: 3,
    title: 'Miso Ramen: Japan’s Comfort in a Bowl',
    author: 'Takashi Yamamoto',
    image: Miso,
    excerpt: 'Dive into the umami world of miso ramen with a guide to toppings, broth secrets, and noodle perfection...',
  },
  {
    id: 4,
    title: 'Biryani Battles: Karachi vs. Lahore',
    author: 'Zara Ahmed',
    image: Biryani,
    excerpt: 'Uncover the spicy, aromatic war between two of Pakistan’s biggest biryani styles and learn how to cook both...',
  },
  {
    id: 5,
    title: 'Taco Traditions of Mexico',
    author: 'Carlos Hernández',
    image: Taco,
    excerpt: 'From street corners to family kitchens, explore the regional taco varieties that define Mexican food culture...',
  },
  {
    id: 6,
    title: 'Sweet and Sour Secrets: Mastering Chinese Stir-Fry',
    author: 'Mei Lin',
    image: Sweet,
    excerpt: 'Master the balance of tangy and sweet in authentic Chinese stir-fry with tips from a seasoned wok chef...',
  }
];


const BlogList = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page-title">Our Community Blog</h2>
          <Link to="/create-blog" className="btn btn-warning">Create Blog</Link>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card h-100 blog-card shadow-sm">
                <img src={blog.image} className="card-img-top" alt={blog.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted mb-2">By {blog.author}</p>
                  <p className="card-text blog-excerpt">{blog.excerpt}</p>
                  <Link to={`/Blog/${blog.id}`} className="btn btn-outline-success mt-auto">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
