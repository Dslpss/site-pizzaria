import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";

const ContatoSection = styled.section`
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

const ContactCard = styled(motion.div)`
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
    box-shadow: 0 12px 30px rgba(255, 75, 43, 0.15);
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

const ContactInfo = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-top: 15px;

  a {
    color: #ff4b2b;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff416c;
    }
  }
`;

const Schedule = styled.div`
  margin-top: 10px;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const FormSection = styled.div`
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Playfair Display", serif;
  color: #ff4b2b;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 12px 20px;
  color: white;
  font-size: 1rem;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff4b2b;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 12px 20px;
  color: white;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff4b2b;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #ff4b2b, #ff416c);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 75, 43, 0.3);
  }
`;

function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContatoSection>
      <Container>
        <Title>Contato</Title>
        <Grid>
          <ContactCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <ContactInfo>
              <a href="tel:3432321068">(34) 3232-1068</a>
            </ContactInfo>
          </ContactCard>

          <ContactCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <IconWrapper>
              <FaWhatsapp />
            </IconWrapper>
            <ContactInfo>
              <a
                href="https://wa.me/553432321068"
                target="_blank"
                rel="noopener noreferrer">
                (34) 3232-1068
              </a>
            </ContactInfo>
          </ContactCard>

          <ContactCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            <ContactInfo>
              Av. João Naves de Ávila, 1331
              <br />
              Uberlândia - MG
            </ContactInfo>
          </ContactCard>

          <ContactCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}>
            <IconWrapper>
              <FaClock />
            </IconWrapper>
            <ContactInfo>
              Horário de Funcionamento
              <Schedule>
                Terça a Domingo
                <br />
                11:00 - 14:30 (Almoço)
                <br />
                19:00 - 23:00 (Jantar)
              </Schedule>
            </ContactInfo>
          </ContactCard>
        </Grid>

        <FormSection>
          <FormTitle>Envie uma Mensagem</FormTitle>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <Input
              type="email"
              placeholder="Seu E-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <TextArea
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
            <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
          </Form>
        </FormSection>
      </Container>
    </ContatoSection>
  );
}

export default Contato;
