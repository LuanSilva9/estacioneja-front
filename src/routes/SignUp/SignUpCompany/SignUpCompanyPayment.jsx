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

    function handleMarkPayments(Package, index) {
        setSelectedPackage(Package);
        setSelectedCategory(index);
    }

    function getStyleMark(index) {
        return selectedCategory == index ? styleCategory : null;
    }

    async function handleSubmit(e) {
        updateCompanyData({
            ...companyData,
            companyPackagePayment: selectedPackage 
        })
    }

    return (
                    <Grid container spacing={2} sx={{ mb: 1, display: 'flex', gap: 1 }}>

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

                    </Grid>
    )
}