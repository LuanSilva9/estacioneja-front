import { Button } from "react-bootstrap";

export default function EJParkModel({ MapperJsonPark }) {
    return (
        <div className="park">
            <h3>{MapperJsonPark.companyName}</h3>
            <p>{MapperJsonPark.companyParkSlots} vagas disponiveis</p>

            <Button variant="dark" href={`/client/estacionamento/${MapperJsonPark.companyNameFormated}`}>Acessar Estacionamento</Button>
        </div>
    )
}