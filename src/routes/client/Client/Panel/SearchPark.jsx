import { useUser } from "../../../../contexts/UserContext";

import HeaderbarClient from "../../../../components/HeaderbarClient";

import { useState, useEffect } from "react";
import { companys } from "../../../../constants/Companys";
import { Autocomplete, Divider, Grid, TextField } from "@mui/material";
import EJCardCompany from "../../../../components/EJ/EJCardCompany";
import FooterClient from "../../../../components/FooterClient";
import { Button } from "react-bootstrap";

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

                <div className="parks-form">
                    <h2>Selecionar um Estacionamento</h2>
                    <Autocomplete
                        required
                        multiple
                        options={filteredCompanies}
                        getOptionLabel={(option) => option.companyName}
                        value={companies}
                        onChange={(event, newValue) => setCompanies(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Selecionar o estacionamento que você irá estacionar"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                        renderOption={(props, option) => (
                            <li {...props}>
                                {option.companyName} / {option.companyCity.name}, {option.companyCity.uf}
                            </li>
                        )}
                    />

                    <div className="add-new-btn">
                        <Button onClick={handlePark}>Adicionar novo Estacionamento</Button>
                    </div>
                </div>

                <div className="parks-vincles">
                    <Divider>Estacionamentos vinculados</Divider>

                    {
                        userData.userCompanyVincles.map((company, i) => <EJCardCompany key={i} MapperCompany={company} />)
                    }
                </div>
            </div>


            <FooterClient/>
        </main>
    );
}
