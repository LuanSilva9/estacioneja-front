import * as React from 'react';
import { useState } from 'react';
import { RiMenuFill } from "react-icons/ri";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from 'react-router-dom';

import { menuUser } from '../constants/menu/menuUser';

export default function HeaderbarGuest() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    return (
        <Navbar style={{ background: '#222'}} className="p-0 m-0 " data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>


                <Nav className='links-desktop d-flex align-items-center gap-3'>
                    {
                        menuUser && menuUser.map((link, index) => (
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


                <Nav className='links-mobile'>
                    <Button variant='dark' className='fs-5 d-flex align-items-center justify-content-center gap-2' onClick={handleShow}>
                        <RiMenuFill /> Menu
                    </Button>
                </Nav>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <img src='/logo-white.svg' className='logo' alt='logo-marca' />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className='d-flex flex-column gap-3'>
                        <Nav className='d-flex flex-column gap-3'>
                            {
                                menuUser && menuUser.map((link, index) => (
                                    <Nav.Link key={index}>
                                        <Link to={link.href} style={{ color: '#222', textDecoration: 'none' }}>
                                            {link.icon != null ? <link.icon /> : null}
                                            {' '}
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
