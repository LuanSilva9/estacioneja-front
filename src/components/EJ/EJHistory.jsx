import { Grid } from "@mui/material";
import { FcOk } from "react-icons/fc";
import { MdCancel } from "react-icons/md";

export default function EJHistory({ MapperJsonHistory }) {
    return (
        <Grid item xs={12} className="history" mt={1}>
            <div className="text-left">
                <h2>{MapperJsonHistory.reservation.reservationPark.companyName} / Dia: {MapperJsonHistory.reservation.reservationDay}</h2>
                <p>{MapperJsonHistory.reservation.reservationPark.companyAddress.street} - {MapperJsonHistory.reservation.reservationPark.companyAddress.neighborhood}, {MapperJsonHistory.reservation.reservationPark.companyCity.name}, {MapperJsonHistory.reservation.reservationPark.companyCity.uf}</p>
            </div>

            <div className="text-right">
                <span className={MapperJsonHistory.status == 1 ? 'status-code-success' : 'status-code-error'} >{MapperJsonHistory.status == 1 ? <FcOk /> : <MdCancel />} {MapperJsonHistory.status == 1 ? "Reserva e Check-in's feitos" : "Reserva Cancelada"}</span>
            </div>
        </Grid>
    )
}