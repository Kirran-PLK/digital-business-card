import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faSquareReddit,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="icons-wrapper">
            <FontAwesomeIcon icon={faSquareFacebook} className="icons"/>
            <FontAwesomeIcon icon={faSquareTwitter} className="icons"/>
            <FontAwesomeIcon icon={faSquareInstagram} className="icons"/>
            <FontAwesomeIcon icon={faSquareReddit} className="icons"/>
        </div>      
      </div>
    </footer>
  );
}
