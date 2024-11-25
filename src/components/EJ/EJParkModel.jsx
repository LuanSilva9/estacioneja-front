import { Button } from "react-bootstrap";

export default function EJParkModel({ MapperJsonPark }) {
    return (
        <div className="park">
            <h3>{MapperJsonPark.companyName}</h3>
            <p>{MapperJsonPark.parkSlots} vagas disponiveis</p>

            <Button variant="dark" href={`/client/${MapperJsonPark.pathPark}`}>Acessar Estacionamento</Button>
        </div>
    )
}