import { Box, Grid, TextField, Typography } from "@mui/material";


import '../SignUp.css';

import { Link } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";

export default function SignUpInfoLegals() {
    return (
        <section className="sign-up-company">
            <div className="form">
                <form>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Informações Legais</h2>
                    </div>
                    
                    <Grid container spacing={2} sx={{ mb: 1 }}>

                        <Grid item xs={12}>
                            <TextField
                                id="cnpjEmpresa"
                                label="CNPJ da empresa"
                                variant="outlined"
                                type="number"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography textAlign={"center"} sx={{fontWeight: 'bold'}}>Representante Legal da Empresa</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="nomeRepresentanteEmpresa"
                                label="Nome"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
      
                        <Grid item xs={6}>
                            <TextField
                                id="sobrenomeRepresentanteEmpresa"
                                label="Sobrenome"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Box display="flex" justifyContent="space-between">
                                    <Link to="/cadastrar/empresa/passo-2"  className="btn btn-dark">Voltar</Link>
                                    <Link to="/cadastrar/empresa/passo-3" className="btn btn-primary">Proximo Passo <MdNavigateNext/></Link>
                                </Box>
                            </Grid>
                    </Grid>
                </form>
            </div>

            <div className="image-side"></div>
        </section>
    )
}