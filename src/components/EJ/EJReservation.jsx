import * as React from 'react';

import { Box, Divider, Typography, Button } from "@mui/material";

import { IoMdNavigate } from "react-icons/io";
import { IoExit } from "react-icons/io5"
import { FaIdCardClip, FaTrash } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { PiChecksBold } from "react-icons/pi";

import { AiOutlineExport } from "react-icons/ai";

import dayjs from 'dayjs';


export default function EJReservation({ MapperJsonReservation, onlyInfo }) {
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


    return (
        <section className="reservation" style={{ borderTop: `2px solid rgb(0, 100, 0)` }}>
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
                    <Button variant="contained" sx={{ borderRadius: 0, background: "#ff6b00", fontWeight: 550, fontSize: "20px" }} ><AiOutlineExport /> </Button>
                    <Button variant="contained" sx={{ borderRadius: 0, background: "#222", fontWeight: 550 }}  startIcon={<FaTrash /> }>Cancelar reserva</Button>
                    <Button variant="contained" sx={{ borderRadius: 0, bgcolor: "success.light", fontWeight: 550 }} startIcon={<PiChecksBold />}> Fazer Check-in</Button>
                </div>

            ) : null}
        </section>
    )
}