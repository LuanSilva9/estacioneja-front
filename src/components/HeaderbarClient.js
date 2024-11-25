import * as React from 'react';

import { FaBell } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { Avatar } from '@mui/material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Navigate } from 'react-router-dom';

export default function HeaderbarClient({ userProps }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoggedOut, setIsLoggedOut] = React.useState(false);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function logout() {
        localStorage.removeItem('userData');
        localStorage.removeItem('sessionId');
        setIsLoggedOut(true);
    }

    if (isLoggedOut) {
        return <Navigate to="/" />;
    }

    return (
        <Navbar style={{ background: '#222', width: "100vw" }} className="p-0 m-0" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>


                <Nav className='d-flex align-items-center gap-2'>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 48, height: 48 }} src={userProps.userImage || null}></Avatar>

                        </IconButton>
                        
                        <Button variant='text' style={{ color: "#ccc", fontWeight: 500, fontSize: "25px" }}><FaBell /></Button>


                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    width: 200,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem href="/" onClick={handleClose}>Perfil</MenuItem>
                        <MenuItem href="/" onClick={handleClose}>Configuracoes</MenuItem>
                        <Divider />
                        <MenuItem onClick={logout} sx={{color: 'red'}}>Sair</MenuItem>
                    </Menu>
                </Nav>

            </Container>
        </Navbar>
    );
}