import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  Box, Button, Grid, Step, StepButton, Stepper, Typography } from '@mui/material';

import HeaderbarClient from '../../../../components/HeaderbarClient';

import { useReservation } from '../../../../contexts/ReservationContext';
import { useUser } from '../../../../contexts/UserContext';
import ReservationConfigureData from './ReservationConfigureData';
import ReservationConfirmData from './ReservationConfirmData';
import dayjs from 'dayjs';

const steps = ['Preencher dados', 'Confirmar reserva'];

export default function ReservationStepper() {
    let navigate = useNavigate();

    const { userData, updateUserData } = useUser();
    const { reservationData, updateReservationData } = useReservation()

    const [errors, setErrors] = React.useState({});
    const [activeStep, setActiveStep] = React.useState(0);
    
    const validateFields = () => {
        const { reservationVeicle, reservationDay, reservationDateEntry, reservationDateExit } = reservationData;
        const errors = {};
    
        if (!reservationVeicle) errors.reservationVeicle = "Selecione um veículo.";
        if (!reservationDay) errors.reservationDay = "Escolha um dia.";
        if (!reservationDateEntry) errors.reservationDateEntry = "Informe o horário de entrada.";
        if (!reservationDateExit) errors.reservationDateExit = "Informe o horário de saída.";
        if (reservationDateEntry && reservationDateExit && dayjs(reservationDateEntry).isAfter(dayjs(reservationDateExit))) {
            errors.dateRange = "O horário de entrada não pode ser maior que o horário de saída.";
        }
    
        setErrors(errors);

        return Object.keys(errors).length === 0; 
    };

    const stepComponents = React.useMemo(() => {
        return [
            <ReservationConfigureData />,
            <ReservationConfirmData />
        ];
    }, []);

    const nextStep = React.useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleNext = (event) => {
        event.preventDefault();
    
        if (validateFields()) {
            nextStep(); 
        }
    };

    const buttonLabel = React.useMemo(() => {
        switch (activeStep) {
            case (steps.length - 1): return { label: "Concluir Reserva", type: "submit" };
            default: return { label: "Avançar", type: "button" };
        }
    }, [activeStep]);

    function handleSubmit(e) {
        e.preventDefault();

        // Validacao / Regra de negocio para reserva de vaga

        updateUserData({
            ...userData,
            userReservation: [
                ...userData.userReservation,
                reservationData
            ]
        });

        localStorage.removeItem('reservationData');

        navigate("/client");
    }

    return (
        <React.Fragment>
            <HeaderbarClient userProps={userData} />

            <section className='stepper-form'>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label, index) => {
                                return (
                                    <Step key={label} variant="success">
                                        <StepButton onClick={handleStep(index)}>
                                            {label}
                                        </StepButton>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography align='center' variant='h4'>{activeStep === 1 ? "Confirmar reserva" : "Reservar Vaga"}</Typography>
                    </Grid>


                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            {stepComponents[activeStep]}
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button color="inherit" onClick={handleBack} sx={{
                                    mr: 1,
                                    display: ([0, 4].includes(activeStep)) ? 'none' : 'flex',
                                    bgcolor: "error.main", 
                                    borderRadius: 0,
                                    color: "white",
                                    fontSize: '15px',
                                    textTransform: 'capitalize'
                                }}
                                >
                                    Voltar
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    onClick={buttonLabel.type == "button" ? handleNext : null}
                                    type={buttonLabel.type}
                                    variant='filled'
                                    sx={{ bgcolor: "success.main", color: "white", borderRadius: 0, textTransform: 'capitalize', fontSize: '15px'}}
                                >
                                    {buttonLabel.label}
                                </Button>
                            </Box>
                        </form>
                    </Grid>

                </Grid>
            </section>
        </React.Fragment>
    )
}