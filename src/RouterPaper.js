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

function isAuth() {
    const sessionId = localStorage.getItem('sessionId');

    return sessionId && sessionId === process.env.REACT_APP_AUTH_KEY;
}


function PublicRouter({ children }) {
    if (isAuth()) {
        return <Navigate to="/client" />;
    }
    return children;
}

function PrivateRouter({ children }) {
    if(!isAuth()) {
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

            {/* Cadastro - Selecionar Perfil */}
            <Route path="/cadastrar" element={<PublicRouter><SignUpSelectArea /></PublicRouter>} />

            {/* Cadastro para empresa */}
            <Route
                path="/cadastrar/empresa/*"
                element={
                    <PublicRouter>
                        <CompanyProvider>
                            <Routes>
                                <Route path="/" element={<SignUpCompany />} />
                                <Route path="passo-2" element={<SignUpCompanyInfoLegals />} />
                                <Route path="passo-3" element={<SignUpCompanyPayment />} />
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
                                    <PublicRouter>
                                        <Login />
                                    </PublicRouter>
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
                        <PanelPark/>
                    </PrivateRouter>
                </UserProvider>
            } />

            {/* Vincular novo estacionamento */}
            <Route path="/client/pesquisar-estacionamentos" element={
                <UserProvider>
                    <PrivateRouter>
                        <SearchPark/>
                    </PrivateRouter>
                </UserProvider>
            } />
        </Routes>
    );
}
