'use client';
import "../styles/footer.css"

const Footer = () => {
    return (
        <footer>
            <article>
            <div className="social">
                <p id="social-p">Veja também Krystal Festas nas redes sociais</p>
                <div id="icons">
                    <svg fill="#000000" height="800" width="800" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" xmlSpace="preserve">
                    <path d="M-143 145v512h512V145h-512zm312.5 212.6-2.9 38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3.3-28.8 8.5-39.7 8.7-11.5 20.6-19.3 41.1-19.3 33.4 0 47.4 4.8 47.4 4.8l-6.6 39.2s-11-3.2-21.3-3.2-19.5 3.7-19.5 14v29.9h42.2z"/>
                    </svg>
                    <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g><path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
                    c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"/>
                    <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346"/>
                    <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
                    c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"/>
                    <path d="M-143,145v512h512V145H-143z M241,374.7v104.8c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3
                    c0-27.3,22.2-49.5,49.5-49.5h157c27.3,0,49.5,22.2,49.5,49.5V374.7z"/>
                    </g>
                    </svg>
                </div>
                <div>
                    <p id="tel-p">Contato</p>
                    <p>
                        <a href="tel:+552121489162">021 2148 9162</a><br />
                        <a href="tel:+5521970056370">021 970 056 370</a>
                    </p>
                </div>
            </div>
            <div className="contact">
                <form>
                    <h2>Entre em Contato</h2>
                    <input placeholder='Nome'></input>
                    <input placeholder='E-mail'></input>
                    <textarea placeholder='Mensagem'></textarea>
                    <button>Enviar</button>
                </form>
            </div>
            <div className="map">
                <address>Rua Prof. Oscar Clark, 254, Vista Alegre Rio de Janeiro, RJ</address>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1311028456134!2d-43.313340788252845!3d-22.83463857921961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997b5d6fc0fa0b%3A0x2ec82cc273f32bf3!2sKrystal%20Festas%20Vista%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1697663554292!5m2!1spt-BR!2sbr" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <button>Como Chegar</button>
            </div>
            </article>
            <div className="copyright">
                <p>Copyright © 2023 Krystal Festas. Todos os direitos reservados.</p>
                <p>Por Angel Policarpo.</p>
            </div>
        </footer>
    )
}

export default Footer;