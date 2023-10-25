"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carrosel';
import Image from 'next/image'
import "../styles/main.css"

export default function Home() {
   return (
      <>
      <Navbar />
      <main>
         <section id="home">
            <h1>Aqui na Krystal Festas seus sonhos brilham!</h1>
            <p>
               À mais de 17 anos no ramo de festas e eventos, uma das melhores
               casas de festas de Vista Alegre.
            </p>
            <p>
               Salão refrigerado com capacidade para 250 pessoas e salão de jogos, ampla pista de dança, acesso para cadeirantes.
            </p>
            <p>
               Consulte nossos pacotes de casamento, bodas, 15 anos, temáticos,
               infantis e se encante com o capricho, a beleza a qualidade e os
               preços imbatíveis.
            </p>
            <button>AGENDAR UMA VISITA</button>
         </section>
         <section id="services">
            <h2>Serviços</h2>
            <p>Todos os serviços listados abaixo contêm, salão climatizado, decoração do salão, som com DJ e pista de dança, sala de jogos. Além de bolo, cerveja, refrigerantes, água e sucos, diversos doces e salgados.</p>
            <article>
               <div className='title-container'>
                  <Carousel
                  images={[
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_cab1dcd4ecaf4a6b85897d0df15d0631~mv2.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/59faf3_cab1dcd4ecaf4a6b85897d0df15d0631~mv2.jpg" />
                  ,
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_3162c4c46b0b45f78401fe4fa04a7bec~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_3162c4c46b0b45f78401fe4fa04a7bec~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_1be312031bbc4490af267ea13688d629~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_1be312031bbc4490af267ea13688d629~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  ]}
                  />
                  <article className='text-container'>
                     <div>
                        <h3>Festa Infantil</h3>
                        <p>A festa infantil vem com animação e brinquedos, pode escolher o tema da festa. Tem 3 tipos de lanches e doces brigadeiros, beijinhos e cajuzinhos. Duração de 4 horas.</p>
                     </div>
                  </article>
               </div>
               <div className='title-container'>
                  <Carousel
                  images={[
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  ]}
                  />
                  <article className='text-container'>
                     <div>
                        <h3>Casamentos</h3>
                        <p>O casamento tem duração de 5 horas, a mesa do bolo vem com 3 arranjos florais e possui mesa de frios, tem jantar com 2 massas e 1 caldo. Doces caramelados e fondados. Opção de álbum de fotos e filmagem.</p>
                     </div>
                  </article>
               </div>
               <div className='title-container'>
                  <Carousel
                  images={[
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  ]}
                  />
                  <article className='text-container'>
                     <div>
                        <h3>15 Anos</h3>
                        <p>As opções do casamento também são válidas para a festa de 15 anos. </p>
                     </div>
                  </article>                  
               </div>
               <div className='title-container'>
                  <Carousel
                  images={[
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg" />
                  ,
                  ]}
                  />
                  <article className='text-container'>
                     <div>
                        <h3>Temáticas</h3>
                        <p>Possui duração de 4 ou 5 horas, tem opção de jantar, pode escolher entre guloseimas ou mesa de frios. Churrasco ou salgados, doces brigadeiros, beijinhos e cajuzinhos.</p>
                     </div>
                  </article>                  
               </div>
            </article>
         </section>
      </main>
      <Footer />
      </>
  )
}
