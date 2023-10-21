"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar'
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
      <p>​Para saber sobre outros pacotes, valores e itens opcionais, favor entrar em contato através de nossos telefones ou por e-mail. Teremos um imenso prazer em lhe atender!</p>
      <article> 
         <div>
            <table>
            <thead>
               <tr>
                  <th>Recursos</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Duração</td>
               </tr>
               <tr>
                  <td>Salão Climatizado</td>
               </tr>
               <tr>
                  <td>Decoração do Salão</td>
               </tr>
               <tr>
                  <td>Mesa do Bolo</td>
               </tr>
               <tr>
                  <td>Mini Jantar</td>
               </tr>
               <tr>
                  <td>Som (DJ + Pista de Dança)</td>
               </tr>
               <tr>
                  <td>Sala de Jogos</td>
               </tr>
               <tr>
                  <td>Cerveja</td>
               </tr>
               <tr>
                  <td>Refrigerantes, Sucos e Água</td>
               </tr>
               <tr>
                  <td>Salgados</td>
               </tr>
               <tr>
                  <td>Bolo</td>
               </tr>
               <tr>
                  <td>Doces</td>
               </tr>
               <tr>
                  <td>Equipe</td>
               </tr>
               <tr>
                  <td>Álbum de Fotos e Filmagem</td>
               </tr>
            </tbody>
            </table>
            <table>
            <thead>
               <tr>
                  <th>Casamento e 15 Anos</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>5 horas</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, 3 arranjos florais mais mesa de frios</td>
               </tr>
               <tr>
                  <td>Sim, 2 massas mais 1 caldo</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, fondados e caramelados</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Opcional</td>
               </tr>
            </tbody>
            </table>
            <table>
            <thead>
               <tr>
                  <th>Infantil</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>4 ou 5 horas</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, com tema da festa mais mesa de guloseimas</td>
               </tr>
               <tr>
                  <td>Não</td>
               </tr>
               <tr>
                  <td>Sim, com animação, mais brinquedos</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, 3 tipos de lanches</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, brigadeiros, beijinhos e cajuzinhos</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Não</td>
               </tr>
            </tbody>
            </table>
            <table>
            <thead>
               <tr>
                  <th>Outros Temas*</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>4 ou 5 horas</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, mesa de frios ou guloseimas</td>
               </tr>
               <tr>
                  <td>Sim, 1 massa</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, ou churrasco com guarnição</td>
               </tr>
               <tr>
                  <td>Sim</td>
               </tr>
               <tr>
                  <td>Sim, brigadeiros, beijinhos e cajuzinhos</td>
               </tr>
               <tr>
                  <td>Sim, churrasqueiro ou fritadeira</td>
               </tr>
               <tr>
                  <td>Não</td>
               </tr>
            </tbody>
            </table>
         </div>
         <small>*Festa Teen, Temática ou Churrasco, Confraternização de Empresas e Formatura</small>  
      </article>
   </section>
   <section id="gallery">
      <h2>Gallery</h2>
      <p>Confira os nossos diversos serviços prestados ao longo dos anos.</p>
      <article>
         <div className='title-container'>
            <h2>Festa Infantil</h2>
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
         </div>
         <div className='title-container'>
            <h2>Casamentos</h2>
            <Carousel
            images={[
            <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg" />
            ,
            <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg" />
            ,
            ]}
            />
         </div>
         <div className='title-container'>
            <h2>15 Anos</h2>
            <Carousel
            images={[
            <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg" />
            ,
            <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg" />
            ,
            ]}
            />
         </div>
         <div className='title-container'>
            <h2>Temáticas</h2>
            <Carousel
            images={[
            <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_4e0ce7f6660a4858a88cd6a4c13d724a~mv2_d_3264_1836_s_2.jpg" />
            ,
            <Image width={500} height={500} alt="Imagem." src="https://static.wixstatic.com/media/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg/v1/fill/w_1417,h_797,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59faf3_f4f24ef0a37b43f5908344ade62625d9~mv2_d_3264_1836_s_2.jpg" />
            ,
            ]}
            />
         </div>
      </article>
   </section>
   <section id='contact'>
      <article>
         <div id='map'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1311028456134!2d-43.313340788252845!3d-22.83463857921961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997b5d6fc0fa0b%3A0x2ec82cc273f32bf3!2sKrystal%20Festas%20Vista%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1697663554292!5m2!1spt-BR!2sbr" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <div>
            <h2>Entre em Contato</h2>
            <form>
               <input placeholder='SEU NOME'></input>
               <input placeholder='SEU EMAIL'></input>
               <textarea placeholder='ESCREVA UMA MENSAGEM AQUI'></textarea>
               <button>ENVIAR</button>
            </form>
         </div>
      </article>
   </section>
</main>
</>
  )
}
