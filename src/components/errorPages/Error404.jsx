import './errorStyles.css';
import '../../constants/pallete.css';

import { Box, Typography } from "@mui/material";

export default function Error404() {
    return (
        <Box className='not-park-vincle'>
            <Typography align='center' variant='h5'>Erro 404 - Página não encontrada</Typography>
            <img src="/assets/parking-not-vincle.svg" />
        </Box> 
    )
}