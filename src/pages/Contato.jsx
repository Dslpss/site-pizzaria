import { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const breakpoints = {
  smallMobile: '320px',
  mobile: '375px',
  largeMobile: '414px',
  tablet: '768px',
  desktop: '1024px',
};

const ContatoSection = styled.section`
  padding: 40px 0;
  background-color: #f8f8f8;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  color: #ff4136;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactForm = styled.form`
  flex: 1;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 12px;
  }
`;

const Icon = styled.span`
  margin-right: 15px;
  color: #ff4136;
  font-size: 1.2rem;
  margin-top: 3px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-right: 10px;
  }
`;

const InfoText = styled.span`
  line-height: 1.4;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 150px;
  font-size: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    font-size: 0.9rem;
    height: 120px;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff4136;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #e30c00;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    padding: 10px 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 8px 12px;
  }
`;

function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContatoSection>
      <Container>
        <Title>Entre em Contato</Title>
        <Subtitle>Estamos ansiosos para ouvir você!</Subtitle>
        <ContactWrapper>
          <ContactInfo>
            <InfoItem>
              <Icon><FaPhone /></Icon>
              <InfoText>(34) 1234-5678</InfoText>
            </InfoItem>
            <InfoItem>
              <Icon><FaEnvelope /></Icon>
              <InfoText>contato@minastche.com</InfoText>
            </InfoItem>
            <InfoItem>
              <Icon><FaMapMarkerAlt /></Icon>
              <InfoText>Av. Cesário Alvim, 2385 - Nossa Sra. Aparecida, Uberlândia - MG</InfoText>
            </InfoItem>
            <InfoItem>
              <Icon><FaClock /></Icon>
              <InfoText>Terça a Domingo, das 11h às 23h</InfoText>
            </InfoItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <Input 
              type="text" 
              name="name" 
              placeholder="Seu Nome" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <Input 
              type="email" 
              name="email" 
              placeholder="Seu E-mail" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <TextArea 
              name="message" 
              placeholder="Sua Mensagem" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
            <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
          </ContactForm>
        </ContactWrapper>
      </Container>
    </ContatoSection>
  );
}

export default Contato;
