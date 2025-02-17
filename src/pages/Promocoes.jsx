import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaTag,
  FaPizzaSlice,
  FaCalendarAlt,
  FaUsers,
  FaClock,
} from "react-icons/fa";

const PromoSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  color: #fff;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
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

const PromoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 12px 30px rgba(255, 75, 43, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff4b2b, #ff416c);
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
  color: white;
`;

const PromoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-family: "Playfair Display", serif;
  color: #ff4b2b;
`;

const PromoDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

const PromoPrice = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #ff4b2b;
  font-family: "Playfair Display", serif;
  margin: 15px 0;
`;

const PromoDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

function Promocoes() {
  const promocoes = [
    {
      title: "Terça do Rodízio",
      description: "Rodízio de pizzas com 20% de desconto toda terça-feira!",
      normalPrice: "R$ 75,00",
      promoPrice: "R$ 60,00",
      icon: <FaPizzaSlice />,
      days: "Terças",
      time: "19h às 23h",
    },
    {
      title: "Happy Hour",
      description:
        "De segunda a sexta, das 17h às 19h, todas as bebidas com 30% de desconto!",
      icon: <FaTag />,
      days: "Seg a Sex",
      time: "17h às 19h",
    },
    {
      title: "Domingo em Família",
      description: "Aos domingos, crianças até 10 anos não pagam o rodízio!",
      icon: <FaUsers />,
      days: "Domingos",
      time: "Todo dia",
    },
  ];

  return (
    <PromoSection>
      <Container>
        <Title>Promoções</Title>
        <Grid>
          {promocoes.map((promo, index) => (
            <PromoCard
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <IconWrapper>{promo.icon}</IconWrapper>
              <PromoTitle>{promo.title}</PromoTitle>
              <PromoDescription>{promo.description}</PromoDescription>
              {promo.promoPrice && (
                <PromoPrice>
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontSize: "1.5rem",
                      opacity: 0.5,
                    }}>
                    {promo.normalPrice}
                  </span>
                  <br />
                  {promo.promoPrice}
                </PromoPrice>
              )}
              <PromoDetails>
                <span>
                  <FaCalendarAlt /> {promo.days}
                </span>
                <span>
                  <FaClock /> {promo.time}
                </span>
              </PromoDetails>
            </PromoCard>
          ))}
        </Grid>
      </Container>
    </PromoSection>
  );
}

export default Promocoes;
