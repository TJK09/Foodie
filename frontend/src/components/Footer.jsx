import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row">

          {/* About */}
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Foodie</h5>
            <p>
              Your go-to place for delicious recipes, food facts, and culinary inspiration. Bringing food lovers together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h6>
            <p><Link to="/" className="text-white text-decoration-none">Home</Link></p>
            <p><Link to="/recipes" className="text-white text-decoration-none">Recipes</Link></p>
            <p><Link to="/Blog" className="text-white text-decoration-none">Blog</Link></p>
            <p><Link to="/about" className="text-white text-decoration-none">About</Link></p>
            <p><Link to="/contact" className="text-white text-decoration-none">Contact</Link></p>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h6>
            <p><i className="bi bi-geo-alt-fill me-3"></i>123 Foodie St, Flavor Town</p>
            <p><i className="bi bi-envelope-fill me-3"></i>support@foodie.com</p>
            <p><i className="bi bi-phone-fill me-3"></i>+1 234 567 8900</p>
          </div>

          {/* Social Media */}
          <div className="col-md-6 col-lg-4 col-xl-4 mx-auto mb-4">
            <h6 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h6>
            <p>
              <a href="https://www.facebook.com/taimur.jan.141877/" className="text-white d-flex align-items-center mb-2 fs-5" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook me-2"></i> Facebook
              </a>
            </p>
            <p>
              <a href="https://x.com/TaimurKhtk_Jan" className="text-white d-flex align-items-center mb-2 fs-5" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter me-2"></i> Twitter
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/khattak_taimur/" className="text-white d-flex align-items-center mb-2 fs-5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram me-2"></i> Instagram
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/taimur-jan-69518b297/" className="text-white d-flex align-items-center mb-2 fs-5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </a>
            </p>
          </div>

        </div>

        <hr className="mb-4" />
        <div className="text-center">
          &copy; {new Date().getFullYear()} Foodie. Designed by Taimur Jan.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
