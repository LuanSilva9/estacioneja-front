import * as React from 'react';

import { Button, Snackbar, Typography } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { DEFAULT_LOGO } from '../../defaultValues';
import { useUser } from '../../contexts/UserContext';

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
        if(MapperJsonPark.companyLogo == DEFAULT_LOGO) {
            return { height: 140, background: '#ccc' }
        }
        else {
            return { height: 140, background: `url(${MapperJsonPark.companyLogo}) no-repeat center center`, backgroundSize: '10%', borderBottom: "1px solid #ccc" }
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

            <Card sx={{ maxWidth: "588px", borderRadius: 0, border: '1px solid #ccc' }}>
                <CardMedia sx={generateBackgroundForCards()} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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