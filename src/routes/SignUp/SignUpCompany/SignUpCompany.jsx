import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";


import { companys } from "../../../constants/Companys";

import '../SignUp.css';

import { Link, useNavigate } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";

import { useCompany } from "../../../contexts/CompanyContext";
import { citys } from "../../../constants/Citys";
import { Button } from "react-bootstrap";

const type = ["EMPRESA", "ESCOLA", "OUTROS"]

export default function SignUpCompany() {
    const { companyData, updateCompanyData } = useCompany();

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        navigate("../passo-2");
    }

    return (
        <section className="sign-up-company">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Venha ser EstacioneJá!</h2>
                        <p>Já existem <b>{companys.length} empresas</b> usando nossos serviços, vai ficar de fora?</p>
                    </div>
                    <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12}>
                            <Typography textAlign="start" sx={{ fontSize: "17px", fontWeight: "bold" }}>Informações da Empresa</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Nome da empresa"
                                variant="outlined"
                                fullWidth
                                value={companyData.companyName}
                                onChange={(e) => updateCompanyData({ companyName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Autocomplete
                                label="Cidade da empresa"
                                variant="outlined"
                                fullWidth
                                value={companyData.companyCity.name}
                                options={citys}
                                getOptionLabel={(option) => option.name || ''}
                                renderInput={(params) => <TextField
                                        required {...params} label="Cidade da empresa" variant="outlined" fullWidth />}
                                onChange={(event, newValue) => {
                                    updateCompanyData({
                                        companyCity: newValue ? {
                                            name: newValue,
                                            uf: newValue.uf || '',
                                            cep: newValue.cep,
                                        } : {
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
                            />
                        </Grid>
                    
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Box display="flex" justifyContent="space-between">
                                <Link to="/cadastrar"  className="btn btn-dark">Voltar</Link>
                                <Button type="submit" className="btn btn-primary">Proximo Passo <MdNavigateNext/></Button>
                            </Box>
                        </Grid>
                    </Grid>


                </form>
            </div>

            <div className="image-side" style={{ background: "url(/assets/bg-signin-company.jpg) no-repeat center center" }}></div>
        </section>
    )
}