import "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {
  FaPizzaSlice,
  FaWineGlassAlt,
  FaCocktail,
  FaIceCream,
} from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f8f8;
    color: #333;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardapioSection = styled.section`
  padding: 40px 0;
  background-image: url("https://example.com/pizza-background.jpg");
  background-size: cover;
  background-attachment: fixed;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  color: #ff4136;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  color: #333;
  font-size: 2.2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #ff4136;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const InfoTitle = styled.h3`
  color: #ff4136;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const MenuSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const MenuItem = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #ff4136;
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const ItemPrice = styled.p`
  font-weight: bold;
  color: #ff4136;
  font-size: 1.1rem;
`;

const Note = styled.p`
  font-style: italic;
  margin-top: 20px;
  grid-column: 1 / -1;
  text-align: center;
`;

function Cardapio() {
  const pizzasSalgadas = [
    {
      name: "4 Queijos",
      description:
        "Molho de tomate, parmesão, catupiry, muçarela, provolone, azeitona e orégano.",
      priceMedia: 77.9,
      priceGrande: 79.9,
    },
    {
      name: "6 Queijos",
      description:
        "Catupiry, parmesão, muçarela, gorgonzola, cheddar, provolone, molho e orégano.",
      priceMedia: 79.9,
      priceGrande: 81.9,
    },
    {
      name: "Alho Poró",
      description:
        "Cream cheese, alho poró refogado com cebola, parmesão e orégano.",
      priceMedia: 77.9,
      priceGrande: 79.9,
    },
    {
      name: "Atum",
      description: "Tomate picado, muçarela, atum, cebola e orégano.",
      priceMedia: 75.9,
      priceGrande: 80.9,
    },
    {
      name: "Ao Pesto",
      description:
        "Molho pesto de manjericão, mozarela, flocos de alho, folhas de manjericão e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Baianinha",
      description:
        "Calabresa, cebola, presunto, pimentão, pimenta bode, muçarela, molho, tomate e orégano.",
      priceMedia: 77.9,
      priceGrande: 79.9,
    },
    {
      name: "Boka Loka",
      description:
        "Filé refogado com bacon e cebola, tomate picado, muçarela, molho de tomate e orégano.",
      priceMedia: 80.9,
      priceGrande: 82.9,
    },
    {
      name: "Bacon/Palmito",
      description: "Molho de tomate, muçarela, bacon, orégano e palmito.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Bolonhesa",
      description: "Molho bolonhesa, parmesão, muçarela e orégano.",
      priceMedia: 75.9,
      priceGrande: 79.9,
    },
    {
      name: "Brócolis",
      description:
        "Molho de tomate, brócolis gratinado, catupiry, muçarela e orégano.",
      priceMedia: 75.9,
      priceGrande: 79.9,
    },
    {
      name: "Carne de sol com queijo coalho",
      description:
        "Molho vermelho, muçarela, carne de sol, alho frito, queijo coalho, orégano, pimenta biquinho e azeite.",
      priceMedia: 83.9,
      priceGrande: 90.9,
    },
    {
      name: "Calabresa/catupiry",
      description: "Tomate, catupiry, muçarela, molho, calabresa e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Catupiry",
      description: "Catupiry, molho de tomate, muçarela e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Camarão",
      description: "Camarão ao molho, camarão picado, muçarela e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Bacon/Milho",
      description:
        "Milho, muçarela, molho, presunto, tomate, cebola, bacon e orégano.",
      priceMedia: 75.9,
      priceGrande: 79.9,
    },
    {
      name: "Cupim ao alho",
      description:
        "Cupim desfiado, muçarela, catupiry, pasta de alho e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Calabresa empalhada",
      description:
        "Molho de tomate, presunto, Batata Palha, catupiry, tomate muçarela, calabresa e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Costela ao creme de alho",
      description:
        "Molho, costela desfiada, muçarela, molho de alho e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Filé ao molho de queijo",
      description:
        "Filé refogado c/ bacon e cebola, molho de queijo, muçarela e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Filé/Bacon",
      description:
        "Presunto, catupiry, mozarela, filé refogado c/ bacon e cebola, bacon fatiado e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Filé de peixe",
      description:
        "Muçarela, filé de tilápia ao molho branco, azeitona e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Caipira",
      description:
        "Muçarela, molho à bolonhesa, pimenta bode, abobrinha gratinada, cebola e orégano.",
      priceMedia: 75.9,
      priceGrande: 79.9,
    },
    {
      name: "Calabresa",
      description:
        "Molho de tomate, tomate picado, cebola, calabresa, muçarela e orégano.",
      priceMedia: 75.9,
      priceGrande: 79.9,
    },
    {
      name: "Espanhola",
      description:
        "Molho de tomate, presunto, tomate, frango, muçarela, calabresa, azeitona e orégano.",
      priceMedia: 71.9,
      priceGrande: 74.9,
    },
    {
      name: "Franbacon",
      description:
        "Molho de tomate, frango refogado, bacon, muçarela, tomate e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Frango ao molho",
      description: "Frango refogado ao molho, muçarela e orégano.",
      priceMedia: 70.9,
      priceGrande: 77.9,
    },
    {
      name: "Frango com catupiry",
      description:
        "Molho de tomate, muçarela, frango refogado, catupiry e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Fricasse de frango",
      description: "Frango ao molho, milho, muçarela, batata palha, e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Fritas com cheddar",
      description:
        "Batata frita, muçarela, cheddar, bacon picado frito e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Lombo canadense",
      description: "Catupiry, lombo canadense, molho, muçarela e orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Lombo canadense ao alho",
      description:
        "Lombo canadense, alho gratinado, catupiry, provolone, muçarela e orégano.",
      priceMedia: 82.9,
      priceGrande: 85.9,
    },
    {
      name: "Gorgonzola com geleia",
      description: "Muçarela, gorgonzola, geleia de pimenta e orégano.",
      priceMedia: 85.9,
      priceGrande: 90.9,
    },
    {
      name: "Hambúrguer",
      description:
        "Molho, hambúrguer, muçarela, cheddar, bacon, milho, tomate em rodela e orégano.",
      priceMedia: 72.9,
      priceGrande: 77.9,
    },
    {
      name: "Marguerita",
      description: "Molho de tomate, tomate, muçarela, manjericão e orégano.",
      priceMedia: 67.9,
      priceGrande: 70.9,
    },
    {
      name: "Milho/catupiry",
      description: "Molho de tomate, catupiry, milho, muçarela e orégano.",
      priceMedia: 70.9,
      priceGrande: 74.9,
    },
    {
      name: "Minas tchê",
      description:
        "Tomate, presunto, muçarela, catupiry, calabresa, palmito, molho, frango e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Mineira",
      description: "Molho, milho, bacon, catupiry, frango, muçarela e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Mista ao alho",
      description:
        "Bacon, calabresa, catupiry, presunto, muçarela, alho frito, tomate e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Moda da casa",
      description:
        "Molho, presunto, tomate, frango, bacon, ervilha, muçarela, calabresa, cebola, pimentão, milho, azeitona e orégano.",
      priceMedia: 80.9,
      priceGrande: 85.9,
    },
    {
      name: "Muçarela",
      description: "Molho de tomate, tomate, muçarela e orégano.",
      priceMedia: 70.9,
      priceGrande: 75.9,
    },
    {
      name: "Palmito/Bacon",
      description: "Molho de tomate, muçarela, bacon, palmito e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Palmito ao creme",
      description: "Palmito ao creme, muçarela e orégano.",
      priceMedia: 77.9,
      priceGrande: 79.9,
    },
    {
      name: "Peperoni",
      description:
        "Catupiry, tomate, mucarela, molho, peperoni, parmesão e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Portuguesa",
      description:
        "Molho de tomate, presunto, tomate, cebola, azeitona, muçarela, ovo fatiado, ervilha, pimentão e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Presunto",
      description: "Molho de tomate, presunto, mucarela, tomate e orégano.",
      priceMedia: 74.9,
      priceGrande: 77.9,
    },
    {
      name: "Presunto/Bacon",
      description: "Presunto, molho, bacon, muçarela e orégano.",
      priceMedia: 74.9,
      priceGrande: 77.9,
    },
    {
      name: "Provolone",
      description: "Provolone, muçarel, molho de tomate e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Romana",
      description:
        "Tomate, milho, presunto, calabresa, muçarela, bacon e orégano.",
      priceMedia: 74.9,
      priceGrande: 77.9,
    },
    {
      name: "Salmão/Cream Cheese",
      description:
        "Molho de tomate, salmão, tomate, cream cheese, muçarela e orégano.",
      priceMedia: 83.9,
      priceGrande: 90.9,
    },
    {
      name: "Sem lactose",
      description:
        "Molho de tomate, frango, brócolis, palmito, tomate e orégano.",
      priceMedia: 74.9,
      priceGrande: 77.9,
    },
    {
      name: "Strogonoff de carne",
      description:
        "Strogonoff de carne bovina, mucarela, batata palha e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Strogonoff de Frango",
      description: "Strogonoff de frango, muçarela batata palha e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Tomate Seco e Rúcula",
      description:
        "Molho de tomate, tomate seco desidratado, tomate picado, rúcula muçarela e orégano.",
      priceMedia: 80.9,
      priceGrande: 80.9,
    },
    {
      name: "Vegetariana",
      description:
        "Molho de tomate, muçarela, cebola, pimentão, azeitona, tomate, milho, ervilha, palmito, champignon e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Vegana",
      description:
        "Molho de tomate, ervilha, cebola, azeitona, pimentão, milho, champignon, palmito, tomate, pasta de alho e orégano. (Sem queijo, sem origem animal.)",
      priceMedia: 74.9,
      priceGrande: 80.9,
    },
    {
      name: "Frango com Pequi",
      description: "Molho, Frango, Mussarela, creme de pequi, milho e orégano.",
      priceMedia: 69.9,
      priceGrande: 72.9,
    },
    {
      name: "Caprese",
      description:
        "Molho, mussarela, tomate cereja, mussarela de buffala, pesto de azeitona preta, manjericão e orégano.",
      priceMedia: 85.9,
      priceGrande: 89.9,
    },
    {
      name: "Sashimi de salmão",
      description:
        "Alga, Mussarela, Tarê, Couve Frita, Sashimi de Salmão, Pimenta Biquinho e Orégano.",
      price: 119.9,
    },
    {
      name: "Barbecue",
      description:
        "Muçarella, Catupiry, Lombo Suino desfiado, Barbecue e Orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Califórnia",
      description:
        "Abacaxi, muçarela, pêssego, figo, cereja e leite condensado.",
      priceMedia: 75.9,
      priceGrande: 79.9,
    },
    {
      name: "Caprichosa",
      description:
        "Alga, Mussarela, Tarê, Couve Frita, Sashimi de Salmão, Pimenta Biquinho e Orégano.",
      priceMedia: 79.9,
      priceGrande: 82.9,
    },
    {
      name: "Churrasco",
      description: "Catupiry, Mussarela, Cebola, Alcátara e Orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
    {
      name: "Coração",
      description:
        "Molho de tomate, coraçao, bacon, muçarela, cebola, tomate e orégano.",
      priceMedia: 77.9,
      priceGrande: 80.9,
    },
  ];

  const pizzasDoces = [
    {
      name: "Abacaxi/Leite condensado",
      description: "Abacaxi, leite condensado e muçarela.",
      priceMedia: 73.9,
      priceGrande: 77.9,
    },
    {
      name: "Açai com Leite ninho",
      description: "Leite ninho, sorvete de Acai, granola e calda de caramelo.",
      price: 99.9,
    },
    {
      name: "Banana com canela",
      description: "Muçarela, banana, açúcar e canela.",
      priceMedia: 73.9,
      priceGrande: 77.9,
    },
    {
      name: "Beijinho",
      description: "Leite condensado, Leite de coco, muçarela e coco.",
      priceMedia: 73.9,
      priceGrande: 77.9,
    },
    {
      name: "Calzone/Banana Chocolate",
      description:
        "Catupiry, banana, açúcar, canela e chocolate branco e ao Leite riscados.",
      price: 69.9,
    },
    {
      name: "Calzone/Diamante Negro",
      description: "Catupiry e chocolate preto (Diamante Negro)",
      price: 69.9,
    },
    {
      name: "Calzone/Laka",
      description: "Catupiry e chocolate branco (Laka)",
      price: 69.9,
    },
    {
      name: "Calzone/Meio Amargo",
      description: "Chocolate meio amargo",
      price: 69.9,
    },
    {
      name: "Calzone/Nutella",
      description: "Catupiry, creme de avelã e castanhas.",
      price: 75.9,
    },
    {
      name: "Calzone/Ouro Branco",
      description:
        "Catupiry, chocolate branco, bombom ouro branco, flocos de arroz e chocolate branco riscado.",
      price: 69.9,
    },
    {
      name: "Calzone/Sonho de Valsa",
      description:
        "Catupiry, chocolate preto, bombom sonho de valsa, flocos e chocolate preto riscado.",
      price: 69.9,
    },
    {
      name: "Prestígio",
      description:
        "Leite de coco, coco em flocos, granulados em escamas, Leite condensado, chocolate preto e mucarela.",
      priceMedia: 73.9,
      priceGrande: 78.9,
    },
    {
      name: "Fantasia",
      description:
        "Chocolate branco ou preto, flocos, confetes, chocolate branco ou preto riscado.",
      priceMedia: 72.9,
      priceGrande: 77.9,
    },
    {
      name: "Leite Ninho",
      description: "Leite condensado e leite em pó.",
      priceMedia: 68.9,
      priceGrande: 77.9,
    },
    {
      name: "Merengue de morango",
      description:
        "Creme de chantilly com morango, morangos e calda de morango.",
      priceMedia: 83.9,
      priceGrande: 89.9,
    },
    {
      name: "Romeu e Julieta",
      description: "Goiabada, cream cheese, muçarela e creme de leite.",
      priceMedia: 73.9,
      priceGrande: 78.9,
    },
    {
      name: "Sensação",
      description: "Chocolate branco ou pret, morango em fatias e granulados.",
      priceMedia: 75.9,
      priceGrande: 78.9,
    },
    {
      name: "Tortinha de morango",
      description: "Morango, molho de prestígio e chocolate branco ou preto.",
      priceMedia: 78.9,
      priceGrande: 89.9,
    },
    {
      name: "Ovo Maltine",
      description: "Ovo maltine em pasta, em pó e em granulado.",
      priceMedia: 75.9,
      priceGrande: 78.9,
    },
    {
      name: "Merengue de Leite ninho",
      description: "Chantilly com Leite ninho em pó e ouro branco.",
      price: 89.9,
    },
    {
      name: "Banoff",
      description:
        "Doce de leite, castanha de caju, chantilly e banana em rodelas.",
      priceMedia: 69.9,
      priceGrande: 78.9,
    },
    {
      name: "Mousse de Limão",
      description: "Mousse de limão, raspas de limão e suspiro.",
      priceMedia: 70.9,
      priceGrande: 74.9,
    },
    {
      name: "Kit Kat",
      description: "Chocolate ao leite, morango e kit kat.",
      priceMedia: 78.9,
      priceGrande: 89.9,
    },
    {
      name: "X-Cake",
      description: "Cheam Cheease, Chocolate Branco e Geleia de Morango.",
      priceMedia: 75.9,
      priceGrande: 79.9,
    },
    {
      name: "Pistache",
      description: "Creme de pistache com castanha de pistache torrada",
      price: 89.9,
    },
    {
      name: "Leite ninho com Morango",
      description:
        "Creme de Ninho, Morango, Chocolate Branco e Flocos de Arroz.",
      price: 89.9,
    },
    {
      name: "Festa",
      description:
        "Chantilly com cobertura de chocolate, confetes, ouro branco, nescau ball, sorvete napolitano.",
      price: 99.9,
    },
    {
      name: "Pudim",
      description: "Creme de chocolate Branco, chocolate polvilhado, Pudim.",
      price: 95.9,
    },
  ];

  const bebidas = [
    {
      name: "Suco Polpa",
      description:
        "(Abacaxi, maracujá, frutas vermelhas, abacaxi com hortelã, uva, cupuaçu, acerola, tamarindo, morango e caju.)",
      price: 9.0,
    },
    { name: "Suco Del valle", price: 7.0 },
    { name: "Refrigerante", price: 8.0 },
    { name: "Cerveja Long", price: 11.0 },
    { name: "Cerveja Lata", price: 11.0 },
    { name: "Caipirinha", price: 20.0 },
    { name: "Capivodka", price: 23.0 },
    { name: "Dose Whisky Bell's", price: 15.0 },
    { name: "Dose Whisky chanceler", price: 15.0 },
    { name: "Dose Whisky Teacher's", price: 15.0 },
    { name: "Dose Whisky Chivas 12 anos", price: 25.0 },
    { name: "Dose Whisky Johnnie W. Red Label", price: 25.0 },
    { name: "Dose Whisky Jhonnie W. Black Label", price: 25.0 },
    { name: "Dose Whisky Jack Danniel's", price: 25.0 },
    { name: "Dose Campari", price: 15.0 },
    { name: "Dose Vodka Orloff", price: 15.0 },
    { name: "Dose Vodka Smirnoff", price: 15.0 },
    { name: "Agua", price: 5.0 },
    { name: "Aquarius Fresh", price: 9.0 },
    { name: "Suco copo ao Leite", price: 12.0 },
    { name: "Suco Natural", description: "(Laranja e Limão)", price: 9.0 },
    { name: "Dose gin", price: 25.0 },
    { name: "Dose Aperol", price: 15.0 },
    { name: "Dose Cachaça", price: 5.0 },
    { name: "Energético Monster", price: 15.0 },
    {
      name: "Drinks",
      description: "(Abacaxi, maracujá, Morango, Limão, Kiwi.)",
      price: 29.9,
    },
  ];

  const vinhos = [
    { name: "Santa Helena Reservado", price: 120.0 },
    { name: "Concha y Toro Reservado", price: 120.0 },
    { name: "Gato Negro", price: 90.0 },
    { name: "Santa Carolina Reservado", price: 120.0 },
    { name: "Santa Vita Reserva Original", price: 90.0 },
    { name: "Casillero del Diablo", price: 120.0 },
    { name: "Vinho Mioranza Taça", price: 18.0 },
    { name: "Vinho Mioranza Garrafa", price: 55.0 },
  ];

  const sobremesas = [
    { name: "Fatia de pudim (KG)", price: 65.0 },
    { name: "Creme de papaya", price: 25.0 },
    { name: "Creme de Abacaxi", price: 25.0 },
    { name: "Tortinhas variadas", price: 12.0 },
  ];

  return (
    <>
      <GlobalStyle />
      <CardapioSection>
        <Container>
          <Title>Nosso Cardápio</Title>

          <InfoBox>
            <InfoTitle>Aniversariante não paga!</InfoTitle>
            <InfoText>
              Trazendo a partir de 15 pessoas, aniversariante do dia não paga!
            </InfoText>
            <InfoText>Fale Conosco pelo telefone: (34) 3232-1068</InfoText>
          </InfoBox>

          <Subtitle>Almoço (terça a domingo: 11:00 às 14:30)</Subtitle>
          <MenuSection>
            <MenuItem>
              <ItemName>
                Buffet tradicional com churrasco (terça a sexta)
              </ItemName>
              <ItemPrice>R$ 80,00/KG</ItemPrice>
            </MenuItem>
            <MenuItem>
              <ItemName>
                Buffet tradicional com churrasco (Sáb/Dom e feriados)
              </ItemName>
              <ItemPrice>R$ 90,00/KG</ItemPrice>
            </MenuItem>
            <MenuItem>
              <ItemName>Buffet Sushi (terça a domingo)</ItemName>
              <ItemPrice>R$ 120,00/KG</ItemPrice>
            </MenuItem>
          </MenuSection>

          <Subtitle>
            <FaPizzaSlice />
            Rodízio de Pizza (terça a domingo: 19:00 às 23:00)
          </Subtitle>
          <MenuSection>
            <MenuItem>
              <ItemName>Rodízio de Pizza</ItemName>
              <ItemPrice>R$ 75,00</ItemPrice>
            </MenuItem>
            <MenuItem>
              <InfoText>Crianças até 6 anos não pagam o rodízio.</InfoText>
              <InfoText>
                Crianças de 7 a 9 anos pagam o rodízio infantil de R$ 40,00
              </InfoText>
            </MenuItem>
          </MenuSection>

          <Subtitle>
            <FaPizzaSlice />
            Pizzas Salgadas
          </Subtitle>
          <MenuSection>
            {pizzasSalgadas.map((pizza, index) => (
              <MenuItem key={index}>
                <ItemName>{pizza.name}</ItemName>
                <ItemDescription>{pizza.description}</ItemDescription>
                <ItemPrice>
                  {pizza.price
                    ? `R$ ${pizza.price.toFixed(2)}`
                    : `R$ ${pizza.priceMedia.toFixed(
                        2
                      )} (Média) / R$ ${pizza.priceGrande.toFixed(2)} (Grande)`}
                </ItemPrice>
              </MenuItem>
            ))}
            <Note>
              Todas nossas pizzas acompanham borda recheada de catupiry
            </Note>
          </MenuSection>

          <Subtitle>
            <FaPizzaSlice />
            Pizzas Doces
          </Subtitle>
          <MenuSection>
            {pizzasDoces.map((pizza, index) => (
              <MenuItem key={index}>
                <ItemName>{pizza.name}</ItemName>
                <ItemDescription>{pizza.description}</ItemDescription>
                <ItemPrice>
                  {pizza.price
                    ? `R$ ${pizza.price.toFixed(2)}`
                    : `R$ ${pizza.priceMedia.toFixed(
                        2
                      )} (Média) / R$ ${pizza.priceGrande.toFixed(2)} (Grande)`}
                </ItemPrice>
              </MenuItem>
            ))}
          </MenuSection>

          <Subtitle>
            <FaCocktail />
            Bebidas
          </Subtitle>
          <MenuSection>
            {bebidas.map((bebida, index) => (
              <MenuItem key={index}>
                <ItemName>{bebida.name}</ItemName>
                {bebida.description && (
                  <ItemDescription>{bebida.description}</ItemDescription>
                )}
                <ItemPrice>R$ {bebida.price.toFixed(2)}</ItemPrice>
              </MenuItem>
            ))}
          </MenuSection>

          <Subtitle>
            <FaWineGlassAlt />
            Vinhos
          </Subtitle>
          <MenuSection>
            {vinhos.map((vinho, index) => (
              <MenuItem key={index}>
                <ItemName>{vinho.name}</ItemName>
                <ItemPrice>R$ {vinho.price.toFixed(2)}</ItemPrice>
              </MenuItem>
            ))}
          </MenuSection>

          <Subtitle>
            <FaIceCream />
            Sobremesas
          </Subtitle>
          <MenuSection>
            {sobremesas.map((sobremesa, index) => (
              <MenuItem key={index}>
                <ItemName>{sobremesa.name}</ItemName>
                <ItemPrice>R$ {sobremesa.price.toFixed(2)}</ItemPrice>
              </MenuItem>
            ))}
          </MenuSection>
        </Container>
      </CardapioSection>
    </>
  );
}

export default Cardapio;
