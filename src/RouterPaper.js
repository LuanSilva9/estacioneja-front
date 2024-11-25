import { Route, Router, Routes } from "react-router-dom";

import Home from "./routes/client/Home/Home";
import AboutUs from "./routes/client/AboutUs/AboutUs";
import Policy from "./routes/client/Policy/Policy";
import Features from "./routes/client/Features/Features";
import SignUpSelectArea from "./routes/SignUp/SignUpSelectArea";
import SignUpCompany from "./routes/SignUp/SignUpCompany/SignUpCompany";
import SignUpCompanyInfoLegals from "./routes/SignUp/SignUpCompany/SignUpCompanyInfoLegals";
import SignUpCompanyPayment from "./routes/SignUp/SignUpCompany/SignUpCompanyPayment";
import SignUpClient from "./routes/SignUp/SignUpClient/SignUpClient";
import ClientApp from "./routes/client/Client/ClientApp";
import Login from "./routes/Login/Login";
import { CompanyProvider } from "./contexts/CompanyContext";
import { UserProvider } from "./contexts/UserContext";


export default function RouterPaper() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="/politica" element={<Policy />} />
            <Route path="/funcionalidades" element={<Features />} />



            {/* Cadastro - Selecionar Perfil */}
            <Route path="/cadastrar" element={<SignUpSelectArea/>}/>

            {/* Cadastro para empresa */}
            <Route 
                path="/cadastrar/empresa/*" 
                element={
                    <CompanyProvider>
                        <Routes>
                            <Route path="/" element={<SignUpCompany />} />
                            <Route path="passo-2" element={<SignUpCompanyInfoLegals />} />
                            <Route path="passo-3" element={<SignUpCompanyPayment />} />
                        </Routes>
                    </CompanyProvider>
                } 
            />


            {/* Cadastro para aluno e funcionario funcionario  */}
            <Route
                path="/cadastrar/*"
                element={
                    <UserProvider>
                        <Routes>
                            <Route path="aluno" element={<SignUpClient type="student" />} />
                            <Route path="funcionario" element={<SignUpClient type="employee" />} />
                        </Routes>
                    </UserProvider>
                }
            />

            

            {/* Pagina inicial cliente*/}
            <Route path="/client" element={<ClientApp />} />

            {/* Painel do estacionamento */}
            <Route path="/client/:nome-estacionamento/painel" element={<ClientApp />} />


            {/* Login */}
            <Route path="/login" element={<Login />} />

        </Routes>
    )
}