import { Box, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { useCompany } from "../../../contexts/CompanyContext";
import { TbLockFilled } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiUserLocationFill } from "react-icons/ri";
import { MdNumbers } from "react-icons/md";

export default function SignUpInfoLegals() {
    const { companyData, updateCompanyData } = useCompany();

    return (
        <section className="sign-up-company">
            <div className="form">
                <form>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Informações Legais e Acesso</h2>
                    </div>

                    <Grid container spacing={2} sx={{ mb: 1 }}>

                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontWeight: 'bold' }}>CNPJ</Typography>
                        </Grid>


                        <Grid item xs={12}>
                            <TextField
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
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontWeight: 'bold' }}>Nome completo do Representante</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
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
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Divider>Credenciais para acesso</Divider>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
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
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
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
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Box display="flex" justifyContent="space-between">
                                <Link to="/cadastrar/empresa/" className="btn btn-dark">Voltar</Link>
                                <Link to="/cadastrar/empresa/passo-3" className="btn btn-primary">Proximo Passo <MdNavigateNext /></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </div>

            <div className="image-side" style={{ background: "url(/assets/image_2_generated_by_ai.png) no-repeat center center" }}></div>
        </section>
    )
}