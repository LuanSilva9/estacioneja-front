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

export default function EJParkModel({ MapperJsonPark, exibirSnackbar }) {
    const { userData, updateUserData } = useUser();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function desvincularEstacionamento() {
        const estacionamento = MapperJsonPark.companyName;
    
        const novoArray = userData.userCompanyVincles.filter((e) => e.companyName !== estacionamento);
    
        if (novoArray.length !== userData.userCompanyVincles.length) { 
            updateUserData({...userData, userCompanyVincles: novoArray });
            exibirSnackbar();
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
                            handleClose();
                            desvincularEstacionamento();
                        }}
                        color="error"
                        autoFocus
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>

            <Card sx={{ maxWidth: "1200px", maxHeight: '100%', borderRadius: 0 }}>
                <CardMedia sx={generateBackgroundForCards()} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" display={"flex"} alignItems={"flex-end"} gap={2}>
                        <Avatar src={MapperJsonPark.companyLogo} sx={{ width: 56, height: 56 }} variant="square"/>
                        {MapperJsonPark.companyName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {MapperJsonPark.companyAddress.street} - {MapperJsonPark.companyAddress.neighborhood}, {MapperJsonPark.companyCity.name}, {MapperJsonPark.companyCity.uf}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Button
                        href={`/client/estacionamento/${MapperJsonPark.companyNameFormated}`}
                        variant="contained"
                        color="success"
                        sx={{ borderRadius: 0, fontSize: '16px', textTransform: 'capitalize'}}
                    >
                        Acessar Estacionamento
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: "0 !important", borderRadius: 0, fontSize: '16px', textTransform: 'capitalize' }}
                        onClick={handleClickOpen}
                    >
                        Desvincular
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}