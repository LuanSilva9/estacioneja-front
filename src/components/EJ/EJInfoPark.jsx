import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from "chart.js";
import { Button } from "react-bootstrap";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

export default function EJInfoPark({ MapperPark }) {
    let dataAgo = [];
    let date = new Date();

    for (let i = 0; i < date.getHours(); i++) {
        dataAgo[i] = `${i}h`;
    }

    const data = {
        labels: dataAgo,
        datasets: [
            {
                label: "Fluxo do estacionamento",
                data: [50, 30, 20, 50, 20, 10, 20, 30, 50, 30, 20, 50, 30, 20, 50, 20, 10, 20, 30, 50], 
                borderColor: "#0d6efd", 
                backgroundColor: "rgba(13, 110, 253, 0.2)", 
                borderWidth: 2,
                pointRadius: 5, 
                pointHoverRadius: 7, 
                fill: true, 
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true, 
            },
        },
    };

    return (
        <div className="info-park">
            <div className="map-park">
                <h2>Mapa do Estacionamento</h2>
                <img src={MapperPark.companyParkImageMap} alt="Map" />
            </div>

            <div className="atividade">
                <div className="atividade-info">
                    <h2>Atividade</h2>
                    <Line className="graph" data={data} options={options} />
                </div>

                <div className="atividade-btns">
                    <Button
                        className="rounded-0"
                        disabled={MapperPark.companyParkSlotsFilled === MapperPark.companyParkSlots}
                    >
                        Fazer uma reserva
                    </Button>
                    <Button className="rounded-0">Falar com o suporte</Button>
                </div>
            </div>
        </div>
    );
}
