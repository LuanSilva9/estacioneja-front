import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import AvatarComponent from './AvatarComponent';

export default function HeaderbarClient({ userProps }) {
    const firstNameUser = (userProps.userName).split(" ")[0];

    return (
        <Navbar style={{ background: '#222', width: "100vw" }} className="p-0 m-0" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src='/logo.svg' className='logo' alt='logo-marca' />
                </Navbar.Brand>


                <AvatarComponent avatar={userProps.userImage} name={firstNameUser} slug={userProps.userEmail}/>
            </Container>
        </Navbar>
    );
}