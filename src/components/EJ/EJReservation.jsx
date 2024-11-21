import { Avatar, Divider } from "@mui/material";
import { Button } from "react-bootstrap";

export default function EJReservation({ MapperJsonReservation }) {
    return (
        <section className="reservation">
            <div className="painel-title">
                <h2>Painel de Reserva</h2>
                
                <Avatar sx={{ width: 32, height: 32 }} src="/assets/camera" />
            </div>
            <Divider/>

            <div className="control">
                <div className="painel">
                    <h4>Voce possui umas reserva feita para: {MapperJsonReservation.companyName}</h4>
                    <h4>Horario de chegada & saida: {MapperJsonReservation.comeTime}-{MapperJsonReservation.finishTime}h</h4>
                    <h4>Placa do veiculo Cadastrada: {MapperJsonReservation.veicle}</h4>
                </div>

                <div className="infoCompany">
                    
                </div>
            </div>

            <div className="btnControl">
                <Button variant="light" className="rounded border border-1">Fazer Check-in</Button>
                <Button variant="dark" className="rounded">Gerar PDF</Button>
            </div>

        </section>
    )
}