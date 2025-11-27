// frontend/src/components/Footer.js
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* About Section */}
          <div className="footer-section">
            <h3>✨ BeautéShop</h3>
            <p>
              Votre destination beauté en ligne. Des produits cosmétiques 
              de qualité pour sublimer votre routine quotidienne.
            </p>

            <div className="social-links">
              {/* Désactivé mais sans erreur d’accessibilité */}
              <button aria-label="Facebook" className="social-btn">📘</button>
              <button aria-label="Instagram" className="social-btn">📷</button>
              <button aria-label="Twitter" className="social-btn">🐦</button>
              <button aria-label="Pinterest" className="social-btn">📌</button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/products">Nos produits</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4>Catégories</h4>
            <ul>
              <li><Link to="/products?category=visage">Soins Visage</Link></li>
              <li><Link to="/products?category=corps">Soins Corps</Link></li>
              <li><Link to="/products?category=cheveux">Soins Cheveux</Link></li>
              <li><Link to="/products?category=maquillage">Maquillage</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4>Service client</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Livraison</Link></li>
              <li><Link to="/returns">Retours</Link></li>
              <li><Link to="/terms">Conditions générales</Link></li>
              <li><Link to="/privacy">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Recevez nos offres exclusives</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Votre email"
                required
              />
              <button type="submit">S'inscrire</button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2024 BeautéShop. Tous droits réservés.</p>
          <div className="payment-methods">
            <span>💳</span>
            <span>🅿️</span>
            <span>🔒</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
