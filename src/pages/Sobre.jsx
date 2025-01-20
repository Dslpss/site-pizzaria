import "react";
import styled from "styled-components";
import { FaPhone, FaGlobe, FaMapMarkerAlt, FaUtensils, FaShoppingBag } from "react-icons/fa";

const SobreSection = styled.section`
  padding: 80px 0;
  background-color: #f8f8f8;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  color: #ff4136;
  font-size: 3rem;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: justify;
`;

const SectionTitle = styled.h2`
  color: #ff4136;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ContactInfo = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.span`
  margin-right: 15px;
  color: #ff4136;
  font-size: 1.2rem;
`;

const Highlight = styled.span`
  color: #ff4136;
  font-weight: 600;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('URL_DA_IMAGEM_DO_RESTAURANTE');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 40px;
`;

const CTAButton = styled.button`
  background-color: #ff4136;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e30c00;
  }
`;

function Sobre() {
  return (
    <SobreSection>
      <Container>
        <Title>Bem-vindo ao Minas Tchê</Title>

        <ImageContainer />

        <SectionTitle>Nossa História</SectionTitle>
        <Paragraph>
          A <Highlight>Pizzaria e Restaurante Minas Tchê</Highlight> oferece uma experiência
          gastronômica completa, com almoço em buffet variado, com destaque para
          as massas, e um delicioso jantar com diversas opções de pizzas,
          incluindo o popular rodízio. Nosso ambiente é simples e acolhedor,
          perfeito para reunir a família e amigos.
        </Paragraph>

        <SectionTitle>Nosso Menu</SectionTitle>
        <Paragraph>
          À noite, nosso rodízio oferece uma grande variedade de sabores de
          pizza, desde os clássicos até criações exclusivas, com opções para
          todos os paladares, incluindo vegetarianos. No almoço, oferecemos um
          buffet variado com foco em massas, saladas frescas e acompanhamentos
          deliciosos, perfeito para uma refeição rápida e saborosa.
        </Paragraph>

        <Paragraph>
          Utilizamos <Highlight>ingredientes frescos e selecionados</Highlight> para garantir o melhor
          sabor em cada prato.
        </Paragraph>

        <SectionTitle>Retirada no Local</SectionTitle>
        <Paragraph>
          Além da experiência no restaurante, oferecemos o serviço de retirada para
          sua maior comodidade. Faça seu pedido por telefone e retire sua refeição
          diretamente em nosso estabelecimento. É uma ótima opção para quem deseja
          desfrutar de nossas delícias no conforto de casa ou no escritório.
        </Paragraph>

        <CTAButton>Faça sua Reserva</CTAButton>

        <ContactInfo>
          <ContactItem>
            <Icon><FaMapMarkerAlt /></Icon>
            Av. Cesário Alvim, 2385 - Nossa Sra. Aparecida, Uberlândia - MG
          </ContactItem>
          <ContactItem>
            <Icon><FaPhone /></Icon>
            [Número de telefone]
          </ContactItem>
          <ContactItem>
            <Icon><FaGlobe /></Icon>
            [Site, se houver]
          </ContactItem>
          <ContactItem>
            <Icon><FaUtensils /></Icon>
            Aberto de Terça a Domingo, das 11h às 23h
          </ContactItem>
          <ContactItem>
            <Icon><FaShoppingBag /></Icon>
            Retirada disponível no local
          </ContactItem>
        </ContactInfo>
      </Container>
    </SobreSection>
  );
}

export default Sobre;
