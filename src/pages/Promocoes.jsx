import 'react';
import styled from 'styled-components';

const PromocoesSection = styled.section`
  padding: 40px 0;
`;

function Promocoes() {
  return (
    <PromocoesSection>
      <div className="container">
        <h1>Promoções</h1>
        <p>Confira nossas ofertas especiais!</p>
        {/* Adicione as promoções aqui */}
      </div>
    </PromocoesSection>
  );
}

export default Promocoes;
