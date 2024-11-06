import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RiMenuFill, RiFunctionFill } from "react-icons/ri";
import { IoHome, IoTelescopeSharp, IoIdCardSharp, IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdSettingsInputAntenna } from "react-icons/md"
import { FaCarSide } from "react-icons/fa";


import Dropdown from 'react-bootstrap/Dropdown';

const linksItemMap = [
    {
        label: 'Principal',
        href: '/',
        icon: IoHome,
    },
    {
        label: 'Sobre nós',
        href: '/sobre-nos',
        icon: IoTelescopeSharp,
    },

    {
        label: 'Politica de privacidade',
        href: '/politica',
        icon: IoExtensionPuzzleSharp,
    },
]

const dropdownContentMap = [
    {
        label: 'Reserva de Vagas',
        href: '/funcionalidades/reserva-vagas',
        icon: FaCarSide,
    },
    {
        label: 'Sistemas de Check-in',
        href: '/funcionalidades/check-in',
        icon: IoIdCardSharp,
    },
    {
        label: 'Rastreamento de Vagas',
        href: '/funcionalidades/rastreamento-vagas',
        icon: MdSettingsInputAntenna,
    },
]


export default function HeaderbarClient() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar style={{ background: '#1E1E1E' }} className="p-0 m-0" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>

                <Nav className='links-desktop d-flex align-items-center gap-3'>
                    {
                        linksItemMap.map((link, index) => <Nav.Link style={{ color: '#CECECE' }} key={index} href={link.href}> {link.label}</Nav.Link>)
                    }

                    <Dropdown>
                        <Dropdown.Toggle variant='link' className='text-decoration-none' style={{ color: '#CECECE' }} id="dropdown-basic">
                            Funcionalidades
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                dropdownContentMap.map((dropdown_item, index) => <Dropdown.Item key={index} href={dropdown_item.href}>{dropdown_item.icon != null ? <dropdown_item.icon /> : null} {dropdown_item.label}</Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

                <Nav className='links-desktop d-flex gap-2'>
                    <Button variant='success' href="/cadastrar">Começar Agora</Button>
                    <Nav.Link href="/login" className='text-decoration-underline' style={{ color: '#70DC94', fontWeight: 500 }}>Tenho Conta</Nav.Link>
                </Nav>

                <Nav className='links-mobile'>
                    <Button variant='dark' className='fs-5 d-flex align-items-center justify-content-center gap-2' onClick={handleShow}>
                        <RiMenuFill /> Menu
                    </Button>
                </Nav>

                <Offcanvas show={show} onHide={handleClose} backdrop="static" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <img src='/logo-white.svg' className='logo' alt='logo-marca' />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className='d-flex flex-column gap-3'>
                        <Nav className='d-flex flex-column gap-3'>
                            {
                                linksItemMap.map((link, index) => {
                                    return <Nav.Link key={index} href={link.href}>{link.icon != null ? <link.icon /> : null} {link.label}</Nav.Link>
                                })
                            }

                            <Dropdown>
                                <Dropdown.Toggle variant='link' className='text-dark p-0 text-decoration-none text-start' id="dropdown-basic">
                                    <RiFunctionFill /> Funcionalidades
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        dropdownContentMap.map((dropdown_item, index) => <Dropdown.Item key={index} href={dropdown_item.href}>{dropdown_item.icon != null ? <dropdown_item.icon /> : null} {dropdown_item.label}</Dropdown.Item>)
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                        <Nav className='d-flex flex-column gap-2'>
                            <Button variant='success'>Começar Agora</Button>
                            <Nav.Link href="/login" className='text-success text-decoration-underline text-center'>Tenho Conta</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>



            </Container>
        </Navbar>
    )
}