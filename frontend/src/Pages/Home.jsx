import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/pages/Home.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import italian from '../assets/Italian.jpg';
import chinese from '../assets/Chinese.avif';
import pakistani from '../assets/Pakistani.jpg';
import indian from '../assets/Indian.jpg';
import mexican from '../assets/Mexican.jpg';
import japanese from '../assets/Japanese.jpg';
import Biryani from '../assets/Biryani.jpg';
import ButterChicken from '../assets/ButterChicken.jpg';
import FriedRice from '../assets/FriedRiceIstock.jpg';
import Sushi from '../assets/Sushi.png';
import Tacos from '../assets/Tacos.jpg';
import Spaghetti from '../assets/Spaghetti.jpg';

function Home() {
  return (
    <div className='bg-dark'>
      <Navbar />

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-white text-center bg-dark "
        style={{
          height: '80vh',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          className="p-4 rounded"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', maxWidth: '700px' }}
        >
          <h1 className="display-3 fw-bold">Welcome to Foodie</h1>
          <p className="lead fs-4">
            Discover delicious recipes, food facts, and health tips to delight your taste buds.
          </p>
          <div className="mt-4">
            <Link to="/recipes" className="btn btn-primary btn-lg mx-2">
              Explore Recipes
            </Link>
            <Link to="/blog" className="btn btn-success btn-lg mx-2">
              Read Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Cards */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-4">Why choose us?</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <Link to="/blog/fresh-recipes" className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top"
                    alt="Fresh Recipes"
                    style={{objectFit:'cover', width:"100%", height:280}}
                    />

                  <div className="card-body">
                    <h5 className="card-title">Fresh Recipes</h5>
                    <p className="card-text">
                      Handpicked and tested recipes to satisfy your cravings. From quick snacks to elaborate meals, find recipes that suit every palate.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <Link to="/blog/insightful-articles" className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top"
                    alt="Insightful Articles"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Insightful Articles</h5>
                    <p className="card-text">
                      Stay informed with food facts, nutrition, and cooking tips. Learn the science and stories behind your favorite foods.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <Link to="/blog/community" className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top"
                    alt="Community"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Community</h5>
                    <p className="card-text">
                      Join fellow food lovers and share your experiences, recipes, and tips. Connect with like-minded food enthusiasts worldwide.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cuisines py-5 bg-dark">
        <div className="container">
            <h2 className="text-center mb-4 text-light">Explore Our Cuisines</h2>
            <div className="row justify-content-center">
            
            {/* Italian Cuisine */}
            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                <img
                    src={italian}
                    className="card-img-top"
                    alt="Italian Cuisine"
                    style={{objectFit:"scale-down", width:"100%"}}
                    />

                <div className="card-body text-center">
                    <h5 className="card-title">Italian</h5>
                    <p className="card-text">Pasta, pizza, risotto — the heart of Italy.</p>
                    <a href="/cuisine/italian" className="btn btn-success">Explore</a>
                </div>
                </div>
            </div>

            {/* Indian Cuisine */}
            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                <img src={indian} className="card-img-top" alt="Indian Cuisine" style={{objectFit:"cover", width:"100%"}} />
                <div className="card-body text-center">
                    <h5 className="card-title">Indian</h5>
                    <p className="card-text">Spices, aroma, and bold flavors from India.</p>
                    <a href="/cuisine/indian" className="btn btn-success">Explore</a>
                </div>
                </div>
            </div>

            {/* Chinese Cuisine */}
            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                <img src={chinese} className="card-img-top" alt="Chinese Cuisine" style={{objectFit:"cover", width:"100%"}} />
                <div className="card-body text-center">
                    <h5 className="card-title">Chinese</h5>
                    <p className="card-text">Savory dumplings, noodles, and stir fry dishes.</p>
                    <a href="/cuisine/chinese" className="btn btn-success">Explore</a>
                </div>
                </div>
            </div>

            {/* Mexican Cuisine */}
            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                <img src={mexican} className="card-img-top" alt="Mexican Cuisine" style={{objectFit:"cover", width:"100%"}} />
                <div className="card-body text-center">
                    <h5 className="card-title">Mexican</h5>
                    <p className="card-text">Tacos, nachos, and a burst of Latin flavors.</p>
                    <a href="/cuisine/mexican" className="btn btn-success">Explore</a>
                </div>
                </div>
            </div>

            {/* Japanese Cuisine */}
            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                <img src={japanese} className="card-img-top" alt="Japanese Cuisine" style={{objectFit:"cover", width:"100%"}} />
                <div className="card-body text-center">
                    <h5 className="card-title">Japanese</h5>
                    <p className="card-text">Sushi, ramen, and minimalist deliciousness.</p>
                    <a href="/cuisine/japanese" className="btn btn-success">Explore</a>
                </div>
                </div>
            </div>

            {/* Pakistani Cuisine */}
            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                <img src={pakistani} className="card-img-top" alt="Thai Cuisine" style={{objectFit:"cover", width:"100%"}} />
                <div className="card-body text-center">
                    <h5 className="card-title">Pakistani</h5>
                    <p className="card-text">Fresh herbs, sweet, sour, and spicy balance.</p>
                    <a href="/cuisine/thai" className="btn btn-success">Explore</a>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
        <section className="recipes-section py-5 bg-dark text-light">
          <div className="container">
            <h2 className="text-center mb-5">Popular Recipes by Cuisine</h2>

            <div className="row">
              {/* Italian Recipe Card */}
              <div className="col-md-4 mb-4">
                <Link to="/recipes/spaghetti-carbonara" className="text-decoration-none text-dark">
                  <div className="card h-100 shadow">
                    <img src={Spaghetti} className="card-img-top" alt="Spaghetti Carbonara" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Spaghetti Carbonara</h5>
                      <p className="card-text">A creamy Roman classic with pancetta and eggs.</p>
                      <span className="btn btn-success">View Recipe</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Pakistani Recipe Card */}
              <div className="col-md-4 mb-4">
                <Link to="/recipes/chicken-biryani" className="text-decoration-none text-dark">
                  <div className="card h-100 shadow">
                    <img src={Biryani} className="card-img-top" alt="Chicken Biryani" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Chicken Biryani</h5>
                      <p className="card-text">A flavorful rice and chicken dish from Pakistan.</p>
                      <span className="btn btn-success">View Recipe</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Indian Recipe Card */}
              <div className="col-md-4 mb-4">
                <Link to="/recipes/butter-chicken" className="text-decoration-none text-dark">
                  <div className="card h-100 shadow">
                    <img src={ButterChicken} className="card-img-top" alt="Butter Chicken" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Butter Chicken</h5>
                      <p className="card-text">Rich, creamy, and full of aromatic spices.</p>
                      <span className="btn btn-success">View Recipe</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Japanese Recipe Card */}
              <div className="col-md-4 mb-4">
                <Link to="/recipes/sushi" className="text-decoration-none text-dark">
                  <div className="card h-100 shadow">
                    <img src={Sushi} className="card-img-top" alt="Sushi" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Sushi</h5>
                      <p className="card-text">A Japanese delicacy of vinegared rice and seafood.</p>
                      <span className="btn btn-success">View Recipe</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Mexican Recipe Card */}
              <div className="col-md-4 mb-4">
                <Link to="/recipes/tacos" className="text-decoration-none text-dark">
                  <div className="card h-100 shadow">
                    <img src={Tacos} className="card-img-top" alt="Tacos" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Tacos</h5>
                      <p className="card-text">Classic Mexican street food bursting with flavor.</p>
                      <span className="btn btn-success">View Recipe</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Chinese Recipe Card */}
              <div className="col-md-4 mb-4">
                <Link to="/recipes/fried-rice" className="text-decoration-none text-dark">
                  <div className="card h-100 shadow">
                    <img src={FriedRice} className="card-img-top" alt="Fried Rice" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Fried Rice</h5>
                      <p className="card-text">Wok-tossed rice with vegetables and savory sauces.</p>
                      <span className="btn btn-success">View Recipe</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>


      <Footer />
    </ div>
  );
}

export default Home;
