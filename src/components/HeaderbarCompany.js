import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import AvatarComponent from './AvatarComponent';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function HeaderbarCompany({ companyProps }) {

    return (
        <Navbar style={{background: "#222"}} className="p-0 m-0">
            <Container className='d-flex flex-wrap'>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>

                

                <AvatarComponent styles={{ color: '#ccc' }} avatar={companyProps.companyLogo} name={companyProps.companyName} slug={companyProps.companyType} />
            </Container>
        </Navbar>
    );
}