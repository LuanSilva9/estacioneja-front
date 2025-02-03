import * as React from 'react';

import { Box, Divider, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material";

import { IoMdNavigate } from "react-icons/io";
import { IoExit } from "react-icons/io5"
import { FaIdCardClip, FaTrash } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { PiChecksBold } from "react-icons/pi";

import { AiOutlineExport } from "react-icons/ai";

import dayjs from 'dayjs';
import { TOLERANCE } from '../../defaultValues';
import { useUser } from '../../contexts/UserContext';

export default function EJReservation({ MapperJsonReservation, onlyInfo }) {
    const { userData, updateUserData } = useUser();
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function getPeriod(time) {
        return time.hour() >= 12 ? "PM" : "AM";
    }

    function getFormattedTime(time) {
        const dayjsTime = dayjs(time);

        if (!dayjsTime.isValid()) {
            return;
        }

        const period = getPeriod(dayjsTime);
        const hour = dayjsTime.format("hh");
        const minute = dayjsTime.format("mm");

        return `${hour}:${minute} ${period}`;
    }

    function compareTime() {
        // Status code for Verification: if the code is 0 is correct then user can make check-in, if the code is -1 time is before so return the dialog-message-box with appropriatte message, if the code is 1, is too late, and return the dialog-message-box too
        const dayJsTimeEntry = dayjs(MapperJsonReservation.reservationDateEntry);
        const dayJsTimeNow = dayjs();

        const greaterTolerance = dayJsTimeEntry.add(TOLERANCE, "minute");
        const minorTolerance = dayJsTimeEntry.subtract(TOLERANCE, "minute");

        const isEquals = dayJsTimeNow.isBetween(minorTolerance, greaterTolerance, null, '[]');

        if(isEquals) {
            return 0;
        }
        else {
            if(dayJsTimeNow.isBefore(minorTolerance)) {
                return -1;
            } else if(dayJsTimeNow.isAfter(greaterTolerance)) {
                return 1;
            }
        }
    }

    function fazerCheckIn() {
        if(compareTime() == -1) {
            // Dialog box
            return;
        }

        else if (compareTime() == 1) {
            // Dialog box
            return;
        }

        else if (compareTime() == 0) {
            alert("Você fez check-in!")
            excluirReserva(1);
        }
    }


    function excluirReserva(status) {
        const index = userData.userReservation.findIndex(reservation => reservation === MapperJsonReservation);

        if (index !== -1) {
            const updatedReservations = [...userData.userReservation];
            updatedReservations.splice(index, 1);
            
            updateUserData({ ...userData, userReservation: updatedReservations, userReservationHistory: [...userData.userReservationHistory, { status: status, reservation: MapperJsonReservation }] });
        } else {
            console.log("Reserva não encontrada.");
        }
        
    }

    function mostrarDialogExcluir() {
        setOpen(true)
    }


    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Deseja realmente cancelar essa reserva?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Esta ação não pode ser desfeita porem você pode voltar a fazer reservas!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => {
                            excluirReserva(0);
                            handleClose();
                        }}
                        color="error"
                        autoFocus
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        
            <section className="reservation" style={{ borderBottom: `2px solid rgb(0, 100, 0)` }}>
                

                <Box className="control" gap={2}>
                    <Box className="card-info-single" sx={{ bgcolor: 'success.light', color: "rgb(0,0,0)" }}>
                        <Typography align='center' variant="h6">Local</Typography>
                        <IoMdNavigate className='card-info-icon' />
                        <Typography align='center' variant='body3'>{MapperJsonReservation.reservationPark.companyName}</Typography>
                    </Box>

                    <Box className="card-info-single" sx={{ bgcolor: 'success.light', color: "rgb(0,0,0)" }}>
                        <Typography align='center' variant="h6">Horario Chegada</Typography>
                        <FaIdCardClip className='card-info-icon' />
                        <Typography align='center' variant='body3'>{getFormattedTime(MapperJsonReservation.reservationDateEntry)}</Typography>
                    </Box>

                    <Box className="card-info-single" sx={{ bgcolor: 'success.light', color: "rgb(0,0,0)" }}>
                        <Typography align='center' variant="h6">Horario Saida</Typography>
                        <IoExit className='card-info-icon' />
                        <Typography align='center' variant='body3'>{getFormattedTime(MapperJsonReservation.reservationDateExit)}</Typography>
                    </Box>

                    <Box className="card-info-single" sx={{ bgcolor: 'success.light', color: "rgb(0,0,0)" }}>
                        <Typography align='center' variant="h6">Veiculo</Typography>
                        <FaCar className='card-info-icon' />
                        <Typography align='center' variant='body3'>{MapperJsonReservation.reservationVeicle}</Typography>
                    </Box>
                </Box>

                {!onlyInfo ? (

                    <div className="btnControl">
                        <Button variant="contained" sx={{ borderRadius: 0, background: "#222", fontWeight: 550, fontSize: "20px" }} ><AiOutlineExport /> </Button>
                        <Button variant="contained" onClick={mostrarDialogExcluir} sx={{ borderRadius: 0, background: "#222", fontWeight: 550 }}  startIcon={<FaTrash /> }>Cancelar reserva</Button>
                        <Button variant="contained" onClick={fazerCheckIn} sx={{ borderRadius: 0, bgcolor: "success.light", fontWeight: 550 }} startIcon={<PiChecksBold />}> Fazer Check-in</Button>
                    </div>

                ) : null}
            </section>
        </React.Fragment>
    )
}