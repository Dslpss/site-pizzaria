import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPizzaSlice, FaUtensils, FaStar, FaPhone } from "react-icons/fa";

const NavContainer = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1a1a1a;
  padding: 0.8rem 1rem;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: block;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    svg {
      font-size: 1.5rem;
    }
  }
`;

function MobileNav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">
            <FaPizzaSlice />
            Home
          </Link>
        </li>
        <li>
          <Link to="/cardapio">
            <FaUtensils />
            Cardápio
          </Link>
        </li>
        <li>
          <Link to="/promocoes">
            <FaStar />
            Promoções
          </Link>
        </li>
        <li>
          <Link to="/contato">
            <FaPhone />
            Contato
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default MobileNav; 