import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>Kyle Kauma</h1>

        <p className="location">Scottsdale, Arizona</p>
        <p className="contact-info">651-983-6096 | kylekauma@gmail.com</p>
        <p className="linkedin">
          <a href="https://www.linkedin.com/in/kylekauma/">LinkedIn</a>{" "}
          <span>
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-logo" />
          </span>
        </p>
        <p className="github">
          <a href="https://github.com/kkauma">GitHub</a>
        </p>
        <p className="social-media">
          LinkedIn{" "}
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-logo" /> |
          GitHub{" "}
          <FontAwesomeIcon icon={faSquareGithub} className="github-logo" />
        </p>
      </div>
    </>
  );
}
