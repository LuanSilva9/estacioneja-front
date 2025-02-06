import { CiCircleChevDown } from 'react-icons/ci';
import HeaderbarGuest from '../../../../components/HeaderbarGuest';
import { rootColors } from '../../../../constants/pallete';
import './ForBusiness.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Packages } from '../../../../constants/Packages';
import FooterClient from '../../../../components/FooterClient';

export default function ForBusiness() {
    return (
        <main className='for-business'>
            <HeaderbarGuest />

            <section className="hero-section-business">
                <div></div>
                <div className="text-business">
                    <h2><span style={{ color: rootColors.colorOrangePrimary }}>Estacionar Tambem faz parte do</span> <span style={{ color: rootColors.colorGreenPrimary }}>negócio!</span></h2>
                    <p>Aqui no EstacioneJá, Oferecemos serviços para resolver quaisquer problemas de Estacionamento que a sua empresa esteja enfrentando, com preços que cabem no seu bolso</p>
                </div>

                <Button href='#plans'><CiCircleChevDown className='icon-down' /></Button>
            </section>

            <section className="staff" id='staff'>
                <h2>Equipe pronta para lidar com qualquer problema 24h por dia</h2>

                <div className='cards-photos-staff'>
                    <div className="card-single-staff">
                        <div className="photo"></div>
                        <h4>Luan Silva</h4>
                        <p>Programador & Co-fundador</p>
                        <Link>luan.silva8@estudante.ifms.edu.br</Link>
                    </div>

                    <div className="card-single-staff">
                        <div className="photo"></div>
                        <h4>João Gabriel</h4>
                        <p>Designer & Co-fundador</p>
                        <Link>joao.silva41@estudante.ifms.edu.br</Link>
                    </div>

                    <div className="card-single-staff">
                        <div className="photo"></div>
                        <h4>Paulo Sergio</h4>
                        <p>Analista & Co-fundador</p>
                        <Link>paulo.silva19@estudante.ifms.edu.br</Link>
                    </div>
                </div>
            </section>

            <section className="seguranca" id="seguranca">
                <h2>Mais praticidade e segurança</h2>

                <div className="content-seguranca">
                    <p>O EstacioneJá oferece mais praticidade e segurança para sua empresa ao automatizar o controle de acesso e gestão de vagas, garantindo um fluxo organizado e eficiente. Com tecnologia avançada, o sistema permite a entrada e saída apenas de pessoas autorizadas, reduzindo riscos e aumentando a proteção de funcionários e clientes. Além disso, a automação do estacionamento elimina a necessidade de controle manual, reduzindo custos operacionais e otimizando a utilização do espaço. O monitoramento em tempo real e os relatórios inteligentes auxiliam na tomada de decisões estratégicas, proporcionando uma administração mais eficaz. Com um processo simplificado de check-in, a experiência dos usuários é aprimorada, tornando o estacionamento mais seguro, acessível e livre de complicações.</p>
                    <img src="/assets/images-freepik/security.svg" alt="security" />
                </div>
            </section>

            <section className="controle" id="controle">
                <h2>Controle Automatizado para uma gestão eficiente de vagas</h2>

                <div className="content-controle">
                    <img src="/assets/images-freepik/control.svg" alt="control" />
                    <p>Com o EstacioneJá, sua empresa ganha um controle automatizado e inteligente da gestão de vagas, eliminando falhas manuais e otimizando o uso do espaço disponível. Através de um sistema integrado, é possível monitorar em tempo real a ocupação do estacionamento, autorizar acessos de forma segura e gerar relatórios estratégicos para tomadas de decisão mais assertivas. A automação reduz custos operacionais, melhora a experiência dos usuários e garante maior eficiência no fluxo de veículos, proporcionando uma gestão simplificada, segura e altamente produtiva.</p>
                </div>
            </section>

            <section className="relatorios" id="relatorios">
                <h2>Relatórios completos</h2>


                <div className="content-relatorios">
                    <p>Com o EstacioneJá, sua empresa tem acesso a relatórios completos e detalhados sobre a utilização do estacionamento, permitindo uma gestão estratégica e baseada em dados. Acompanhe métricas como taxa de ocupação, tempo médio de permanência, horários de pico e histórico de reservas, facilitando a tomada de decisões para otimizar recursos e melhorar a experiência dos usuários. Com informações precisas e acessíveis, sua equipe pode identificar padrões, reduzir desperdícios e maximizar a eficiência operacional, garantindo mais controle e transparência na administração das vagas.</p>
                    <img src="/assets/images-freepik/reports.svg" alt="reports" />
                </div>
            </section>

            <section className="dashboards" id="dashboards">
                <h2>Dashboards Interativos e faceis de usar</h2>

                <div className="content-dashboard">
                    <img src="/assets/images-freepik/dashboards.svg" alt="dashboards" />
                    <p>O EstacioneJá oferece dashboards interativos e intuitivos que transformam dados complexos em insights visuais de fácil compreensão. Com gráficos dinâmicos e métricas em tempo real, sua equipe pode monitorar a ocupação do estacionamento, identificar tendências e tomar decisões estratégicas com rapidez e precisão. A interface amigável permite que qualquer gestor acesse as informações essenciais de forma simplificada, sem necessidade de treinamentos complexos, garantindo mais eficiência na administração das vagas e uma experiência otimizada para todos os usuários.</p>
                </div>
            </section>

            <div className="linebar-diviser">
                <div></div>
            </div>

            <section className="plans" id="plans">
                <h2>Planos & Custo</h2>

                <div className="cards-plans">
                    {
                        Packages.map((packageSingle, index) => <div key={index} className="card-single-plans">
                            <h4>{packageSingle.text.title}</h4>
                            <p>{packageSingle.text.subTitle}</p>

                            <ul>
                                <li><b>* Vantagens e Recursos</b></li>
                                {
                                    packageSingle.advantages.map((advantage) => <li key={index}>{advantage}</li>)
                                }
                            </ul>
                        </div>)
                    }
                </div>
            </section>



            <FooterClient />
        </main>
    )
}