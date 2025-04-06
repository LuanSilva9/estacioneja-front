import { Autocomplete, Grid, TextField, Typography } from "@mui/material";

import '../SignUp.css';

import { Link, useNavigate } from "react-router-dom";

import { useCompany } from "../../../contexts/CompanyContext";
import { citys } from "../../../constants/Citys";

const type = ["EMPRESA", "ESCOLA", "OUTROS"]

export default function SignUpCompany({ errors }) {
    const { companyData, updateCompanyData } = useCompany();

    return (
                    <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12}>
                            <Typography textAlign="start" sx={{ fontSize: "17px", fontWeight: "bold" }}>Informações da Empresa</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Nome da empresa"
                                variant="outlined"
                                error={!!errors.companyName}
                                helperText={errors.companyName}
                                fullWidth
                                value={companyData.companyName}
                                onChange={(e) => updateCompanyData({ companyName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={8}>
                        <Autocomplete
                            value={companyData.companyCity}
                            options={citys}
                            getOptionLabel={(option) => option.name || ''}
                            renderInput={(params) => (
                                <TextField
                                required
                                {...params}
                                label="Cidade da empresa"
                                variant="outlined"
                                fullWidth
                                error={!!errors.companyCity}
                                helperText={errors.companyCity}
                                />
                            )}
                            onChange={(event, newValue) => {
                                updateCompanyData({
                                companyCity: newValue
                                    ? {
                                        name: newValue.name,
                                        uf: newValue.uf || '',
                                        cep: newValue.cep || '',
                                    }
                                    : {
                                        name: '',
                                        uf: '',
                                        cep: '',
                                    }
                                });
                            }}
                            />

                            <Typography textAlign="start" sx={{ mt: 1, fontSize: "14px", fontWeight: "bold" }}>
                                <Link>Minha cidade não está aqui...</Link>
                            </Typography>
                        </Grid>


                        <Grid item xs={4}>
                            <TextField
                                disabled
                                label="UF da Empresa"
                                variant="outlined"
                                value={companyData.companyCity.uf}
                                fullWidth
                            />
                        </Grid>


                        <Grid item xs={8}>
                            <Typography textAlign="start" sx={{ fontSize: "15px", fontWeight: "bold" }}>Tipo de Organização</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography textAlign="end" sx={{ fontSize: "15px", fontWeight: "bold" }}>Quantidade de vagas</Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Autocomplete
                                options={type}
                                renderInput={(params) => <TextField required {...params} label="Selecionar Tipo" variant="outlined" fullWidth />}
                                value={companyData.companyType.toLowerCase()}
                                onChange={(event, newValue) => updateCompanyData({ companyType: newValue })}
                                error={!!errors.companyType}
                                helperText={errors.companyType}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                required
                                label="Vagas do estacionamento"
                                variant="outlined"
                                type="number"
                                fullWidth
                                value={companyData.companyParkSlots}
                                onChange={(e) => updateCompanyData({ companyParkSlots: e.target.value })}
                                error={!!errors.parkSlots}
                                helperText={errors.parkSlots}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography textAlign="start" sx={{ fontSize: "17px", fontWeight: "bold" }}>Informações da Empresa</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Rua e numero da Empresa"
                                variant="outlined"
                                fullWidth
                                value={companyData.companyAddress.street}
                                onChange={(e) => updateCompanyData({ 
                                    companyAddress: { 
                                        ...companyData.companyAddress, 
                                        street: e.target.value 
                                    } 
                                })}
                                error={!!errors.companyStreet}
                                helperText={errors.companyStreet}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Bairro da empresa"
                                variant="outlined"
                                fullWidth
                                value={companyData.companyAddress.neighborhood}
                                onChange={(e) => updateCompanyData({ 
                                    companyAddress: { 
                                        ...companyData.companyAddress, 
                                        neighborhood: e.target.value 
                                    } 
                                })}
                                error={!!errors.companyNeighborhood}
                                helperText={errors.companyNeighborhood}
                            />
                        </Grid>
                    </Grid>
    )
}