import { CircularProgress } from "@mui/material";
import { useCompany } from "../../contexts/CompanyContext";
import { FaRegSmile, FaRegMeh, FaRegFrown, FaMoneyBill } from "react-icons/fa";
import { MdOutlineHourglassTop } from "react-icons/md";

import ChartFrequency from "../../components/chart/ChartFrequency";

export default function Dashboard() {
    const { companyData } = useCompany();
    
    const health = companyData.companyStructs.structsHealth;
    
    const { companyParkSlotsFilled, companyParkSlots } = companyData;

    function getStyleByHealth(health) {
        if (!companyData.companyStructs.structsInstalled) {
            return { icon: MdOutlineHourglassTop, style: { background: "#222" }, label: "N/a" }
        }

        if (health > 75) {
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
                    <h3>Saúde dos Instrumentos & Custos</h3>
                    
                    {propStruct ? (
                        <div className="servicos" style={propStruct.style}>
                            <propStruct.icon /> {propStruct.label}
                        </div>
                    ) : (
                        <div className="loading"><CircularProgress /></div>
                    )}
                
                    <div className="custos">
                        R$ {companyData.companyPackagePayment.cost_total} 
                    </div>
                </div>

                <div className="graph-motors">
                    <h2>Estatisticas do estacionamento</h2>
                    
                    <div className="graph-motors-row">
                        <div className="graph-frequency">
                            <ChartFrequency dataChart={[parseInt(companyParkSlots), parseInt(companyParkSlotsFilled)]} />
                            <ChartFrequency dataChart={[parseInt(companyParkSlots), parseInt(companyParkSlotsFilled)]} />
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}