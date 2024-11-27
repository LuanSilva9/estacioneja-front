import { CircularProgress } from "@mui/material";
import { useCompany } from "../../contexts/CompanyContext";
import { FaRegSmile, FaRegMeh, FaRegFrown } from "react-icons/fa";

export default function Dashboard() {
    const { companyData } = useCompany();
    
    const health = companyData.companyStructs.structsHealth;

    function getStyleByHealth(health) {
        if (health > 90) {
            return { icon: FaRegSmile, style: { background: "#0c9a12" }, label: `${health}%` };
        } else if (health >= 50) {
            return { icon: FaRegMeh, style: { background: "#ffd700" }, label: `${health}%`, call: true };
        } else {
            return { icon: FaRegFrown, style: { background: "#ff0000" }, label: `${health}%`, call: true };
        }
    }

    const propStruct = getStyleByHealth(health);

    return (
        <section className="dashboard">
            <div className="graph-overview">
                <div className="graph-health">
                    <h2>Saúde dos Instrumentos e custos</h2>
                    
                    {propStruct ? (
                        <div className="servicos" style={propStruct.style}>
                            <propStruct.icon /> {propStruct.label}
                        </div>
                    ) : (
                        <div className="loading"><CircularProgress /></div>
                    )}
                    
                    <div className="custos">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}