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

export default function HeaderbarClient() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Navbar style={{ background: '#222', width: "100vw" }} className="p-0 m-0" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>


                <Nav className='d-flex align-items-center gap-1'>
                    <Button variant='text' style={{ color: "#2ecf84", fontWeight: 500, fontSize: "20px" }}><FaBell /></Button>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }} src="/assets/avatar.jpg"></Avatar>
                    </IconButton>

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
                        <MenuItem href="/" onClick={handleClose} sx={{color: 'red'}}>Sair</MenuItem>
                    </Menu>
                </Nav>

            </Container>
        </Navbar>
    );
}