import { Button } from 'react-bootstrap'
import './Home.css'


export default function Home() {
    return (
        <main className='home'>
            <section className='hero-section'>
                <h2>Estacione com Facilidade e Segurança</h2>
                <p>Reserve sua vaga antecipadamente, faça check-in automático e aproveite a conveniência do Estacionejá. Simples, rápido e eficiente!</p>

                <Button className='btn btn-primary' href="#saiba-mais">
                    Saiba mais
                </Button>
            </section>

            <section className="saiba-mais" id="saiba-mais">
                <h2>Saiba Mais!</h2>
                <p>O EstacioneJa é um software de gerenciamento de Estacionamentos para Empresas e Universidades, você pode reservar uma vaga!</p>
            </section>
        </main>
    )
}