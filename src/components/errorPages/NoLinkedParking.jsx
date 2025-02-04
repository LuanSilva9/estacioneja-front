import './errorStyles.css'
import '../../constants/pallete.css'

import { Box, Button, Typography } from "@mui/material";
import { rootColors } from '../../constants/pallete';

export default function NoLinkedParking() {
    return (
        <Box className='box-error-wb'>
            <Typography align='center' variant='h5' sx={{ color: rootColors.colorGreenPrimary }}>Você não tem nenhum estacionamento vinculado!</Typography>
            <img src="/assets/parking-not-vincle.svg" />
            <Button href='/client/pesquisar-estacionamentos' variant='contained' sx={{ textTransform: 'capitalize', background: rootColors.colorGreenPrimary }}>Ir para a página de vinculos</Button>
        </Box> 
    )
}