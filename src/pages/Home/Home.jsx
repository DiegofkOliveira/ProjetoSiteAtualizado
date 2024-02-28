import React from "react";

import MRV from "../../assets/MRV.png";

import { Container, Pesquisa, Footer } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaSearch, FaShoppingCart, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import imagem1 from "../../assets/Caminhao.jpg";
import imagem2 from "../../assets/Completo.jpg";
import imagem3 from "../../assets/Cozinha.jpg";
import imagem4 from "../../assets/Ferramentas.jpg";
import imagem5 from "../../assets/Painel.jpg";
import imagem6 from "../../assets/Tijolo.jpg";
import imagem7 from "../../assets/Tudo.jpg";
import imagem8 from '../../assets/Imagem_01.png'


export function Home() {

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
            <h1>Produtos</h1>
            <p>Nossos produtos são produzidos <span>100% em madeira, </span>
              para melhor qualidade, desta forma, garantindo uma <span>qualidade superior </span>
              e proporcionando uma melhor aprendizagem.</p>
          </div>
        </div>
      </main>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imagem1} alt="imagem1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem2} alt="imagem2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem3} alt="imagem3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem4} alt="imagem4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem5} alt="iamgem5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem6} alt="imagem6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem7} alt="imagem7" />
        </SwiperSlide>
      </Swiper>
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
