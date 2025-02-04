import React from "react";
import HeaderbarClient from "../../../../components/HeaderbarClient";
import { useUser } from "../../../../contexts/UserContext";

import { Autocomplete, Avatar, Box, Grid, TextField, Typography } from "@mui/material";

import { citys } from "../../../../constants/Citys";
import EJHistory from "../../../../components/EJ/EJHistory";
import NoHistory from "../../../../components/errorPages/NoHistory";

export default function ProfilePage() {
    const { userData, updateUserData } = useUser();

    async function handleSubmit(e) {
        e.preventDefault();
    }
    
    return (
        <React.Fragment>
            <HeaderbarClient userProps={userData}/>

            <Box component="section" className="profile-page" display="flex" justifyContent="center" mt={4}>
                <Box component="form" className="profile-page-form" onSubmit={handleSubmit} width={{ xs: '90%', sm: '80%', md: '60%' }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} textAlign="center">
                            <Typography variant="h4">Editar Perfil</Typography>
                        </Grid>

                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Avatar src={userData.userImage} className="image" />
                        </Grid>

                        
                        <Grid item xs={12} textAlign="start">
                            <Typography variant="h5">Informações Pessoais</Typography>
                        </Grid>

                        <Grid item xs={12} display="flex" justifyContent="center">
                            <TextField type="email" fullWidth value={userData.userName} onChange={(e) => updateUserData({...userData,  userName: e.target.value })}/>
                        </Grid>

                        <Grid item xs={12} display="flex" justifyContent="center">
                            <TextField fullWidth value={userData.userEmail} onChange={(e) => updateUserData({...userData,  userEmail: e.target.value })}/>
                        </Grid>

                        <Grid item xs={12} textAlign="start">
                            <Typography variant="h5">Endereço </Typography>
                        </Grid>

                        <Grid item xs={12} container spacing={1} justifyContent="center">
                            <Grid item xs={8}>
                                <Autocomplete
                                    label="Cidade da empresa"
                                    variant="outlined"
                                    fullWidth
                                    value={userData.userCity.name}
                                    options={citys}
                                    getOptionLabel={(option) => option.name || ''}
                                    renderInput={(params) => <TextField required {...params} label="Cidade" variant="outlined" fullWidth />}
                                    onChange={(event, newValue) => {
                                        updateUserData({
                                            userCity: newValue ? {
                                                name: newValue,
                                                uf: newValue.uf || '',
                                                cep: newValue.cep,
                                            } : {
                                                name: '',
                                                uf: '',
                                                cep: '',
                                            }
                                        });
                                    }}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                    disabled
                                    label="UF da Empresa"
                                    variant="outlined"
                                    value={userData.userCity.uf}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} textAlign="start">
                            <Typography variant="h5">Telefone(s)</Typography>
                        </Grid>

                        <Grid item xs={12} display="flex" justifyContent="center">
                            <TextField fullWidth value={userData.userPhone} onChange={(e) => updateUserData({ ...userData, userPhone: e.target.value })} />
                        </Grid>

                        <Grid item xs={12} textAlign="start">
                            <Typography variant="h5">Histórico de Reservas</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            {
                                userData.userReservationHistory.length != 0 ? userData.userReservationHistory.map((history, index) => <EJHistory key={index} MapperJsonHistory={history}/>) : <NoHistory />
                            } 
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        </React.Fragment>
    )
}