import React from "react";

import { useReservation } from "../../../../contexts/ReservationContext"

import { FaCarSide } from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import { IoMdNavigate } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import dayjs from "dayjs";

export default function ReservationConfirmData() {
    const { reservationData } = useReservation()

    if(localStorage.getItem('parkSelected')) {
        localStorage.removeItem('parkSelected');
    }

    function getPeriod(time) {
        return time.hour() >= 12 ? "PM" : "AM";
    }

    function getTimeFormattedEntry() {
        const time = dayjs(reservationData.reservationDateEntry);
    
        if (!time.isValid()) {
            throw new Error("Invalid time");
        }
    
        const formattedHour = time.format('hh');
        const formattedMinute = time.format('mm');

        const period = getPeriod(time);
    
        return (
            <Typography variant="h5" sx={{ color: "rgb(36, 36, 36)" }}>
                Entrada - {formattedHour}:{formattedMinute} {period}
            </Typography>
        );
    }

    function getTimeFormattedExit() {
        const time = dayjs(reservationData.reservationDateExit);
    
        if (!time.isValid()) {
            throw new Error("Invalid time");
        }
    
        const formattedHour = time.format('hh');
        const formattedMinute = time.format('mm');
        const period = getPeriod(time);
    
        return (
            <Typography variant="h5" sx={{ color: "rgb(36, 36, 36)" }}>
                Saida - {formattedHour}:{formattedMinute} {period}
            </Typography>
        );
    }
    

    return (
        <Box className="confirmData">
            <Box className="data-show-single">
                <FaCarSide className="confirmData-icon"/>
                <Typography variant="h5" sx={{color: "rgb(36, 36, 36)"}}>{ reservationData.reservationVeicle || null }</Typography>
            </Box>

            <Box className="data-show-single">
                <IoMdNavigate className="confirmData-icon"/>
                <Typography variant="h5" sx={{color: "rgb(36, 36, 36)"}}>{ reservationData.reservationPark.companyName || null }</Typography>
            </Box>

            <Box className="data-show-single">
                <IoTime className="confirmData-icon"/>
                { getTimeFormattedEntry() }
            </Box>

            <Box className="data-show-single">
                <IoTime className="confirmData-icon"/>
                { getTimeFormattedExit() }
            </Box>
        </Box>
    )
}