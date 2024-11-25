import FooterClient from '../../../components/FooterClient';
import HeaderbarClient from '../../../components/HeaderbarGuest';

import { menuUser } from '../../../constants/menu/menuUser';

import './Policy.css';

export default function Policy() {
    return (
        <main className='policy'>
            <HeaderbarClient linksItemMap={menuUser}/>
            
            <section className='policy-title'>
                <h2>Política de Privacidade</h2>
            </section>

            <section className="policy-body">
                <div className='policy-content'>
                    <p>Bem-vindo à Política de Privacidade do Estacionejá. Nós valorizamos sua privacidade e estamos comprometidos em proteger suas informações. Esta política descreve como coletamos, utilizamos, compartilhamos e protegemos seus dados pessoais ao utilizar nosso aplicativo.</p>

                    <h3>1. Informações que Coletamos</h3>
                    <p>Coletamos as informações de diferentes formas para oferecer uma experiência personalizada e eficiente. As informações que coletamos incluem:</p>
                    <ul>
                        <li><strong>Informações Pessoais:</strong> Nome, endereço de e-mail, telefone, número da placa do veículo e informações de cadastro.</li>
                        <li><strong>Informações de Localização:</strong> Com seu consentimento, podemos coletar dados de localização para verificar sua proximidade com o estacionamento e facilitar o check-in automático.</li>
                        <li><strong>Informações de Dispositivo:</strong> Dados sobre o dispositivo que você usa para acessar nosso aplicativo, incluindo tipo de dispositivo, sistema operacional, e identificadores únicos.</li>
                        <li><strong>Informações de Navegação:</strong> Dados sobre suas interações com nosso aplicativo, como páginas acessadas, tempo de uso, e ações realizadas.</li>
                    </ul>

                    <h3>2. Uso das Informações</h3>
                    <p>Utilizamos as informações coletadas para diversas finalidades, incluindo:</p>
                    <ul>
                        <li><strong>Fornecimento de Serviços:</strong> Para processar suas reservas, facilitar o check-in no estacionamento e garantir que você tenha uma vaga reservada.</li>
                        <li><strong>Melhoria do Serviço:</strong> Para entender como os usuários utilizam nosso aplicativo e aprimorar funcionalidades, performance e usabilidade.</li>
                        <li><strong>Comunicação:</strong> Para enviar notificações sobre sua reserva, atualizações do serviço, promoções e informações de segurança.</li>
                        <li><strong>Personalização:</strong> Para personalizar a sua experiência com o aplicativo e sugerir locais e serviços baseados em suas preferências e histórico.</li>
                    </ul>

                    <h3>3. Compartilhamento de Informações</h3>
                    <p>Respeitamos sua privacidade e limitamos o compartilhamento de suas informações:</p>
                    <ul>
                        <li><strong>Provedores de Serviço:</strong> Compartilhamos dados com provedores que auxiliam na operação do aplicativo, como hospedagem de dados, processamento de pagamentos e suporte ao cliente, sob rigorosos contratos de confidencialidade.</li>
                        <li><strong>Requisitos Legais:</strong> Podemos divulgar informações quando exigido por lei ou para proteger nossos direitos, segurança e integridade do Estacionejá e de nossos usuários.</li>
                        <li><strong>Consentimento:</strong> Solicitamos seu consentimento antes de compartilhar informações para quaisquer finalidades fora das mencionadas acima.</li>
                    </ul>

                    <h3>4. Segurança</h3>
                    <p>Tomamos medidas de segurança rigorosas para proteger seus dados pessoais contra acesso não autorizado, perda e uso indevido. Entre nossas práticas de segurança estão:</p>
                    <ul>
                        <li><strong>Criptografia de Dados:</strong> Criptografamos dados sensíveis, como suas informações de pagamento e localização, em trânsito e em repouso.</li>
                        <li><strong>Controle de Acesso:</strong> Limitamos o acesso aos dados aos funcionários e contratados autorizados, que têm responsabilidades específicas e limitadas.</li>
                        <li><strong>Auditorias e Monitoramento:</strong> Realizamos auditorias periódicas e monitoramento contínuo para identificar e mitigar riscos de segurança.</li>
                    </ul>
                    <p>Embora nos esforcemos ao máximo para proteger suas informações, nenhuma transmissão ou armazenamento de dados é totalmente seguro. Se detectar alguma atividade suspeita, entre em contato conosco imediatamente.</p>

                    <h3>5. Seus Direitos e Escolhas</h3>
                    <p>Você possui direitos sobre seus dados pessoais e pode exercer as seguintes escolhas:</p>
                    <ul>
                        <li><strong>Acesso e Atualização:</strong> Você pode acessar e corrigir suas informações pessoais a qualquer momento através de seu perfil no aplicativo.</li>
                        <li><strong>Exclusão de Dados:</strong> Mediante solicitação, você pode excluir permanentemente suas informações pessoais, salvo quando houver obrigações legais de retenção.</li>
                        <li><strong>Revogação de Consentimento:</strong> Caso deseje revogar o consentimento para a coleta de informações de localização ou outras permissões, você pode ajustar as configurações do aplicativo ou dispositivo.</li>
                    </ul>

                    <h3>6. Armazenamento e Retenção de Dados</h3>
                    <p>Armazenamos suas informações pessoais apenas enquanto necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Dados desnecessários ou inativos por um período superior a 24 meses serão automaticamente excluídos ou anonimizados.</p>

                    <h3>7. Alterações na Política de Privacidade</h3>
                    <p>Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações. Notificaremos mudanças significativas através de nosso aplicativo e/ou por e-mail.</p>

                    <h3>8. Contato e Suporte</h3>
                    <p>Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de suas informações pessoais, entre em contato conosco pelo e-mail <a href="mailto:suporte@estacioneja.com">suporte@estacioneja.com</a> ou através de nosso canal de atendimento no aplicativo.</p>
                </div>

            </section>

            <FooterClient/>
        </main>
    );
}
