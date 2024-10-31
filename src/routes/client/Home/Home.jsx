import { FaSearch } from "react-icons/fa";

import './Home.css'


export default function Home() {
    return (
        <main className='home'>
            <section className='hero-section'>
                <h2>Estacione com <span>Facilidade</span> e <span>Segurança</span></h2>
                <p>Reserve sua vaga antecipadamente, faça check-in automático e aproveite a conveniência do Estacionejá. Simples, rápido e eficiente!</p>

                <form  className="input">
                    <input type="text" className='input-search' name="search" placeholder='Descubra alguns de nossos estacionamentos'/>
                    <button type="submit" className="btn btn-success rounded-0"><FaSearch/></button>
                </form>
            </section>

            <section className="saiba-mais" id="saiba-mais">
                <h2>Saiba Mais!</h2>
                <p>O EstacioneJa é um software de gerenciamento de Estacionamentos para Empresas e Universidades, você pode reservar uma vaga!</p>
            </section>
        </main>
    )
}