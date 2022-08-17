import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <br></br>
      <a
        className="footer-links"
        href="https://www.linkedin.com/in/phoenixkhan"
      >
        Phoenix Khan |
      </a>
      <a className="footer-links" href="https://github.com/yuniapak">
        {" "}
        Yun Pakhomova{" "}
      </a>
      <a className="footer-links" href="https://www.linkedin.com/in/jay-leung1">
        | Jay Leung
      </a>
    </div>
  );
}

export default Footer;
