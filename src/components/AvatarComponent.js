import React from 'react';

import { Link, Navigate } from 'react-router-dom';

import { Avatar, Divider, IconButton, Menu, MenuItem } from "@mui/material";

import { Button, Nav } from "react-bootstrap";
import { FaBell, FaUserAlt } from 'react-icons/fa';
import { RiSettingsFill } from 'react-icons/ri';
import { menuAdmin } from '../constants/menu/menuAdmin';
import { isAdmin } from '../RouterPaper';

import { FaCar } from 'react-icons/fa6';
import { BiLogOut } from 'react-icons/bi';

export default function AvatarComponent({ avatar, menuItensProfile, styles }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoggedOut, setIsLoggedOut] = React.useState(false);
    
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
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
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar sx={{ width: 48, height: 48, objectFit: 'cover' }} className={styles ? styles.avatar : null} src={avatar || null}></Avatar>

            </IconButton>

            <IconButton
                size="large"
                aria-controls={open ? 'notify-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Button href="/client/notificacoes" variant='text' style={{ color: styles ? styles.color : '#ccc', fontWeight: 500, fontSize: "25px" }}><FaBell /></Button>
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
                <MenuItem><Link className="menu-a-drop" to="/client/perfil"><FaUserAlt /> Perfil</Link></MenuItem>
                <MenuItem><Link className="menu-a-drop" to="/client/perfil/veiculos"><FaCar />Veiculos</Link></MenuItem>
                <MenuItem><Link className="menu-a-drop" to="/client/configuracoes"><RiSettingsFill /> Configurações</Link></MenuItem>
                
                {
                    isAdmin() ? menuAdmin ? menuAdmin.map((item, index) => <MenuItem className="itens-menu-mobile" key={index}><Link className="menu-a-drop" to={item.href}>{item.icon ? <item.icon/> : null}{item.label}</Link></MenuItem>) : null : null
                }

                {
                    menuItensProfile ? menuItensProfile.map((item, index) => <MenuItem key={index}><Link className="menu-a-drop" to={item.href}>{item.icon ? <item.icon/> : null}{item.label}</Link></MenuItem>) : null
                }

                <Divider />
                <MenuItem onClick={logout} sx={{ color: 'red', gap: 1}}><BiLogOut/>  Sair</MenuItem>
            </Menu>

           
        </Nav>
    )
}