import { CircularProgress, Divider } from "@mui/material";
import { useCompany } from "../../contexts/CompanyContext";
import { FaRegSmile, FaRegMeh, FaRegFrown, FaMoneyBill } from "react-icons/fa";
import { MdOutlineHourglassTop } from "react-icons/md";

import ChartFrequency from "../../components/chart/ChartFrequency";
import EJInfoPark from "../../components/EJ/EJInfoPark";

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
                    <h2>Saúde dos Instrumentos & Custos</h2>
                    
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

                    <ChartFrequency dataChart={[parseInt(companyParkSlots), parseInt(companyParkSlotsFilled)]} />
                    
                </div>
            </div>
            
            <Divider></Divider>

            <div className="maps">

                <h2>Estacionamento da Empresa</h2>

                <EJInfoPark MapperPark={companyData} no_controls={true}/>


            </div>
            
        </section>
    );
}