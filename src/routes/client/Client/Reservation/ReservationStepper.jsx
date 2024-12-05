import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Backdrop, Box, Button, CircularProgress, Paper, Stack, Step, StepButton, Stepper, Typography } from '@mui/material';

import { useReservation } from '../../../../contexts/ReservationContext';

const steps = ['Início', 'Verificação', 'Dados complementares', 'Tirar foto'];

export default function ReservationStepper() {
    let navigate = useNavigate();
    const { reservationData, updateReservationData } = useReservation()
    const [activeStep, setActiveStep] = React.useState(0);

    const stepComponents = React.useMemo(() => {
        return [
                                
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
            case 0: return "Enviar código";
            case 1: return "Verificar código";
            case (steps.length - 1): return "Finalizar";
            default: return "Avançar";
        }
    }, [activeStep]);


    return (
        <Paper elevation={1} sx={{ mt: 3, p: 3 }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => {
                            return (
                                <Step key={label}>
                                    <StepButton color="inherit" onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <Stack spacing={2} sx={{ mt: 3, p: 3 }}>
                            <Typography gutterBottom variant="h5" textAlign="center">
                                Parab&eacute;ns!
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }} textAlign="center">
                                Seu cadastro foi realizado com sucesso!
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }} textAlign="center">
                                Em breve você receberá um e-mail com mais Informações.
                            </Typography>
                            <Button
                                onClick={() => navigate(`/login`)}
                            >
                                Clique aqui para acessar o sistema
                            </Button>
                        </Stack>
                    ) : (
                        <Box sx={{ mt: 3, p: 2 }}>
                            {stepComponents[activeStep]}
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={[0, 2].includes(activeStep)}
                                    onClick={handleBack}
                                    sx={{
                                        mr: 1,
                                        display: ([0, 2].includes(activeStep)) ? 'none' : 'flex'
                                    }}
                                >
                                    Voltar
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    onClick={handleNext}
                                >
                                   {buttonLabel}
                                </Button>
                            </Box>
                        </Box>
                    )}

                    <h2>{ activeStep }</h2>
                </Paper>
    )
}