import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './routes/client/Home/Home';
import AboutUs from './routes/client/AboutUs/AboutUs';
import Policy from './routes/client/Policy/Policy';
import Features from './routes/client/Features/Features';
import SignUpSelectArea from './routes/SignUp/SignUpSelectArea';
import SignUpCompany from './routes/SignUp/SignUpCompany/SignUpCompany';
import SignUpCompanyInfoLegals from './routes/SignUp/SignUpCompany/SignUpCompanyInfoLegals';
import SignUpCompanyPayment from './routes/SignUp/SignUpCompany/SignUpCompanyPayment';
import SignUpClient from './routes/SignUp/SignUpClient/SignUpClient';
import ClientApp from './routes/client/Client/ClientApp';
import Login from './routes/Login/Login';

import { CompanyProvider } from './contexts/CompanyContext';
import { UserProvider } from './contexts/UserContext';
import PanelPark from './routes/client/Client/Panel/PanelPark';
import SearchPark from './routes/client/Client/Panel/SearchPark';
import Admin from './routes/admin/Admin';
import ReservationStepper from './routes/client/Client/Reservation/ReservationStepper';
import { ReservationProvider } from './contexts/ReservationContext';
import VeiclesForm from './routes/client/Client/Profile/VeiclesForm';
import NotificationsClient from './routes/client/Client/NotificacationsClient';
import ProfilePage from './routes/client/Client/Profile/ProfilePage';
import ForBusiness from './routes/client/Home/ForBusiness/ForBusiness';
import NotificationsAdmin from './routes/admin/NotificationsAdmin';
import SupportPage from './routes/client/Client/Panel/SupportPage';
import SignUpCompanyGlobal from './routes/SignUp/SignUpCompany/SignUpGlobal';

function isAuth() {
    const sessionId = localStorage.getItem('sessionId');

    return sessionId && sessionId === process.env.REACT_APP_AUTH_KEY_USER;
}

export function isAdmin() {
    const sessionId = localStorage.getItem('sessionId');

    return sessionId && sessionId === process.env.REACT_APP_AUTH_KEY_COMPANY;
}


function PublicRouter({ children }) {
    if (isAuth()) {
        return <Navigate to="/client" />;
    }
    if(isAdmin()) {
        return <Navigate to="/dashboard" />;
    }

    return children;
}

function PrivateRouter({ children }) {
    if (!isAuth()) {
        return <Navigate to="/" />;
    }

    return children;
}

function AdminRouter({ children }) {
    if (!isAdmin()) {
        return <Navigate to="/" />;
    }

    return children;
}

export default function RouterPaper() {
    return (
        <Routes>
            <Route path="/" element={<PublicRouter><Home /></PublicRouter>} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="/politica" element={<Policy />} />
            <Route path="/funcionalidades" element={<Features />} />


            {/* Página de mensagens para administradores */}
            <Route path="/para-empresas" element={<PublicRouter><ForBusiness/></PublicRouter>}/>


            {/* Cadastro - Selecionar Perfil */}
            <Route path="/cadastrar" element={<PublicRouter><SignUpSelectArea /></PublicRouter>} />

            {/* Cadastro para empresa */}
            <Route
                path="/cadastrar/empresa/*"
                element={
                    <PublicRouter>
                        <CompanyProvider>
                            <Routes>
                                <Route path="/" element={<SignUpCompanyGlobal />} />
                            </Routes>
                        </CompanyProvider>
                    </PublicRouter>
                }
            />



            {/* Cadastro para aluno e funcionario */}
            <Route
                path="/cadastrar/*"
                element={
                    <PublicRouter>
                        <UserProvider>
                            <Routes>
                                <Route path="aluno" element={<SignUpClient type="student" />} />
                                <Route path="funcionario" element={<SignUpClient type="employee" />} />
                            </Routes>
                        </UserProvider>
                    </PublicRouter>
                }
            />

            {/* Login e Pagina inicial cliente */}
            <Route
                path="/*"
                element={
                    <UserProvider>
                        <Routes>
                            <Route path="/login" element={
                                <CompanyProvider>
                                    <PublicRouter>
                                        <Login />
                                    </PublicRouter>
                                </CompanyProvider>
                            } />

                            <Route path="/client" element={
                                <PrivateRouter>
                                    <ClientApp />
                                </PrivateRouter>
                            } />
                        </Routes>
                    </UserProvider>
                }
            />


            {/* Painel do estacionamento */}
            <Route path="/client/estacionamento/:nome-estacionamento" element={
                <UserProvider>
                    <PrivateRouter>
                        <PanelPark />
                    </PrivateRouter>
                </UserProvider>
            } />

            {/* Suporte do estacionamento */}
            <Route path="/client/estacionamento/:nome-estacionamento/suporte" element={
                <UserProvider>
                    <PrivateRouter>
                        <SupportPage/>
                    </PrivateRouter>
                </UserProvider>
            } />

            {/* Cadastro de veiculos */}
            <Route path="/client/perfil/veiculos" element={
                <UserProvider>
                    <PrivateRouter>
                        <VeiclesForm />
                    </PrivateRouter>
                </UserProvider>
            } />

            {/* Reserva de Vaga */}
            <Route path="/client/estacionamento/:nome-estacionamento/reserva" element={
                <UserProvider>
                    <PrivateRouter>
                        <ReservationProvider>
                            <ReservationStepper />
                        </ReservationProvider>
                    </PrivateRouter>
                </UserProvider>
            } />

            {/* Vincular novo estacionamento */}
            <Route path="/client/pesquisar-estacionamentos" element={
                <UserProvider>
                    <PrivateRouter>
                        <SearchPark />
                    </PrivateRouter>
                </UserProvider>
            } />

            {/* Página de notificações */}
            <Route path="/client/notificacoes" element={
                <UserProvider>
                    <PrivateRouter>
                        <NotificationsClient />
                    </PrivateRouter>
                </UserProvider>
            } />

            {/* Página de notificações */}
            <Route path="/admin/notificacoes" element={
                <CompanyProvider>
                    <AdminRouter>
                        <NotificationsAdmin />
                    </AdminRouter>
                </CompanyProvider>
            } />

            {/* Dashboard administrativo */}
            <Route path="/dashboard" element={
                <CompanyProvider>
                    <AdminRouter>
                        <Admin />
                    </AdminRouter>
                </CompanyProvider>
            } />

            {/* Pagina de perfil */}
            <Route path={"/client/perfil"} element={
                <UserProvider>
                    <PrivateRouter>
                        <ProfilePage/>
                    </PrivateRouter>
                </UserProvider>
            }/>
            
            {/* <Route path="/*" element={<PublicRouter><Error404/></PublicRouter>}/> */}
        </Routes>
    );
}
