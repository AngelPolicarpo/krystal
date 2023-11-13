"use client";/images/festa
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
               <a href='https://wa.me/5521970153687?text=Olá, gostaria de mais informações.'><button>AGENDAR UMA VISITA</button></a>
            </section>
            <section id="services">
               <h2>Serviços</h2>
               <p>Todos os serviços listados abaixo oferecem um salão climatizado, decoração personalizada do salão, sistema de som com um experiente DJ e uma animada pista de dança, bem como uma sala de jogos para entretenimento. Além disso, incluem um delicioso bolo para adoçar a ocasião, uma variedade de bebidas que vão desde cerveja até refrigerantes, água e sucos, e ainda uma seleção diversificada de doces e salgados para satisfazer todos os gostos.</p>
               <article>
                  <div className='carousel'>
                     <Carousel
                        images={[
                           <Image key="image1" width={500} height={500} alt="Imagem." src="/Krystal/images/festaInfantil01.png" />
                           ,
                           <Image key="image2" width={500} height={500} alt="Imagem." src="/Krystal/images/festaInfantil02.png" />
                           ,
                           <Image key="image3" width={500} height={500} alt="Imagem." src="/Krystal/images/festaInfantil03.png" />
                           ,
                           <Image key="image4" width={500} height={500} alt="Imagem." src="/Krystal/images/festaInfantil04.png" />
                           ,
                           <Image key="image5" width={500} height={500} alt="Imagem." src="/Krystal/images/festaInfantil05.png" />
                           ,
                           <Image key="image6" width={500} height={500} alt="Imagem." src="/Krystal/images/festaInfantil06.png" />
                           ,
                        ]}
                     />
                     <div className='textBox'>
                        <div>
                           <h3>Festa Infantil</h3>
                           <p>Celebre a festa infantil conosco! Oferecemos animação, brinquedos e três tipos de lanches deliciosos, incluindo brigadeiros, beijinhos e cajuzinhos. Escolha o tema da festa e aproveite 4 horas de diversão.</p>
                        </div>
                     </div>
                  </div>
                  <div className='carousel'>
                     <Carousel
                        images={[
                           <Image key="image7" width={500} height={500} alt="Imagem." src="/Krystal/images/casamento01.png" />
                           ,
                           <Image key="image8" width={500} height={500} alt="Imagem." src="/Krystal/images/casamento02.png" />
                           ,
                           <Image key="image9" width={500} height={500} alt="Imagem." src="/Krystal/images/casamento03.png" />
                           ,
                           <Image key="image10" width={500} height={500} alt="Imagem." src="/Krystal/images/casamento04.png" />
                           ,
                           <Image key="image11" width={500} height={500} alt="Imagem." src="/Krystal/images/casamento05.png" />
                           ,
                           <Image key="image12" width={500} height={500} alt="Imagem." src="/Krystal/images/casamento06.png" />
                           ,
                        ]}
                     />
                     <div className='textBox'>
                        <div>
                           <h3>Casamentos</h3>
                           <p>Torne seu casamento especial e memorável com nossa oferta de 5 horas. Inclui uma mesa de bolo decorada com três arranjos florais, mesa de frios e jantar com opções de massas e caldo. Desfrute de doces caramelados e fondados. Oferecemos álbum de fotos e serviços de filmagem.</p>
                        </div>
                     </div>
                  </div>
                  <div className='carousel'>
                     <Carousel
                        images={[
                           <Image key="image13" width={500} height={500} alt="Imagem." src="/Krystal/images/15anos05.png" />
                           ,
                           <Image key="image14" width={500} height={500} alt="Imagem." src="/Krystal/images/15anos02.png" />
                           ,
                           <Image key="image15" width={500} height={500} alt="Imagem." src="/Krystal/images/15anos03.png" />
                           ,
                           <Image key="image16" width={500} height={500} alt="Imagem." src="/Krystal/images/15anos04.png" />
                           ,
                           <Image key="image17" width={500} height={500} alt="Imagem." src="/Krystal/images/15anos01.png" />
                           ,
                           <Image key="image18" width={500} height={500} alt="Imagem." src="/Krystal/images/15anos06.png" />
                           ,
                        ]}
                     />
                     <div className='textBox'>
                        <div>
                           <h3>15 Anos</h3>
                           <p>As opções do casamento também são válidas para a festa de 15 anos. </p>
                        </div>
                     </div>
                  </div>
                  <div className='carousel'>
                     <Carousel
                        images={[
                           <Image key="image19" width={500} height={500} alt="Imagem." src="/Krystal/images/tematica04.png" />
                           ,
                           <Image key="image20" width={500} height={500} alt="Imagem." src="/Krystal/images/tematica02.png" />
                           ,
                           <Image key="image21" width={500} height={500} alt="Imagem." src="/Krystal/images/tematica03.png" />
                           ,
                           <Image key="image22" width={500} height={500} alt="Imagem." src="/Krystal/images/tematica01.png" />
                           ,
                           <Image key="image23" width={500} height={500} alt="Imagem." src="/Krystal/images/tematica05.png" />
                           ,
                           <Image key="image24" width={500} height={500} alt="Imagem." src="/Krystal/images/tematica06.png" />
                           ,
                        ]}
                     />
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
