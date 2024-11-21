import * as React from 'react';
import { useState } from 'react';
import { RiMenuFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

export default function HeaderbarClient({ linksItemMap, logged }) {
    const [show, setShow] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null); // Resetando o estado do menu
    };

    const handleShow = () => setShow(true);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseOc = () => setShow(false);

    return (
        <Navbar style={{ background: '#222' }} className="p-0 m-0" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>

                {
                    !logged ? (
                        <>
                            <Nav className='links-desktop d-flex align-items-center gap-3'>
                                {
                                    linksItemMap && linksItemMap.map((link, index) => (
                                        <Nav.Link key={index}> 
                                            <Link to={link.href} className='d-flex align-items-center gap-1' style={{ color: '#CECECE', textDecoration: 'none' }}>
                                                {link.icon != null ? <link.icon /> : null} 
                                                 
                                                {link.label}
                                            </Link>
                                        </Nav.Link>
                                    )) 
                                }
                            </Nav>

                            <Nav className='links-desktop d-flex align-items-center gap-4'>
                                <Link to="/cadastrar" className='btn btn-success'>Começar Agora</Link>
                                <Link to="/login" className='text-decoration-underline' style={{ color: "#2ecf84", fontWeight: 500 }}>Tenho Conta</Link>
                            </Nav>
                        </>
                    ) : (
                        <Nav className='links-desktop d-flex align-items-center gap-4'>
                            <Button variant='text' style={{color: "#2ecf84", fontWeight: 500}}><FaBell /></Button>
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
                                <Divider/>
                                <MenuItem href="/" onClick={handleClose}>Sair</MenuItem>
                            </Menu>
                        </Nav>
                    )
                }

                <Nav className='links-mobile'>
                    <Button variant='dark' className='fs-5 d-flex align-items-center justify-content-center gap-2' onClick={handleShow}>
                        <RiMenuFill /> Menu
                    </Button>
                </Nav>

                <Offcanvas show={show} onHide={handleCloseOc} backdrop="static">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <img src='/logo-white.svg' className='logo' alt='logo-marca' />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className='d-flex flex-column gap-3'>
                        <Nav className='d-flex flex-column gap-3'>
                            {
                                linksItemMap && linksItemMap.map((link, index) => (
                                    <Nav.Link key={index}> 
                                        <Link to={link.href} style={{ color: '#222', textDecoration: 'none' }}>
                                            {link.icon != null ? <link.icon /> : null} 
                                            {link.label}
                                        </Link>
                                    </Nav.Link>
                                ))
                            }
                        </Nav>

                        <Nav className='d-flex flex-column gap-2'>
                            <Link to="/cadastrar/" className='btn btn-success'>Começar Agora</Link>
                            <Link to="/login" className='text-decoration-underline text-center text-success' style={{ fontWeight: 500 }}>Tenho Conta</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}
