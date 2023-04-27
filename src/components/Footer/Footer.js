import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="information">
          <ul>
            <p>Informacion</p>
            <li>
              <a href="/contact" className="footer-a">
                Contactactanos
              </a>
            </li>
            <li>
              <a href="/find-us-at" className="footer-a">
                Encuentranos
              </a>
            </li>
            <li>
              <a href="/about-us" className="footer-a">
                Quienes somos
              </a>
            </li>
          </ul>
        </div>

        <div className="social">
          <ul>
            <p>Redes sociales</p>
            <li>
              <a href="https://twitter.com" className="footer-a">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Aridane1" className="footer-a">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Aridane1" className="footer-a">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights">
        <p>
          © 2023 MANGO Todos los derechos reservados</p>
      </div>
    </div>
  );
}
export default Footer;
