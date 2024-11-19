import { Route, Routes } from "react-router-dom";

import Home from "./routes/client/Home/Home";
import AboutUs from "./routes/client/AboutUs/AboutUs";
import Policy from "./routes/client/Policy/Policy";
import Features from "./routes/client/Features/Features";
import SignUpSelectArea from "./routes/SignUp/SignUpSelectArea";
import SignUpCompany from "./routes/SignUp/SignUpCompany/SignUpCompany";
import SignUpCompanyInfoLegals from "./routes/SignUp/SignUpCompany/SignUpCompanyInfoLegals";


export default function RouterPaper() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-nos" element={<AboutUs/>}/>
            <Route path="/politica" element={<Policy/>}/>
            <Route path="/funcionalidades" element={<Features/>}/>
            
            <Route path="/cadastrar" element={<SignUpSelectArea/>}/>
            <Route path="/cadastrar/empresa/passo-1" element={<SignUpCompany/>}/>
            <Route path="/cadastrar/empresa/passo-2" element={<SignUpCompanyInfoLegals/>}/>
        </Routes>
    )
}