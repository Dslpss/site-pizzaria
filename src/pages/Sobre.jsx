import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHeart, FaPizzaSlice, FaHistory } from "react-icons/fa";

const SobreSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 50px;
  font-family: "Playfair Display", serif;
  background: linear-gradient(45deg, #ff4b2b, #ff416c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #ff4b2b, #ff416c);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  box-shadow: 0 10px 20px rgba(255, 75, 43, 0.3);
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-family: "Playfair Display", serif;
  color: #ff4b2b;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const StorySection = styled.div`
  margin-top: 80px;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ff4b2b, transparent);
  }
`;

const StoryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: "Playfair Display", serif;
  color: #ff4b2b;
`;

const StoryText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
`;

function Sobre() {
  return (
    <SobreSection>
      <Container>
        <Title>Nossa História</Title>

        <Grid>
          <Card
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <IconWrapper>
              <FaHistory />
            </IconWrapper>
            <CardTitle>Tradição</CardTitle>
            <CardText>
              Desde 1995, servindo as melhores pizzas com receitas tradicionais
              passadas de geração em geração.
            </CardText>
          </Card>

          <Card
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <IconWrapper>
              <FaPizzaSlice />
            </IconWrapper>
            <CardTitle>Qualidade</CardTitle>
            <CardText>
              Ingredientes selecionados e massas preparadas diariamente para
              garantir o melhor sabor.
            </CardText>
          </Card>

          <Card
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <IconWrapper>
              <FaHeart />
            </IconWrapper>
            <CardTitle>Paixão</CardTitle>
            <CardText>
              Amor pela gastronomia e dedicação em cada pizza que preparamos
              para nossos clientes.
            </CardText>
          </Card>
        </Grid>

        <StorySection>
          <StoryTitle>Nossa Jornada</StoryTitle>
          <StoryText>
            O Minas Tchê nasceu da união entre a tradicional culinária mineira e
            o amor pela pizza. Fundado por uma família que migrou do sul para
            Minas Gerais, nosso restaurante combina o melhor dos dois mundos: o
            aconchego da comida mineira e a arte da pizza italiana.
            <br />
            <br />
            Hoje, somos referência na cidade, conhecidos por nossas pizzas
            artesanais e pelo ambiente familiar acolhedor. Nossa missão é
            proporcionar momentos especiais através de sabores únicos e um
            atendimento caloroso.
          </StoryText>
        </StorySection>
      </Container>
    </SobreSection>
  );
}

export default Sobre;
