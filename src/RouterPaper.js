import { Route, Routes } from "react-router-dom";

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


export default function RouterPaper() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-nos" element={<AboutUs/>}/>
            <Route path="/politica" element={<Policy/>}/>
            <Route path="/funcionalidades" element={<Features/>}/>
            

            {/* Cadastro para empresa */}
            <Route path="/cadastrar" element={<SignUpSelectArea/>}/>
            <Route path="/cadastrar/empresa/" element={<SignUpCompany/>}/>
            <Route path="/cadastrar/empresa/passo-2" element={<SignUpCompanyInfoLegals/>}/>
            <Route path="/cadastrar/empresa/passo-3" element={<SignUpCompanyPayment/>}/>

            {/* Cadastro para aluno */}

            <Route path="/cadastrar/aluno/" element={<SignUpClient type="student"/>}/>

            {/* Cadastro para funcionario */}

            <Route path="/cadastrar/funcionario/" element={<SignUpClient type="employee" />}/>

            <Route path="/client" element={<ClientApp/>}/>
        </Routes>
    )
}