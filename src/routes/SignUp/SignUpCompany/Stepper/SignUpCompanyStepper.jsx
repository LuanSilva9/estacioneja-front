import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  Box, Button, Grid, Step, StepButton, Stepper, Typography } from '@mui/material';
import SignUpCompany from '../SignUpCompany';
import SignUpInfoLegals from '../SignUpCompanyInfoLegals';
import SignUpCompanyPayment from '../SignUpCompanyPayment';
import { useCompany } from '../../../../contexts/CompanyContext';
import { companys } from '../../../../constants/Companys';

const steps = ['Informações Gerais da Empresa', 'Informações Legais da Empresa e Acessos', 'Selecionar Planos'];

export default function SignUpCompanyStepper() {
    let navigate = useNavigate();

    const { companyData } = useCompany();

    const [errors, setErrors] = React.useState({});
    const [activeStep, setActiveStep] = React.useState(0);
    
    const validateFields = () => {
        const {
            companyName,
            companyCity,
            companyType,
            companyParkSlots,
            companyAddress,
            companyCnpj,
            companyLegalRepresentative,
            companyAccess
        } = companyData;
    
        const errors = {};
    
        if (activeStep === 0) {
            if (!companyName.trim()) errors.companyName = "Informe o nome da empresa.";
            if (!companyCity.name?.trim()) errors.companyCity = "Informe a cidade da empresa.";
            if (!companyCity.uf?.trim()) errors.companyUf = "Informe o estado (UF).";
            if (!companyCity.cep?.trim()) errors.companyCep = "Informe o CEP.";
            if (!companyAddress.street?.trim()) errors.companyStreet = "Informe a rua.";
            if (!companyAddress.neighborhood?.trim()) errors.companyNeighborhood = "Informe o bairro.";
            if (!companyType?.trim()) errors.companyType = "Informe o tipo da empresa.";
            if(!companyParkSlots) errors.parkSlots = "Informe o numero de vagas.";
        }
    
        if (activeStep === 1) {
            const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const regex_cnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/

            if (!companyCnpj?.trim()) errors.companyCnpj = "Informe o CNPJ.";
            if (companyCnpj?.trim() ) if(!regex_cnpj.test(companyCnpj?.trim())) errors.companyCnpj = "CNPJ Invalido ( Padrão XX.XXX.XXX/XXXX-XX).";
            if (!companyLegalRepresentative?.trim()) errors.companyRepresentative = "Informe o representante legal.";
            if (!companyAccess.email?.trim()) errors.companyEmail = "Informe o e-mail de acesso.";
            if(companyAccess.email?.trim()) if (!regex_email.test(companyAccess.email?.trim())) errors.companyEmail = "E-mail Invalido.";
            if (!companyAccess.password?.trim()) errors.companyPassword = "Informe a senha de acesso.";
        }
    
        setErrors(errors);
    
        return Object.keys(errors).length === 0;
    };
    

    const stepComponents = React.useMemo(() => {
        return [
            <SignUpCompany errors={errors} />,
            <SignUpInfoLegals errors={errors} />,
            <SignUpCompanyPayment errors={errors} />
        ];
    }, [errors]);

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
            case (steps.length - 1): return { label: "Concluir Configurações", type: "submit" };
            default: return { label: "Avançar", type: "button" };
        }
    }, [activeStep]);

    async function handleSubmit(e) {
        e.preventDefault();

        if(activeStep == stepComponents.length -1) {
            companys.push(companyData);

            localStorage.setItem("sessionId", process.env.REACT_APP_AUTH_KEY_COMPANY);

            navigate("/dashboard");
        }
    }

    function getLabelByActiveStep(activeStep) {
        switch(activeStep) {
            case 0:
                return "Informações Gerais da Empresa"
            case 1: 
                return "Informações Legais da Empresa e Acessos"    
            case 2:
                return "Selecionar Plano"
            default:
                return "N/a";
        }
    }

    return (
        <React.Fragment>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label, index) => {
                                return (
                                    <Step key={label}>
                                        <StepButton onClick={handleStep(index)} sx={{
                                            '& .MuiStepLabel-label': {
                                                color: activeStep === index ? 'success.main' : 'text.secondary',
                                            },
                                            '& .MuiStepIcon-root': {
                                                color: activeStep >= index ? 'success.main' : 'grey.400',
                                            },
                                            }}>
                                            {label}
                                        </StepButton>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Grid>


                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-text">
                                <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                                <h2>{getLabelByActiveStep(activeStep)}</h2>
                            </div>
                            {stepComponents[activeStep]}
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
        </React.Fragment>
    )
}