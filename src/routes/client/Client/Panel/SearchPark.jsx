import { useUser } from "../../../../contexts/UserContext";

import HeaderbarClient from "../../../../components/HeaderbarClient";

import { useState, useEffect } from "react";
import { companys } from "../../../../constants/Companys";
import { Autocomplete, Box, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import EJCardCompany from "../../../../components/EJ/EJCardCompany";
import FooterClient from "../../../../components/FooterClient";
import { Button } from "react-bootstrap";
import { MdNumbers } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { rootColors } from "../../../../constants/pallete";

export default function SearchPark() {
    const { userData, updateUserData } = useUser();
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const linkedCompanyNames = userData.userCompanyVincles.map(
            (vincle) => vincle.companyNameFormated
        );

        const availableCompanies = companys.filter(
            (company) => !linkedCompanyNames.includes(company.companyNameFormated)
        );

        setFilteredCompanies(availableCompanies);
    }, [userData]);

    function handlePark() {
        if (companies.length === 0) return; 
    
        const newVincles = companies.map((company) => ({
            companyNameFormated: company.companyNameFormated,
            ...company, 
        }));
    
        updateUserData({
            userCompanyVincles: [
                ...userData.userCompanyVincles,
                ...newVincles, 
            ],
        });
    
        setCompanies([]); 
    }
    

    return (
        <main className="search-park">
            <HeaderbarClient userProps={userData} />

            <div className="parks">

            <Grid container mb={6} justifyContent="center" textAlign="center">
                    <Grid item xs={6}>
                        <Typography variant="h4" gutterBottom>
                            <span style={{ color: rootColors.colorGreenShade }}>Descubra Novos </span>
                            <span style={{ color: rootColors.colorOrangePrimary }}>Estacionamentos</span>
                        </Typography>

                        <TextField
                            placeholder="Procurar por instituições ou campus"
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '50px',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                                        <CiSearch />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} px={2} gap={4}>
                    {/* Filtros */}
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Filtrar por:</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 2,
                                alignItems: 'center'
                            }}
                        >
                            <Box sx={{ border: '1px solid #545454', padding: '5px 15px', borderRadius: 50 }}>Empresas</Box>
                            <Box sx={{ border: '1px solid #545454', padding: '5px 15px', borderRadius: 50 }}>Escolas</Box>
                            <Box sx={{ border: '1px solid #545454', padding: '5px 15px', borderRadius: 50 }}>Outros</Box>
                        </Box>
                    </Grid>

                    {/* Cards */}
                    <Grid item xs={12}>
                        <Grid container spacing={2} justifyContent="center" gap={1}>
                            {companys.map((company, i) => (
                                <EJCardCompany  key={i} MapperCompany={company} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </div>


            <FooterClient/>
        </main>
    );
}
