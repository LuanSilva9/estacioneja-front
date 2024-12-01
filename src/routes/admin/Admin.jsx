import { Divider } from "@mui/material";
import HeaderbarCompany from "../../components/HeaderbarCompany";

import { useCompany } from "../../contexts/CompanyContext";

import './Admin.css';
import Dashboard from "./Dashboard";

export default function Admin() {
    const { companyData, updateCompanyData } = useCompany();
    
    return (
        <main className="admin_company">
            <HeaderbarCompany companyProps={companyData} />

            <div className="admin_company_title">
                <h2>Olá, equipe {companyData.companyName}!</h2>
            
                <Divider>Dashboard / Painel de Administração</Divider>
            </div>


            <Dashboard/>
        </main>
    )
}