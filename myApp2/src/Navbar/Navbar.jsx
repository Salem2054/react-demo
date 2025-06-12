import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="container py-2 bg-dark rounded-4 mt-3  ">
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="About">About</Link>
      </li>
      <li>
        <Link to="Products">products</Link>
      </li>
      <li>
        <Link to="Contact">Contact</Link>
      </li>
    </ul>
  );
}
export default Navbar;
