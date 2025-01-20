import  { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaUtensils, FaWineGlassAlt, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFD93D',
    dark: '#2C3E50',
    light: '#ECF0F1',
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Lato', sans-serif",
  },
};

// Componentes reutilizáveis
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.background || theme.colors.light};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${theme.colors.dark};
  font-family: ${theme.fonts.heading};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${theme.colors.primary};
    margin: 1rem auto;
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

  &:hover {
    background-color: ${theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Componentes específicos
const HeroSection = styled(Section)`
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
  animation: ${fadeIn} 2s ease-out;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-family: ${theme.fonts.heading};
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-family: ${theme.fonts.body};
  }
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SpecialtyCard = styled.div`
  background-color: ${theme.colors.light};
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.heading};
  }

  p {
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.body};
  }

  svg {
    font-size: 3rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
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
  gap: 1rem;

  input, select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
  }

  button {
    grid-column: span 2;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.light};
    padding: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.colors.accent};
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
  bottom: 2rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

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

function Home() {
  const [people, setPeople] = useState('');

  const handlePeopleChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) >= 10 && parseInt(value) <= 100)) {
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
              { icon: <FaUtensils />, title: 'Feijão Tropeiro', description: 'Autêntica receita mineira' },
              { icon: <FaPizzaSlice />, title: 'Pizza Margherita', description: 'Sabor italiano com toque mineiro' },
              { icon: <FaWineGlassAlt />, title: 'Torresmo', description: 'Crocante e irresistível' },
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
          <p>Fundado em 2020, o Minas Tchê traz o melhor da culinária mineira aliada a deliciosas pizzas artesanais. Nossa missão é proporcionar uma experiência gastronômica única, combinando tradição e inovação.</p>
          <Button to="/sobre">Conheça Nossa História</Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Nossa Galeria</SectionTitle>
          <GalleryGrid>
            {[1, 2, 3, 4].map((num) => (
              <GalleryImage key={num} src={`/images/prato${num}.jpg`} alt={`Prato ${num}`} />
            ))}
          </GalleryGrid>
        </Container>
      </Section>

      <Section background={theme.colors.secondary}>
        <Container>
          <SectionTitle>O que nossos clientes dizem</SectionTitle>
          {[
            { name: 'Maria Silva', comment: 'A melhor pizza que já comi! O ambiente é acolhedor e o atendimento é excelente.' },
            { name: 'João Santos', comment: 'O feijão tropeiro é simplesmente incrível. Me senti em Minas Gerais!' },
          ].map((testimonial, index) => (
            <TestimonialCard key={index}>
              <StarRating>
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
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
                {['Home', 'Cardápio', 'Promoções', 'Sobre', 'Contato'].map((item) => (
                  <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link></li>
                ))}
              </ul>
            </FooterSection>
            <FooterSection>
              <h3>Contato</h3>
              <ul>
                <li><FaPhone /> (11) 1234-5678</li>
                <li><FaEnvelope /> contato@minastche.com</li>
                <li><FaMapMarkerAlt /> Rua das Delícias, 123 - São Paulo, SP</li>
              </ul>
            </FooterSection>
          </FooterGrid>
        </Container>
      </Footer>
    </>
  );
}

export default Home;
