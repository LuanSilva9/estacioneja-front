import { Box, Grid, Typography } from "@mui/material";

import '../SignUp.css';

import { Link } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";

const styleCategory = {
    border: "1px solid rgb(54 183 123)",
    color: "rgb(54 183 123)",
}

export default function SignUpCompanyPayment() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    function handleMarkPayments(index) {
        setSelectedCategory(index);
    }

    return (
        <section className="sign-up-company">
            <div className="form">
                <form>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Adicionar forma de pagamento</h2>
                    </div>

                    <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Selecione a forma de pagamento</Typography>
                        </Grid>

                        <div className="paymentMethods" onClick={() => handleMarkPayments(1)} style={selectedCategory === 1 ? styleCategory : null}>
                            <div className="textLefts">
                                <h4>Pacote Super</h4>
                                <p>Esse pacote é bom para estacionamentos grandes (+ 100 vagas)</p>
                            </div>

                            <div className="textRight">
                                <h4>1300,00R$</h4>
                                <p>Instalação + Suporte</p>
                            </div>
                        </div>

                        <div className="paymentMethods" onClick={() => handleMarkPayments(2)} style={selectedCategory === 2 ? styleCategory : null}>
                            <div className="textLefts">
                                <h4>Pacote Medio</h4>
                                <p>Feito para estacionamentos de até 70 vagas</p>
                            </div>

                            <div className="textRight">
                                <h4>1000,00R$</h4>
                                <p>Instalação + Suporte</p>
                            </div>
                        </div>

                        <div className="paymentMethods" onClick={() => handleMarkPayments(3)} style={selectedCategory === 3 ? styleCategory : null}>
                            <div className="textLefts">
                                <h4>Pacote Minimo</h4>
                                <p>Feito para estacionamentos de até 30 vagas</p>
                            </div>

                            <div className="textRight">
                                <h4>400,00R$</h4>
                                <p>Instalação + Suporte</p>
                            </div>
                        </div>



                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Box display="flex" justifyContent="space-between">
                                <Link to="/cadastrar/empresa/passo-2" className="btn btn-dark">Voltar</Link>
                                <Link to="/cadastrar/empresa/finish" className="btn btn-primary">Finalizar cadastro <MdNavigateNext /></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </div>

            <div className="image-side"></div>
        </section>
    )
}