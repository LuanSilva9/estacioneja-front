import HeaderbarClient from '../../../components/HeaderbarClient'

import './AboutUs.css'

export default function AboutUs() {
    return (
        <main className='about-us'>
            <HeaderbarClient/>

            <section className='nos'>
                <h2>Sobre o Estacionejá</h2>
            </section>

            <section className='info'>
                <div className="card">
                    <h3>Nossa Missão</h3>
                    <p>
                        Oferecer uma solução prática para o estacionamento, reduzindo o tempo de busca por vagas e permitindo uma gestão eficiente dos espaços.
                    </p>
                </div>
                <div className="card">
                    <h3>Nossa Visão</h3>
                    <p>
                        Tornar o Estacionejá uma plataforma reconhecida, expandindo a solução para outras instituições e comunidades que busquem otimizar a gestão de estacionamentos, especialmente em ambientes acadêmicos e corporativos.
                    </p>
                </div>
                <div className="card">
                    <h3>Nossos Valores</h3>
                    <p>Valorizamos a inovação, o aprendizado contínuo e a sustentabilidade. Utilizamos tecnologia para resolver problemas reais, promovendo eficiência e trabalho em equipe no Estacionejá.</p>
                </div>
                <div className="card">
                    <h3>Inovação Tecnológica</h3>
                    <p>Buscamos constantemente inovações tecnológicas para aprimorar a experiência do usuário e otimizar a gestão de estacionamentos de forma eficiente e acessível.</p>
                </div>
                <div className="card">
                    <h3>Impacto Social</h3>
                    <p>Nosso objetivo é gerar impacto positivo nas comunidades acadêmicas e corporativas, melhorando a mobilidade urbana e facilitando o acesso a vagas de estacionamento.</p>
                </div>
            </section>


            <section className='historia'>
                <h2>Nossa História</h2>

                <div className="line"></div>

                <p>
                    O Estacionejá começou como um projeto de faculdade, desenvolvido por estudantes de tecnologia que perceberam a necessidade de uma solução prática para o problema de estacionamento em grandes instituições. Inicialmente pensado para o ambiente universitário, o Estacionejá se mostrou útil em diversos contextos, ganhando o apoio de professores e colegas que viram valor na ideia.
                    Hoje, o Estacionejá continua a evoluir, trazendo novos recursos e expandindo seu impacto para além dos muros da faculdade, com o objetivo de melhorar a mobilidade e organização em locais com alta demanda de estacionamento.
                </p>
            </section>
        </main>

    )
}