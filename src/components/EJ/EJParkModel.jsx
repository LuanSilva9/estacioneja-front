import * as React from 'react';

import { Button, Typography } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { DEFAULT_LOGO } from '../../defaultValues';
import { useUser } from '../../contexts/UserContext';
import { ImBlocked } from "react-icons/im";

export default function EJParkModel({ MapperJsonPark }) {
    const { userData, updateUserData } = useUser();

    function desvincularEstacionamento() {

    }

    function generateBackgroundForCards() {
        if(MapperJsonPark.companyLogo == DEFAULT_LOGO) {
            return { height: 140, background: '#ccc' }
        }
        else {
            return { height: 140, background: `url(${MapperJsonPark.companyLogo}) no-repeat center center`, backgroundSize: '30%' }
        }
    }

    console.log(userData)

    return (
        <Card sx={{ maxWidth: "588px", border: '1px solid #3333' }}>
            <CardMedia
            sx={generateBackgroundForCards()}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {MapperJsonPark.companyName}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Deseja estacionar aqui? no momento esse estacionamento está com <b>{MapperJsonPark.companyParkSlots}</b> vagas disponiveis
            </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button href={`/client/estacionamento/${MapperJsonPark.companyNameFormated}`} variant='contained' color='success'>Acessar Estacionamento</Button>
                <Button variant='outlined' color='error' sx={{margin: "0 !important"}} onClick={desvincularEstacionamento} startIcon={<ImBlocked/>}>Desvincular</Button>
            </CardActions>
        </Card>

    )
}