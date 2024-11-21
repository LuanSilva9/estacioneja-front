import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import { companys } from "../../../constants/Companys";
import { Link } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function SignUpClient({type}) {
    const [dddPhone, setDddPhone] = useState('');

    function handleDdd(e) {
        let value = e.target.value;
        
        value = value.replace(/\D/g, '');

        if (value.length <= 2) {
            setDddPhone(value);
        }
    }

    return (
        <section className="sign-up-client">
            <div className="form">
                <form>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Venha ser EstacioneJá!</h2>
                    </div>

                    <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Preencha o cadastro</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="nomeCliente"
                                label="Seu nome"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="sobrenomeCliente"
                                label="Seu Sobrenome"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                        <Autocomplete
                            options={type == "student" ? companys.filter((f) => f.companyType === "ESCOLA") : companys.filter((f) => f.companyType === "EMPRESA")}
                            getOptionLabel={(option) => option.companyName} 
                            renderInput={(params) => (
                                <TextField {...params} label={`Qual ${type == "student" ? "Escola" : "Empresa"} seu estacionamento está vinculado?`} variant="outlined" fullWidth />
                            )}
                            renderOption={(props, option) => (
                                <li {...props}>
                                    {option.companyName} - {option.companyCity}, {option.companyUf}
                                </li>
                            )}
                        />

                        </Grid>

                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Informações Pessoais</Typography>
                        </Grid>


                        <Grid item xs={2}>
                            <TextField
                                id="dddTelefone"
                                label="DDD"
                                variant="outlined"
                                value={dddPhone == '' ? null : `(${dddPhone})`}  
                                onChange={handleDdd}
                                maxLength={3}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={10}>
                            <TextField
                                id="telefone"
                                label="Telefone"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Seu E-mail"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Senha</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="senha"
                                label="Senha"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="senha"
                                label="Confirmar sSenha"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Box display="flex" justifyContent="space-between">
                                <Link to="/cadastrar" className="btn btn-dark">Voltar</Link>
                                <Link to="/client" className="btn btn-primary">Finalizar <MdNavigateNext /></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </section>
    )
}