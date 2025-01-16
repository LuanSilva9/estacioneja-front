import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Backdrop, Box, Button, CircularProgress, Divider, Grid, Paper, Stack, Step, StepButton, Stepper, Typography } from '@mui/material';

import HeaderbarClient from '../../../../components/HeaderbarClient';

import { useReservation } from '../../../../contexts/ReservationContext';
import { useUser } from '../../../../contexts/UserContext';
import ReservationConfigureData from './ReservationConfigureData';

const steps = ['Preencher dados', 'Confirmar reserva'];

export default function ReservationStepper() {
    let navigate = useNavigate();

    const { userData, updateUserData } = useUser();
    const { reservationData, updateReservationData } = useReservation()
    const [activeStep, setActiveStep] = React.useState(0);

    const stepComponents = React.useMemo(() => {
        return [
            <ReservationConfigureData />
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

        switch (activeStep) {
            case (steps.length - 1):
                break;
            default:
                nextStep();
        }
    };

    const buttonLabel = React.useMemo(() => {
        switch (activeStep) {
            case (steps.length - 1): return { label: "Finalizar", type: "submit" };
            default: return { label: "Avançar", type: "button" };
        }
    }, [activeStep]);

    function handleSubmit(e) {
        console.log(e);
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
                        <Typography align='center' variant='h4'>Reservar Vaga</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            {stepComponents[activeStep]}
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"

                                    onClick={handleBack}
                                    sx={{
                                        mr: 1,
                                        display: ([0, 4].includes(activeStep)) ? 'none' : 'flex'
                                    }}
                                >
                                    Voltar
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    onClick={buttonLabel.type == "button" ? handleNext : null}
                                    type={buttonLabel.type}
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