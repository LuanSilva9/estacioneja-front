import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import { companys } from "../../../constants/Companys";
import { citys } from "../../../constants/Citys";

import { useUser } from "../../../contexts/UserContext";

import { Link, useNavigate } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { users } from "../../../cache/Users";

export default function SignUpClient({ type }) {    
    const [dddPhone, setDddPhone] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [filteredCompanies, setFilteredCompanies] = useState(companys);
    const [checked, setChecked] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [equalsPassword, setEqualsPassword] = useState(true);
    
    const navigate = useNavigate()

    const { userData, updateUserData } = useUser();

    async function handleSubmit(e) {
        e.preventDefault();

        if(!equalsPassword) alert("Confirme a senha");
        else {
            users.push(userData);

            localStorage.setItem('sessionId', process.env.REACT_APP_AUTH_KEY_USER);

            navigate('/'); 
        };
    }

    function handleDdd(e) {
        let value = e.target.value;

        value = value.replace(/\D/g, '');

        if (value.length <= 2) {
            setDddPhone(value);
        }
    }

    function handleCityChange(event, value) {
        setSelectedCity(value);

        if (value) {
            setChecked(true);
            setFilteredCompanies(companys.filter(company => company.companyCity.name === value.name));
        } else {
            setChecked(false);
            setFilteredCompanies(companys);
        }
    }

    function handlePasswordChange(e) {
        const newPassword = e.target.value;
        updateUserData({ userPassword: newPassword });
        setEqualsPassword(newPassword === confirmPassword);
    }

    function handleConfirmPassword(e) {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setEqualsPassword(userData.userPassword === newConfirmPassword);
    }

    return (
        <main className="client">
            <section className="sign-up-client">
                <div className="form">
                    <form onSubmit={handleSubmit}>
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
                                    required
                                    id="nomeCliente"
                                    label="Nome completo"
                                    variant="outlined"
                                    onChange={(e) => updateUserData({ userName: e.target.value })}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="emailCliente"
                                    type="email"
                                    label="E-mail"
                                    variant="outlined"
                                    onChange={(e) => updateUserData({ userEmail: e.target.value })}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Senha</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="senha"
                                    type="password"
                                    label="Senha"
                                    variant="outlined"
                                    onChange={handlePasswordChange}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    type="password"
                                    label="Confirmar Senha"
                                    variant="outlined"
                                    onChange={handleConfirmPassword}
                                    fullWidth
                                />
                                { equalsPassword ? null : <Typography textAlign={"start"} sx={{ fontSize: "15px", color: "#ff0000" }}>As senhas não são iguais!</Typography> }
                            </Grid>

                            <Grid item xs={12}>
                                <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Informações Pessoais</Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    required
                                    id="dddTelefone"
                                    label="DDD"
                                    variant="outlined"
                                    value={dddPhone === '' ? null : `(${dddPhone})`}
                                    onChange={handleDdd}
                                    maxLength={3}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={9}>
                                <TextField
                                    id="telefone"
                                    label="Telefone"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    label="Seu E-mail"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Selecionar Estacionamento</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Autocomplete
                                    required
                                    label="Sua Cidade"
                                    variant="outlined"
                                    fullWidth
                                    value={selectedCity}
                                    getOptionLabel={(option) => option.name}
                                    options={citys}
                                    onChange={handleCityChange}
                                    renderInput={(params) => <TextField {...params} label="Sua cidade" variant="outlined" fullWidth />}
                                />
                                <Typography textAlign="start" sx={{ mt: 1, fontSize: "14px", fontWeight: "bold" }}>
                                    <Link to="/cadastrar/nova-cidade">Minha cidade não está aqui...</Link>
                                </Typography>
                            </Grid>


                            <Grid item xs={12}>
                                <Autocomplete
                                    required
                                    disabled={!checked}
                                    multiple
                                    options={filteredCompanies.filter((f) => type === "student" ? f.companyType === "ESCOLA" : f.companyType === "EMPRESA")}
                                    getOptionLabel={(option) => option.companyName}
                                    renderInput={(params) => (
                                        <TextField {...params} label={`Qual(is) ${type == "student" ? "Escola(s)" : "Empresa(s)"} você irá estacionar?`} variant="outlined" fullWidth />
                                    )}
                                    renderOption={(props, option) => (
                                        <li {...props}>
                                            {option.companyName} / {option.companyCity.name}, {option.companyCity.uf}
                                        </li>
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Box display="flex" justifyContent="space-between">
                                    <Link to="/cadastrar" className="btn btn-dark">Voltar</Link>
                                    <Button type="submit" className="btn btn-primary">Finalizar <MdNavigateNext /></Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </section>
        </main>
    )
}
