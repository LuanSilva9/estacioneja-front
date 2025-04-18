import { Box, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { useCompany } from "../../../contexts/CompanyContext";
import { TbLockFilled } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiUserLocationFill } from "react-icons/ri";
import { MdNumbers } from "react-icons/md";


export default function SignUpInfoLegals({errors}) {
    const { companyData, updateCompanyData } = useCompany();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        navigate("../passo-3");
    }

    return (
                    <Grid container spacing={2} sx={{ mb: 1 }}>

                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontWeight: 'bold' }}>CNPJ</Typography>
                        </Grid>


                        <Grid item xs={12}>
                            <TextField
                                required
                                label="CNPJ da empresa"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                                                <MdNumbers />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                value={companyData.companyCnpj}
                                onChange={(e) => updateCompanyData({ companyCnpj: e.target.value })}
                                fullWidth
                                error={!!errors.companyCnpj}
                                helperText={errors.companyCnpj}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontWeight: 'bold' }}>Nome completo do Representante</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Nome do Representante"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                                                <RiUserLocationFill />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                value={companyData.companyLegalRepresentative}
                                onChange={(e) => updateCompanyData({ companyLegalRepresentative: e.target.value })}
                                fullWidth
                                error={!!errors.companyRepresentative}
                                helperText={errors.companyRepresentative}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Divider>Credenciais para acesso</Divider>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                            
                                required
                                label="E-mail"
                                type="email"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                                                <RiAccountCircleFill />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                value={companyData.companyAccess.email}
                                onChange={(event) => updateCompanyData({
                                    companyAccess: {
                                        email: event.target.value,
                                        password: companyData.companyAccess.password
                                    }
                                })}
                                fullWidth
                                error={!!errors.companyEmail}
                                helperText={errors.companyEmail}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Senha"
                                variant="outlined"
                                type="password"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                                                <TbLockFilled />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                value={companyData.companyAccess.password}
                                onChange={(event) => updateCompanyData({
                                    companyAccess: {
                                        email: companyData.companyAccess.email,
                                        password: event.target.value
                                    }
                                })}
                                fullWidth
                                error={!!errors.companyPassword}
                                helperText={errors.companyPassword}
                            />
                        </Grid>
                    </Grid>
    )
}