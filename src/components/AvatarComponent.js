import React from 'react';

import { Navigate } from 'react-router-dom';

import { Avatar, Divider, IconButton, Menu, MenuItem } from "@mui/material";

import { Button, Nav } from "react-bootstrap";
import { FaBell, FaRegUserCircle } from 'react-icons/fa';
import { IoSettings, IoSettingsSharp } from 'react-icons/io5';
import { RiSettings4Fill } from 'react-icons/ri';
import { MdOutlineSettings } from 'react-icons/md';
import { menuAdmin } from '../constants/menu/menuAdmin';

export default function AvatarComponent({ avatar, menuItensProfile }) {
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
        localStorage.removeItem('companyData');
        localStorage.removeItem('sessionId');
        setIsLoggedOut(true);
    }

    if (isLoggedOut) {
        return <Navigate to="/" />;
    }


    return (
        <Nav className='d-flex align-items-center gap-2'>
            <IconButton
                onClick={handleClick}
                size="large"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar sx={{ width: 48, height: 48 }} src={avatar || null}></Avatar>

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
                                width: 14,
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
                <MenuItem sx={{ display: 'flex', gap: "10px" }} href="/ryjryjry"><FaRegUserCircle /> Perfil</MenuItem>
                <MenuItem sx={{ display: 'flex', gap: "10px" }} href="/"><RiSettings4Fill /> Configurações</MenuItem>
                
                { menuAdmin ? menuAdmin.map((item, index) => <MenuItem sx={{ display: 'flex', gap: "10px" }} className="itens-menu-mobile" href={item.href} key={index}>{item.icon ? <item.icon/> : null}{item.label}</MenuItem>) : null}

                {
                    menuItensProfile ? menuItensProfile.map((item, index) => <MenuItem sx={{ display: 'flex', gap: "10px" }} href={item.href} key={index}>{item.icon ? <item.icon/> : null}{item.label}</MenuItem>) : null
                }

                <Divider />
                <MenuItem onClick={logout} sx={{ color: 'red',  display: 'flex', gap: "10px" }}>Sair</MenuItem>
            </Menu>
        </Nav>
    )
}