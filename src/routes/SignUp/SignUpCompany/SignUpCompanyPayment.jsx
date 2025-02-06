import { Box, Divider, Grid, Typography } from "@mui/material";

import '../SignUp.css';

import { Link, useNavigate } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import { useState } from "react";
import { Packages } from "../../../constants/Packages";
import { useCompany } from "../../../contexts/CompanyContext";
import { Button } from "react-bootstrap";
import { companys } from "../../../constants/Companys";

const styleCategory = {
    border: "1px solid rgb(54 183 123)",
    color: "rgb(54 183 123)",
}

export default function SignUpCompanyPayment() {
    const { companyData, updateCompanyData } = useCompany();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState({});

    const navigate = useNavigate();

    function handleMarkPayments(Package, index) {
        setSelectedPackage(Package);
        setSelectedCategory(index);
    }

    function getStyleMark(index) {
        return selectedCategory == index ? styleCategory : null;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        updateCompanyData({
            ...companyData,
            companyPackagePayment: selectedPackage 
        })

        companys.push(companyData);

        localStorage.setItem("sessionId", process.env.REACT_APP_AUTH_KEY_COMPANY);

        navigate("/dashboard");
    }

    return (
        <section className="sign-up-company">
            <div className="form" onSubmit={handleSubmit}>
                <form>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Selecionar Plano / Pacote </h2>
                    </div>

                    <Grid container spacing={2} sx={{ mb: 1, display: 'flex', gap: 1 }}>
                        <Grid item xs={12} sx={{ mb: 3 }}>
                            <Divider>Planos</Divider>
                        </Grid>

                        {
                            Packages ? Packages.map((Package, index) => <Grid item className="paymentMethods" key={index} onClick={() => handleMarkPayments(Package, index)} style={getStyleMark(index)}>
                                                        <div className="textLefts">
                                                            <h4>{Package.text.title}</h4>
                                                            <p>{Package.text.subTitle}</p>
                                                        </div>

                                                        <div className="textRight">
                                                            <h4>{parseFloat(Package.cost_total)}R$ + {Package.cost_support_per_mounth} (Suporte)</h4>
                                                            <p>Instalação + Suporte</p>
                                                        </div>
                                                    </Grid>
                                                    ) 
                                     : null
                            }



                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Box display="flex" justifyContent="space-between">
                                <Link to="/cadastrar/empresa/passo-2" className="btn btn-dark">Voltar</Link>
                                <Button type="submit" className="btn btn-primary">Finalizar cadastro <MdNavigateNext /></Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </div>

            <div className="image-side" style={{background: "url(/assets/bg-signin-company.jpg) no-repeat center center"}}></div>
        </section>
    )
}