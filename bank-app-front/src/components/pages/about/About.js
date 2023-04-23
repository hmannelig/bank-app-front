import "./About.css";
import { Link } from "react-router-dom";

<Link to="/about">
  <button variant="outlined">Sign up</button>
</Link>;

function About() {
  return (
    <div className="About">
      <header className="About-header"></header>
      <p>About Page</p>
    </div>
  );
}

export default About;
