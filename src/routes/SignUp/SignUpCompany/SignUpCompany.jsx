import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";


import { companys } from "../../../constants/Companys";

import '../SignUp.css';

import { Link } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";

import { useState } from "react";

// import {companyContext} from '../../../context/companyContext';


const ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

export default function SignUpCompany() {

    // const [empresaNome, setEmpresaNome] = useState(companyContext.companyName);
    // const [empresaCidade, setEmpresaCidade] = useState(companyContext.companyCity);
    // const [empresaUf, setEmpresaUf] = useState(companyContext.companyUf);
    // const [empresaEndereco, setEmpresaEndereco] = useState(companyContext.companyAdress);

    return (
        <section className="sign-up-company">
            <div className="form">
                <form>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Venha ser EstacioneJá!</h2>
                        <p>Já existem <b>{companys.length} empresas</b> usando nossos serviços, vai ficar de fora?</p>
                    </div>
                    
                    <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Informações da Empresa</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="nomeEmpresa"
                                label="Nome da empresa"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="cidadeEmpresa"
                                label="Cidade da empresa"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                options={ufs}
                                renderInput={(params) => (
                                    <TextField {...params} label="UF da empresa" variant="outlined" fullWidth />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Endereço da Empresa</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="ruaEmpresa"
                                label="Rua da empresa"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="bairroEmpresa"
                                label="Bairro da empresa"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Box display="flex" justifyContent="space-between">
                                    <Link to="/cadastrar"  className="btn btn-dark">Voltar</Link>
                                    <Link to="/cadastrar/empresa/passo-2" className="btn btn-primary">Proximo Passo <MdNavigateNext/></Link>
                                </Box>
                            </Grid>
                    </Grid>
                </form>
            </div>

            <div className="image-side"></div>
        </section>
    )
}