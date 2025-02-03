import './errorStyles.css';
import '../../constants/pallete.css';

import { Box, Button, Typography } from "@mui/material";

export default function Error404() {
    return (
        <Box className='box-error'>
            <Typography align='center' variant='h5'>Erro 404 - Página não encontrada</Typography>
            <img src="/assets/parking-not-vincle.svg" />
            <Button variant='contained' color='error' href={"/"}>Voltar</Button>
        </Box> 
    )
}