import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RiMenuFill } from "react-icons/ri";
import { IoHome, IoTelescopeSharp } from "react-icons/io5";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdMore } from "react-icons/md";

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
        label: 'Funcionalidades',
        href: '/features',
        icon: IoExtensionPuzzleSharp,
    },

    {
        label: 'Informações adicionais',
        href: '/',
        icon: MdMore,
    }
]


export default function HeaderbarClient() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>
                
                <Nav className='links-desktop d-flex gap-3'>
                    {
                        linksItemMap.map((link, index) => {
                            return <Nav.Link key={index} href={link.href}>{link.icon != null ? <link.icon/> : null} {link.label}</Nav.Link>
                        })
                    }
                </Nav> 

                <Nav className='links-desktop d-flex gap-2'>
                    <Button variant='outline-secondary' href="/login">Fazer Login</Button>
                    <Button variant='success' href="/cadastrar">Cadastrar-se</Button>
                </Nav>

                <Nav className='links-mobile'>
                    <Button variant='dark' className='fs-5 d-flex align-items-center justify-content-center gap-2' onClick={handleShow}>
                        <RiMenuFill/> Menu
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
                                    return <Nav.Link key={index} href={link.href}>{link.icon != null ? <link.icon/> : null} {link.label}</Nav.Link>
                                })
                            }
                        </Nav>

                        <Nav className='d-flex flex-column gap-2'>
                            <Button variant='outline-secondary'>Fazer Login</Button>
                            <Button variant='success'>Cadastrar-se</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>



            </Container>
        </Navbar>
    )
}