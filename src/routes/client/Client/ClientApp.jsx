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

import { MdOutlineAddCircle } from "react-icons/md";

import NoLinkedParking from '../../../components/errorPages/NoLinkedParking.jsx';
import { useNavigate } from 'react-router-dom';
import Error404 from '../../../components/errorPages/Error404.jsx';

export default function ClientApp() {
    const { userData, updateUserData } = useUser();

    const navigate = useNavigate();

    const [valueReservation, setValueReservation] = React.useState(0);
    const [valueVincle, setValueVincle] = React.useState(0);

    const handleChangeReservation = (event, newValue) => {
        setValueReservation(newValue);
    };

    const handleChangeVincle = (event, newValue) => {
        setValueVincle(newValue);
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

                        <Tabs value={valueReservation} onChange={handleChangeReservation} centered TabIndicatorProps={{style: { backgroundColor: "rgb(0, 100, 0)"}}}>
                            {userData.userReservation.map((reservation, index) => (
                                <Tab key={index} label={<span style={{ color: "rgb(0, 00, 0)", fontWeight: 500 }}>Dia {reservation.reservationDay}</span>} />
                            ))}
                        </Tabs>
                        
                        {userData.userReservation[valueReservation] && (
                            <EJReservation MapperJsonReservation={userData.userReservation[valueReservation]} />
                        )}
                    </Box>
                ) : null
            }


            <div className="parkVincles">
                <Typography align="center" variant="h4">Estacionamentos Vinculados </Typography>

                <div className="cardsParks">
                    {
                        userData.userCompanyVincles.length != 0 ? (
                            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <Tabs value={valueVincle} onChange={handleChangeVincle} sx={{ mb:2 }} centered TabIndicatorProps={{style: { backgroundColor: "rgb(0, 100, 0)"}}}>
                                    {
                                        userData.userCompanyVincles.map((company, index) => (
                                            <Tab key={index} label={<span style={{ color: "rgb(0, 00, 0)", fontWeight: 500 }}>{index + 1}</span>}/>
                                        )) 
                                    }

                                        <Tab onClick={() => navigate("pesquisar-estacionamentos")} label={<span style={{fontSize: '20px'}}><MdOutlineAddCircle/></span>}/>
                                </Tabs>

                                {userData.userCompanyVincles[valueVincle] && (
                                    <EJParkModel MapperJsonPark={userData.userCompanyVincles[valueVincle]} />
                                )}
                            </Box>
                        ) : <NoLinkedParking />
                    }
                </div>
            </div>
            <FooterClient />
        </main>
    )
}