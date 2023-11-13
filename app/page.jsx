"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
               <a href='https://wa.me/5521970153687?text=Olá, gostaria de mais informações.'><button>AGENDAR UMA VISITA</button></a>
            </section>
            <section id="services">
               <h2>Serviços</h2>
               <p>Todos os serviços listados abaixo oferecem um salão climatizado, decoração personalizada do salão, sistema de som com um experiente DJ e uma animada pista de dança, bem como uma sala de jogos para entretenimento. Além disso, incluem um delicioso bolo para adoçar a ocasião, uma variedade de bebidas que vão desde cerveja até refrigerantes, água e sucos, e ainda uma seleção diversificada de doces e salgados para satisfazer todos os gostos.</p>
               <article>
                  <div className='carousel'>

                     <div className='textBox'>
                        <div>
                           <h3>Festa Infantil</h3>
                           <p>Celebre a festa infantil conosco! Oferecemos animação, brinquedos e três tipos de lanches deliciosos, incluindo brigadeiros, beijinhos e cajuzinhos. Escolha o tema da festa e aproveite 4 horas de diversão.</p>
                        </div>
                     </div>
                  </div>
                  <div className='carousel'>

                     <div className='textBox'>
                        <div>
                           <h3>Casamentos</h3>
                           <p>Torne seu casamento especial e memorável com nossa oferta de 5 horas. Inclui uma mesa de bolo decorada com três arranjos florais, mesa de frios e jantar com opções de massas e caldo. Desfrute de doces caramelados e fondados. Oferecemos álbum de fotos e serviços de filmagem.</p>
                        </div>
                     </div>
                  </div>
                  <div className='carousel'>

                     <div className='textBox'>
                        <div>
                           <h3>15 Anos</h3>
                           <p>As opções do casamento também são válidas para a festa de 15 anos. </p>
                        </div>
                     </div>
                  </div>
                  <div className='carousel'>

                     <div className='textBox'>
                        <div>
                           <h3>Temáticas</h3>
                           <p>As festas temáticas, com duração de 4 ou 5 horas, oferecem flexibilidade no menu. Escolha entre jantar com guloseimas ou mesa de frios, com opções como churrasco ou salgados. Complete com os adorados brigadeiros, beijinhos e cajuzinhos para uma doçura extra.</p>
                        </div>
                     </div>
                  </div>
               </article>
            </section>
         </main>
         <Footer />
      </>
   )
}
