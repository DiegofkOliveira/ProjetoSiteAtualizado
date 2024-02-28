import React from "react";

import MRV from "../../assets/MRV.png";

import { Container, Pesquisa, Footer, DireitosAutorais } from "./styles";

import { FaSearch, FaShoppingCart, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import imagem8 from '../../assets/Mariana.jpg';


export function Sobre() {

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
        <div>
          <img src={imagem8} alt="Imagem" />
          <div>
            <h1><span>MRV </span>Recursos Pedagógicos</h1>
            <p>Somos uma empresa fundada no ano de 2020, <span>expecializada em recursos pedagógicos, </span>
              onde temos como principal objetivo a criação de <span>artigos 100% em madeira. </span> Procurando sempre inovar
              e se especializar na educação montessoriana, onde buscamos proporcionar para criança o objetivo e
              oportunidade de constuir habilidades básicas, para que sejam capazes de buscar sua própria independência e liberdade
              sempre respeitando a autonomia e o limite de desenvolvimento natural das habilidades fisicas e psicologicos de cada
              fase da infância.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1>Missão</h1>
            <p>
              Fornecer produtos de alta qualidade, onde podemos superar as expectativas
              de nossos clientes, podendo criar um vinculo forte e duradouro. Onde podemos
              porporcionar o desenvolvimento das crianças de varias idades.
            </p>
          </div>
          <div>
            <h1>Visão</h1>
            <p>
              Desenvolver e se aperfeiçoar no mercado com objetivo de ser reconhecida
              e se tornar pioneira no setor de recursos pedagógicos.
            </p>
          </div>
          <div>
            <h1>Valores</h1>
            <p>
            • Inovação <br />
            • Agilidade <br />
            • Responsabilidade <br />
            • Comprometimento <br />
            • Respeito <br />
            • Foco no cliente
            </p>
          </div>
        </div>
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
