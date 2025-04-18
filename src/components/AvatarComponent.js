import React from 'react';

import { Link, Navigate } from 'react-router-dom';

import { Avatar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import { Button, Nav } from "react-bootstrap";
import { FaBell } from 'react-icons/fa';
import { menuAdmin, menuItemsProfileAdmin } from '../constants/menu/menuAdmin';


import { isAdmin } from '../RouterPaper';

import { TbLayoutSidebarLeftExpandFilled } from 'react-icons/tb';
import { IoLogOut } from 'react-icons/io5';
import { menuClient, menuItemsProfileClient } from '../constants/menu/menuClient';

export default function AvatarComponent({ avatar, name, slug, styles }) {
    const [isLoggedOut, setIsLoggedOut] = React.useState(false);
    
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
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

    const boxDrawer = (
        <Box sx={{ width: 450 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1.5
            }}
          >

            <Box  sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                    onClick={toggleDrawer(true)}
                    size="large"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 52, height: 52, objectFit: 'cover' }} className={styles ? styles.avatar : null} src={avatar || null}></Avatar>
                </IconButton>
                
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontSize={20}>{name}</Typography>
                    <Typography fontSize={14}>{slug}</Typography>
                </Box>

            </Box>

            <IconButton onClick={toggleDrawer(false)}>
                <TbLayoutSidebarLeftExpandFilled />
            </IconButton>
          </Box>
      
          <Box sx={{ borderTop: '1px solid #e0e0e0' }} />
   
          <List>
            {isAdmin() ? menuAdmin.map((menuItem, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={menuItem.href}>
                  {menuItem.icon && (
                    <ListItemIcon sx={{ fontSize: 18 }} >
                      <menuItem.icon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={menuItem.label} primaryTypographyProps={{ fontSize: 15, fontWeight: 550, color: 'rgb(61, 61, 61)' }}  />
                </ListItemButton>
              </ListItem>
            )) : 
            menuClient.map((menuItem, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton component={Link} to={menuItem.href}>
                    {menuItem.icon && (
                      <ListItemIcon sx={{ fontSize: 18 }} >
                        <menuItem.icon />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={menuItem.label} primaryTypographyProps={{ fontSize: 15, fontWeight: 550, color: 'rgb(61, 61, 61)' }}  />
                  </ListItemButton>
                </ListItem>
              )) 
            }
          </List>

          <Box sx={{ borderTop: '1px solid #e0e0e0', my: 1 }} />

          <List>
            {isAdmin() ? menuItemsProfileAdmin && menuItemsProfileAdmin.map((menuItem, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={menuItem.href}>
                  {menuItem.icon && (
                    <ListItemIcon sx={{ fontSize: 18 }} >
                      <menuItem.icon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={menuItem.label} primaryTypographyProps={{ fontSize: 15, fontWeight: 550, color: 'rgb(61, 61, 61)' }}  />
                </ListItemButton>
              </ListItem>
            )) : menuItemsProfileClient && menuItemsProfileClient.map((menuItem, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton component={Link} to={menuItem.href}>
                    {menuItem.icon && (
                      <ListItemIcon sx={{ fontSize: 18 }} >
                        <menuItem.icon />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={menuItem.label} primaryTypographyProps={{ fontSize: 15, fontWeight: 550, color: 'rgb(61, 61, 61)' }}  />
                  </ListItemButton>
                </ListItem>))}
          </List>

          <Box sx={{ borderTop: '1px solid #e0e0e0', my: 1 }} />

        <List>
            <ListItem disablePadding>
                <ListItemButton sx={{color: 'rgb(163, 50, 50)'}} onClick={logout}>
                    <ListItemIcon sx={{ fontSize: 18, color: 'rgb(163, 50, 50)' }}>
                        <IoLogOut />
                    </ListItemIcon>

                    <ListItemText primary={'Sign Out'} primaryTypographyProps={{ fontSize: 15, fontWeight: 550 }}/>
                </ListItemButton>
            </ListItem>
        </List>

        </Box>
      );


    return (
        <Nav className='d-flex align-items-center gap-2'>
            <IconButton
                onClick={toggleDrawer(true)}
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
               {
                    isAdmin() ?  <Button href="/admin/notificacoes" variant='text' style={{ color: styles ? styles.color : '#ccc', fontWeight: 500, fontSize: "25px" }}><FaBell /></Button> :  <Button href="/client/notificacoes" variant='text' style={{ color: styles ? styles.color : '#ccc', fontWeight: 500, fontSize: "25px" }}><FaBell /></Button>
               }
            </IconButton>

           
            <Drawer variant='dark' open={open} anchor={'right'} onClose={toggleDrawer(false)}>
                {boxDrawer}
            </Drawer>
        </Nav>
    )
}