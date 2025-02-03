import * as React from 'react';

import { Avatar, Button, Snackbar, Typography } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { EMPTY } from '../../defaultValues';
import { useUser } from '../../contexts/UserContext';
import { rootColors } from '../../constants/pallete';

export default function EJParkModel({ MapperJsonPark }) {
    const { userData, updateUserData } = useUser();

    const [open, setOpen] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    const action = (
          <Button color="secondary" size="small" onClick={handleClose}>
            OK
          </Button>
      );
    

    function desvincularEstacionamento() {
        const estacionamento = MapperJsonPark.companyName;
    
        const novoArray = userData.userCompanyVincles.filter((e) => e.companyName !== estacionamento);
    
        if (novoArray.length !== userData.userCompanyVincles.length) {
            updateUserData({...userData, userCompanyVincles: novoArray });
        } 
    }

    function generateBackgroundForCards() {
        if(MapperJsonPark.companyColor == EMPTY) {
            return { height: 330, background: '#ccc' }
        } else {
            return { height: 330, background: `linear-gradient(180deg, ${MapperJsonPark.companyColor}, ${rootColors.colorGreenPrimary})` };
        }
    }

        
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Deseja realmente desvincular este estacionamento?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Esta ação não pode ser desfeita e você perderá o acesso a este estacionamento, porem você poderá vincular ele novamente na pagina de vinculo
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => {
                            desvincularEstacionamento();
                            handleClickSnackbar();
                            handleClose();
                        }}
                        color="error"
                        autoFocus
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>

            <Card sx={{ maxWidth: "1200px", maxHeight: '520px', borderRadius: 0, border: '1px solid #ccc' }}>
                <CardMedia sx={generateBackgroundForCards()} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" display={"flex"} alignItems={"center"} gap={2}>
                        <Avatar src={MapperJsonPark.companyLogo} sx={{ width: 56, height: 56 }} variant="square"/>
                        {MapperJsonPark.companyName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Deseja estacionar aqui? No momento, este estacionamento está com{" "}
                        <b>{MapperJsonPark.companyParkSlots}</b> vagas disponíveis.
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Button
                        href={`/client/estacionamento/${MapperJsonPark.companyNameFormated}`}
                        variant="contained"
                        color="success"
                        sx={{ borderRadius: 0 }}
                    >
                        Acessar Estacionamento
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        sx={{ margin: "0 !important", borderRadius: 0 }}
                        onClick={handleClickOpen}
                    >
                        Desvincular
                    </Button>
                </CardActions>
            </Card>

           <Snackbar open={openSnackbar} autoHideDuration={6000}  onClose={handleCloseSnackbar} message="Note archived" action={action}/>
        </React.Fragment>
    )
}