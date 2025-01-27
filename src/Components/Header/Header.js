import React from "react";
import "./Header.css";
import Logo from "../Images/Logo.png";
import { IconeHome } from "../Icons/IconHome";
import { IconSearch } from "../Icons/IconSearch";
import { IconList } from "../Icons/IconList";
import { IconCart } from "../Icons/IconCart";
import { Link} from "react-router-dom";

export const Header = () => {
  // const navigate = useNavigate();
  // const [iscreating, Setiscreating] = useState(false);

  // const handleCreateProductNavigate = () => {
  //   navigate("/create");
  // };
  return (
    <header className="header">
      <div className="logo">
        {" "}
        <img src={Logo} alt="Funiro Logo" /> Funiro
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="icons">
        <IconeHome />
        <IconSearch />
        <IconList />
        <IconCart />
      </div>
      <Link to="/create" className="create-button">Create Product</Link>
    </header>
  );
};
