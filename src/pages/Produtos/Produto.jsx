import React from "react";

import MRV from "../../assets/MRV.png";

import { ProdutoItem } from "../ProdutosItem/ProdutosItem";

import { Container, Pesquisa, Footer } from "./styles";

import { FaSearch, FaShoppingCart, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Cozinha from "../../assets/Cozinha.jpg";
import Painel from "../../assets/Painel.jpg";


const products = [
  {
    id: 1,
    title: 'Produto 1',
    description: 'Descrição do Produto 1',
    image: Cozinha,
  },
  {
    id:2,
    title: 'Produto 2',
    description: 'Descrição do Produto 2',
    image: Painel,
  },
];

export function Produto() {

  const openFacebookPage = () => {
    window.open("https://www.facebook.com/profile.php?id=100032848344384", "_blank");
  };

  const openInstagramPage = () => {
    window.open("https://www.instagram.com/mrvrecursos/?igshid=dmRwOWZsNDFlcHlz", "_blank");
  };

  const openWhatsappPage = () => {
    window.open("https://wa.me/+555599397199", "_blank");
  };

  return (
    <Container>
      <header>
        <img src={MRV} alt="MRV Recursos Pedagógicos" />
        <div>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="/produtos">Produto</a>
        </div>
      </header>
      <Pesquisa>
        <div>
          <button><FaShoppingCart /></button>
          <div>
            <input placeholder="Digite o que procura" type="text" />
            <button><FaSearch /></button>
          </div>
        </div>
      </Pesquisa>
      <main>
      {products.map((product) => (
          <ProdutoItem
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </main>
      <Footer>
        <div>
          <img src={MRV} alt="Imagem" />
          <h1>CNPJ: </h1>
          <p>Santo Ângelo, RS - Brasil</p>
        </div>
        <div>
          <h1>DESDE 2020 </h1>
          <p>Inovando e se aperfeiçoando na educação Montessoriana.</p>
        </div>
        <div>
          <h1>CONTATO</h1>
          <p>Telefone:(55) 99939-7199</p>
          <p>E-mail</p>
          <div>
            <button href="#" onClick={openFacebookPage}>
              <FaFacebook />
            </button>
            <button href="#" onClick={openInstagramPage}>
              <FaInstagram />
            </button>
            <button href="#" onClick={openWhatsappPage}>
              <FaWhatsapp />
            </button>
          </div>
        </div>
      </Footer>
      <div>
        <h1>2020-2024 MRV Recursos Pedagógicos. Todos os direitos reservados.</h1>
      </div>
    </Container>
  );
}
