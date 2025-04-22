import * as React from 'react';

import './Client.css'

import { Button, IconButton, Snackbar, Toolbar, Typography, useMediaQuery } from "@mui/material";

import EJParkModel from "../../../components/EJ/EJParkModel";
import EJReservation from "../../../components/EJ/EJReservation";
import FooterClient from "../../../components/FooterClient";
import HeaderbarClient from "../../../components/HeaderbarClient.js";

import { useUser } from "../../../contexts/UserContext.js";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import NoLinkedParking from '../../../components/errorPages/NoLinkedParking.jsx';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { rootColors } from '../../../constants/pallete.js';
import { GiNextButton } from 'react-icons/gi';
import { BsBack } from 'react-icons/bs';
import { FaBackwardStep } from 'react-icons/fa6';
import { useTheme } from '@mui/material/styles';
import { MdNavigateNext, MdOutlineArrowBackIosNew } from 'react-icons/md';
import { IoChevronBack } from 'react-icons/io5';
import { GrNext } from 'react-icons/gr';

export default function ClientApp(props) {
    const { userData, updateUserData } = useUser();
    
    const [valueReservation, setValueReservation] = React.useState(0);
    const [valueVincle, setValueVincle] = React.useState(0);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    
    const scrollRef = React.useRef();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -500 : 500,
                behavior: "smooth",
            });
        }
    };
    
    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };
    
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    
    const handleChangeReservation = (event, newValue) => {
        setValueReservation(newValue);
    };

    const handleChangeVincle = (event, newValue) => {
        setValueVincle(newValue);
    };


    const action = (
        <Button color="primary" size="small" onClick={handleCloseSnackbar}>
            OK
        </Button>
    );


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
                                    <Typography align='center' variant="h4" component="div" sx={{ mt: 5}}>Olá {(userData.userName).split(' ')[0]}, Confira suas reservas</Typography>

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

                            {
                                userData.userCompanyVincles.length != 0 ? 
                                <Box sx={{ display: "flex", alignItems: "center", width: "100%", position: "relative" }}>
                                    <IconButton
                                        onClick={() => scroll("left")}
                                        sx={{ position: "absolute", left: 5, zIndex: 1, backgroundColor: "rgba(255, 255, 255, 0.7)", borderRadius: 2 }}
                                    >
                                        <MdOutlineArrowBackIosNew />

                                    </IconButton>

                                    <Box
                                        ref={scrollRef}
                                        sx={{
                                            display: "flex",
                                            overflowX: "auto",
                                            scrollSnapType: "x mandatory",
                                            gap: 4,
                                            px: 6,
                                            py: 2,
                                            width: "100%",
                                            scrollbarWidth: "none",
                                            "&::-webkit-scrollbar": { display: "none" },
                                        }}
                                    >
                                        {userData.userCompanyVincles.map((company, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    scrollSnapAlign: "center",
                                                    flex: "0 0 auto",
                                                    width: isMobile ? "90vw" : "100%", 
                                                }}
                                            >
                                                <EJParkModel MapperJsonPark={company} exibirSnackbar={handleClickSnackbar} />
                                            </Box>
                                        ))}
                                    </Box>

                                    <IconButton
                                        onClick={() => scroll("right")}
                                        sx={{ position: "absolute", right: 5, zIndex: 1, backgroundColor: "rgba(255, 255, 255, 0.7)", borderRadius: 2 }}
                                    >
                                        <GrNext />
                                    </IconButton>
                                </Box> : <NoLinkedParking />
                            }

                            <Snackbar
                                open={openSnackbar}
                                onClose={handleCloseSnackbar}
                                message="Estacionamento Desvinculado"
                                action={action}
                                autoHideDuration={3000}
                            />
                        </div>
                <FooterClient />
            </main>
    )
}