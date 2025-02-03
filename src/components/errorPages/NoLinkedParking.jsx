import './errorStyles.css'
import '../../constants/pallete.css'

import { Box, Button, Typography } from "@mui/material";
import { rootColors } from '../../constants/pallete';

export default function NoLinkedParking() {
    return (
        <Box className='box-error'>
            <Typography align='center' variant='h5'>Você não tem nenhum estacionamento vinculado!</Typography>
            <img src="/assets/parking-not-vincle.svg" />
            <Button href='/client/pesquisar-estacionamentos' variant='contained' sx={{ background: rootColors.colorGreenPrimary }}>Clique aqui para ir para a página de vinculos</Button>
        </Box> 
    )
}