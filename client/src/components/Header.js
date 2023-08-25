import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Outfit Agency</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/outfits"}>Outfits</Link>
            </li>
            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
