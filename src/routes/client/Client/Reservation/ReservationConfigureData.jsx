import { useEffect, useState } from "react";

import { Autocomplete, Grid, TextField, Typography } from "@mui/material";

import { useReservation } from "../../../../contexts/ReservationContext"
import { useUser } from "../../../../contexts/UserContext";

import { MdOutlineError } from "react-icons/md";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { TimeField } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function ReservationConfigureData() {
    const { reservationData, updateReservationData } = useReservation();
    const { userData } = useUser();

    const [dateEntry, setDateEntry] = useState();
    const [dateExit, setDateExit] = useState();

    useEffect(() => {
        const parkSelected = JSON.parse(localStorage.getItem('parkSelected'));

        if (parkSelected) {
            updateReservationData({
                ...reservationData,
                reservationPark: parkSelected
            });
        }
    }, [reservationData, updateReservationData]);

    function getOptionByDay() {
        const date = new Date();

        let currentDay = date.getDate();
        let options = []

        for (let i = currentDay; i <= currentDay + 7; i++) {
            options.push(i);
        }


        return options;
    }

    function getVeiclesName() {
        const veicles = userData.userVeicles;

        let veiclesName = [];

        if(veicles) {
            for(let i = 0; i < veicles.length; i++) {
                veiclesName.push(`${veicles[i].model}, ${veicles[i].name} / ${veicles[i].sign}`)
            }

            return veiclesName;
        } else {
            return [];
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Autocomplete
                    fullWidth
                    options={getVeiclesName()} 
                    getOptionLabel={(option) => option} 
                    value={reservationData.reservationVeicle || null} 
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Selecione o Veículo que irá entrar"
                            required
                            variant="outlined"
                            fullWidth
                        />
                    )}
                    onChange={(e, newValue) => {
                        updateReservationData({
                            ...reservationData,
                            reservationVeicle: newValue 
                        });
                    }}
                />
            </Grid>




            <Grid item xs={12}>
                <Autocomplete
                    fullWidth
                    value={reservationData.reservationDay || null}
                    options={getOptionByDay()}
                    getOptionLabel={(option) => option.toString()}
                    renderInput={(params) => <TextField helperText={"Reservas só podem ser feitas para datas dentro de um período de 7 dias."} {...params} label="Que dia voce irá estacionar?" variant="outlined" fullWidth />}
                    onChange={(e, newValue) => {
                        updateReservationData({ ...reservationData, reservationDay: newValue })
                    }}
                />
            </Grid>

            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimeField']}>
                        <TimeField value={reservationData.reservationDateEntry ? dayjs(reservationData.reservationDateEntry) : null} fullWidth label="Horario de chegada" onChange={(newValue) => {
                            if (newValue) {
                                setDateEntry(newValue);

                                updateReservationData({
                                    ...reservationData,
                                    reservationDateEntry: newValue,
                                })
                            }
                        }} />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>

            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimeField']}>
                        <TimeField value={reservationData.reservationDateExit ? dayjs(reservationData.reservationDateExit) : null} fullWidth label="Horario de saida" onChange={(newValue) => {
                            if (newValue) {
                                setDateExit(newValue);

                                updateReservationData({
                                    ...reservationData,
                                    reservationDateExit: newValue,
                                })
                            }
                        }} />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
                {dateEntry && dateExit && dateEntry.$H > dateExit.$H ? <Typography variant="subtitle" sx={{ color: 'rgb(156, 52, 38)' }}><MdOutlineError /> O Horario de chegada não pode ser superior ao horario de saida!</Typography> : null}
            </Grid>
        </Grid>
    )
}