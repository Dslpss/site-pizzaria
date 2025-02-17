import { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import {
  FaPizzaSlice,
  FaUtensils,
  FaWineGlassAlt,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Tema
const theme = {
  colors: {
    primary: "#D4AF37",
    secondary: "#2E4052",
    accent: "#C41E3A",
    dark: "#1A1A1A",
    light: "#F5F5F5",
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
  },
};

// Componentes reutilizáveis
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Section = styled.section`
  padding: 6rem 0;
  background-color: ${(props) => props.background || theme.colors.light};

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${theme.colors.dark};
  font-family: ${theme.fonts.heading};
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${theme.colors.primary};
    margin: 1rem auto;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled(Link)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 12px 24px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-family: ${theme.fonts.body};
  position: relative;
  z-index: 2;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    background-color: ${theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9em;
  }
`;

// Componentes específicos
const HeroSection = styled(Section)`
  background-image: url("/images/hero-background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.light};
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  animation: ${fadeIn} 2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    font-family: ${theme.fonts.heading};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
    font-family: ${theme.fonts.body};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    position: relative;

    @media (max-width: 768px) {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
  }
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SpecialtyCard = styled.div`
  background-color: ${theme.colors.light};
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary},
      ${theme.colors.accent}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }

  h3 {
    font-size: 1.8rem;
    margin: 1.5rem 0;
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.heading};
  }

  p {
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.body};
    line-height: 1.6;
  }

  svg {
    font-size: 3.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialCard = styled.div`
  background-color: ${theme.colors.light};
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const StarRating = styled.div`
  color: ${theme.colors.accent};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ReservationSection = styled(Section)`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
`;

const ReservationTitle = styled(SectionTitle)`
  color: ${theme.colors.light};
`;

const ReservationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  input,
  select {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    border: 2px solid transparent;
    background-color: rgba(255, 255, 255, 0.9);
    font-family: ${theme.fonts.body};
    transition: all 0.3s ease;

    &:focus {
      border-color: ${theme.colors.primary};
      outline: none;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
    }
  }

  button {
    grid-column: span 2;
    background: linear-gradient(
      45deg,
      ${theme.colors.primary},
      ${theme.colors.accent}
    );
    color: ${theme.colors.light};
    padding: 1.2rem;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    z-index: 2;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;

    button {
      grid-column: 1;
    }
  }
`;

const PeopleInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 100%;
  }

  span {
    white-space: nowrap;
  }
`;

const FloatingMenu = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 5rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 95;

  @media (max-width: 768px) {
    right: 1rem;
    bottom: 4.5rem;
    padding: 0.8rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = styled.footer`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
  padding: 4rem 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: ${theme.fonts.heading};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${theme.colors.light};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.accent};
    }
  }
`;

// Novo componente para navegação mobile
const MobileNav = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.dark};
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
    color: ${theme.colors.light};
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

function Home() {
  const [people, setPeople] = useState("");

  const handlePeopleChange = (e) => {
    const value = e.target.value;
    if (value === "" || (parseInt(value) >= 10 && parseInt(value) <= 100)) {
      setPeople(value);
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeroSection>
        <HeroContent>
          <h1>Bem-vindo ao Minas Tchê</h1>
          <p>O melhor da culinária mineira e as mais deliciosas pizzas!</p>
          <Button to="/cardapio">Ver Cardápio</Button>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Nossas Especialidades</SectionTitle>
          <SpecialtiesGrid>
            {[
              {
                icon: <FaUtensils />,
                title: "Feijão Tropeiro",
                description: "Autêntica receita mineira",
              },
              {
                icon: <FaPizzaSlice />,
                title: "Pizza Margherita",
                description: "Sabor italiano com toque mineiro",
              },
              {
                icon: <FaWineGlassAlt />,
                title: "Torresmo",
                description: "Crocante e irresistível",
              },
            ].map((specialty, index) => (
              <SpecialtyCard key={index}>
                {specialty.icon}
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </SpecialtyCard>
            ))}
          </SpecialtiesGrid>
        </Container>
      </Section>

      <Section background={theme.colors.accent}>
        <Container>
          <SectionTitle>Promoção do Dia</SectionTitle>
          <p>Pizza grande + refrigerante 2L por apenas R$ 59,90!</p>
          <Button to="/promocoes">Ver Mais Promoções</Button>
        </Container>
      </Section>

      <Section background={theme.colors.secondary}>
        <Container>
          <SectionTitle>Sobre o Minas Tchê</SectionTitle>
          <p>
            Fundado em 2020, o Minas Tchê traz o melhor da culinária mineira
            aliada a deliciosas pizzas artesanais. Nossa missão é proporcionar
            uma experiência gastronômica única, combinando tradição e inovação.
          </p>
          <Button to="/sobre">Conheça Nossa História</Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Nossa Galeria</SectionTitle>
          <GalleryGrid>
            {[1, 2, 3, 4].map((num) => (
              <GalleryImage
                key={num}
                src={`/images/prato${num}.jpg`}
                alt={`Prato ${num}`}
              />
            ))}
          </GalleryGrid>
        </Container>
      </Section>

      <Section background={theme.colors.secondary}>
        <Container>
          <SectionTitle>O que nossos clientes dizem</SectionTitle>
          {[
            {
              name: "Maria Silva",
              comment:
                "A melhor pizza que já comi! O ambiente é acolhedor e o atendimento é excelente.",
            },
            {
              name: "João Santos",
              comment:
                "O feijão tropeiro é simplesmente incrível. Me senti em Minas Gerais!",
            },
          ].map((testimonial, index) => (
            <TestimonialCard key={index}>
              <StarRating>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </StarRating>
              <p>&quot;{testimonial.comment}&quot;</p>
              <p>- {testimonial.name}</p>
            </TestimonialCard>
          ))}
        </Container>
      </Section>

      <ReservationSection>
        <Container>
          <ReservationTitle>Faça Sua Reserva</ReservationTitle>
          <ReservationForm>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telefone" required />
            <PeopleInput>
              <input
                type="number"
                min="10"
                max="100"
                value={people}
                onChange={handlePeopleChange}
                placeholder="Número de pessoas (mín. 10)"
                required
              />
              <span>pessoas</span>
            </PeopleInput>
            <input type="date" required />
            <input type="time" required />
            <button type="submit">Reservar</button>
          </ReservationForm>
        </Container>
      </ReservationSection>

      <FloatingMenu>
        <FaPizzaSlice size={24} />
      </FloatingMenu>

      <Footer>
        <Container>
          <FooterGrid>
            <FooterSection>
              <h3>Minas Tchê</h3>
              <p>O melhor da culinária mineira e as mais deliciosas pizzas!</p>
            </FooterSection>
            <FooterSection>
              <h3>Links Rápidos</h3>
              <ul>
                {["Home", "Cardápio", "Promoções", "Sobre", "Contato"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </FooterSection>
            <FooterSection>
              <h3>Contato</h3>
              <ul>
                <li>
                  <FaPhone /> (11) 1234-5678
                </li>
                <li>
                  <FaEnvelope /> contato@minastche.com
                </li>
                <li>
                  <FaMapMarkerAlt /> Rua das Delícias, 123 - São Paulo, SP
                </li>
              </ul>
            </FooterSection>
          </FooterGrid>
        </Container>
      </Footer>

      <MobileNav>
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
      </MobileNav>
    </>
  );
}

export default Home;
