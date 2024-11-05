import { FaSearch } from "react-icons/fa";

import './Home.css'


export default function Home() {

    return (
        <main className='home'>
            <section className='hero-section'>
                <h2>Estacione com <span>Facilidade</span> e <span>Segurança</span></h2>
                <p>Reserve sua vaga antecipadamente, faça check-in automático e aproveite a conveniência do Estacionejá. Simples, rápido e eficiente!</p>

                <form className="searcher" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" className='input-search' name="search" placeholder='Descubra alguns de nossos estacionamentos'/>
                    <button type="submit" className="btn btn-success rounded-0"><FaSearch/></button>
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
        </main>
    )
}