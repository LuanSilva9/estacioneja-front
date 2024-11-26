import HeaderbarCompany from "../../components/HeaderbarCompany";

import { useCompany } from "../../contexts/CompanyContext";


export default function Admin() {
    const { companyData, updateCompanyData } = useCompany();
    
    return (
        <main className="admin_company">
            <HeaderbarCompany companyProps={companyData} />
        </main>
    )
}