import React from 'react';
import Navbar from '../components/Navbar';
import Footer  from '../components/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="about-us-container px-4 py-5 text-white" style={{ backgroundColor: '#121212' }}>
      <div className="container">
        <h1 className="display-4 text-center text-yellow-400 mb-4">About Us</h1>

        <section className="mb-5">
          <h2 className="text-green-500">Who We Are</h2>
          <p className="lead">
            Welcome to <strong>FoodieVerse</strong> — a vibrant food community created by food lovers, for food lovers.
            Whether you’re a home cook, aspiring chef, or someone who just loves exploring global cuisines, this is your go-to platform.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="text-green-500">Our Mission</h2>
          <p>
            Our mission is to bring people together through the universal language of food. We aim to:
          </p>
          <ul className="list-disc ml-6">
            <li>Encourage cultural exchange through authentic recipes</li>
            <li>Empower individuals to share their food stories and ideas</li>
            <li>Build a community where learning, cooking, and eating go hand in hand</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="text-green-500">Meet the Team</h2>
          <p>
            We’re a passionate team of developers, chefs, writers, and designers working behind the scenes to make FoodieVerse a delightful experience for everyone.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="text-green-500">Our Vision</h2>
          <p>
            We envision a global platform where anyone — from any background — can come and contribute their food culture, traditions, and creativity. FoodieVerse isn’t just a website; it’s a shared table across the world.
          </p>
        </section>

        <section>
          <h2 className="text-green-500">Want to Join Us?</h2>
          <p>
            Sign up and start sharing your own food blogs, recipes, and experiences. Got questions or ideas? Feel free to reach out via our contact page.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
