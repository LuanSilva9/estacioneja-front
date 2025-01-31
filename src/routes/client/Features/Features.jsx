import React from 'react';

import HeaderbarGuest from "../../../components/HeaderbarGuest";

import './Features.css';

import FooterClient from '../../../components/FooterClient';

export default function Features() {
   
    return (
        <main className="features">
            <HeaderbarGuest/>
            
            <section className="feature-reservation">
                <div className="manual">
                    <h2>Como nosso sistema funciona?</h2>

                    <p>
                        O EstacioneJá é um sistema inteligente de gestão de estacionamento que permite que você reserve vagas com antecedência, garantindo sua vaga ao chegar. Além de oferecer praticidade, o sistema busca reduzir o tempo de procura por vagas, otimizar a ocupação do espaço e melhorar a organização dos estacionamentos. Abaixo, você encontrará um guia detalhado sobre como usar o EstacioneJá de forma eficiente.
                    </p>

                    <h3>Passo 1: Criar uma Conta</h3>
                    <p>
                        Para começar, crie sua conta no EstacioneJá. Acesse a página inicial e clique em "Cadastrar". Após preencher as informações necessárias e criar sua conta, você poderá fazer login e acessar todos os recursos do sistema.
                    </p>

                    <h3>Passo 2: Escolher um Estacionamento Vinculado</h3>
                    <p>
                        Na página inicial, você verá a seção "Estacionamentos Vinculados". Nela, é possível visualizar os estacionamentos disponíveis, cada um com um mapa e detalhes de localização. Selecione o estacionamento desejado e clique em "Reservar".
                    </p>

                    <div className="img-vincle-parks img">
                        <img src="/assets/camera.svg" alt="" />
                    </div>

                    <h3>Passo 3: Selecionar a Data e Horário</h3>
                    <p>
                        Após escolher o estacionamento, você será direcionado para a página de reservas. Selecione a data e o horário desejados, e o sistema verificará a disponibilidade. Esta verificação em tempo real ajuda a evitar reservas duplicadas e garante que haverá uma vaga para você.
                    </p>

                    <h3>Passo 4: Confirmar a Reserva</h3>
                    <p>
                        Após escolher o horário e estacionamento, clique em "Confirmar Reserva". Sua vaga será reservada para o período especificado. Você receberá uma confirmação e poderá consultar os detalhes da sua reserva no painel de histórico, disponível no menu principal.
                    </p>

                    <div className="img-fill-form img">
                        <img src="/assets/camera.svg" alt="" />
                    </div>

                    <h3>Passo 5: Realizar o Check-In no Estacionamento</h3>
                    <p>
                        Quando chegar ao estacionamento, você poderá realizar o check-in, cada Estacionamento Impoe regras sobre o Check-in, então confira qual é a regra que seu estacionamento segue, no entanto, as mais indicadas por nós são:
                    </p>
                    <ul>
                        <li>
                            <strong>QR Code</strong>: É feito chegando ao estacionamento e lendo o QR Code pelo aplicativo.
                        </li>

                        <li>
                            <strong>(Auto Check-in/out) Localização</strong>: É feito de maneira automatica quando você chega ao estacionamento, então você apenas precisará confirmar no aplicativo.
                        </li>
                        <li>
                            <strong>(Auto Check-in/out) Portaria</strong>: É feito pelo responsavel pelo portão então não é necessario intervenção do usuario, apenas confirme no aplicativo.
                        </li>
                        <li>
                            <strong>(Auto Check-in/out) RFID:</strong> Com o veiculo habilitado com a tag RFID, o check-in será feito automaticamente ao passar pela entrada do estacionamento. 
                        </li>
                    </ul>

                    <h3>Exportar Reservas</h3>
                    <p>
                        Para manter um registro das suas reservas, você pode exportá-las em PDF. No painel de reservas, clique em "Gerar PDF" ao lado da reserva que deseja registrar. Esse recurso permite acompanhar seu histórico de forma prática e organizada.
                    </p>
                </div>
            </section>

            <FooterClient/>
        </main>
    );
}
