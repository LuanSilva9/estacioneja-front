import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import AvatarComponent from './AvatarComponent';
import { menuAdmin, menuItemsProfile } from '../constants/menu/menuAdmin';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function HeaderbarCompany({ companyProps }) {

    return (
        <Navbar style={{background: "#fff"}} className="p-0 m-0" variant="light">
            <Container className='d-flex flex-wrap'>
                <Navbar.Brand href="/">
                    <img src='/logo-white.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>

                <Nav className='links-desktop d-flex align-items-center gap-3'>
                    {
                        menuAdmin && menuAdmin.map((link, index) => (
                            <Nav.Link key={index}>
                                <Link to={link.href} className='d-flex align-items-center gap-1' style={{ color: '#4d4d4d', textDecoration: 'none' }}>
                                    {link.icon != null ? <link.icon /> : null}

                                    {link.label}
                                </Link>
                            </Nav.Link>
                        ))
                    }
                </Nav>

                <AvatarComponent styles={{ avatar: "rounded rounded-2", color: "#4d4d4d" }} avatar={companyProps.companyLogo} menuItensProfile={menuItemsProfile}/>
                

            </Container>
        </Navbar>
    );
}