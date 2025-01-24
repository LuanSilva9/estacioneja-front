import * as React from 'react';

import './Client.css'

import { Button,  Typography } from "@mui/material";

import EJHistory from "../../../components/EJ/EJHistory";
import EJParkModel from "../../../components/EJ/EJParkModel";
import EJReservation from "../../../components/EJ/EJReservation";
import FooterClient from "../../../components/FooterClient";
import HeaderbarClient from "../../../components/HeaderbarClient.js";

import { MdCorporateFare } from "react-icons/md";

import { history } from "../../../constants/MapperJsonHistory";

import { useUser } from "../../../contexts/UserContext.js";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import NoLinkedParking from '../../../components/errorPages/NoLinkedParking.jsx';

export default function ClientApp() {
    const { userData, updateUserData } = useUser();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if(localStorage.getItem('parkSelected')) {
        localStorage.removeItem('parkSelected');
    }

    if(localStorage.getItem('reservationData')) {
        localStorage.removeItem('reservationData');
    }

    return (
        <main className="clientApp">
            <HeaderbarClient userProps={userData} />

            {
                userData.userReservation.length != 0 ? (
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Typography align='center' variant="h4" component="div" sx={{ mt: 5, mb: 3}}>Olá, Confira suas reservas!</Typography>

                        <Tabs value={value} onChange={handleChange} centered TabIndicatorProps={{style: { backgroundColor: "rgb(0, 100, 0)"}}}>
                            {userData.userReservation.map((reservation, index) => (
                                <Tab key={index} label={<span style={{ color: "rgb(0, 00, 0)", fontWeight: 500 }}><MdCorporateFare/> {reservation.reservationPark.companyName}</span>} />
                            ))}
                        </Tabs>
                        
                        {userData.userReservation[value] && (
                            <EJReservation MapperJsonReservation={userData.userReservation[value]} />
                        )}
                    </Box>
                ) : null
            }


            <div className="parkVincles">
                <Typography align="center" variant="h4">Estacionamentos Vinculados </Typography>

                <div className="cardsParks">
                    {
                        userData.userCompanyVincles ? userData.userCompanyVincles.map((park, i) => <EJParkModel key={i} MapperJsonPark={park} />) : null
                    }

                    {
                        userData.userCompanyVincles.length == 0 ? <NoLinkedParking /> : null
                    }
                </div>
            </div>

            <div className="historys">
                <Typography align="center" variant="h4">Historico de Reservas</Typography>

                <div className="cardsHistorys">
                    <EJHistory MapperJsonHistory={history} />
                    <EJHistory MapperJsonHistory={history} />
                    <EJHistory MapperJsonHistory={history} />
                    <EJHistory MapperJsonHistory={history} />
                </div>
            </div>

            <FooterClient />
        </main>
    )
}