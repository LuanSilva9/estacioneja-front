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
                <p>Dashboard / Painel de Administração</p>
            </div>

            <Dashboard/>
        </main>
    )
}