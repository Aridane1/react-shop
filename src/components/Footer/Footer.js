import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import { faRss } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="information">
          <ul>
            <p>Información</p>
            <li>
              <a href="/find-us-at" className="footer-a">
                Encuentranos
              </a>
            </li>
            <li>
              <a href="/about-us" className="footer-a">
                Quiénes somos
              </a>
            </li>
            <li>
              <a href="/comment" className="footer-a">
                Comentarios
              </a>
            </li>
            <a href="/infProducts.xml" className="footer-a">
                <FontAwesomeIcon icon={faRss} />
              </a>
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
        <p>© 2023 MANGO Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
export default Footer;
