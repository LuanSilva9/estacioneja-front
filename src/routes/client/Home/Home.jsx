import './Home.css'

import HeaderbarGuest from "../../../components/HeaderbarGuest";
import FooterClient from "../../../components/FooterClient";

import { rootColors } from "../../../constants/pallete";

import { MdSecurity, MdSpaceDashboard } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { FaLayerGroup } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlineLocationCity } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    if(localStorage.getItem('sessionId')) {
        localStorage.removeItem('sessionId');
    } else if (localStorage.getItem('companyData')) {
        localStorage.removeItem('companyData');
    } else if (localStorage.getItem('userData')) {
        localStorage.removeItem('userData');
    }
    
    return (
        <main className='home'>
            <HeaderbarGuest />

            <section className='hero-section'>
                <h2>Estacione com <span>Facilidade</span> e <span>Segurança</span></h2>
                <p>Reserve sua vaga antecipadamente, faça check-in automático e aproveite a conveniência do Estacionejá. Simples, rápido e eficiente!</p>

                <form className="searcher" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" className='input-search' name="search" placeholder='Descubra alguns de nossos estacionamentos' />
                    <button type="submit" className="btn rounded-0" style={{ background: rootColors.colorGreenPrimary, color: "white" }}><FaSearch /></button>
                </form>
            </section>

            <div className="preload-images"></div>

            <section className="saiba-mais" id="saiba-mais">
                <h2>Saiba um pouco sobre o <span style={{ color: rootColors.colorGreenPrimary }}>Estacione</span><span style={{ color: rootColors.colorOrangePrimary }}>Já</span> </h2>

                <div className="saiba-mais-cards">
                    <div className="saiba-mais-cards-single">
                        <p>Com o Estacionejá, você não precisa mais se preocupar em encontrar uma vaga ao chegar no estacionamento. Agora, é possível reservar seu espaço com antecedência, diretamente pelo aplicativo. Selecione a data e o horário desejados e tenha a segurança de que um lugar estará disponível, pronto para você.</p>
                    </div>

                    <div className="saiba-mais-cards-single">
                        <p>Tenha controle total da ocupação do estacionamento em tempo real. O Estacionejá permite que você monitore o fluxo de vagas disponíveis, observe horários de pico e tome decisões com base em dados precisos. Acompanhe tudo de maneira clara e transparente, garantindo mais eficiência e segurança para você e para a administração do estacionamento.</p>
                    </div>

                    <div className="saiba-mais-cards-single">
                        <p>O Estacionejá utiliza a tecnologia IoT para garantir uma experiência ainda mais prática e integrada. Nosso sistema permite que o portão do estacionamento seja aberto automaticamente quando você estiver próximo e com uma vaga reservada. Tudo isso sem a necessidade de intervenção manual, trazendo mais conforto e modernidade ao seu dia a dia.</p>
                    </div>

                    <div className="saiba-mais-cards-single">
                        <p>O Estacionejá pensa em todos os perfis de usuários. Para quem chega de carro, o portão se abre automaticamente ao detectar sua presença, caso tenha uma reserva ativa. Já para pedestres, o acesso é simples e rápido pelo aplicativo, permitindo a entrada segura a pé.</p>
                    </div>
                </div>
            </section>

            <section className="para-empresas">
                <div className="text-top-empresa">
                    <h2>Vantagens e Beneficios que sua empresa terá ao nos escolher</h2>
                </div>

                <div className="cards-empresa">
                    <div className="card-maior card-empresa-single" onClick={() => navigate("/para-empresas/#staff")}>
                        <h2>Equipe pronta e preparada para lidar com imprevistos</h2>
                    </div>
                    <div className="card-agrupados">
                        <div className="card-agrupados-tr">
                            <div className="card-menor card-empresa-single card-seguranca" onClick={() => navigate("/para-empresas/#seguranca")}>
                                <MdSecurity className="card-menor-icon" />
                                <h2>Mais praticidade e segurança.</h2>
                            </div>
                            <div className="card-menor card-empresa-single card-controle" onClick={() => navigate("/para-empresas/#controle")}>
                                <FaLayerGroup className="card-menor-icon" />
                                <h2>Controle automatizado para uma gestão eficiente de vagas.</h2>
                            </div>

                        </div>

                        <div className="card-agrupados-tr">
                            <div className="card-menor card-empresa-single card-relatorios" onClick={() => navigate("/para-empresas/#relatorios")}>
                                <HiDocumentReport className="card-menor-icon" />
                                <h2>Relatórios completos </h2>
                            </div>
                            <div className="card-menor card-empresa-single card-dashboard" onClick={() => navigate("/para-empresas/#dashboards")}>
                                <MdSpaceDashboard className="card-menor-icon" />
                                <h2>Dashboards interativos e facil de usar</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="linebar-linear-divider">
                <div></div>
            </div>

            <section className="para-estudantes">
                <div className="text-top-estudante">
                    <h2>É estudante ou funcionario?  O <span style={{ color: rootColors.colorGreenPrimary }}>Estacione</span><span style={{ color: rootColors.colorOrangePrimary }}>Já</span> é para você também!</h2>
                </div>

                <div className="card-estudantes">
                    <div className="card-estudantes-single">
                        <img src="/assets/images-freepik/rotina.png" alt="" />

                        <p>A rotina de trabalho pode ser corrida e cheia de compromissos. Com o Estacionejá, você não precisa perder tempo procurando vagas ao chegar na empresa.</p>
                    </div>
                    <div className="card-estudantes-single">
                        <img src="/assets/images-freepik/alvo.png" alt="" />

                        <p>Garanta seu lugar! Com o Estacionejá, você pode reservar sua vaga com antecedência e começar o dia com tranquilidade.</p>
                    </div>
                    <div className="card-estudantes-single">
                        <img src="/assets/images-freepik/calendario.png" alt="" />

                        <p>Deixe o estacionamento por nossa conta! Assim, você pode manter o foco total no trabalho e aproveitar uma jornada mais prática e organizada.</p>
                    </div>

                    <div className="card-estudantes-single">
                        <img src="/assets/images-freepik/mochila.png" alt="" />

                        <p>Estacione com segurança! O Estacionejá oferece vagas garantidas e seguras, para que você tenha mais tranquilidade no dia a dia.</p>
                    </div>
                </div>
            </section>

            <section className="onde-nos-encontrar">
                <div className="text-top-onde-nos-encontrar">
                    <h2>Onde nos Encontrar?</h2>
                    <p>Estamos disponiveis nesse endereço!!!</p>
                </div>

                <div className="card-onde-nos-encontrar">
                    <div className="card-single-onde-nos-encontrar">
                        <div className="text-card-onde-nos-encontrar">
                            <h4><MdPlace/> Logradouro: Rua Hilda, 203</h4>
                            <h4><MdOutlineMapsHomeWork/> Bairro: Conj. Hab. Boa Vista</h4>
                            <h4><MdOutlineLocationCity/> Cidade: Naviraí, MS</h4>
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.6883011183678!2d-54.21281053036625!3d-23.069507864839316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b8f089277ab95%3A0x63db902ee8dd285c!2sInstituto%20Federal%20de%20Mato%20Grosso%20do%20Sul%20-%20Campus%20Navira%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1730919356381!5m2!1spt-BR!2sbr" width="700" height="650" style={{ borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>

            <section className="parceiros">
                <div className='text-top-parceiros'>
                    <h2>Nossos paceiros</h2>
                    <p>Confira algumas empresas e universidades que fizeram parceria conosco e contribuiram para a criação do EstacioneJá</p>
                </div>

                <div className="diviser-parceiros">
                    <div></div>
                </div>

                <div className="card-companies">
                    <div className="copanies">
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                        <img src="/assets/logo-companies-partners/meta-logo.png" alt="meta" />
                    </div>
                </div>
            </section>

            <section className="feedbacks-e-testemunhos">
                <h2>Testemunhos e Depoimentos</h2>

                <div className="testemunhos">
                    <div className="testemunho-single">
                        <div className="profile">
                            <img src="/assets/user1.avif" alt="João Moreira" />
                            <h4>João Moreira</h4>
                        </div>
                        <p>“Com o EstacioneJá, nunca mais perdi tempo procurando vaga. Minha rotina na universidade ficou muito mais tranquila!”</p>
                    </div>

                    <div className="testemunho-single">
                        <div className="profile">
                            <img src="/assets/user2.avif" alt="Carla Figueiredo" />
                            <h4>Carla Figueiredo</h4>
                        </div>
                        <p>“O EstacioneJá fez uma grande diferença no meu dia a dia. Reservo minha vaga com antecedência e evito o estresse de chegar atrasada ao trabalho.”</p>
                    </div>

                    <div className="testemunho-single">
                        <div className="profile">
                            <img src="/assets/user3.avif" alt="Lucas Almeida" />
                            <h4>Lucas Almeida</h4>
                        </div>
                        <p>“Trabalho em uma empresa com muitos colaboradores, e o EstacioneJá é a solução perfeita para organizar o estacionamento. Recomendo!”</p>
                    </div>

                    <div className="testemunho-single">
                        <div className="profile">
                            <img src="/assets/user4.avif" alt="Mariana Costa" />
                            <h4>Mariana Costa</h4>
                        </div>
                        <p>“Como estudante, ter uma vaga garantida ao chegar me ajuda a me concentrar no que realmente importa. O EstacioneJá é incrível!”</p>
                    </div>

                    <div className="testemunho-single">
                        <div className="profile">
                            <img src="/assets/user5.avif" alt="Renato Pereira" />
                            <h4>Renato Pereira</h4>
                        </div>
                        <p>“A praticidade do EstacioneJá é impressionante. A reserva é rápida, e o check-in é super fácil. Excelente serviço!”</p>
                    </div>
                </div>
            </section>

            <FooterClient />
        </main>
    )
}
