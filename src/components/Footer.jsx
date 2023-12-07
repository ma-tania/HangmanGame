import "../styles/layout/_footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/">
              A jugar
            </Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link active" to="/instructions">
              ¿Cómo se juega?
            </Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/options">
              Escribe tú palabra
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer__info">
        <small className="footer__info-copy">© Tania Moreno Aguayo</small>
        <span>
          <a className="footer__info-icon" href="https://www.linkedin.com/in/taniamorenoaguayo/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
        <a className="footer__info-icon" href="https://github.com/ma-tania" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></span>
        </div>
      
    </footer>
  );
};

export default Footer;
