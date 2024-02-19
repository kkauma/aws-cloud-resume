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
        <p className="social-media">
          <a
            href="https://www.linkedin.com/in/kylekauma/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-logo" /> |{" "}
          <a href="https://github.com/kkauma" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          <FontAwesomeIcon icon={faSquareGithub} className="github-logo" />
        </p>
      </div>
    </>
  );
}
