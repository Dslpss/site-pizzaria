import 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #000000;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <p>&copy; 2025 Restaurante e Pizzaria Minas Tchê. Todos os direitos reservados.</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
