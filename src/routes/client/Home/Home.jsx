import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import './Home.css'


export default function Home() {

    return (
        <main className='home'>
            <section className='hero-section'>
                <h2>Estacione com <span>Facilidade</span> e <span>Segurança</span></h2>
                <p>Reserve sua vaga antecipadamente, faça check-in automático e aproveite a conveniência do Estacionejá. Simples, rápido e eficiente!</p>

                <form className="searcher" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" className='input-search' name="search" placeholder='Descubra alguns de nossos estacionamentos' />
                    <button type="submit" className="btn btn-success rounded-0"><FaSearch /></button>
                </form>
            </section>

            <section className="saiba-mais" id="saiba-mais">
                <h2>Saiba Mais!</h2>

                <div className="text-cards">
                    <p>Com o Estacionejá, você não precisa mais se preocupar em encontrar uma vaga ao chegar no estacionamento. Agora, é possível reservar seu espaço com antecedência, diretamente pelo aplicativo. Selecione a data e o horário desejados e tenha a segurança de que um lugar estará disponível, pronto para você.</p>

                    <p>Tenha controle total da ocupação do estacionamento em tempo real. O Estacionejá permite que você monitore o fluxo de vagas disponíveis, observe horários de pico e tome decisões com base em dados precisos. Acompanhe tudo de maneira clara e transparente, garantindo mais eficiência e segurança para você e para a administração do estacionamento.</p>

                    <p>O Estacionejá utiliza a tecnologia IoT para garantir uma experiência ainda mais prática e integrada. Nosso sistema permite que o portão do estacionamento seja aberto automaticamente quando você estiver próximo e com uma vaga reservada. Tudo isso sem a necessidade de intervenção manual, trazendo mais conforto e modernidade ao seu dia a dia.</p>

                    <p>O Estacionejá pensa em todos os perfis de usuários. Para quem chega de carro, o portão se abre automaticamente ao detectar sua presença, caso tenha uma reserva ativa. Já para pedestres, o acesso é simples e rápido pelo aplicativo, permitindo a entrada segura a pé.</p>
                </div>
            </section>

            <section className="para-empresas">
                <div className="text-left">
                    <h2>Para Empresas</h2>
                    <p>
                        No mundo corporativo, a agilidade e a eficiência são essenciais para o sucesso de uma empresa. Pensando nisso, oferecemos uma solução de estacionamento inteligente que elimina a necessidade de perder tempo procurando vagas. Conosco, colaboradores e visitantes podem reservar suas vagas antecipadamente, garantindo praticidade e segurança ao chegar no local.
                        Além disso, nosso sistema automatizado permite um controle eficiente da ocupação de vagas, proporcionando relatórios completos para uma gestão mais organizada do fluxo de veículos. Isso significa menos tempo gasto na administração de vagas e mais foco no sucesso do seu negócio.
                    </p>

                    <Button variant="success" href="/business/planos">Ver planos para sua empresa</Button>
                </div>

                <img src="/assets/company.svg" alt="company" />
            </section>

            <section className="para-estudantes">
                <div className="text-right">
                    <h2>Para Estudantes</h2>
                    <p>
                        Sabemos que a vida de estudante é cheia de compromissos e horários apertados. Com o Estacionejá, você não precisa se preocupar em perder tempo procurando uma vaga ao chegar na universidade. Reserve sua vaga com antecedência e garanta um lugar seguro para o seu carro, permitindo que você chegue na aula com tranquilidade e sem atrasos. Nossa plataforma também facilita o monitoramento da ocupação do estacionamento, para que você tenha uma visão clara da disponibilidade de vagas em tempo real. Com o Estacionejá, seu foco pode estar 100% nos estudos, sabendo que o estacionamento já está resolvido e transformando seu tempo no campus em uma experiência mais prática e organizada.
                    </p>
                </div>

                <img src="/assets/student.svg" alt="student" />
            </section>

            <section className="onde-nos-encontrar">
                <div>
                    <h2>Onde nos Encontrar?</h2>
                    <p>Estamos disponiveis nesse endereço!!!</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.6883011183678!2d-54.21281053036625!3d-23.069507864839316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b8f089277ab95%3A0x63db902ee8dd285c!2sInstituto%20Federal%20de%20Mato%20Grosso%20do%20Sul%20-%20Campus%20Navira%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1730919356381!5m2!1spt-BR!2sbr" width="600" height="450" style={{"border": "0", "borderRadius": "3px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <section className="parceiros">
                <div className="text">
                    <h2>Nossos parceiros</h2>
                    <p>Confira algumas empresas e universidades que fizeram parceria conosco e contribuiram para a criação do EstacioneJá</p>
                </div>

                <div className="img-parceiros">
                    <img src="/assets/camera.svg" alt="ifms" />
                    <img src="/assets/camera.svg" alt="ufms" />
                    <img src="/assets/camera.svg" alt="ifms" />
                    <img src="/assets/camera.svg" alt="ufms" />
                    <img src="/assets/camera.svg" alt="ifms" />
                    <img src="/assets/camera.svg" alt="ufms" />
                    <img src="/assets/camera.svg" alt="ifms" />
                    <img src="/assets/camera.svg" alt="ufms" />
                    <img src="/assets/camera.svg" alt="ifms" />
                    <img src="/assets/camera.svg" alt="ufms" />
                </div>
            </section>
        </main>
    )
}