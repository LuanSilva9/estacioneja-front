import * as React from 'react';

import { Box, Divider, Typography } from "@mui/material";
import { Button } from "react-bootstrap";

import { IoMdNavigate } from "react-icons/io";
import { IoExit } from "react-icons/io5"
import { FaIdCardClip } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import dayjs from 'dayjs';


export default function EJReservation({ MapperJsonReservation, onlyInfo }) {
    // function getTimeByReservation() {
    //     const time = new Date();
    //     const timeRequired = MapperJsonReservation.comeTime;
    // }

    return (
        <section className="reservation" style={{ borderTop: "2px solid green" }}>
            {
                !onlyInfo ? (
                    <>
                        <Typography align='center' variant="h5" component="div">Olá, Você possui uma Reserva</Typography>

                        <Divider>Informações</Divider>
                    </>
                )
                            : null
            }
            <Box className="control">
                <Box className="card-info-single" sx={{ bgcolor: 'primary.light', color: 'white' }}>
                    <Typography align='center' variant="h6">Local</Typography>
                    <IoMdNavigate className='card-info-icon'/>
                    <Typography align='center' variant='body3'>{MapperJsonReservation.reservationPark.companyName}</Typography>
                </Box>

                <Box className="card-info-single" sx={{ bgcolor: 'success.light', color: 'white' }}>
                    <Typography align='center' variant="h6">Horario Chegada</Typography>
                    <FaIdCardClip className='card-info-icon' />
                    <Typography align='center' variant='body3'>{dayjs(MapperJsonReservation.reservationDateEntry).isValid() ? dayjs(MapperJsonReservation.reservationDateEntry).format("hh") : null}h</Typography>
                </Box>

                <Box className="card-info-single" sx={{ bgcolor: 'error.light', color: 'white' }}>
                    <Typography align='center' variant="h6">Horario Saida</Typography>
                    <IoExit className='card-info-icon'/>
                    <Typography align='center' variant='body3'>{ dayjs(MapperJsonReservation.reservationDateExit).isValid() ? dayjs(MapperJsonReservation.reservationDateExit).format("hh") : null }h</Typography>
                </Box>

                <Box className="card-info-single" sx={{ bgcolor: 'primary.main', color: 'white' }}>
                    <Typography align='center' variant="h6">Veiculo</Typography>
                    <FaCar className='card-info-icon'/>
                    <Typography align='center' variant='body3'>{MapperJsonReservation.reservationVeicle}</Typography>
                </Box>
            </Box>

            {
                !onlyInfo ? (
                    <div className="btnControl">
                        <Button variant="dark" className="rounded">Gerar PDF</Button>
                        <Button variant="success" className="rounded border border-1">Fazer Check-in</Button>
                    </div>
                ) : null
            }
        </section>
    )
}