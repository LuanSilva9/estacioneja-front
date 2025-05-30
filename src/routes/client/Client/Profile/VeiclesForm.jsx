import React, { useState } from "react";

import { Autocomplete, Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { MdDelete } from "react-icons/md";

import HeaderbarClient from "../../../../components/HeaderbarClient";

import { useUser } from "../../../../contexts/UserContext";
import { colorVeicle, modelVeicle } from "../../../../constants/Veicles";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { rootColors } from "../../../../constants/pallete";
import NoVeiclesFounded from "../../../../components/errorPages/NoVeiclesFound";
import FooterClient from "../../../../components/FooterClient";


export default function VeiclesForm() {
    const { userData, updateUserData } = useUser();

    const [veicleObject, setVeicleObject] = useState({
        type: '',
        sign: '',
        model: '',
        color: '',
        name: '',
    })

    const handleSignVeicle = (event) => {
        const value = event.target.value.toUpperCase();
        const regex = /^[A-Z]{0,3}-?$|^[A-Z]{3}-\d{0,4}$|^[A-Z]{3}-\d{1}[A-Z]{0,1}\d{0,2}$/;

        if (regex.test(value)) {
            setVeicleObject({ ...veicleObject, sign: value });
        }
    };

    const getModelByType = (_type) => {
        const modelFinded = modelVeicle.find((model) => model.type === _type);

        return modelFinded ? modelFinded.models : [];
    };

    const submitVeiclesData = (e) => {
        e.preventDefault();

        updateUserData({
            ...userData,
            userVeicles: [
                ...userData.userVeicles, veicleObject
            ]
        })
    }

    function desvincularVeiculo(veicle) {

    }

    return (
        <React.Fragment>
            <HeaderbarClient userProps={userData} />

            <section className="veiculos-form">
                <form onSubmit={submitVeiclesData}>
                    <Grid container spacing={2} sx={{ mb: 1, p: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid item xs={12}>
                            <Typography align="start" variant="h4" sx={{ color: rootColors.colorGreenPrimary, fontWeight: '500' }}>Cadastrar Veiculos</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Autocomplete
                                fullWidth
                                options={modelVeicle.map((item) => item.type)}
                                getOptionLabel={(option) => option.toString()}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        required
                                        label="Selecione o tipo de veiculo"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                                onChange={(e, value) => {
                                    setVeicleObject({
                                        ...veicleObject,
                                        type: value,
                                    });
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                value={veicleObject.sign}
                                label="Digite a placa do veiculo"
                                inputProps={{
                                    maxLength: 8,
                                }}
                                onChange={handleSignVeicle}

                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Autocomplete
                                fullWidth
                                disabled={veicleObject.type == '' || veicleObject.type == null}
                                options={getModelByType(veicleObject.type)}
                                getOptionLabel={(option) => option.toString()}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Selecione a marca do veiculo"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                                onChange={(e, value) => {
                                    setVeicleObject({
                                        ...veicleObject,
                                        model: value,
                                    });
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Autocomplete
                                fullWidth
                                value={veicleObject.color}
                                options={colorVeicle}
                                getOptionLabel={(option) => option.toString()}
                                renderInput={(params) => <TextField {...params} required label="Selecione a cor do seu veiculo" variant="outlined" fullWidth />}
                                onChange={(e, value) => {
                                    setVeicleObject({
                                        ...veicleObject,
                                        color: value
                                    })
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Escreva o Modelo do seu Veiculo"
                                onChange={(e) => setVeicleObject({ ...veicleObject, name: e.target.value })}
                            />
                        </Grid>


                        <Grid item>
                            <Button type="submit" variant="contained" color="success">Adicionar Veiculo</Button>
                        </Grid>

                    </Grid>
                </form>


                <Grid container spacing={2} sx={{ mb: 1, p: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={12}>
                        <Typography align="start" variant="h4" sx={{ color: rootColors.colorGreenPrimary, fontWeight: '500' }}>Seus Veiculos</Typography>
                    </Grid>
                    {
                        userData.userVeicles.map((veicle, i) =>
                            <Grid key={i} item xs={12}>
                                <Card sx={{ borderLeft: `2px solid ${rootColors.colorGreenPrimary}`, boxShadow: '0px 0px 3px #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div">
                                                {veicle.model}, {veicle.name}
                                            </Typography>

                                            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                                {veicle.color}
                                            </Typography>
                                        </CardContent>
                                    </Box>

                                    <Box sx={{ mr: 5 }}>
                                        <Button variant="outlined" color="error" onClick={()=> desvincularVeiculo(veicle)}><MdDelete />{' '} Deletar</Button>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    }

                    {
                        userData.userVeicles.length == 0 ? <NoVeiclesFounded /> : null
                    }
                </Grid>
            </section>

            <FooterClient/>

        </React.Fragment>
    )
}