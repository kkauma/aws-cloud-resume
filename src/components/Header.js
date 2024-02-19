import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>Kyle Kauma</h1>

        <p className="location">Scottsdale, Arizona</p>
        <p className="contact-info">651-983-6096 | kylekauma@gmail.com</p>
        <p className="linkedin">
          <a href="https://www.linkedin.com/in/kylekauma/">LinkedIn</a>
        </p>
        <p className="github">
          <a href="https://github.com/kkauma">GitHub</a>
        </p>
      </div>
    </>
  );
}
