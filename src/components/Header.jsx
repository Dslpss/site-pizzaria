import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const breakpoints = {
  smallMobile: '320px',
  mobile: '375px',
  largeMobile: '414px',
  tablet: '768px',
  desktop: '1024px',
};

const StyledHeader = styled.header`
  background-color: #FF4136;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 15px;
    flex-direction: column;
  }
`;

const Logo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }
`;

const LogoInner = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: #FF4136;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Playfair Display', serif;
  line-height: 0.8;

  @media (max-width: ${breakpoints.mobile}) {
    width: 48px;
    height: 48px;
  }
`;

const LogoText = styled.span`
  color: #000;
  font-weight: 900;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
`;

const LogoM = styled(LogoText)`
  font-size: 2.2rem;
  margin-bottom: -0.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const LogoT = styled(LogoText)`
  font-size: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`;

const MobileNav = styled.nav`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FF4136;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1000;
    padding-top: 80px;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
    }
  }

  li {
    margin-left: 20px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 15px 0;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 5px 0;
    transition: all 0.2s ease;
    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.2rem;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: white;
      transition: width 0.2s ease;
    }

    &::before {
      content: '🍕';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%) scale(0);
      opacity: 0;
      transition: all 0.2s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover::before {
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const MobileTitle = styled.h1`
  display: none;
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  }
`;

const BrandName = styled.h1`
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin: 0;
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DesktopNav = styled.nav`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 5px 0;
    transition: all 0.2s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: white;
      transition: width 0.2s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isNavOpen]);

  return (
    <StyledHeader>
      <HeaderContainer>
        <MobileHeader>
          <Logo>
            <LogoInner>
              <LogoM>M</LogoM>
              <LogoT>T</LogoT>
            </LogoInner>
          </Logo>
          <BrandName>Minas Tchê</BrandName>
          <MenuToggle onClick={toggleNav}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>
        </MobileHeader>

        {/* Menu Desktop */}
        <DesktopNav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/promocoes">Promoções</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </DesktopNav>

        {/* Menu Mobile */}
        <MobileNav $isOpen={isNavOpen}>
          <MobileTitle $isOpen={isNavOpen}>Minas Tchê</MobileTitle>
          <ul>
            <li><Link to="/" onClick={() => setIsNavOpen(false)}>Início</Link></li>
            <li><Link to="/cardapio" onClick={() => setIsNavOpen(false)}>Cardápio</Link></li>
            <li><Link to="/promocoes" onClick={() => setIsNavOpen(false)}>Promoções</Link></li>
            <li><Link to="/sobre" onClick={() => setIsNavOpen(false)}>Sobre</Link></li>
            <li><Link to="/contato" onClick={() => setIsNavOpen(false)}>Contato</Link></li>
          </ul>
        </MobileNav>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
